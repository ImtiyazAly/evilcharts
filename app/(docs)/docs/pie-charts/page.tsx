import { IncreaseSizePieChart } from "@/charts/pie-charts/increase-size-pie-chart";
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
        <ChartDisplay name="Pie Chart" code={`console.log()`}>
          <RoundedPieChart key="rounded-pie-chart" />
        </ChartDisplay>
        <ChartDisplay name="Pie Chart" code={`console.log()`}>
          <IncreaseSizePieChart key="dotted-multi-line-chart" />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
