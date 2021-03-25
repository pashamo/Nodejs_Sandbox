const AWS = require('aws-sdk');
const configDDB = require('./config');

AWS.config.update({
  accessKeyId: configDDB.accessKeyId,
  secretAccessKey: configDDB.secretAccessKey,
  region: configDDB.region,
  endpoint: configDDB.endpoint_prod
});

//Delete an Item on table
const docClient = new AWS.DynamoDB.DocumentClient();

let params = {
  TableName: "F1Drivers",
  Key: {
    "name": "Daniel Ricciardo",
    "teamName": "Renault F1 Team",
  }
};

console.log("Reading item");
docClient.get(params, (err, data) => {
  if (err) {
    console.error("Unable to read item", JSON.stringify(err,null,2));
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data,null,2));
  }
});
