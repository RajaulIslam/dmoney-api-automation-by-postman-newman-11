
# dmoney-api-automation by postman & newman

## About this project:
### This is A Simple API Testing project where I try to D-money which is a demo financial-related project where fake money can be transferred. In this project, I have automated the d-money API using Postman and Newman. Here I have covered following.

## Tools & Technology used:
- postman
- newman
- newman-html-extra

## Prerequisites
- nodejs
  
## How to run this project:
- clone this project
- Then run the following command:
- ``` npm i ```
- ``` npm test ```
- add the env file(on request)

## Test case
- https://docs.google.com/spreadsheets/d/1Cy32ygK2AF_dhE2NjlLk4_qKHDTFjuorN_IRq5oblLc/edit?usp=sharing
## Bug Report
- https://docs.google.com/spreadsheets/d/1Km-PmmRyOQA6TA2moEafreRc_uH-tyFVymFEspORhys/edit?usp=sharing
## d-money API documentation
- https://documenter.getpostman.com/view/22666982/2sA3Qv9WYo

## Test Report
  ![image](https://github.com/Rajaul-Islam/dmoney-api-automation-by-postman-newman-11/assets/86623372/394d5af1-3db6-48ff-8261-b2709f78b585)


## Newman Full Live Report Link
https://6659e10c043c344add04956d--prismatic-bublanina-0bd3c1.netlify.app/

## Positive and Negative cases are Created for Following Scenario.

1. Admin creates an agent and random 2 customers. Admin email: admin@roadtocareer.net/ Pass: 1234
2. Deposit some money from SYSTEM account to the agent. System account: SYSTEM (range 10 tk to 10000 tk)
3. Agent deposit to any of 1 customer
4. Check agent balance
5. Then withdraw any amount by the customer from the agent (range 10 tk to 10000 tk)
6. Then the customer checks the balance
7. Then send money to the other customer
8. Then from another customer payment to any merchant (create a merchant account)
9. Then the second customer will check both the balance and statement
10. Then the merchant will check his own balance
