import { industries } from "../../../data/index";
import { notFound } from "next/navigation";
import IndustryPages from "../../components/Industry/IndustryPage"
export async function generateStaticParams() {
  return industries.map((item) => ({
    slug: item.slug,
  }));
}

export default function IndustryPage({ params }) {
  const industry = industries.find((item) => item.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPages industry={industry} />;
}
