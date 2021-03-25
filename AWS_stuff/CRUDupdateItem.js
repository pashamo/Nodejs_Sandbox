const AWS = require('aws-sdk');
const configDDB = require('./config');

AWS.config.update({
  accessKeyId: configDDB.accessKeyId,
  secretAccessKey: configDDB.secretAccessKey,
  region: configDDB.region,
  endpoint: configDDB.endpoint_prod
});

//Update an Item on table
const docClient = new AWS.DynamoDB.DocumentClient();

let updateParams = {
  TableName: "F1Drivers",
  Key: {
    "name": "Daniel Ricciardo",
    "teamName": "Renault F1 Team"
  },
  UpdateExpression: "add contractEnd :c",
  ExpressionAttributeValues: {
    ":c": 2020
  },
  ReturnValues: "UPDATED_NEW"
};

console.log("Updating Item");
docClient.update(updateParams, (err, data) => {
  if (err) {
    console.error("Unable to update item", JSON.stringify(err,null,2));
  } else {
    console.log("UpdateItem succeeded:", JSON.stringify(data,null,2));
  }
});
