/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const mysql = require('mysql2/promise');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const conn = mysql.createPool({
  database: 'Affiliates',
  user: 'admin',
  host: 'osdelaffiliate.cipgoxztwtzo.sa-east-1.rds.amazonaws.com',
  password: '200398United',
  ssl:{
      rejectUnauthorized:false
  }   
});

app.get('/affiliate', function(req, res) {
  const {dni, id} = req.query
  const queryUser = async(dni, id) => {
    const affiliate = await conn.query(`SELECT * FROM Affiliate WHERE dni =${dni} AND  id=${id} `);
    return affiliate;
  }
  const affiliate = queryUser(dni,id);
  return res.status(200).send(affiliate);
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
