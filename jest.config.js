module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
  },
  //   globals: {
  //     svelte: {
  //       preprocess: svelteConfig.preprocess,
  //       compilerOptions: {
  //         accessors: true,
  //       },
  //     },
  //   },
  moduleFileExtensions: ["ts", "js", "svelte"],
};
