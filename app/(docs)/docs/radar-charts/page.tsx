import { GlowingMultipleStrokeRadarChart } from "@/charts/radar-charts/glowing-multiple-stroke-chart";
import { GlowingStrokeRadarChart } from "@/charts/radar-charts/glowing-stroke-chart";
import { StrokeRadarChart } from "@/charts/radar-charts/stroke-chart";
import { StrokeMultipleRadarChart } from "@/charts/radar-charts/stroke-multiple-chart";
import DisplayChartContainer from "@/charts/utils/chart-container";
import ChartDisplay from "@/charts/utils/chart-display";
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
        <ChartDisplay name="Radar Chart" code={`console.log()`}>
          <StrokeRadarChart key="stroke-radar-chart" />
        </ChartDisplay>
        <ChartDisplay name="Radar Chart" code={`console.log()`}>
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
        <ChartDisplay name="Radar Chart" code={`console.log()`}>
          <GlowingStrokeRadarChart key="glowing-stroke-radar-chart" />
        </ChartDisplay>
        <ChartDisplay name="Radar Chart" code={`console.log()`}>
          <GlowingMultipleStrokeRadarChart key="glowing-multiple-stroke-radar-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
