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

interface Chart {
  title: string;
  component: React.ReactNode;
  position?: { x: number; y: number };
}

const charts: Chart[] = [
  // Bar Charts
  {
    title: "defaultBarChart",
    component: <DefaultBarChart />,
    position: { x: 0, y: 100 },
  },
  {
    title: "defaultMultipleBarChart",
    component: <DefaultMultipleBarChart />,
    position: { x: 0, y: -200 },
  },
  {
    title: "duotoneBarChart",
    component: <DuotoneBarChart />,
    position: { x: 0, y: -500 },
  },
  {
    title: "duotoneBarMultipleChart",
    component: <DuotoneBarMultipleChart />,
    position: { x: 0, y: -850 },
  },
  {
    title: "glowingBarChart",
    component: <GlowingBarChart />,
    position: { x: 0, y: -1200 },
  },
  {
    title: "glowingBarVerticalChart",
    component: <GlowingBarVerticalChart />,
    position: { x: 0, y: -1490 },
  },
  {
    title: "gradientBarChart",
    component: <GradientBarChart />,
    position: { x: 0, y: -1800 },
  },
  {
    title: "gradientBarMultipleChart",
    component: <GradientBarMultipleChart />,
    position: { x: 0, y: -2100 },
  },
  {
    title: "hatchedBarChart",
    component: <HatchedBarChart />,
    position: { x: 0, y: -2450 },
  },
  {
    title: "hatchedBarMultipleChart",
    component: <HatchedBarMultipleChart />,
    position: { x: -310, y: -50 },
  },
  {
    title: "highlightedBarChart",
    component: <HighlightedBarChart />,
    position: { x: -310, y: -250 },
  },
  {
    title: "highlightedMultipleBarChart",
    component: <HighlightedMultipleBarChart />,
    position: { x: -310, y: -550 },
  },

  // Animated Bar Charts
  {
    title: "monochromeBarChart",
    component: <MonochromeBarChart />,
    position: { x: -310, y: -1000 },
  },
  {
    title: "valueLineBarChart",
    component: <ValueLineBarChart />,
    position: { x: -310, y: -1300 },
  },

  // Area Charts
  {
    title: "animatedHatchedPatternAreaChart",
    component: <AnimatedHatchedPatternAreaChart />,
    position: { x: -310, y: -1600 },
  },
  {
    title: "animatedHighlightedAreaChart",
    component: <AnimatedHighlightedAreaChart />,
    position: { x: -310, y: -1900 },
  },
  {
    title: "barPatternChart",
    component: <BarPatternChart />,
    position: { x: -310, y: -2200 },
  },
  {
    title: "dottedPatternAreaChart",
    component: <DottedPatternAreaChart />,
    position: { x: -310, y: -2600 },
  },
  {
    title: "gradientAreaChart",
    component: <GradientAreaChart />,
    position: { x: -740, y: 100 },
  },
  {
    title: "gradientRoundedAreaChart",
    component: <GradientRoundedAreaChart />,
    position: { x: -740, y: -200 },
  },

  // Line Charts
  {
    title: "dottedLineChart",
    component: <DottedLineChart />,
    position: { x: -740, y: -600 },
  },
  {
    title: "dottedMultiLineChart",
    component: <DottedMultiLineChart />,
    position: { x: -740, y: -900 },
  },
  {
    title: "glowingLineChart",
    component: <GlowingLineChart />,
    position: { x: -740, y: -1300 },
  },
  {
    title: "numberDotLineChart",
    component: <NumberDotLineChart />,
    position: { x: -740, y: -1600 },
  },
  {
    title: "pingingDotChart",
    component: <PingingDotChart />,
    position: { x: -740, y: -1900 },
  },
  {
    title: "rainbowGlowGradientLineChart",
    component: <RainbowGlowGradientLineChart />,
    position: { x: -740, y: -2200 },
  },

  // Pie Charts
  {
    title: "increaseSizePieChart",
    component: <IncreaseSizePieChart />,
    position: { x: -740, y: -2500 },
  },
  {
    title: "defaultRadialChart",
    component: <DefaultRadialChart />,
    position: { x: -1160, y: 0 },
  },
  {
    title: "roundedPieChart",
    component: <RoundedPieChart />,
    position: { x: -1160, y: -450 },
  },

  // Radar Charts
  {
    title: "glowingMultipleStrokeRadarChart",
    component: <GlowingMultipleStrokeRadarChart />,
    position: { x: -1160, y: -850 },
  },
  {
    title: "glowingStrokeRadarChart",
    component: <GlowingStrokeRadarChart />,
    position: { x: -1160, y: -1150 },
  },
  {
    title: "strokeMultipleRadarChart",
    component: <StrokeMultipleRadarChart />,
    position: { x: -1160, y: -1550 },
  },
  {
    title: "strokeRadarChart",
    component: <StrokeRadarChart />,
    position: { x: -1160, y: -2000 },
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
  const [activeChart, setActiveChart] = useState<string>("defaultBarChart");
  const [move, setMove] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const currentActiveChart = charts.find(
      (chart) => chart.title === activeChart
    );

    if (currentActiveChart) {
      if (currentActiveChart.position) {
        setMove({
          x: currentActiveChart.position.x,
          y: currentActiveChart.position.y,
        });
      }
    }
  }, [activeChart]);

  useEffect(() => {
    setActiveChart(getActiveChart(selectedChart));
  }, [selectedChart]);

  return (
    <div className="absolute h-full w-1/2 right-0 overflow-hidden hidden sm:block">
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          x: move.x,
          y: move.y,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 25,
          mass: 1.2,
          restDelta: 0.002,
        }}
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
        isActive ? "opacity-100 shadow-2xl scale-[1.02]" : "opacity-10"
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
      const areaCharts = [
        "gradientAreaChart",
        "gradientRoundedAreaChart",
        "animatedHatchedPatternAreaChart",
        "animatedHighlightedAreaChart",
        "barPatternChart",
        "dottedPatternAreaChart",
      ];
      return areaCharts[Math.floor(Math.random() * areaCharts.length)];
    case "Line Charts":
      const lineCharts = [
        "glowingLineChart",
        "numberDotLineChart",
        "pingingDotChart",
        "rainbowGlowGradientLineChart",
        "dottedLineChart",
        "dottedMultiLineChart",
      ];
      return lineCharts[Math.floor(Math.random() * lineCharts.length)];
    case "Pie Charts":
      const pieCharts = [
        "increaseSizePieChart",
        "defaultRadialChart",
        "roundedPieChart",
        "glowingMultipleStrokeRadarChart",
        "glowingStrokeRadarChart",
        "strokeMultipleRadarChart",
        "strokeRadarChart",
      ];
      return pieCharts[Math.floor(Math.random() * pieCharts.length)];
    default:
      return "duotoneBarMultipleChart";
  }
};
