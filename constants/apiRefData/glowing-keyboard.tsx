import {
  ApiTableBodyDataProps,
  ApiTableBodyTypeColor,
} from "@/components/docs/layout/api-reference-table/api-table";

export const glowingKeyboardApiRefData = [
  {
    prop: "isAlwaysActive",
    tip: "Whether the keyboard should always show the glow effect",
    type: "boolean",
    typeColor: ApiTableBodyTypeColor.Boolean,
    required: false,
    default: "false",
  },
  {
    prop: "transparentKey",
    tip: "Whether the keys should have a transparent background",
    type: "boolean",
    typeColor: ApiTableBodyTypeColor.Boolean,
    required: false,
    default: "true",
  },
  {
    prop: "keySize",
    tip: "The size of each keyboard key in pixels",
    type: "number",
    typeColor: ApiTableBodyTypeColor.Number,
    required: false,
    default: "40",
  },
  {
    prop: "glowColor",
    tip: "The color of the glow effect",
    type: "string",
    typeColor: ApiTableBodyTypeColor.String,
    required: false,
    default: "#f43f5d",
  },
  {
    prop: "highlight",
    tip: "Array of text highlights to show on specific keys",
    type: "object",
    typeColor: ApiTableBodyTypeColor.Object,
    required: true,
  },
] satisfies ApiTableBodyDataProps;
