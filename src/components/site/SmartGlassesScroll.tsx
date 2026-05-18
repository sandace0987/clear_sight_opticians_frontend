import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

/* ============================================================
   SMART GLASSES — SCROLL-DRIVEN 3D SEQUENCE
   - Tall pinned section (5 viewports) with a sticky Canvas.
   - Scroll progress (0 → 1) drives every transform on the GPU.
   - Stages:
     0.00 – 0.18  closed case sits centered, gentle idle
     0.18 – 0.38  lid hinges open (red leather lid lifts back)
     0.38 – 0.58  glasses lift up & out of the base
     0.55 – 0.78  arms unfold outward (left + right symmetrical)
     0.72 – 0.92  rotate to face viewer + push toward camera
     0.92 – 1.00  fade out as the final tagline locks in
   ============================================================ */

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, mn = 0, mx = 1) => Math.min(mx, Math.max(mn, v));
const range = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/* ---------- 3D primitives ---------- */

function CaseBase() {
  return (
    <RoundedBox
      args={[3.4, 0.55, 1.85]}
      radius={0.18}
      smoothness={6}
      position={[0, -0.27, 0]}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        color="#0e0e10"
        roughness={0.55}
        clearcoat={0.6}
        clearcoatRoughness={0.4}
      />
    </RoundedBox>
  );
}

function CaseLid({ progress }: { progress: number }) {
  // Open between progress 0.18 → 0.38
  const open = ease(range(progress, 0.18, 0.38));
  const rot = lerp(0, -2.0, open); // radians

  return (
    <group position={[0, 0.0, -0.9]} rotation={[rot, 0, 0]}>
      {/* lid offset so it pivots on the back hinge */}
      <group position={[0, 0.28, 0.9]}>
        <RoundedBox
          args={[3.4, 0.55, 1.85]}
          radius={0.18}
          smoothness={6}
          castShadow
        >
          <meshPhysicalMaterial
            color="#b91c1c"
            roughness={0.45}
            clearcoat={0.7}
            clearcoatRoughness={0.35}
            sheen={1}
            sheenColor="#7f1d1d"
          />
        </RoundedBox>
        {/* embossed logo plate */}
        <mesh position={[0, 0.29, 0]}>
          <boxGeometry args={[1.4, 0.02, 0.32]} />
          <meshStandardMaterial color="#f5d9a6" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

/* The glasses — built from primitives, Wayfarer-ish silhouette */
function Glasses({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);

  // Lift up & out
  const lift = ease(range(progress, 0.38, 0.58));
  // Arms unfold
  const unfold = ease(range(progress, 0.55, 0.78));
  // Rotate to face viewer + fly toward camera
  const face = ease(range(progress, 0.72, 0.92));
  // Final fade
  const fade = 1 - ease(range(progress, 0.92, 1.0));

  // Position interpolation
  const y = lerp(-0.05, 1.6, lift);
  const z = lerp(0, 2.2, face);
  const scaleVal = lerp(1, 1.55, face);
  // Inside case the glasses lie face-down (lenses upward).
  // X rotation goes -π/2 → 0 as they rise & rotate to face the camera.
  const rotX = lerp(-Math.PI / 2, 0, Math.max(lift * 0.6, face));
  // Subtle hover wobble (only when in transit)
  const wobble = Math.sin(progress * 18) * 0.04 * (1 - face);

  // arm rotation: 0 = folded inward over lenses, 1 = straight back
  // Left arm folds with positive rotation.y, right with negative.
  const armRot = lerp(1.55, 0, unfold);

  useFrame(() => {
    if (!group.current) return;
    // Apply fade to all materials in the group
    group.current.traverse((obj) => {
      const m = (obj as THREE.Mesh).material as THREE.Material | undefined;
      if (m && "opacity" in m) {
        m.transparent = true;
        (m as THREE.MeshStandardMaterial).opacity = fade;
      }
    });
  });

  // Materials
  const frameMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#0a0a0c",
        roughness: 0.32,
        clearcoat: 1,
        clearcoatRoughness: 0.18,
        metalness: 0.05,
      }),
    [],
  );
  const lensMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#0b1220",
        roughness: 0.08,
        transmission: 0.35,
        thickness: 0.4,
        ior: 1.45,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        metalness: 0.1,
        envMapIntensity: 1.4,
      }),
    [],
  );
  const accentMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0047ff",
        emissive: "#0047ff",
        emissiveIntensity: 0.4,
        roughness: 0.4,
      }),
    [],
  );

  return (
    <group
      ref={group}
      position={[0, y, z]}
      rotation={[rotX + wobble, 0, 0]}
      scale={scaleVal}
    >
      {/* Front frame group */}
      <group>
        {/* Left lens rim */}
        <RoundedBox args={[1.05, 0.78, 0.16]} radius={0.22} smoothness={6} position={[-0.62, 0, 0]} material={frameMat} castShadow />
        {/* Right lens rim */}
        <RoundedBox args={[1.05, 0.78, 0.16]} radius={0.22} smoothness={6} position={[0.62, 0, 0]} material={frameMat} castShadow />
        {/* Left lens glass */}
        <mesh position={[-0.62, 0, 0.085]} material={lensMat}>
          <boxGeometry args={[0.92, 0.66, 0.04]} />
        </mesh>
        {/* Right lens glass */}
        <mesh position={[0.62, 0, 0.085]} material={lensMat}>
          <boxGeometry args={[0.92, 0.66, 0.04]} />
        </mesh>
        {/* Bridge */}
        <mesh position={[0, 0.18, 0]} material={frameMat}>
          <boxGeometry args={[0.32, 0.14, 0.16]} />
        </mesh>
        {/* Brow line subtle accent */}
        <mesh position={[0, 0.35, 0.05]} material={frameMat}>
          <boxGeometry args={[2.25, 0.08, 0.08]} />
        </mesh>
        {/* Right hinge accent (the Meta camera dot) */}
        <mesh position={[1.12, 0.28, 0.06]} material={accentMat}>
          <cylinderGeometry args={[0.05, 0.05, 0.06, 24]} />
        </mesh>
      </group>

      {/* Left arm (hinges at outer-left lens edge) */}
      <group position={[-1.14, 0, 0]} rotation={[0, armRot, 0]}>
        <mesh position={[0, 0, -0.9]} material={frameMat} castShadow>
          <boxGeometry args={[0.12, 0.12, 1.8]} />
        </mesh>
        {/* arm tip */}
        <mesh position={[0, -0.05, -1.78]} material={frameMat}>
          <boxGeometry args={[0.12, 0.18, 0.18]} />
        </mesh>
      </group>

      {/* Right arm */}
      <group position={[1.14, 0, 0]} rotation={[0, -armRot, 0]}>
        <mesh position={[0, 0, -0.9]} material={frameMat} castShadow>
          <boxGeometry args={[0.12, 0.12, 1.8]} />
        </mesh>
        <mesh position={[0, -0.05, -1.78]} material={frameMat}>
          <boxGeometry args={[0.12, 0.18, 0.18]} />
        </mesh>
      </group>
    </group>
  );
}

/* The Scene composes camera + lights + objects */
function Scene({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const [p, setP] = useState(0);
  useFrame(() => setP(progressRef.current));

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 2, -2]} intensity={0.4} color="#88aaff" />

      <group position={[0, -0.4, 0]}>
        <CaseBase />
        <CaseLid progress={p} />
        <Glasses progress={p} />
      </group>

      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.55}
        scale={9}
        blur={2.4}
        far={3}
      />
      <Environment preset="city" />
    </>
  );
}

/* ---------- Captions ---------- */

const CAPTIONS = [
  { text: "In the case.", sub: "Crafted to be carried.", start: 0.04, end: 0.22 },
  { text: "Out of the box.", sub: "Wayfarer silhouette, smart inside.", start: 0.42, end: 0.62 },
  { text: "On your face.", sub: "Meta AI, capture & open-ear audio.", start: 0.74, end: 0.9 },
];

function Captions({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setP(progressRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [progressRef]);

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center relative h-44">
        {CAPTIONS.map((c, i) => {
          const window = (p - c.start) / (c.end - c.start);
          const opacity = clamp(
            window < 0.5 ? window * 2 : (1 - window) * 2,
            0,
            1,
          );
          const y = (1 - opacity) * 16;
          return (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center transition-opacity"
              style={{
                opacity,
                transform: `translateY(${y}px)`,
              }}
            >
              <span className="text-electric text-[11px] font-bold tracking-[0.32em] uppercase mb-3">
                0{i + 1} — Stage
              </span>
              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
                {c.text.split(" ").map((w, j, arr) =>
                  j === arr.length - 1 ? (
                    <span key={j} className="font-serif italic font-medium text-electric">
                      {" "}{w}
                    </span>
                  ) : (
                    <span key={j}>{j === 0 ? "" : " "}{w}</span>
                  ),
                )}
              </h3>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">{c.sub}</p>
            </div>
          );
        })}

        {/* Final tagline + CTA */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
          style={{
            opacity: clamp((p - 0.92) / 0.06, 0, 1),
            transform: `translateY(${(1 - clamp((p - 0.92) / 0.06)) * 24}px)`,
          }}
        >
          <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
            Live <span className="font-serif italic font-medium text-electric">smarter.</span>
          </h3>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-md">
            Ray-Ban Meta &amp; Oakley Meta — fitted in our Hyderabad studios.
          </p>
          <Link
            to="/smart-glasses"
            className="mt-7 inline-flex items-center gap-2 bg-electric text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-ink transition-colors"
          >
            Explore Smart Glasses <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------- Scroll wrapper ---------- */

export function SmartGlassesScroll() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = -rect.top;
      progressRef.current = clamp(scrolled / total, 0, 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="smart"
      ref={wrapRef}
      className="relative bg-gradient-to-b from-secondary/60 via-background to-secondary/40"
      style={{ height: "500vh" }}
    >
      {/* Progress indicator */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section eyebrow */}
        <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-10">
          <span className="text-electric text-[11px] font-bold tracking-[0.28em] uppercase">
            Smart Glasses · Ray-Ban Meta
          </span>
        </div>

        {/* Scroll hint (fades out as you scroll) */}
        <div
          className="absolute top-6 right-6 lg:top-10 lg:right-10 z-10 text-[10px] font-semibold tracking-[0.28em] uppercase text-muted-foreground"
          style={{
            opacity: 1,
          }}
        >
          Scroll to unbox ↓
        </div>

        {/* Canvas */}
        <div className="absolute inset-0">
          {mounted && (
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [0, 1.4, 5.5], fov: 32 }}
              gl={{ antialias: true, alpha: true }}
              style={{ background: "transparent" }}
            >
              <Scene progressRef={progressRef} />
            </Canvas>
          )}
        </div>

        {/* Captions overlay */}
        {mounted && <Captions progressRef={progressRef} />}
      </div>
    </section>
  );
}
