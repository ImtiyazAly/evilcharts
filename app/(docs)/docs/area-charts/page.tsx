import { GradientAreaChart } from "@/charts/area-charts/gradient-chart";
import { GradientRoundedAreaChart } from "@/charts/area-charts/gradient-rounded-chart";
import { DottedPatternAreaChart } from "@/charts/area-charts/dotted-pattern-chart";
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
import { AnimatedHatchedPatternAreaChart } from "@/charts/area-charts/animated-hatched-pattern-chart";
import { BarPatternChart } from "@/charts/area-charts/bar-pattern-chart";
import { AnimatedHighlightedAreaChart } from "@/charts/area-charts/animated-highlighted-chart";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Area Charts" />
        <DocsDescription>
          Area charts are a type of chart that displays data using areas.
        </DocsDescription>
      </DocsContainer>
      {/* Dotted Background */}
      <DocsSubContainer>
        <DocsSubtitle title="Dotted Line" />
        <DocsSubDescription>
          A area chart with a dotted line.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Area Chart" code={`console.log()`}>
          <GradientAreaChart key="gradient-area-chart" />
        </ChartDisplay>
        <ChartDisplay name="Area Chart" code={`console.log()`}>
          <GradientRoundedAreaChart key="gradient-rounded-area-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Pattern Chart */}
      <DocsSubContainer>
        <DocsSubtitle title="Pattern Chart" />
        <DocsSubDescription>
          A area chart with a pattern effect.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Area Chart" code={`console.log()`}>
          <DottedPatternAreaChart key="pattern-area-chart" />
        </ChartDisplay>
        <ChartDisplay name="Area Chart" code={`console.log()`}>
          <BarPatternChart key="bar-pattern-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Animated Hovering Chart */}
      <DocsSubContainer>
        <DocsSubtitle title="Animated Hovering Chart" />
        <DocsSubDescription>
          A area chart with a animated hovering effect. animate the area hovered
          by user.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Area Chart" code={`console.log()`}>
          <AnimatedHatchedPatternAreaChart key="hatched-pattern-area-chart" />
        </ChartDisplay>
        <ChartDisplay name="Area Chart" code={`console.log()`}>
          <AnimatedHighlightedAreaChart key="animated-highlighted-area-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
