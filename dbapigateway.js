"""
This is the code that is used in Lambda to receive the request parameters from API Gateway.
The request from API gateway is in JSON format and the appropriate variables are set with the respective parameters.
"""

console.log('Loading event');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();
var s3 = new AWS.S3();
const querystring = require('querystring');

exports.handler = function(event, context, callback) {
    console.log("Request received:\n", JSON.stringify(event));
    console.log("Context received:\n", JSON.stringify(context));
    const parameters = querystring.parse(event.body);
    var tableName = "ContactDetails";
    //var bucketName = "sosmodulewebsite";
    //var datetime = new Date().getTime().toString();
    const usermob = parameters.usermob;
    const username = parameters.username;
    const emername = parameters.emername;
    const emermob = parameters.emermob;
    dynamodb.putItem({
            "TableName": tableName,
            "Item": {
                "User_Mobile_Number": {
                    "S": usermob
                },
                "User_Name": {
                    "S": username
                },
                "Emergency_Name": {
                    "S": emername
                },
                "Emergency_Mobile_Number":{
                    "S":emermob   
                }
            }
        }, 
        function(err, data) {
            if (err) {
                context.fail('ERROR: Dynamo failed: ' + err);
            } else {
                console.log('Dynamo Success: ' + JSON.stringify(data, null, '  '));
                context.succeed('SUCCESS');
            }
        });
    //Generate HTML.
    const html = `<!DOCTYPE html><p>We will contact ` + emername + ' at '+ emermob +' incase of an emergency</p>'
    // // Return HTML as the result.
    callback(null, html);
}
