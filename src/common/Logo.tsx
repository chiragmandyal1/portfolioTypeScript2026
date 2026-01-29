import { useTheme } from "@/context/ThemeContext";

interface LogoProps {
    width?: number;
    height?: number;
}

export default function Logo({ width = 200, height = 60 }: LogoProps) {
    const { theme } = useTheme();
    const textColor = theme === "dark" ? "#ffffff" : "#000000";
    const accentColor = "#FBBF24"; // Yellow from your theme

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 200 60"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-300"
        >
            {/* Background circle for icon */}
            <circle cx="30" cy="30" r="28" fill={accentColor} opacity="0.1" />

            {/* Left bracket */}
            <path
                d="M 12 15 L 18 15 L 18 45 L 12 45"
                stroke={accentColor}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Code symbol - vertical line */}
            <path
                d="M 24 20 L 36 40"
                stroke={textColor}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
            />

            {/* Code symbol - vertical line */}
            <path
                d="M 36 20 L 24 40"
                stroke={textColor}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
            />

            {/* Right bracket */}
            <path
                d="M 48 15 L 42 15 L 42 45 L 48 45"
                stroke={accentColor}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Main text - CHIRAG */}
            <text
                x="60"
                y="24"
                fontSize="16"
                fontWeight="700"
                fill={textColor}
                fontFamily="Montserrat, sans-serif"
                letterSpacing="0.5"
            >
                CHIRAG
            </text>

            {/* Subtitle - MANDYAL */}
            <text
                x="60"
                y="38"
                fontSize="10"
                fontWeight="400"
                fill={accentColor}
                fontFamily="DM Sans, sans-serif"
                letterSpacing="1"
            >
                MANDYAL
            </text>

            {/* Tech indicator - JS/TS */}
            <circle cx="190" cy="22" r="6" fill={accentColor} />
            <text
                x="190"
                y="26"
                fontSize="7"
                fontWeight="700"
                fill="#000000"
                fontFamily="monospace"
                textAnchor="middle"
            >
                JS
            </text>

            <circle cx="190" cy="40" r="6" fill={accentColor} opacity="0.6" />
            <text
                x="190"
                y="44"
                fontSize="7"
                fontWeight="700"
                fill="#000000"
                fontFamily="monospace"
                textAnchor="middle"
            >
                TS
            </text>
        </svg>
    );
}
