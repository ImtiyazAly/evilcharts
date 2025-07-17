import {
  BookBookmark,
  House2,
  BarChart,
  AreaChart,
  LineChart,
  PieChart,
  RadarChart,
  RadialChart,
} from "@/assets/svgs";
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
          url: "/docs/bar-charts",
          icon: <BarChart />,
        },
        {
          title: "Area Chart",
          url: "/docs/area-charts",
          icon: <AreaChart />,
        },
        {
          title: "Line Chart",
          url: "/docs/line-charts",
          icon: <LineChart />,
        },
        {
          title: "Pie Chart",
          url: "/docs/pie-charts",
          icon: <PieChart />,
        },
        {
          title: "Radar Chart",
          url: "/docs/radar-charts",
          icon: <RadarChart />,
        },
        {
          title: "Radial Chart",
          url: "/docs/radial-charts",
          icon: <RadialChart />,
        },
      ],
    },
  ],
};
