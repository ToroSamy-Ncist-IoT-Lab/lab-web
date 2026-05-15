import { alumniProfiles } from "@/data/alumni";
import { getApiBaseUrl } from "@/lib/api/client";

export default function AlumniPage() {
  return (
    <div className="space-y-10">
      <header className="lab-glass rounded-3xl px-6 py-8 sm:px-8">
        <p className="lab-chip text-[#0071e3]">module: alumni · static fallback</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">学长学姐</h1>
        <p className="mt-3 max-w-2xl text-[#6e6e73]">
          当前为前端占位数据（<code className="font-mono text-xs">data/alumni.ts</code>
          ）。接入后端后，由{" "}
          <code className="font-mono text-xs">lib/api/client.ts</code> 统一拉取并做权限控制。
        </p>
        <p className="mt-3 font-mono text-xs text-[#6e6e73]">
          NEXT_PUBLIC_API_BASE_URL={getApiBaseUrl() || "∅"}
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {alumniProfiles.map((a) => (
          <section key={a.id} className="lab-glass rounded-2xl p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold">{a.name}</h2>
              <span className="rounded-full bg-black/[0.05] px-3 py-1 text-xs font-medium text-[#424245]">
                {a.path}
              </span>
            </div>
            <p className="mt-1 text-sm text-[#6e6e73]">
              {a.cohort} · {a.focus}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#424245]">{a.bio}</p>
            <div className="mt-4 rounded-xl border border-dashed border-black/15 bg-black/[0.02] p-3">
              <p className="lab-chip text-[#6e6e73]">contact</p>
              <p className="mt-1 font-mono text-sm text-[#1d1d1f]">{a.contact}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
