Template.YearSelector.helpers({
  years: ()=> {
    return _.range(2010, new Date().getUTCFullYear());
  },
  yearSelected: ()=> {
    return Session.get('yearSelected');
  },
});

Template.YearSelector.events({
  "click .year-menuitem": function(event, template){
    Session.set('yearSelected', event.target.text);
  }
});
