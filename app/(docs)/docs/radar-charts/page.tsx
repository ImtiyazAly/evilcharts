import { GlowingMultipleStrokeRadarChart } from "@/charts/radar-charts/glowing-multiple-stroke-radar-chart";
import { GlowingStrokeRadarChart } from "@/charts/radar-charts/glowing-stroke-radar-chart";
import { StrokeRadarChart } from "@/charts/radar-charts/stroke-radar-chart";
import { StrokeMultipleRadarChart } from "@/charts/radar-charts/stroke-multiple-radar-chart";
import DisplayChartContainer from "@/charts/utils/chart-container";
import ChartDisplay from "@/charts/utils/chart-display";
import { AnimatedClippedRadarChart } from "@/charts/radar-charts/animated-clipped-radar-chart";
import {
  DocsContainer,
  DocsDescription,
  DocsSubContainer,
  DocsSubDescription,
  DocsSubtitle,
  DocsTitle,
} from "@/components/docs/components/docs-typography";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import React from "react";
// jsons
import DefaultRadarChartJson from "@/public/chart/radial-chart.json";
import DefaultMultipleRadarChartJson from "@/public/chart/stroke-multiple-radar-chart.json";
import GlowingStrokeRadarChartJson from "@/public/chart/glowing-stroke-radar-chart.json";
import GlowingMultipleStrokeRadarChartJson from "@/public/chart/glowing-multiple-stroke-radar-chart.json";
import AnimatedClippedRadarChartJson from "@/public/chart/animated-clipped-radar-chart.json";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Radar Charts" />
        <DocsDescription>
          Radar charts are a type of chart that displays data using a polygon.
        </DocsDescription>
      </DocsContainer>
      {/* Stroke Chart */}
      <DocsSubContainer>
        <DocsSubtitle title="Stroke Chart" />
        <DocsSubDescription>A radar chart with a stroke.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Radar Chart" jsonContent={DefaultRadarChartJson}>
          <StrokeRadarChart key="stroke-radar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Radar Chart"
          jsonContent={DefaultMultipleRadarChartJson}
        >
          <StrokeMultipleRadarChart key="stroke-multiple-radar-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Glowing Stroke Chart */}
      <DocsSubContainer>
        <DocsSubtitle title="Glowing Stroke Chart" />
        <DocsSubDescription>
          A radar chart with a glowing stroke.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay
          name="Radar Chart"
          jsonContent={GlowingStrokeRadarChartJson}
        >
          <GlowingStrokeRadarChart key="glowing-stroke-radar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Radar Chart"
          jsonContent={GlowingMultipleStrokeRadarChartJson}
        >
          <GlowingMultipleStrokeRadarChart key="glowing-multiple-stroke-radar-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Animated Clipped Radar Chart */}
      <DocsSubContainer>
        <DocsSubtitle title="Animated Clipped Radar Chart" />
        <DocsSubDescription>
          A radar chart with an animated clipped area.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Radar Chart" jsonContent={AnimatedClippedRadarChartJson}>
          <AnimatedClippedRadarChart key="animated-clipped-radar-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
