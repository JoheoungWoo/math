// eslint.config.js
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    extends: [
      "react-app",
      "react-app/jest",
      "plugin:react-hooks/recommended", // 👈 이 부분이 있는지 확인!
    ],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
