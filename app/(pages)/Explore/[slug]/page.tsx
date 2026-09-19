import { notFound } from "next/navigation";
import { categories, type CategorySlug } from "./Categories";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find((category) => category.slug === slug);

  if (!category) {
    notFound();
  }

  const Page = category.page;

  return <Page />;
}
