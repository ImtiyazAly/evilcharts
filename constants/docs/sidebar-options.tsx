import { BookBookmark, House2, BarChart } from "@/assets/svgs";
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
      title: "Charts",
      url: "#",
      items: [
        {
          title: "Bar Chart",
          url: "/docs/bar-chart",
          icon: <BarChart />,
        },
      ],
    },
  ],
};
