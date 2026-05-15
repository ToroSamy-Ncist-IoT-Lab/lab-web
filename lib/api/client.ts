/**
 * 后续接入后端时，把具体 fetch 实现写在这里。
 * 页面组件应通过本模块访问数据，避免在 UI 层散落 URL。
 */
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export function getApiBaseUrl(): string {
  return API_BASE;
}

/** 占位：学长学姐列表未来从 API 拉取 */
export async function fetchAlumniProfiles(): Promise<null> {
  if (!API_BASE) return null;
  // const res = await fetch(`${API_BASE}/alumni`, { next: { revalidate: 60 } });
  // return res.json();
  return null;
}
