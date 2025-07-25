"use client";

import React, { useEffect, useState } from "react";

// Bar Charts
import { DefaultBarChart } from "@/charts/bar-charts/default-bar-chart";
import { DefaultMultipleBarChart } from "@/charts/bar-charts/default-multiple-bar-chart";
import { DuotoneBarChart } from "@/charts/bar-charts/duotone-bar-chart";
import { DuotoneBarMultipleChart } from "@/charts/bar-charts/duotone-bar-multiple-chart";
import { GlowingBarChart } from "@/charts/bar-charts/glowing-bar-chart";
import { GlowingBarVerticalChart } from "@/charts/bar-charts/glowing-bar-vertical-chart";
import { GradientBarChart } from "@/charts/bar-charts/gradient-bar-chart";
import { GradientBarMultipleChart } from "@/charts/bar-charts/gradient-bar-multiple-chart";
import { HatchedBarChart } from "@/charts/bar-charts/hatched-bar-chart";
import { HatchedBarMultipleChart } from "@/charts/bar-charts/hatched-bar-multiple-chart";
import { HighlightedBarChart } from "@/charts/bar-charts/highlighted-bar-chart";
import { HighlightedMultipleBarChart } from "@/charts/bar-charts/highlighted-multiple-bar-chart";

// Animated Bar Charts
import { MonochromeBarChart } from "@/charts/animated-bar-charts/monochrome-bar-chart";
import { ValueLineBarChart } from "@/charts/animated-bar-charts/value-line-bar-chart";

// Area Charts
import { AnimatedHatchedPatternAreaChart } from "@/charts/area-charts/animated-hatched-pattern-chart";
import { AnimatedHighlightedAreaChart } from "@/charts/area-charts/animated-highlighted-chart";
import { BarPatternChart } from "@/charts/area-charts/bar-pattern-chart";
import { DottedPatternAreaChart } from "@/charts/area-charts/dotted-pattern-chart";
import { GradientAreaChart } from "@/charts/area-charts/gradient-chart";
import { GradientRoundedAreaChart } from "@/charts/area-charts/gradient-rounded-chart";

// Line Charts
import { DottedLineChart } from "@/charts/line-charts/dotted-line";
import { DottedMultiLineChart } from "@/charts/line-charts/dotted-multi-line";
import { GlowingLineChart } from "@/charts/line-charts/glowing-line";
import { NumberDotLineChart } from "@/charts/line-charts/number-dot-chart";
import { PingingDotChart } from "@/charts/line-charts/pinging-dot-chart";
import { RainbowGlowGradientLineChart } from "@/charts/line-charts/rainbow-glow-gradient-line";

// Pie Charts
import { IncreaseSizePieChart } from "@/charts/pie-charts/increase-size-pie-chart";
import { DefaultRadialChart } from "@/charts/pie-charts/radial-chart";
import { RoundedPieChart } from "@/charts/pie-charts/rounded-pie-chart";

// Radar Charts
import { GlowingMultipleStrokeRadarChart } from "@/charts/radar-charts/glowing-multiple-stroke-radar-chart";
import { GlowingStrokeRadarChart } from "@/charts/radar-charts/glowing-stroke-radar-chart";
import { StrokeMultipleRadarChart } from "@/charts/radar-charts/stroke-multiple-radar-chart";
import { StrokeRadarChart } from "@/charts/radar-charts/stroke-radar-chart";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const charts = [
  // Bar Charts
  {
    title: "defaultBarChart",
    component: <DefaultBarChart />,
  },
  {
    title: "defaultMultipleBarChart",
    component: <DefaultMultipleBarChart />,
  },
  {
    title: "duotoneBarChart",
    component: <DuotoneBarChart />,
  },
  {
    title: "duotoneBarMultipleChart",
    component: <DuotoneBarMultipleChart />,
  },
  {
    title: "glowingBarChart",
    component: <GlowingBarChart />,
  },
  {
    title: "glowingBarVerticalChart",
    component: <GlowingBarVerticalChart />,
  },
  {
    title: "gradientBarChart",
    component: <GradientBarChart />,
  },
  {
    title: "gradientBarMultipleChart",
    component: <GradientBarMultipleChart />,
  },
  {
    title: "hatchedBarChart",
    component: <HatchedBarChart />,
  },
  {
    title: "hatchedBarMultipleChart",
    component: <HatchedBarMultipleChart />,
  },
  {
    title: "highlightedBarChart",
    component: <HighlightedBarChart />,
  },
  {
    title: "highlightedMultipleBarChart",
    component: <HighlightedMultipleBarChart />,
  },

  // Animated Bar Charts
  {
    title: "monochromeBarChart",
    component: <MonochromeBarChart />,
  },
  {
    title: "valueLineBarChart",
    component: <ValueLineBarChart />,
  },

  // Area Charts
  {
    title: "animatedHatchedPatternAreaChart",
    component: <AnimatedHatchedPatternAreaChart />,
  },
  {
    title: "animatedHighlightedAreaChart",
    component: <AnimatedHighlightedAreaChart />,
  },
  {
    title: "barPatternChart",
    component: <BarPatternChart />,
  },
  {
    title: "dottedPatternAreaChart",
    component: <DottedPatternAreaChart />,
  },
  {
    title: "gradientAreaChart",
    component: <GradientAreaChart />,
  },
  {
    title: "gradientRoundedAreaChart",
    component: <GradientRoundedAreaChart />,
  },

  // Line Charts
  {
    title: "dottedLineChart",
    component: <DottedLineChart />,
  },
  {
    title: "dottedMultiLineChart",
    component: <DottedMultiLineChart />,
  },
  {
    title: "glowingLineChart",
    component: <GlowingLineChart />,
  },
  {
    title: "numberDotLineChart",
    component: <NumberDotLineChart />,
  },
  {
    title: "pingingDotChart",
    component: <PingingDotChart />,
  },
  {
    title: "rainbowGlowGradientLineChart",
    component: <RainbowGlowGradientLineChart />,
  },

  // Pie Charts
  {
    title: "increaseSizePieChart",
    component: <IncreaseSizePieChart />,
  },
  {
    title: "defaultRadialChart",
    component: <DefaultRadialChart />,
  },
  {
    title: "roundedPieChart",
    component: <RoundedPieChart />,
  },

  // Radar Charts
  {
    title: "glowingMultipleStrokeRadarChart",
    component: <GlowingMultipleStrokeRadarChart />,
  },
  {
    title: "glowingStrokeRadarChart",
    component: <GlowingStrokeRadarChart />,
  },
  {
    title: "strokeMultipleRadarChart",
    component: <StrokeMultipleRadarChart />,
  },
  {
    title: "strokeRadarChart",
    component: <StrokeRadarChart />,
  },
];

// divide array in 4 parts
const parts = [
  charts.slice(0, 9),
  charts.slice(9, 18),
  charts.slice(18, 27),
  charts.slice(27, 36),
];

export type SelectedChart =
  | "Bar Charts"
  | "Animated Bar Charts"
  | "Area Charts"
  | "Line Charts"
  | "Pie Charts";

const ViewChartsComponent = ({
  selectedChart,
}: {
  selectedChart: SelectedChart;
}) => {
  const [activeChart, setActiveChart] = useState<string>(
    "duotoneBarMultipleChart"
  );

  useEffect(() => {
    setActiveChart(getActiveChart(selectedChart));
  }, [selectedChart]);

  return (
    <div className="absolute h-full w-1/2 right-0 overflow-x-auto">
      <motion.div
        className="flex flex-row w-max gap-4 p-40"
         
      >
        {parts.map((part, index) => (
          <div
            key={index}
            className={cn(index % 2 && "mt-18", "flex flex-col gap-4")}
          >
            {part.map((chart) => (
              <ChartContainer
                key={chart.title}
                isActive={activeChart === chart.title}
              >
                {chart.component}
              </ChartContainer>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ChartContainer = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-fit w-96 border rounded-2xl overflow-hidden z-10 duration-200",
        isActive ? "opacity-100" : "opacity-50"
      )}
    >
      {children}
    </div>
  );
};

export default ViewChartsComponent;

const getActiveChart = (selectedChart: SelectedChart) => {
  switch (selectedChart) {
    case "Bar Charts":
      const barCharts = [
        "defaultBarChart",
        "defaultMultipleBarChart",
        "duotoneBarChart",
        "duotoneBarMultipleChart",
        "glowingBarChart",
        "glowingBarVerticalChart",
        "gradientBarChart",
        "gradientBarMultipleChart",
        "hatchedBarChart",
        "hatchedBarMultipleChart",
        "highlightedBarChart",
        "highlightedMultipleBarChart",
      ];
      return barCharts[Math.floor(Math.random() * barCharts.length)];
    case "Animated Bar Charts":
      const animatedBarCharts = ["monochromeBarChart", "valueLineBarChart"];
      return animatedBarCharts[
        Math.floor(Math.random() * animatedBarCharts.length)
      ];
    case "Area Charts":
      const areaCharts = ["gradientAreaChart", "gradientRoundedAreaChart"];
      return areaCharts[Math.floor(Math.random() * areaCharts.length)];
    case "Line Charts":
      const lineCharts = [
        "glowingLineChart",
        "numberDotLineChart",
        "pingingDotChart",
        "rainbowGlowGradientLineChart",
      ];
      return lineCharts[Math.floor(Math.random() * lineCharts.length)];
    case "Pie Charts":
      const pieCharts = [
        "increaseSizePieChart",
        "defaultRadialChart",
        "roundedPieChart",
      ];
      return pieCharts[Math.floor(Math.random() * pieCharts.length)];
    default:
      return "duotoneBarMultipleChart";
  }
};
