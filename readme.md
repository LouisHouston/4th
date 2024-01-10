# Welcome to my personal project 4<sup>th</sup>
This is a personal project meant to be used as a inventory management system for a small business with a focus more on food production.

### Due Date: January 22<sup>nd</sup>

## Purpose
What this application is supposed to do is create a very clear and concise way to manage inventory based off raw materials, corrugate, expiration dates and etc. and hopefully later on I want to include a way to show stats of day to day productions

## Technologies Used
I am basing this off electron.js to be a standalone application, for my db we are running off of Cockroach labs, and express for backend.

## ~Updates~
### January 7 - 13 <br>
[  ] Basic layout (table is best) <br>
[ x ] Testing db connection (pg-promise!) <br>
[  ] Layout schema db

#### Notes
I think that going with a table that includes things like: lot, received date, quantity, expiration(if perishable), and this is included as a base and then the production day you can input values to determine how much waste or efficiency based off time so I will start on the table as this is the main component. It also has to interact with the db.<br> Haven't chosen a front end though bored of React

Need to finish Form for submitting an item

### January 9
Added a way so that the dropdown menu only shows user the data needed for entering a type of item like a PPE or Corrugate wouldn't need an expiration date
