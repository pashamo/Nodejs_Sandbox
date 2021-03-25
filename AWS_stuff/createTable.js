const AWS = require('aws-sdk');
const configDDB = require('./config');

AWS.config.update({
  accessKeyId: configDDB.accessKeyId,
  secretAccessKey: configDDB.secretAccessKey,
  region: configDDB.region,
  endpoint: configDDB.endpoint_prod
});

//Create a table
const dynamodb = new AWS.DynamoDB();
const createParams = {
  TableName: "F1Drivers",
  KeySchema: [
    {
      AttributeName: "name", 
      KeyType: "HASH"
    },
    {
      AttributeName: "teamName",
      KeyType: "RANGE"
    }
  ],
  AttributeDefinitions: [
    {
      AttributeName: "name",
      AttributeType: "S"
    },
    {
      AttributeName: "teamName",
      AttributeType: "S"
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
}

dynamodb.createTable(createParams, (err, data) => {
  if(err) {
    console.error("Unable to create table, Error JSON:", JSON.stringify(err,null,2));
  } else {
    console.log("Created table. Table description JSON:", JSON.stringify(data,null,2));
  }
});