import { BookBookmark, House2 } from "@/assets/svgs";
import { SidebarOptionsProps } from "@/types/docs/sidebar-types";

export const SIDEBAR_OPTIONS: SidebarOptionsProps = {
  gettingStarted: [
    {
      title: "Getting Started",
      url: "/docs",
      items: [
        {
          title: "Introduction",
          url: "/docs",
          icon: <House2 />,
        },
        {
          title: "Prerequisites",
          url: "/docs/prerequisites",
          icon: <BookBookmark />,
        },
      ],
    },
  ],
  components: [
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "CPU Architecture",
          url: "/docs/components/cpu-architecture",
        },
        {
          title: "Glowing Keyboard",
          url: "#",
          badge: {
            label: "Soon",
            variant: "secondary",
          },
        },
        {
          title: "Shadcn UI",
          url: "#",
          badge: {
            label: "Soon",
            variant: "secondary",
          },
        },
        {
          title: "Database With REST API",
          url: "#",
          badge: {
            label: "Soon",
            variant: "secondary",
          },
        },
      ],
    },
  ],
};
