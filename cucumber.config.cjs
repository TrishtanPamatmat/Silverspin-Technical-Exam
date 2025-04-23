const config = {
  default: {
    format: ["html:./reports/cucumber-report.html"],
    paths: ["./features/*.feature"],
    require: ["./step-definitions/*.ts"], //  <- CHECK THIS LINE
    "requireModule": ["ts-node/register"]
  },
};
module.exports = config;