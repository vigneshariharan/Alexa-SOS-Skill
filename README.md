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
 - These details are sent to a DynamoDB database created by you.
 - API Gateway and Lambda from AWS is used for this purpose.
 Refer to https://samratpriyadarshi.com/send-data-from-a-webpage-to-amazon-dynamodb-using-api-gateway-and-lambda/ to complete this step.

3. Changes in the Skill.py code
 -

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


