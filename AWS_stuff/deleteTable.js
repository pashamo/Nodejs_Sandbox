const AWS = require('aws-sdk');
const configDDB = require('./config');

AWS.config.update({
  accessKeyId: configDDB.accessKeyId,
  secretAccessKey: configDDB.secretAccessKey,
  region: configDDB.region,
  endpoint: configDDB.endpoint_prod
});

//Load data to existing table
const dynamodb = new AWS.DynamoDB();

let params = {
  TableName: "F1Drivers"
}

console.log("Deleting Table...");
dynamodb.deleteTable(params, (err, data) => {
  if (err) {
    console.error("Unable to delete table", JSON.stringify(err,null,2));
  } else {
    console.log("DeleteTable succeeded:", data);
  }
});