export type AlumniProfile = {
  id: string;
  name: string;
  cohort: string;
  focus: string;
  path: "工作" | "考研" | "留学" | "其他";
  bio: string;
  /** 后续可改为仅登录可见或由后端返回 */
  contact: string;
};

/** 静态占位数据；接后端后由 lib/api/client 替换 */
export const alumniProfiles: AlumniProfile[] = [
  {
    id: "demo-1",
    name: "张三",
    cohort: "2022 届",
    focus: "嵌入式 / IoT",
    path: "工作",
    bio: "曾负责实验室智能硬件方向，现于某科技公司做固件开发。",
    contact: "placeholder@example.com（请替换为真实邮箱或企业微信）",
  },
  {
    id: "demo-2",
    name: "李四",
    cohort: "2023 届",
    focus: "后端 / 分布式",
    path: "考研",
    bio: "考研至本校计算机，熟悉 Java 与云原生部署流程。",
    contact: "placeholder2@example.com",
  },
  {
    id: "demo-3",
    name: "王五",
    cohort: "2021 届",
    focus: "全栈 / 产品",
    path: "留学",
    bio: "硕士海外院校 CS，可交流文书与选校时间线。",
    contact: "LinkedIn / 微信（占位）",
  },
];
