import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/ai-course-fees-in-india", replace: true });
  },
  head: () => ({
    meta: [
      { title: "AI Course Fees in India 2026" },
      { name: "description", content: "Compare AI course fees, duration, eligibility and career value in India for 2026." },
      { property: "og:title", content: "AI Course Fees in India 2026" },
      { property: "og:description", content: "Compare AI course fees, duration, eligibility and career value in India for 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
