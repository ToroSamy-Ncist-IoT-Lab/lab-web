import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { listMarkdownSlugs, readMarkdownFile } from "@/lib/markdown";
import { MarkdownBody } from "@/components/MarkdownBody";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listMarkdownSlugs("guidance").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = readMarkdownFile("guidance", slug);
  if (!doc) return { title: "未找到" };
  const title = typeof doc.data.title === "string" ? doc.data.title : slug;
  return { title };
}

export default async function GuidanceArticlePage({ params }: Props) {
  const { slug } = await params;
  const doc = readMarkdownFile("guidance", slug);
  if (!doc) notFound();

  const title =
    typeof doc.data.title === "string" ? doc.data.title : slug.replaceAll("-", " ");

  return (
    <article className="lab-glass rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
      <p className="lab-chip text-[#6e6e73]">content/guidance/{slug}.md</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <div className="mt-8 border-t border-black/5 pt-8">
        <MarkdownBody content={doc.content} />
      </div>
    </article>
  );
}
