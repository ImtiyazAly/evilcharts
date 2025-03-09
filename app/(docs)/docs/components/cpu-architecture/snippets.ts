export const CPU_ARCHITECTURE_DEPENDENCIES = `npm i motion clsx tailwind-merge`;
export const CPU_ARCHITECTURE_UTIL_FILE = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

export const CPU_ARCHITECTURE_SHINY_TEXT_FILE = `npx shadcn@latest add "https://magicui.design/r/animated-shiny-text"`

export const CPU_ARCHITECTURE_SNIPPET = {
  BASIC: `import { AnimatedShinyText } from "@/components/ui/shiny-text";

import React from "react";

const CpuArchitecture = () => {
  return (
    <div className="p-4 rounded-md bg-accent/20">
      <svg
        className="text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        {/* Paths */}
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.3"
          strokeDasharray="100 100"
          pathLength="100"
          markerStart="url(#cpu-circle-marker)"
        >
          {/* 1st */}
          <path d="M 10 20 h 79.5 q 5 0 5 5 v 70" />
          {/* 2nd */}
          <path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" />
          {/* 3rd */}
          <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
          {/* 4th */}
          <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
          {/* 5th */}
          <path
            strokeDasharray="100 100"
            pathLength="100"
            d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
          />
          {/* 6th */}
          <path d="M 94.8 95 v -36" />
          {/* 7th */}
          <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
          {/* 8th */}
          <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>

        {/* 1. Blue Light */}
        <g mask="url(#cpu-mask-1)">
          <circle
            className="cpu-architecture cpu-line-1"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-blue-grad)"
          />
        </g>
        {/* 2. Yellow Light */}
        <g mask="url(#cpu-mask-2)">
          <circle
            className="cpu-architecture cpu-line-2"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-yellow-grad)"
          />
        </g>
        {/* 3. Pinkish Light */}
        <g mask="url(#cpu-mask-3)">
          <circle
            className="cpu-architecture cpu-line-3"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-pinkish-grad)"
          />
        </g>
        {/* 4. White Light */}
        <g mask="url(#cpu-mask-4)">
          <circle
            className="cpu-architecture cpu-line-4"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-white-grad)"
          />
        </g>
        {/* 5. Green Light */}
        <g mask="url(#cpu-mask-5)">
          <circle
            className="cpu-architecture cpu-line-5"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-green-grad)"
          />
        </g>
        {/* 6. Orange Light */}
        <g mask="url(#cpu-mask-6)">
          <circle
            className="cpu-architecture cpu-line-6"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-orange-grad)"
          />
        </g>
        {/* 7. Cyan Light */}
        <g mask="url(#cpu-mask-7)">
          <circle
            className="cpu-architecture cpu-line-7"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-cyan-grad)"
          />
        </g>
        {/* 8. Rose Light */}
        <g mask="url(#cpu-mask-8)">
          <circle
            className="cpu-architecture cpu-line-8"
            cx="0"
            cy="0"
            r="8"
            fill="url(#cpu-rose-grad)"
          />
        </g>
        {/* CPU Box */}
        <foreignObject x="60" y="35" width="80" height="30" fill="transparent">
          <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.34]">
            {/* CPU Connectors */}
            {/* Top */}
            <div className="absolute -top-2 left-1/4 h-3 w-2 rounded-t-[2px] bg-gradient-to-b from-[#515151] to-[#181818]" />
            <div className="absolute -top-2 right-1/4 h-3 w-2 rounded-t-[2px] bg-gradient-to-b from-[#515151] to-[#181818]" />
            {/* Bottom */}
            <div className="absolute -bottom-2 left-1/4 h-3 w-2 rounded-b-[2px] bg-gradient-to-t from-[#515151] to-[#181818]" />
            <div className="absolute -bottom-2 right-1/4 h-3 w-2 rounded-b-[2px] bg-gradient-to-t from-[#515151] to-[#181818]" />
            {/* Left */}
            <div className="absolute -left-2 top-1/4 h-2 w-3 rounded-l-[2px] bg-gradient-to-r from-[#515151] to-[#181818]" />
            <div className="absolute -left-2 bottom-1/4 h-2 w-3 rounded-l-[2px] bg-gradient-to-r from-[#515151] to-[#181818]" />
            {/* Right */}
            <div className="absolute -right-2 top-1/4 h-2 w-3 rounded-r-[2px] bg-gradient-to-l from-[#515151] to-[#181818]" />
            <div className="absolute -right-2 bottom-1/4 h-2 w-3 rounded-r-[2px] bg-gradient-to-l from-[#515151] to-[#181818]" />
            {/* CPU TextBox */}
            <div className="relative z-10 grid h-14 w-[80px] place-items-center rounded-md bg-[#181818] shadow-lg">
              <AnimatedShinyText className="text-xl font-semibold">
                CPU
              </AnimatedShinyText>
            </div>
          </div>
        </foreignObject>
        {/* Masks */}
        <defs>
          <mask id="cpu-mask-1">
            <path
              d="M 10 20 h 79.5 q 5 0 5 5 v 24"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="cpu-mask-2">
            <path
              d="M 180 10 h -69.7 q -5 0 -5 5 v 24"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="cpu-mask-3">
            <path
              d="M 130 20 v 21.8 q 0 5 -5 5 h -10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="cpu-mask-4">
            <path
              d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="cpu-mask-5">
            <path
              d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="cpu-mask-6">
            <path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="cpu-mask-7">
            <path
              d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="cpu-mask-8">
            <path
              d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* Gradients */}
          <radialGradient id="cpu-blue-grad" fx="1">
            <stop offset="0%" stopColor="#00E8ED" />
            <stop offset="50%" stopColor="#08F" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="cpu-yellow-grad" fx="1">
            <stop offset="0%" stopColor="#FFD800" />
            <stop offset="50%" stopColor="#FFD800" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="cpu-pinkish-grad" fx="1">
            <stop offset="0%" stopColor="#830CD1" />
            <stop offset="50%" stopColor="#FF008B" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="cpu-white-grad" fx="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="cpu-green-grad" fx="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="cpu-orange-grad" fx="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="cpu-cyan-grad" fx="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="cpu-rose-grad" fx="1">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <marker
            id="cpu-circle-marker"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="18"
            markerHeight="18"
          >
            <circle
              id="innerMarkerCircle"
              cx="5"
              cy="5"
              r="2"
              fill="black"
              stroke="#232323"
              strokeWidth="0.5"
            >
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            </circle>
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export { CpuArchitecture };
`,
};

export const CPU_ARCHITECTURE_SVG_FILE = `import { AnimatedShinyText } from "@/components/ui/shiny-text";

import React from "react";

const CpuArchitecture = () => {
  return (
    <svg
      className="text-muted"
      width="100%"
      height="100%"
      viewBox="0 0 200 100"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.3"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#cpu-circle-marker)"
      >
        {/* 1st */}
        <path d="M 10 20 h 79.5 q 5 0 5 5 v 70" />
        {/* 2nd */}
        <path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" />
        {/* 3rd */}
        <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
        {/* 4th */}
        <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
        {/* 5th */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
        />
        {/* 6th */}
        <path d="M 94.8 95 v -36" />
        {/* 7th */}
        <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
        {/* 8th */}
        <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
        {/* Animation For Path Starting */}
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="1s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.25,0.1,0.5,1"
          keyTimes="0; 1"
        />
      </g>

      {/* 1. Blue Light */}
      <g mask="url(#cpu-mask-1)">
        <circle
          className="cpu-architecture cpu-line-1"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-blue-grad)"
        />
      </g>
      {/* 2. Yellow Light */}
      <g mask="url(#cpu-mask-2)">
        <circle
          className="cpu-architecture cpu-line-2"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-yellow-grad)"
        />
      </g>
      {/* 3. Pinkish Light */}
      <g mask="url(#cpu-mask-3)">
        <circle
          className="cpu-architecture cpu-line-3"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-pinkish-grad)"
        />
      </g>
      {/* 4. White Light */}
      <g mask="url(#cpu-mask-4)">
        <circle
          className="cpu-architecture cpu-line-4"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-white-grad)"
        />
      </g>
      {/* 5. Green Light */}
      <g mask="url(#cpu-mask-5)">
        <circle
          className="cpu-architecture cpu-line-5"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-green-grad)"
        />
      </g>
      {/* 6. Orange Light */}
      <g mask="url(#cpu-mask-6)">
        <circle
          className="cpu-architecture cpu-line-6"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-orange-grad)"
        />
      </g>
      {/* 7. Cyan Light */}
      <g mask="url(#cpu-mask-7)">
        <circle
          className="cpu-architecture cpu-line-7"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-cyan-grad)"
        />
      </g>
      {/* 8. Rose Light */}
      <g mask="url(#cpu-mask-8)">
        <circle
          className="cpu-architecture cpu-line-8"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-rose-grad)"
        />
      </g>
      {/* CPU Box */}
      <foreignObject x="60" y="35" width="80" height="30" fill="transparent">
        <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.34]">
          {/* CPU Connectors */}
          {/* Top */}
          <div className="absolute -top-2 left-1/4 h-3 w-2 rounded-t-[2px] bg-gradient-to-b from-[#515151] to-[#181818]" />
          <div className="absolute -top-2 right-1/4 h-3 w-2 rounded-t-[2px] bg-gradient-to-b from-[#515151] to-[#181818]" />
          {/* Bottom */}
          <div className="absolute -bottom-2 left-1/4 h-3 w-2 rounded-b-[2px] bg-gradient-to-t from-[#515151] to-[#181818]" />
          <div className="absolute -bottom-2 right-1/4 h-3 w-2 rounded-b-[2px] bg-gradient-to-t from-[#515151] to-[#181818]" />
          {/* Left */}
          <div className="absolute -left-2 top-1/4 h-2 w-3 rounded-l-[2px] bg-gradient-to-r from-[#515151] to-[#181818]" />
          <div className="absolute -left-2 bottom-1/4 h-2 w-3 rounded-l-[2px] bg-gradient-to-r from-[#515151] to-[#181818]" />
          {/* Right */}
          <div className="absolute -right-2 top-1/4 h-2 w-3 rounded-r-[2px] bg-gradient-to-l from-[#515151] to-[#181818]" />
          <div className="absolute -right-2 bottom-1/4 h-2 w-3 rounded-r-[2px] bg-gradient-to-l from-[#515151] to-[#181818]" />
          {/* CPU TextBox */}
          <div className="relative z-10 grid h-14 w-[80px] place-items-center rounded-md bg-[#181818] shadow-lg">
            <AnimatedShinyText className="text-xl font-semibold">
              CPU
            </AnimatedShinyText>
          </div>
        </div>
      </foreignObject>
      {/* Masks */}
      <defs>
        <mask id="cpu-mask-1">
          <path
            d="M 10 20 h 79.5 q 5 0 5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-2">
          <path
            d="M 180 10 h -69.7 q -5 0 -5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-3">
          <path
            d="M 130 20 v 21.8 q 0 5 -5 5 h -10"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-4">
          <path
            d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-5">
          <path
            d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-6">
          <path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-7">
          <path
            d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-8">
          <path
            d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        {/* Gradients */}
        <radialGradient id="cpu-blue-grad" fx="1">
          <stop offset="0%" stopColor="#00E8ED" />
          <stop offset="50%" stopColor="#08F" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#FFD800" />
          <stop offset="50%" stopColor="#FFD800" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#830CD1" />
          <stop offset="50%" stopColor="#FF008B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-green-grad" fx="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-orange-grad" fx="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-rose-grad" fx="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <marker
          id="cpu-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="18"
          markerHeight="18"
        >
          <circle
            id="innerMarkerCircle"
            cx="5"
            cy="5"
            r="2"
            fill="black"
            stroke="#232323"
            strokeWidth="0.5"
          >
            <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
          </circle>
        </marker>
      </defs>
    </svg>
  );
};

export { CpuArchitecture };
`