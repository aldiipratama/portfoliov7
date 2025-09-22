import {
  Home,
  User,
  MonitorCheck,
  BadgeAlert,
  Sparkles,
  Phone,
  Book,
} from "lucide-react";
import { ElementType } from "react";

export interface NavItem {
  id: string;
  label: string;
  icon: ElementType;
  initialPrompt: string;
}

export const HOME_THREAD_ID = "thread_home";

export const homeNavItem: NavItem = {
  id: HOME_THREAD_ID,
  label: "Home",
  icon: Home,
  initialPrompt: "Mulai percakapan...",
};

export const navigationItems: NavItem[] = [
  {
    id: "thread_aboutMe",
    label: "About Me",
    icon: User,
    initialPrompt: "Tolong ceritakan semua tentang dirimu.",
  },
  {
    id: "thread_projects",
    label: "Projects",
    icon: MonitorCheck,
    initialPrompt: "Bisa jelaskan semua proyek yang pernah kamu kerjakan?",
  },
  {
    id: "thread_skills",
    label: "Skills",
    icon: BadgeAlert,
    initialPrompt:
      "Tolong berikan daftar lengkap semua skill yang kamu kuasai.",
  },
  {
    id: "thread_funFact",
    label: "Fun Fact",
    icon: Sparkles,
    initialPrompt: "Kasih tau dong fakta menarik tentang dirimu!",
  },
  {
    id: "thread_contact",
    label: "Contact",
    icon: Phone,
    initialPrompt: "Bagaimana cara orang-orang bisa menghubungimu?",
  },
  {
    id: "thread_testimonials",
    label: "Testimonials",
    icon: Book,
    initialPrompt: "Apakah kamu punya testimoni untuk ditampilkan?",
  },
];
