// app/(pages)/explore/[slug]/Categories.ts

import {
  Camera,
  Code2,
  LayoutTemplate,
  PenTool,
  Smartphone,
  Sparkles,
  Video,
} from "lucide-react";

import DesignIllustrationPage from "./pages/DesignIllustration";
import BrandingPage from "./pages/Branding";
import UIUXPage from "./pages/UIUX";
import WebDevelopmentPage from "./pages/WebDevelopment";
import AppDevelopmentPage from "./pages/AppDevelopment";
import VideoPage from "./pages/Video";
import PhotographyPage from "./pages/Photography";
import ContentProductionPage from "./pages/ContentProduction";

export const categories = [
  {
    slug: "design-illustration",
    name: "Design & Illustration",
    description: "Visuals, artwork, and creative designs made for your ideas.",
    icon: PenTool,
    accent: "bg-[#FF6B57]",
    hoverAccent: "group-hover:bg-[#FF6B57]",
    soft: "bg-[#FFF0ED]",
    rotate: "-rotate-3",
    page: DesignIllustrationPage,
  },
  {
    slug: "branding",
    name: "Branding",
    description: "Build a visual identity people remember.",
    icon: Sparkles,
    accent: "bg-[#F4C430]",
    hoverAccent: "group-hover:bg-[#F4C430]",
    soft: "bg-[#FFF8DD]",
    rotate: "rotate-2",
    page: BrandingPage,
  },
  {
    slug: "ui-ux",
    name: "UI / UX",
    description: "Interfaces designed around real people.",
    icon: PenTool,
    accent: "bg-[#6C63FF]",
    hoverAccent: "group-hover:bg-[#6C63FF]",
    soft: "bg-[#F0EFFF]",
    rotate: "-rotate-2",
    page: UIUXPage,
  },
  {
    slug: "web-development",
    name: "Web Development",
    description: "Websites, web apps, and digital experiences built to perform.",
    icon: Code2,
    accent: "bg-[#3B82F6]",
    hoverAccent: "group-hover:bg-[#3B82F6]",
    soft: "bg-[#EAF2FF]",
    rotate: "rotate-3",
    page: WebDevelopmentPage,
  },
  {
    slug: "app-development",
    name: "App Development",
    description: "Digital products built for real-world use.",
    icon: Smartphone,
    accent: "bg-[#7C5CFC]",
    hoverAccent: "group-hover:bg-[#7C5CFC]",
    soft: "bg-[#F0EDFF]",
    rotate: "-rotate-2",
    page: AppDevelopmentPage,
  },
  {
    slug: "video-motion",
    name: "Video & Motion",
    description: "Stories brought to life through video and motion.",
    icon: Video,
    accent: "bg-[#E85D9E]",
    hoverAccent: "group-hover:bg-[#E85D9E]",
    soft: "bg-[#FDEBF4]",
    rotate: "-rotate-2",
    page: VideoPage,
  },
  {
    slug: "photography",
    name: "Photography",
    description: "Photos created to capture your brand at its best.",
    icon: Camera,
    accent: "bg-[#FF9F43]",
    hoverAccent: "group-hover:bg-[#FF9F43]",
    soft: "bg-[#FFF3E5]",
    rotate: "rotate-2",
    page: PhotographyPage,
  },
  {
    slug: "content-production",
    name: "Content Production",
    description: "From ideas to content ready to share.",
    icon: LayoutTemplate,
    accent: "bg-[#222222]",
    hoverAccent: "group-hover:bg-[#222222]",
    soft: "bg-[#F1F1F1]",
    rotate: "-rotate-2",
    page: ContentProductionPage,
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Category = (typeof categories)[number];