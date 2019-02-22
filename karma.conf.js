module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["mocha", "karma-typescript"],
    files: [
      "src/**/*.ts",
      "test/**/*.spec.ts",
      {
        pattern: "test/savegames/*.save",
        watched: false,
        included: false,
        served: true,
        nocache: false
      },
    ],
    exclude: [
      "node_modules"
    ],
    preprocessors: {
      "**/*.ts": "karma-typescript"
    },
    karmaTypescriptConfig: {
      compilerOptions: {
        module: "commonjs",
        sourceMap: true,
        target: "es6"
      },
      exclude: ["node_modules"]
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  });
};