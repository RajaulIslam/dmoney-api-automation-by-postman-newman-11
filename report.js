const newman = require("newman");

require("dotenv").config();
newman.run(
  {
    //collection: require('./collection/dmoney.json'),
    collection:
    `https://api.postman.com/collections/22666982-062ede1c-c227-4948-840f-ffa77791ed7d?access_key=${process.env.secretKey}`,

    //environment:require('./collection/env.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
