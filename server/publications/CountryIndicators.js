Meteor.publish('countryIndicators', function(){
  return CountryIndicators.find({});
});
