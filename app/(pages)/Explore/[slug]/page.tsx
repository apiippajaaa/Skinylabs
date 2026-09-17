import { notFound } from "next/navigation";
import { categoryPages } from "./Categories";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const page = categoryPages[slug];

  if (!page) {
    notFound();
  }

  const Page = page.component;

  return <Page />;
}
