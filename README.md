# Alexa-SOS-Skill

An Alexa skill that is designed to alert your designated contact in the event of an emergency.

## Getting Started

This is the source code for the SOS skill that can be used in your Alexa Devices. It contains a schema file and the actual file for the skill. Alexa Developer Console has been used for this purpose. Skills can be written either in Node.js or Python3. This skill uses Python3. You can create a developer's console account here at https://developer.amazon.com/alexa


## Prerequisites

What are the things that you need to use to build this skill and how to use them?

```
- An AWS Account to provision a DynamoDB database: You can create your AWS account here at https://aws.amazon.com
- A Twilio/Nexmo account to send SMS.
```

## Installation and Usage

Follow these steps to build your SOS Skill

1. Create a Skill in the Alexa Developer console.
 - In the page to create a skill, enter your skill name and its default language. Choose Custom Model and Alexa Hosted(Python) for the skill and click Create Skill.
 - Copy and Paste the schema.json file into the Schema tab.
 - Copy and Paste the skill.py file into the Code section.
 - Set your skill invocation name
 - Save the changes

You can also refer to the steps given at https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html to build your own custom skill.

2. Create a webpage to provision input from the user for their contact details.
 - A form based webpage is created to get input from the user.
 - The website is hosted using Amazon S3's Static website hosting feature. Refer to https://youtu.be/EMXCIWW0x2o.
 - These details are sent to a DynamoDB database created by you.
 - API Gateway and Lambda from AWS is used for this purpose.
 Refer to https://samratpriyadarshi.com/send-data-from-a-webpage-to-amazon-dynamodb-using-api-gateway-and-lambda/ to complete this step.

3. Creating a Twilio account 
 Refer to https://support.vision6.com.au/hc/en-us/articles/230673727-Text-Messaging-Account-Setup-with-Twilio to get your account SID and Auth Token.
 
4. Changes in the Skill.py code
 In the skill.py file, enter your
 - Twilio Account SID
 - Twilio Auth Token
 - IAM number for your AWS Account
 - The name of your DynamoDB table
  in their respective places. Also ensure that your table is populated so that retrival can be done.

## Deployment

You can deploy this skill in the Developer console by Building the skill and testing it. If successful, you should receive a text message from your Twilio number with the appropriate message.

## Built With

* [Twilio](https://twilio.com/console/) - The API for sending SMS
* [ASK Developer Console](https://developer.amazon.com/alexa) - for hosting, building and testing our skill
* [S3](https://console.aws.amazon.com/s3/) - Used to host our website
* [DynamoDB](https://console.aws.amazon.com/dynamodb/) - database to store contact details


## Author

**Vignesh Hariharan K**


