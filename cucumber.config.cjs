const config = {
    default: {
      format: ["html:./reports/cucumber-report.html"], // Generate HTML report
      paths: ["./features/*.feature"],           // Path to feature files
      require: ["./step-definitions/*.ts"],     // Path to step definitions
      "requireModule": ["ts-node/register"]       // Use ts-node to execute TypeScript
    },
  };
  module.exports = config;
  