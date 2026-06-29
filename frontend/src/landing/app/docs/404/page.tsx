<<<<<<< Updated upstream:frontend/src/landing/app/docs/404/page.tsx
import type { Metadata } from "next";
import { DocsMissingPage } from "@/components/docs/DocsMissingPage";

export const metadata: Metadata = {
	title: "Docs page not found",
	description: "This docs page moved or does not exist.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function Docs404Page() {
	return <DocsMissingPage />;
}
=======
import type { Metadata } from "next";
import { DocsMissingPage } from "@/components/docs/DocsMissingPage";

export const metadata: Metadata = {
  title: "Docs page not found",
  description: "This docs page moved or does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Docs404Page() {
  return <DocsMissingPage />;
}
>>>>>>> Stashed changes:website/src/app/docs/404/page.tsx
