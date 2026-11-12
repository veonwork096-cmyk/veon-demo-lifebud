// Content of the homepage. Sources: veon/client.json (C-002, C-003, C-005, C-006, C-009, C-019, socials),
// audit/html/home.html (projects 776–1240, houses 428–581, prices 1252–1305, address 1325–1353).
import type { ImageMetadata } from "astro";

import pK126 from "../assets/img/p-k-126.webp";
import pK128 from "../assets/img/p-k-128.webp";
import pK1 from "../assets/img/p-k-1.webp";
import pD6 from "../assets/img/p-d-6.webp";
import pD36 from "../assets/img/p-d-36.webp";
import pK6 from "../assets/img/p-k-6.webp";
import pK2 from "../assets/img/p-k-2.webp";
import pD34 from "../assets/img/p-d-34.webp";
import pBK4 from "../assets/img/p-bk-4.webp";
import pBK2 from "../assets/img/p-bk-2.webp";
import pD37 from "../assets/img/p-d-37.webp";
import pK5 from "../assets/img/p-k-5.webp";
import pBK1 from "../assets/img/p-bk-1.webp";
import pK11 from "../assets/img/p-k-11.webp";
import pVP1 from "../assets/img/p-vp-1.webp";
import pB1 from "../assets/img/p-b-1.webp";
import pO3 from "../assets/img/p-o-3.webp";
import pD52 from "../assets/img/p-d-52.webp";

import hK149 from "../assets/img/h-k-149.webp";
import hK150 from "../assets/img/h-k-150.webp";
import hK146 from "../assets/img/h-k-146-147.webp";
import hK132 from "../assets/img/h-k-132-148.webp";
import hK115 from "../assets/img/h-k-115.webp";
import hK116 from "../assets/img/h-k-116.webp";
import hK114 from "../assets/img/h-k-114.webp";
import hK137 from "../assets/img/h-k-137-141.webp";
import hK135 from "../assets/img/h-k-135.webp";
import hK120 from "../assets/img/h-k-120.webp";
import hBK22 from "../assets/img/h-bk-22.webp";
import hBK24 from "../assets/img/h-bk-24.webp";

export const PHONE = "+380675102015";
export const PHONE_SHOWN = "(067) 510 20 15";
export const TEL = `tel:${PHONE}`;
export const VIBER = "viber://chat?number=%2B380675102015";
export const TELEGRAM = "https://t.me/lifebud2021";
export const WHATSAPP = "https://wa.me/380675102015";
export const EMAIL = "0976330033dom@gmail.com";
export const MAILTO = `mailto:${EMAIL}`;
export const MAPS = "https://www.google.com/maps?q=50.581375,30.558641";
export const INSTAGRAM = "https://www.instagram.com/lifebud_kiev/";
export const FACEBOOK = "https://www.facebook.com/lifebud.kiev.ua";
export const ADDRESS = "КМ «Сонячний», вул. Садова, Вишгородський район, Київська область";
export const SOON = "Розділ у розробці";

export const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

export interface Project { code: string; area?: string; bedrooms: number; img: ImageMetadata; }

/** «Наші виконані проєкти»: code, building area, bedrooms (home.html). K-76 is shown in the hero. */
export const projectsLead: Project[] = [
  { code: "К-126", area: "168", bedrooms: 3, img: pK126 },
  { code: "К-128", area: "156", bedrooms: 3, img: pK128 },
  { code: "К-1", area: "139,48", bedrooms: 4, img: pK1 },
  { code: "Д-6", area: "156,58", bedrooms: 3, img: pD6 },
  { code: "Д-36", area: "128", bedrooms: 3, img: pD36 },
  { code: "К-6", area: "132,68", bedrooms: 3, img: pK6 },
];

export const projectsMore: Project[] = [
  { code: "К-2", area: "108,12", bedrooms: 3, img: pK2 },
  { code: "Д-34", area: "144,9", bedrooms: 2, img: pD34 },
  { code: "БК-4", area: "142", bedrooms: 3, img: pBK4 },
  { code: "БК-2", area: "161", bedrooms: 4, img: pBK2 },
  { code: "Д-37", area: "139,48", bedrooms: 4, img: pD37 },
  { code: "К-5", area: "156,58", bedrooms: 3, img: pK5 },
  { code: "БК-1", area: "155", bedrooms: 4, img: pBK1 },
  { code: "К-11", area: "161,75", bedrooms: 3, img: pK11 },
  { code: "ВП-1", area: "228,69", bedrooms: 3, img: pVP1 },
  { code: "Б-1", area: "168,8", bedrooms: 4, img: pB1 },
  { code: "О-3", area: "208,46", bedrooms: 3, img: pO3 },
  { code: "Д-52", bedrooms: 3, img: pD52 },
];

/** Plot rectangles on plan_09_2026 in % (x, y, w, h), measured on the 1200×1699 image. Only codes readable on the plan. */
export type Plot = [number, number, number, number];
const r = (x1: number, y1: number, x2: number, y2: number): Plot => [
  +(x1 / 12).toFixed(2), +(y1 / 16.99).toFixed(2), +((x2 - x1) / 12).toFixed(2), +((y2 - y1) / 16.99).toFixed(2),
];

export interface HomeItem { code: string; slug: string; area?: string; img: ImageMetadata; plots: Plot[]; }

/** «Продаж будинків», вулиця Садова (home.html 436–568). */
export const houses: HomeItem[] = [
  { code: "К-149", slug: "k-149", area: "242,5", img: hK149, plots: [r(748, 548, 945, 700)] },
  { code: "К-150", slug: "k-150", area: "185,5", img: hK150, plots: [r(985, 612, 1185, 735)] },
  { code: "К-146/147", slug: "k-146-147", area: "209,26", img: hK146, plots: [r(985, 835, 1185, 965), r(748, 700, 945, 835)] },
  { code: "К-132/148", slug: "k-132-148", area: "143,41", img: hK132, plots: [r(540, 745, 745, 885), r(985, 735, 1185, 835)] },
  { code: "К-115", slug: "k-115", area: "267", img: hK115, plots: [] },
  { code: "К-116", slug: "k-116", area: "261,37", img: hK116, plots: [r(80, 655, 290, 780)] },
  { code: "К-114", slug: "k-114", area: "226", img: hK114, plots: [r(80, 780, 290, 905)] },
  { code: "К-137/141", slug: "k-137-141", area: "168,04", img: hK137, plots: [r(748, 1410, 945, 1540), r(748, 1180, 945, 1300)] },
  { code: "К-135", slug: "k-135", area: "155,62", img: hK135, plots: [r(748, 1540, 945, 1650)] },
  { code: "К-120", slug: "k-120", area: "197,71", img: hK120, plots: [r(540, 1535, 745, 1650)] },
  { code: "БК-22", slug: "bk-22", area: "194,09", img: hBK22, plots: [] },
  { code: "БК-24", slug: "bk-24", area: "167,89", img: hBK24, plots: [] },
];

/** «Наші ціни» (home.html 1256–1305, C-019). */
export const prices = [
  { value: 550, title: "Коробка", text: "Комплекс проєктних і загальнобудівельних робіт зі зведення будинку або котеджу." },
  { value: 800, title: "Під оздоблення", text: "Проєктні, будівельно-монтажні, інженерно-технічні та дизайнерські роботи, крім фінішного оздоблення." },
  { value: 1150, title: "Під ключ", text: "Повний комплекс робіт: у результаті ви отримуєте будинок, готовий до заселення." },
];
