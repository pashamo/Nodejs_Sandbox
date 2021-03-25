const AWS = require('aws-sdk');
const configDDB = require('./config');

AWS.config.update({
  accessKeyId: configDDB.accessKeyId,
  secretAccessKey: configDDB.secretAccessKey,
  region: configDDB.region,
  endpoint: configDDB.endpoint_prod
});

//Create an Item on table
const docClient = new AWS.DynamoDB.DocumentClient();

let params = {
  TableName: "F1Drivers",
  Item: {
    "name": "Daniel Ricciardo",
    "teamName": "Renault F1 Team",
    "driverPosition": 1
  }
};

console.log("Adding new Item");
docClient.put(params, (err, data) => {
  if (err) {
    console.error("Unable to add item", JSON.stringify(err,null,2));
  } else {
    console.log("PutItem succeeded:", JSON.stringify(data,null,2));
  }
});
