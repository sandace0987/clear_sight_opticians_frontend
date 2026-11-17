import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/oakley-meta-offer-hyderabad")({
  beforeLoad: () => {
    throw redirect({ to: "/brands/$brand", params: { brand: "oakley" } });
  },
});
