import Link from "next/link";
import { listMarkdownSlugs } from "@/lib/markdown";

export default function ProjectsIndexPage() {
  const slugs = listMarkdownSlugs("projects");

  return (
    <div className="space-y-10">
      <header className="lab-glass rounded-3xl px-6 py-8 sm:px-8">
        <p className="lab-chip text-[#0071e3]">module: projects</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">项目复刻</h1>
        <p className="mt-3 max-w-2xl text-[#6e6e73]">
          每个项目一篇说明：背景、仓库链接、环境依赖、目录结构与上手命令。源码可外链到 GitHub
          组织，本站负责索引与阅读体验。
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {slugs.length === 0 ? (
          <p className="text-sm text-[#6e6e73]">暂无项目文档，请在 content/projects/ 下添加 .md 文件。</p>
        ) : (
          slugs.map((slug) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="lab-glass group rounded-2xl p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-mono text-xs text-[#00c853]">git clone · {slug}</p>
              <h2 className="mt-2 text-xl font-semibold capitalize">{slug.replaceAll("-", " ")}</h2>
              <p className="mt-4 text-sm font-medium text-[#0071e3] group-hover:underline">打开文档</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
