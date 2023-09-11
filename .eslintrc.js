module.exports = {
  root: true,
  extends: ["universe/native"],
  ignorePatterns: ["web-build/**"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
