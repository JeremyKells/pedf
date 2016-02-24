// if(Meteor.isClient){
//   Accounts.onLogin(function(){
//      FlowRouter.go('edit');
//   });
//
//   Accounts.onLogout(function(){
//      FlowRouter.go('home');
//   });
// }
//
// FlowRouter.triggers.enter([function(context, redirect){
//     if(!Meteor.userId()) {
//       FlowRouter.go('home');
//     }
// }])

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Home'});
  }
});

FlowRouter.route('/country-profile/:country', {
  name: 'country-profile',
  action() {
    // GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'CountryProfile'});
  }
});

FlowRouter.route('/indicator-group/:group', {
  name: 'indicators',
  action() {
    // GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'IndicatorGroup'});
  }
});
