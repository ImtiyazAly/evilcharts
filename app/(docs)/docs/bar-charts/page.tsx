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
// jsons
import DefaultBarChartJson from "@/public/chart/default-bar-chart.json";
import DefaultMultipleBarChartJson from "@/public/chart/default-multiple-bar-chart.json";
import HatchedBarChartJson from "@/public/chart/hatched-bar-chart.json";
import HatchedBarMultipleChartJson from "@/public/chart/hatched-bar-multiple-chart.json";
import HighlightedBarChartJson from "@/public/chart/highlighted-bar-chart.json";
import HighlightedMultipleBarChartJson from "@/public/chart/highlighted-multiple-bar-chart.json";
import DuotoneBarChartJson from "@/public/chart/duotone-bar-chart.json";
import DuotoneBarMultipleChartJson from "@/public/chart/duotone-bar-multiple-chart.json";
import GradientBarChartJson from "@/public/chart/gradient-bar-chart.json";
import GradientBarMultipleChartJson from "@/public/chart/gradient-bar-multiple-chart.json";
import GlowingBarVerticalChartJson from "@/public/chart/glowing-bar-vertical-chart.json";
import GlowingBarHorizontalChartJson from "@/public/chart/glowing-bar-chart.json";

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
        <ChartDisplay
          name="Bar Chart"
          jsonContent={DefaultBarChartJson}
        >
          <DefaultBarChart key="default-bar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Multiple Bar Chart"
          jsonContent={DefaultMultipleBarChartJson}
        >
          <DefaultMultipleBarChart key="default-multiple-bar-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Hatched Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Hatched Bars" />
        <DocsSubDescription>A bar chart with hatched bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" jsonContent={HatchedBarChartJson}>
          <HatchedBarChart key="hatched-bar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Multiple Bar Chart"
          jsonContent={HatchedBarMultipleChartJson}
        >
          <HatchedBarMultipleChart key="hatched-bar-multiple-chart" />
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
        <ChartDisplay name="Bar Chart" jsonContent={HighlightedBarChartJson}>
          <HighlightedBarChart key="highlighted-bar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Multiple Bar Chart"
          jsonContent={HighlightedMultipleBarChartJson}
        >
          <HighlightedMultipleBarChart key="highlighted-multiple-bar-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Duotone Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Duotone Bars" />
        <DocsSubDescription>A bar chart with duotone bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" jsonContent={DuotoneBarChartJson}>
          <DuotoneBarChart key="duotone-bar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Multiple Bar Chart"
          jsonContent={DuotoneBarMultipleChartJson}
        >
          <DuotoneBarMultipleChart key="duotone-bar-multiple-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Gradient Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Gradient Bars" />
        <DocsSubDescription>A bar chart with gradient bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Bar Chart" jsonContent={GradientBarChartJson}>
          <GradientBarChart key="gradient-bar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Multiple Bar Chart"
          jsonContent={GradientBarMultipleChartJson}
        >
          <GradientBarMultipleChart key="gradient-bar-multiple-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Glowing Bar Chart  */}
      <DocsSubContainer>
        <DocsSubtitle title="Glowing Bars" />
        <DocsSubDescription>A bar chart with glowing bars.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer count={2}>
        <ChartDisplay
          name="Horizontal Bar Chart"
          jsonContent={GlowingBarHorizontalChartJson}
        >
          <GlowingBarChart key="glowing-bar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Vertical Bar Chart"
          jsonContent={GlowingBarVerticalChartJson}
        >
          <GlowingBarVerticalChart key="glowing-bar-vertical-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
