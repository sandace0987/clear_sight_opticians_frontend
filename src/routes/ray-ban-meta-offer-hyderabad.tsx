import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ray-ban-meta-offer-hyderabad")({
  beforeLoad: () => {
    throw redirect({ to: "/ray-ban-meta-hyderabad" });
  },
});
