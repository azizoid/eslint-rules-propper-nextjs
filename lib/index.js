const rules = {
  "nextjs-default-export-rule": require("./rules/nextjs-default-export-rule")
}

const propperNextJsPlugin = {
  rules,
  configs: {
    recommended: {
      plugins: ["propper-nextjs"],
      extends: ["plugin:import/recommended"],
      rules: {
        "propper-nextjs/nextjs-default-export-rule": "error",

        // impoorts in all components will be grouped into readable structure
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
        "import/order": [
          "error",
          {
            groups: [
              "type",
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            pathGroups: [
              { pattern: "react", group: "external", position: "before" },
              { pattern: "@next/*", group: "internal", position: "before" },
              { pattern: "@/**", group: "internal" },
              { pattern: "*", group: "external", position: "after" },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],

        // styling rules
        'no-console': 'error',
        'quotes': ['error', 'single'],
        'no-mixed-spaces-and-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-multi-spaces': 'error',
        'arrow-spacing': 'error',
        'prefer-arrow-callback': 'error',
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'prefer-const': 'error',
        'no-unneeded-ternary': 'error',
        'no-shadow': 'error',

        // import rules
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-self-import": "error",
        "import/no-cycle": "error",
        "import/newline-after-import": "error"
      },
    },
  }
};

module.exports = propperNextJsPlugin