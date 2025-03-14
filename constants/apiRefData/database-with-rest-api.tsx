import {
  ApiTableBodyDataProps,
  ApiTableBodyTypeColor,
} from "@/components/docs/layout/api-reference-table/api-table";

export const databaseWithRestApiApiRefData = [
  {
    prop: "className",
    tip: "The class name of the component",
    type: "string",
    typeColor: ApiTableBodyTypeColor.String,
    required: false,
  },
  {
    prop: "circleText",
    tip: "The text to display in the bottom circle",
    type: "string",
    typeColor: ApiTableBodyTypeColor.String,
    required: false,
    default: "SVG",
  },
  {
    prop: "badgeTexts",
    tip: "The text content for the four badge elements",
    type: "object",
    typeTooltip: `{ first: string; second: string; third: string; fourth: string; }`,
    typeColor: ApiTableBodyTypeColor.Object,
    required: false,
    default: "object",
    defaultTooltip: `{
      first: "GET",
      second: "POST",
      third: "PUT",
      fourth: "DELETE",
    }`,
  },
  {
    prop: "buttonTexts",
    tip: "The text content for the two button elements",
    type: "object",
    typeColor: ApiTableBodyTypeColor.Object,
    typeTooltip: `{ first: string; second: string; }`,
    required: false,
    default: "object",
    defaultTooltip: `{
      first: "LegionDev",
      second: "v2_updates",
    }`,
  },
  {
    prop: "title",
    tip: "The title text displayed at the top",
    type: "string",
    typeColor: ApiTableBodyTypeColor.String,
    required: false,
    default: "Data exchange using a customized REST API",
  },
  {
    prop: "lightColor",
    tip: "The color of the animated light elements",
    type: "string",
    typeColor: ApiTableBodyTypeColor.String,
    required: false,
  },
] satisfies ApiTableBodyDataProps;
