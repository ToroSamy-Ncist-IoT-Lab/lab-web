export const siteConfig = {
  name: "实验室门户",
  tagline: "面向新生的实验室导览：路径选择、项目上手、学长学姐联络。",
  description: "实验室新生指南与资源门户",
  /** 部署后替换为真实站点 URL，用于 metadata */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** 仓库地址：README 与首页按钮可引用 */
  repoUrl: process.env.NEXT_PUBLIC_REPO_URL ?? "https://github.com/your-org/lab-portal",
};
