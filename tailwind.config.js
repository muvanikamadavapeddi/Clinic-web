// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths if needed
//   theme: {
//     extend: {
//       animation: {
//         floating: "floating 4s ease-in-out infinite",
//         drifting: "drifting 6s ease-in-out infinite",
//         bouncing: "bouncing 5s ease-in-out infinite",
//       },
//       keyframes: {
//         floating: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//         drifting: {
//           "0%, 100%": { transform: "translateX(0)" },
//           "50%": { transform: "translateX(-20px)" },
//         },
//         bouncing: {
//           "0%, 100%": { transform: "translateY(0) scale(1)" },
//           "50%": { transform: "translateY(-15px) scale(1.1)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this is correctly set
  theme: {
    extend: {
      animation: {
        floating: "floating 4s ease-in-out infinite",
        drifting: "drifting 6s ease-in-out infinite",
        bouncing: "bouncing 5s ease-in-out infinite",
        rotating: "rotating 8s linear infinite",
        pulsing: "pulsing 3s ease-in-out infinite",
        wavy: "wavy 6s ease-in-out infinite",
        expanding: "expanding 5s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        drifting: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
        bouncing: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-15px) scale(1.1)" },
        },
        rotating: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulsing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        wavy: {
          "0%, 100%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewY(10deg)" },
        },
        expanding: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
};
