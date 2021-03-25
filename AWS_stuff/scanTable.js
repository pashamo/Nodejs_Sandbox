const AWS = require('aws-sdk');
//const app = require('fastify')({Logger: true});
const configDDB = require('./config');

AWS.config.update({
  accessKeyId: configDDB.accessKeyId,
  secretAccessKey: configDDB.secretAccessKey,
  region: configDDB.region,
  endpoint: configDDB.endpoint_prod
});

const docClient = new AWS.DynamoDB.DocumentClient();

let table = "Books";
let params1 = {
  TableName: table,
  //Key:{"id": id}
};

let params = {
  TableName: "DEMO_F1DriversStandings",
  FilterExpression: "f1constructor = :c OR f1constructor = :ca ",
  ExpressionAttributeNames: {
    "#tp": "totalPoints",
    "#c" : "f1constructor"
  },
  ExpressionAttributeValues: {
    //":p": "50",
    ":c": "Ferrari",
    ":ca": "Mercedes"
  }
};

docClient.scan(params, function(err, data) {
  if (err) {
    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("GetItem succeeded:", data.Items);
    //console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});

//Works to read all items in table, how to order the query?