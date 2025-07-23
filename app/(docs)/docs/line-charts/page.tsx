import { DottedLineChart } from "@/charts/line-charts/dotted-line";
import { DottedMultiLineChart } from "@/charts/line-charts/dotted-multi-line";
import { RainbowGlowGradientLineChart } from "@/charts/line-charts/rainbow-glow-gradient-line";
import { NumberDotLineChart } from "@/charts/line-charts/number-dot-chart";
import { PingingDotChart } from "@/charts/line-charts/pinging-dot-chart";
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
import { GlowingLineChart } from "@/charts/line-charts/glowing-line";
// jsons
import DottedLineChartJson from "@/public/chart/dotted-line.json";
import DottedMultiLineChartJson from "@/public/chart/dotted-multi-line.json";
import GlowingLineChartJson from "@/public/chart/glowing-line.json";
import RainbowGlowGradientLineChartJson from "@/public/chart/rainbow-glow-gradient-line.json";
import PingingDotChartJson from "@/public/chart/pinging-dot-chart.json";
import NumberDotLineChartJson from "@/public/chart/number-dot-chart.json";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Line Charts" />
        <DocsDescription>
          Line charts are a type of chart that displays data using lines.
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
        <ChartDisplay name="Line Chart" jsonContent={DottedLineChartJson}>
          <DottedLineChart key="dotted-line-chart" />
        </ChartDisplay>
        <ChartDisplay name="Line Chart" jsonContent={DottedMultiLineChartJson}>
          <DottedMultiLineChart key="dotted-multi-line-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Glowing Line Charts */}
      <DocsSubContainer>
        <DocsSubtitle title="Glowing Line" />
        <DocsSubDescription>
          A line chart with a glowing line.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Line Chart" jsonContent={GlowingLineChartJson}>
          <GlowingLineChart key="glowing-line-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Line Chart"
          jsonContent={RainbowGlowGradientLineChartJson}
        >
          <RainbowGlowGradientLineChart key="rainbow-glowing-line-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Animated Charts */}
      <DocsSubContainer>
        <DocsSubtitle title="Custom Dots" />
        <DocsSubDescription>A line chart with a custom dot.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Line Chart" jsonContent={PingingDotChartJson}>
          <PingingDotChart key="pinging-dot-chart" />
        </ChartDisplay>
        <ChartDisplay name="Line Chart" jsonContent={NumberDotLineChartJson}>
          <NumberDotLineChart key="number-dot-line-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
