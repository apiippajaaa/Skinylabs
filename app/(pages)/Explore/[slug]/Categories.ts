import {
  Palette,
  LayoutTemplate,
  PenTool,
  Box,
  Type,
  Camera,
  Video,
  Code2,
} from "lucide-react";
import GraphicsPage from "./pages/Graphics";
import TemplatesPage from "./pages/Templates";
import UIUXPage from "./pages/UIUX";
import Assets3DPage from "./pages/Assets3D";
import FontsPage from "./pages/Fonts";
import PhotographyPage from "./pages/Photography";
import VideoPage from "./pages/Video";
import CodePage from "./pages/Code";



export const categories = [
  {
    slug: "graphics",
    name: "Graphics",
    description: "Visual assets & illustrations",
    icon: Palette,
    accent: "bg-[#FF6B57]",
    hoverAccent: "group-hover:bg-[#FF6B57]",
    soft: "bg-[#FFF0ED]",
    rotate: "-rotate-3",
  },
  {
    slug: "templates",
    name: "Templates",
    description: "Ready-to-use creative templates",
    icon: LayoutTemplate,
    accent: "bg-[#F4C430]",
    hoverAccent: "group-hover:bg-[#F4C430]",
    soft: "bg-[#FFF8DD]",
    rotate: "rotate-2",
  },
  {
    slug: "ui-ux",
    name: "UI / UX",
    description: "Interfaces & design systems",
    icon: PenTool,
    accent: "bg-[#6C63FF]",
    hoverAccent: "group-hover:bg-[#6C63FF]",
    soft: "bg-[#F0EFFF]",
    rotate: "-rotate-2",
  },
  {
    slug: "3d-assets",
    name: "3D Assets",
    description: "Models, objects & scenes",
    icon: Box,
    accent: "bg-[#35BFA4]",
    hoverAccent: "group-hover:bg-[#35BFA4]",
    soft: "bg-[#E9FAF6]",
    rotate: "rotate-3",
  },
  {
    slug: "fonts",
    name: "Fonts",
    description: "Typefaces & typography",
    icon: Type,
    accent: "bg-[#FF9F43]",
    hoverAccent: "group-hover:bg-[#FF9F43]",
    soft: "bg-[#FFF3E5]",
    rotate: "-rotate-2",
  },
  {
    slug: "photography",
    name: "Photography",
    description: "Photos & visual collections",
    icon: Camera,
    accent: "bg-[#E85D9E]",
    hoverAccent: "group-hover:bg-[#E85D9E]",
    soft: "bg-[#FDEBF4]",
    rotate: "rotate-2",
  },
  {
    slug: "video",
    name: "Video",
    description: "Motion & video assets",
    icon: Video,
    accent: "bg-[#3B82F6]",
    hoverAccent: "group-hover:bg-[#3B82F6]",
    soft: "bg-[#EAF2FF]",
    rotate: "-rotate-3",
  },
  {
    slug: "code",
    name: "Code",
    description: "Code, components & resources",
    icon: Code2,
    accent: "bg-[#222222]",
    hoverAccent: "group-hover:bg-[#222222]",
    soft: "bg-[#F1F1F1]",
    rotate: "rotate-2",
  },
] as const;

export const categoryPages = {
  graphics: {
    component: GraphicsPage,
  },

  templates: {
    component: TemplatesPage,
  },

  "ui-ux": {
    component: UIUXPage,
  },

  "3d-assets": {
    component: Assets3DPage,
  },

  fonts: {
    component: FontsPage,
  },

  photography: {
    component: PhotographyPage,
  },

  video: {
    component: VideoPage,
  },

  code: {
    component: CodePage,
  },
} as const;