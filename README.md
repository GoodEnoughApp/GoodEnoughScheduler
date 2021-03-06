## Good Enough Scheduler

## âšī¸ About:
Scheduler is used to run a task everyday and it is hosted on [Heroku](https://www.heroku.com/). Scheduler is going to send an email that contains a list of the products that are about to expire. Notifying the user everyday, three days before the expiration date.


## đ¯ Functionality:
1- The is_used flag should be false for the notified item.

2- The user should get notified for three days before the expiration date at 6pm time zone (America/New_York). 

3- The Scheduler will ping itself to keep it awake on Heroku. [more details](https://devcenter.heroku.com/articles/free-dyno-hours)

## đ Run:
To run the project you need the following:

**Note: You will need an .env file to make sure all the configurations are in place to run the application.**

You will need to install all the dependencies by running this command:

    $ npm ci
  
Run the application using the following command:

    $ npm start


## đ Structure: 

| Directories    | Description                                                                                                                      |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `/config`      | This directory contains database configuration file                                                                              |
| `/data`        | This directory contains the database operations                                                                                  |
| `/models`      | This directory contains all the sequelize definitions of the tables in the databse                                               |                                                                                                                                                                   |
| `/views`       | This directory contains the handlebar file that has the design template for the email
| `/_test_`      | This directory contains the test code using Jest                                               |     
| `/images`      | This directory contains the README file image                                                  |     

## đ Scheduler Architecture:
<img src="https://raw.githubusercontent.com/GoodEnoughApp/GoodEnoughScheduler/dev/images/diagram.png" data-canonical-src="https://raw.githubusercontent.com/GoodEnoughApp/GoodEnoughScheduler/dev/images/diagram.png" width="900" height="900" />

