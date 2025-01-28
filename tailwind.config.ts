import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		
		"./lib/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",

	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#2563eb",
					foreground: "#ffffff",
					hover: "#1d4ed8",
				},
				secondary: {
					DEFAULT: "#7c3aed",
					foreground: "#ffffff",
				},
				accent: {
					DEFAULT: "#0d9488",
					foreground: "#ffffff",
				},
			},
			keyframes: {
				"fade-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			animation: {
				"fade-up": "fade-up 0.5s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
