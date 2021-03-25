const AWS = require('aws-sdk');
const fs = require('fs');
const configDDB = require('./config');

AWS.config.update({
  accessKeyId: configDDB.accessKeyId,
  secretAccessKey: configDDB.secretAccessKey,
  region: configDDB.region,
  endpoint: configDDB.endpoint_prod
});

//Load data to existing table
const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing drivers into DynamoDB. Please wait.");

let drivers = JSON.parse(fs.readFileSync('F1Drivers_data.json','utf-8'));

drivers.forEach(driver => {
  let params = {
    TableName: "F1Drivers",
    Item: {
      "name": driver.name,
      "teamName": driver.teamName,
      "driverPosition": driver.driverPosition
    }
  };
  
  docClient.put(params, (err, data) => {
    if (err) {
      console.error("Unable to add Driver", driver.name, ". Error JSON:", JSON.stringify(err,null,2));
    } else {
      console.log("PutItem succeeded:", driver.name);
    }
  });
});