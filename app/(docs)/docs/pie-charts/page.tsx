import { IncreaseSizePieChart } from "@/charts/pie-charts/increase-size-pie-chart";
import { DefaultRadialChart } from "@/charts/pie-charts/radial-chart";
import { RoundedPieChart } from "@/charts/pie-charts/rounded-pie-chart";
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
import DefaultPieChartJson from "@/public/chart/rounded-pie-chart.json";
import IncreaseSizePieChartJson from "@/public/chart/increase-size-pie-chart.json";
import RadialChartJson from "@/public/chart/radial-chart.json";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Pie Charts" />
        <DocsDescription>
          Pie charts are a type of chart that displays data using a circle.
        </DocsDescription>
      </DocsContainer>
      {/* Dotted Background */}
      <DocsSubContainer>
        <DocsSubtitle title="Rounded Pie" />
        <DocsSubDescription>
          A pie chart with a rounded corners.
        </DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Pie Chart" jsonContent={DefaultPieChartJson}>
          <RoundedPieChart key="rounded-pie-chart" />
        </ChartDisplay>
        <ChartDisplay name="Pie Chart" jsonContent={IncreaseSizePieChartJson}>
          <IncreaseSizePieChart key="dotted-multi-line-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
      {/* Radial Chart */}
      <DocsSubContainer>
        <DocsSubtitle title="Radial Chart" />
        <DocsSubDescription>A radial chart.</DocsSubDescription>
      </DocsSubContainer>
      <DisplayChartContainer>
        <ChartDisplay name="Radial Chart" jsonContent={RadialChartJson}>
          <DefaultRadialChart key="radial-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
