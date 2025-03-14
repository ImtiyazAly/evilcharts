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
          url: "/docs/components/glowing-keyboard",
        },
        {
          title: "Shadcn UI",
          url: "/docs/components/shadcn-ui",
        },
        {
          title: "Database With REST API",
          url: "/docs/components/database-with-rest-api",
          badge: {
            label: "New",
            variant: "rose",
            sparkles: true,
          },
        },
      ],
    },
  ],
};
