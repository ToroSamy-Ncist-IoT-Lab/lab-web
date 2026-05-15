import Link from "next/link";
import { listMarkdownSlugs } from "@/lib/markdown";

const labels: Record<string, { title: string; desc: string }> = {
  job: { title: "直接就业", desc: "简历、实习、技术栈与面试准备。" },
  "grad-school": { title: "考研", desc: "择校、复习节奏、导师与实验室衔接。" },
  abroad: { title: "留学", desc: "语言考试、文书、选校与时间线。" },
};

export default function GuidanceIndexPage() {
  const slugs = listMarkdownSlugs("guidance");

  return (
    <div className="space-y-10">
      <header className="lab-glass rounded-3xl px-6 py-8 sm:px-8">
        <p className="lab-chip text-[#0071e3]">module: guidance</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">未来指引</h1>
        <p className="mt-3 max-w-2xl text-[#6e6e73]">
          每条路径对应一篇 Markdown 文章，存放在仓库{" "}
          <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs">
            content/guidance/
          </code>
          ，通过 Pull Request 更新。
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {slugs.map((slug) => {
          const meta = labels[slug] ?? { title: slug, desc: "查看文章详情。" };
          return (
            <Link
              key={slug}
              href={`/guidance/${slug}`}
              className="lab-glass group rounded-2xl p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-mono text-xs text-[#00c853]">/{slug}.md</p>
              <h2 className="mt-2 text-xl font-semibold">{meta.title}</h2>
              <p className="mt-2 text-sm text-[#6e6e73]">{meta.desc}</p>
              <p className="mt-4 text-sm font-medium text-[#0071e3] group-hover:underline">阅读</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
