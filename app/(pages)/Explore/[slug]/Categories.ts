import {
  Camera,
  Code2,
  LayoutTemplate,
  Layers3,
  Palette,
  PenTool,
  Sparkles,
  Video,
} from "lucide-react";

import GraphicsPage from "./pages/Graphics";
import BrandingPage from "./pages/Branding";
import UIUXPage from "./pages/UIUX";
import WebDevelopmentPage from "./pages/WebDevelopment";
import IllustrationPage from "./pages/Illustration";
import VideoPage from "./pages/Video";
import PhotographyPage from "./pages/Photography";
import SocialMediaPage from "./pages/SocialMedia";

export const categories = [
  {
    slug: "graphic-design",
    name: "Graphic Design",
    description: "Visuals that make your brand stand out.",
    icon: Palette,
    accent: "bg-[#FF6B57]",
    hoverAccent: "group-hover:bg-[#FF6B57]",
    soft: "bg-[#FFF0ED]",
    rotate: "-rotate-3",
    page: GraphicsPage,
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
    description: "Fast, responsive websites built to perform.",
    icon: Code2,
    accent: "bg-[#3B82F6]",
    hoverAccent: "group-hover:bg-[#3B82F6]",
    soft: "bg-[#EAF2FF]",
    rotate: "rotate-3",
    page: WebDevelopmentPage,
  },
  {
    slug: "illustration",
    name: "Illustration",
    description: "Custom visuals with personality and character.",
    icon: Layers3,
    accent: "bg-[#35BFA4]",
    hoverAccent: "group-hover:bg-[#35BFA4]",
    soft: "bg-[#E9FAF6]",
    rotate: "-rotate-2",
    page: IllustrationPage,
  },
  {
    slug: "video-motion",
    name: "Video & Motion",
    description: "Stories brought to life through motion.",
    icon: Video,
    accent: "bg-[#E85D9E]",
    hoverAccent: "group-hover:bg-[#E85D9E]",
    soft: "bg-[#FDEBF4]",
    rotate: "rotate-2",
    page: VideoPage,
  },
  {
    slug: "photography",
    name: "Photography",
    description: "Visuals that capture your brand at its best.",
    icon: Camera,
    accent: "bg-[#FF9F43]",
    hoverAccent: "group-hover:bg-[#FF9F43]",
    soft: "bg-[#FFF3E5]",
    rotate: "-rotate-2",
    page: PhotographyPage,
  },
  {
    slug: "social-media",
    name: "Social Media",
    description: "Content designed to keep your brand moving.",
    icon: LayoutTemplate,
    accent: "bg-[#222222]",
    hoverAccent: "group-hover:bg-[#222222]",
    soft: "bg-[#F1F1F1]",
    rotate: "rotate-2",
    page: SocialMediaPage,
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Category = (typeof categories)[number];