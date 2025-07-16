import { DefaultBarChart } from "@/charts/bar-charts/default";
import { DefaultMultipleBarChart } from "@/charts/bar-charts/default-multiple";
import { DuotoneBarChart } from "@/charts/bar-charts/duotone-bar-chart";
import { DuotoneBarMultipleChart } from "@/charts/bar-charts/duotone-bar-multiple-chart";
import { GlowingBarChart } from "@/charts/bar-charts/glowing-bar-chart";
import { GlowingBarVerticalChart } from "@/charts/bar-charts/glowing-bar-verticle-chart";
import { GradientBarChart } from "@/charts/bar-charts/gradient-bar-chart";
import { GradientBarMultipleChart } from "@/charts/bar-charts/gradient-bar-multiple-chart";
import { HatchedBarChart } from "@/charts/bar-charts/hatched-bar-chart";
import { HatchedBarMultipleChart } from "@/charts/bar-charts/hatched-bar-multiple-chart";
import { HighlightedBarChart } from "@/charts/bar-charts/highlighted-bar-chart";
import { HighlightedMultipleBarChart } from "@/charts/bar-charts/highlighted-multiple-bar-chart";
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
        <DocsTitle title="Bar Charts" />
        <DocsDescription>
          Bar charts are a type of chart that displays data using rectangular
          bars.
        </DocsDescription>
      </DocsContainer>
      {/* Dotted Background */}
      <DocsSubContainer>
        <DocsSubtitle title="Dotted Background" />
        <DocsSubDescription>
          A bar chart with a dotted background.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" code={`console.log()`}>
          <DefaultBarChart />
        </ChartDisplay>
        <ChartDisplay name="Multiple Bar Chart" code={``}>
          <DefaultMultipleBarChart />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Hatched Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Hatched Bars" />
        <DocsSubDescription>A bar chart with hatched bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" code={`console.log()`}>
          <HatchedBarChart />
        </ChartDisplay>
        <ChartDisplay name="Multiple Bar Chart" code={`console.log()`}>
          <HatchedBarMultipleChart />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Highlighted Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Highlighted Bars" />
        <DocsSubDescription>
          A bar chart with highlighted bars. i.e hovered bar will get
          highlighted.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" code={`console.log()`}>
          <HighlightedBarChart />
        </ChartDisplay>
        <ChartDisplay name="Multiple Bar Chart" code={`console.log()`}>
          <HighlightedMultipleBarChart />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Duotone Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Duotone Bars" />
        <DocsSubDescription>A bar chart with duotone bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" code={`console.log()`}>
          <DuotoneBarChart />
        </ChartDisplay>
        <ChartDisplay name="Multiple Bar Chart" code={`console.log()`}>
          <DuotoneBarMultipleChart />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Gradient Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Gradient Bars" />
        <DocsSubDescription>A bar chart with gradient bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" code={`console.log()`}>
          <GradientBarChart />
        </ChartDisplay>
        <ChartDisplay name="Multiple Bar Chart" code={`console.log()`}>
          <GradientBarMultipleChart />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Glowing Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Glowing Bars" />
        <DocsSubDescription>A bar chart with glowing bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer count={2}>
        <ChartDisplay name="Horizontal Bar Chart" code={`console.log()`}>
          <GlowingBarChart />
        </ChartDisplay>
        <ChartDisplay name="Vertical Bar Chart" code={`console.log()`}>
          <GlowingBarVerticalChart />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
