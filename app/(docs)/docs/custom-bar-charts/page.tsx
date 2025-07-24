import { DefaultBarChart } from "@/charts/bar-charts/default-bar-chart";
import { DefaultMultipleBarChart } from "@/charts/bar-charts/default-multiple-bar-chart";
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
        <ChartDisplay name="Bar Chart" jsonContent={DefaultBarChartJson}>
          <DefaultBarChart key="default-bar-chart" />
        </ChartDisplay>
        <ChartDisplay
          name="Multiple Bar Chart"
          jsonContent={DefaultMultipleBarChartJson}
        >
          <DefaultMultipleBarChart key="default-multiple-bar-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
