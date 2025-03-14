import { cn } from "@/lib/utils";
import React, { memo } from "react";

// Types
export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

interface PathConfig {
  id: string;
  path: string;
  color: string;
  animationDuration: string;
  animationDelay: string;
}

// Configuration
const PATHS_CONFIG: PathConfig[] = [
  {
    id: "line-1",
    path: "M 10 20 h 79.5 q 5 0 5 5 v 30",
    color: "url(#cpu-blue-grad)",
    animationDuration: "5s",
    animationDelay: "1s",
  },
  {
    id: "line-2",
    path: "M 180 10 h -69.7 q -5 0 -5 5 v 40",
    color: "url(#cpu-yellow-grad)",
    animationDuration: "2s",
    animationDelay: "6s",
  },
  {
    id: "line-3",
    path: "M 130 20 v 21.8 q 0 5 -5 5 h -25",
    color: "url(#cpu-pinkish-grad)",
    animationDuration: "6s",
    animationDelay: "4s",
  },
  {
    id: "line-4",
    path: "M 170 80 v -21.8 q 0 -5 -5 -5 h -65",
    color: "url(#cpu-white-grad)",
    animationDuration: "3s",
    animationDelay: "3s",
  },
  {
    id: "line-5",
    path: "M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -35",
    color: "url(#cpu-green-grad)",
    animationDuration: "4s",
    animationDelay: "9s",
  },
  {
    id: "line-6",
    path: "M 94.8 95 v -46",
    color: "url(#cpu-orange-grad)",
    animationDuration: "7s",
    animationDelay: "3s",
  },
  {
    id: "line-7",
    path: "M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 28",
    color: "url(#cpu-cyan-grad)",
    animationDuration: "4s",
    animationDelay: "4s",
  },
  {
    id: "line-8",
    path: "M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 35",
    color: "url(#cpu-rose-grad)",
    animationDuration: "3s",
    animationDelay: "3s",
  },
];

// Memoized Components
const CpuConnections = memo(() => (
  <g fill="url(#cpu-connection-gradient)">
    <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
    <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
    <rect
      x="116.3"
      y="44"
      width="2.5"
      height="5"
      rx="0.7"
      transform="rotate(90 116.25 45.5)"
    />
    <rect
      x="122.8"
      y="44"
      width="2.5"
      height="5"
      rx="0.7"
      transform="rotate(90 116.25 45.5)"
    />
    <rect
      x="104"
      y="16"
      width="2.5"
      height="5"
      rx="0.7"
      transform="rotate(180 105.25 39.5)"
    />
    <rect
      x="114.5"
      y="16"
      width="2.5"
      height="5"
      rx="0.7"
      transform="rotate(180 105.25 39.5)"
    />
    <rect
      x="80"
      y="-13.6"
      width="2.5"
      height="5"
      rx="0.7"
      transform="rotate(270 115.25 19.5)"
    />
    <rect
      x="87"
      y="-13.6"
      width="2.5"
      height="5"
      rx="0.7"
      transform="rotate(270 115.25 19.5)"
    />
  </g>
));
CpuConnections.displayName = "CpuConnections";

const RadialGradient = memo(
  ({
    id,
    startColor,
    midColor,
    endColor = "transparent",
  }: {
    id: string;
    startColor: string;
    midColor?: string;
    endColor?: string;
  }) => (
    <radialGradient id={id} fx="1">
      <stop offset="0%" stopColor={startColor} />
      <stop offset="50%" stopColor={midColor || startColor} />
      <stop offset="100%" stopColor={endColor} />
    </radialGradient>
  )
);
RadialGradient.displayName = "RadialGradient";

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "CPU",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
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
        {PATHS_CONFIG.map((pathConfig) => (
          <path
            key={pathConfig.id}
            strokeDasharray="100 100"
            pathLength="100"
            d={pathConfig.path}
            style={{
              animationDuration: pathConfig.animationDuration,
              animationDelay: pathConfig.animationDelay,
            }}
          />
        ))}
        {animateLines && (
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
        )}
      </g>

      {/* Animated Circles */}
      {PATHS_CONFIG.map((pathConfig) => (
        <g key={pathConfig.id} mask={`url(#cpu-mask-${pathConfig.id})`}>
          <circle
            className={`cpu-architecture cpu-${pathConfig.id}`}
            cx="0"
            cy="0"
            r="8"
            fill={pathConfig.color}
          />
        </g>
      ))}

      {/* CPU Box */}
      <g>
        {showCpuConnections && <CpuConnections />}
        <rect
          x="85"
          y="40"
          width="30"
          height="20"
          rx="2"
          fill="#181818"
          filter="url(#cpu-light-shadow)"
        />
        <text
          x="92"
          y="52.5"
          fontSize="7"
          fill={animateText ? "url(#cpu-text-gradient)" : "white"}
          fontWeight="600"
          letterSpacing="0.05em"
        >
          {text}
        </text>
      </g>

      {/* Definitions */}
      <defs>
        {/* Masks */}
        {PATHS_CONFIG.map((pathConfig) => (
          <mask key={pathConfig.id} id={`cpu-mask-${pathConfig.id}`}>
            <path d={pathConfig.path} strokeWidth="0.5" stroke="white" />
          </mask>
        ))}

        {/* Gradients */}
        <RadialGradient
          id="cpu-blue-grad"
          startColor="#00E8ED"
          midColor="#08F"
        />
        <RadialGradient id="cpu-yellow-grad" startColor="#FFD800" />
        <RadialGradient
          id="cpu-pinkish-grad"
          startColor="#830CD1"
          midColor="#FF008B"
        />
        <RadialGradient id="cpu-white-grad" startColor="white" />
        <RadialGradient id="cpu-green-grad" startColor="#22c55e" />
        <RadialGradient id="cpu-orange-grad" startColor="#f97316" />
        <RadialGradient id="cpu-cyan-grad" startColor="#06b6d4" />
        <RadialGradient id="cpu-rose-grad" startColor="#f43f5e" />

        {/* Filters and Other Definitions */}
        <filter
          id="cpu-light-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="1.5"
            dy="1.5"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.1"
          />
        </filter>

        <marker
          id="cpu-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
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
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>

        <linearGradient
          id="cpu-connection-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>

        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="-2; -1; 0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate
              attributeName="offset"
              values="-1; 0; 1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="0; 1; 2;"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { CpuArchitecture };
