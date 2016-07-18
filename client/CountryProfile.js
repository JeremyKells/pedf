Template.CountryProfile.helpers({
  data: ()=> {
    var country = FlowRouter.getParam('country');
    return {
      country: country
      
    }
  },
});

Template.CountryProfile.onCreated(function(){
  Session.set('yearSelected', new Date().getUTCFullYear()-1);
});
