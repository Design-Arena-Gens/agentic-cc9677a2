import type { SVGProps } from "react";

const accentBrown = "#C77B30";
const baseBrown = "#B96D2B";
const lightBrown = "#E6B98F";

export function DogIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 360 260"
      role="img"
      aria-labelledby="dog-illustration-title dog-illustration-desc"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title id="dog-illustration-title">Happy dog illustration</title>
      <desc id="dog-illustration-desc">
        Stylized illustration of a smiling dog sitting with its tail curled.
      </desc>
      <defs>
        <radialGradient id="dog-bg" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#FEE8C8" />
          <stop offset="55%" stopColor="#FBD9A2" />
          <stop offset="100%" stopColor="#F5C276" />
        </radialGradient>
        <linearGradient id="dog-collar" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#3044FF" />
          <stop offset="100%" stopColor="#8A3DFF" />
        </linearGradient>
        <linearGradient id="dog-tag" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF5B3" />
          <stop offset="100%" stopColor="#E3B339" />
        </linearGradient>
      </defs>

      <rect
        x="22"
        y="18"
        width="316"
        height="220"
        rx="36"
        fill="url(#dog-bg)"
      />
      <rect
        x="22"
        y="18"
        width="316"
        height="220"
        rx="36"
        fill="none"
        stroke="#F2B958"
        strokeWidth="4"
        opacity="0.4"
      />

      <g transform="translate(50 40)">
        <path
          d="M228 93c19-16 48 18 21 36-17 12-32 15-34 3-2-11 5-28 13-39z"
          fill={baseBrown}
        />
        <ellipse cx="145" cy="138" rx="100" ry="68" fill={accentBrown} />
        <ellipse cx="150" cy="156" rx="74" ry="46" fill="#DFA970" />
        <ellipse cx="86" cy="108" rx="58" ry="52" fill={accentBrown} />

        <path
          d="M68 66c-19 6-35 48-13 70 20 20 44-4 41-24-4-26-8-50-28-46z"
          fill="#95541F"
        />
        <path
          d="M124 62c27-10 62-2 82 24 18 22 21 52 11 78-11 28-44 46-90 47-53 1-86-21-90-54-4-34 22-60 51-60 9 0 19 3 27 8 1-18 2-34 9-43z"
          fill={accentBrown}
        />

        <ellipse cx="77" cy="116" rx="28" ry="22" fill={lightBrown} />
        <path
          d="M58 97c12-8 39-5 41 20 2 21-17 30-34 23-22-8-20-34-7-43z"
          fill="#F4CEA5"
        />

        <circle cx="96" cy="101" r="8" fill="#2F1E12" />
        <circle cx="122" cy="108" r="7" fill="#2F1E12" />
        <circle cx="95" cy="99" r="2" fill="#FFFFFF" opacity="0.7" />
        <circle cx="121" cy="106" r="2" fill="#FFFFFF" opacity="0.7" />

        <path
          d="M78 133c16 12 46 13 63 0"
          stroke="#8C4412"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M78 135c12 13 42 14 55 0"
          stroke="#FCE4C7"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M64 116c4 7 22 10 29 0"
          stroke="#EBC097"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M71 106c4-3 12-3 17 0"
          stroke="#E3B381"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M118 58c24-14 52-12 78 1 29 15 35 50 34 78-1 41-20 61-54 71-21 6-61 6-88-3-35-11-55-44-47-81 7-31 35-51 64-45 4-13 9-21 13-21z"
          fill="none"
          stroke="#9C561F"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <rect
          x="90"
          y="132"
          width="160"
          height="24"
          rx="12"
          fill="url(#dog-collar)"
        />
        <ellipse cx="248" cy="144" rx="9" ry="18" fill="#8C3EFF" opacity="0.6" />
        <circle cx="170" cy="157" r="12" fill="url(#dog-tag)" />
        <circle cx="170" cy="157" r="12" fill="none" stroke="#D89F25" />

        <path
          d="M112 182c-2 20-1 38-26 38-24 0-36-36-34-54 3-22 20-40 44-40 18 0 32 16 32 36 0 4-6 12-16 20z"
          fill="#A05A24"
        />
        <path
          d="M190 182c2 20 1 38 26 38 24 0 36-36 34-54-3-22-20-40-44-40-18 0-32 16-32 36 0 4 6 12 16 20z"
          fill="#A05A24"
        />

        <path
          d="M104 186c-8 10-16 21-18 34"
          stroke="#6C3912"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M192 186c8 10 16 21 18 34"
          stroke="#6C3912"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <ellipse
          cx="144"
          cy="204"
          rx="34"
          ry="10"
          fill="#664018"
          opacity="0.18"
        />
      </g>
    </svg>
  );
}

export default DogIllustration;
