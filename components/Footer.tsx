import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/40 py-8 text-sm text-[#6e6e73]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-[#424245]">
          <span className="text-[#00c853]">●</span> build: lab-portal · {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-[#0071e3]" href={siteConfig.repoUrl}>
            GitHub
          </Link>
          <span className="text-black/10">|</span>
          <span>API: {getApiStatus()}</span>
        </div>
      </div>
    </footer>
  );
}

function getApiStatus() {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  return base ? `configured (${base})` : "not wired";
}
