module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<taskname>[a-zA-Z0-9]{1,15})-(?<type>feat|fix|docs|style|refactor|perf|test|chore|revert): (?<subject>.+)$/,
      headerCorrespondence: ["taskname", "type", "subject"],
    },
  },
  rules: {
    "header-max-length": [2, "always", 120],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "ci",
        "build",
      ],
    ],
    "subject-case": [2, "always", "sentence-case"], // Ensure first letter is capitalized
    "subject-max-length": [2, "always", 100],
    "subject-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
  },
};
