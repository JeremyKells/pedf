install meteor ()
  - linux: curl https://install.meteor.com/ | sh
  - https://www.meteor.com/install

install mongodb (for mongorestore)
  - linux: sudo apt-get install mongodb-clients
  - windows: https://www.mongodb.org/downloads#production

start meteor
 - meteor

(in second shell)
 - mongorestore --port 3001 --db meteor dump/meteor/countryIndicators.bson
