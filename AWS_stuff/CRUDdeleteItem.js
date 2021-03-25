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

let updateParams = {
  TableName: "F1Drivers",
  Key: {
    "name": "Daniel Ricciardo",
    "teamName": "Renault F1 Team"
  }
};

console.log("Deleting Item");
docClient.delete(updateParams, (err, data) => {
  if (err) {
    console.error("Unable to delete item", JSON.stringify(err,null,2));
  } else {
    console.log("DeleteItem succeeded:", JSON.stringify(data,null,2));
  }
});
