Template.Nav.helpers({
  countryList: ()=> {
    return COUNTRYLIST;
  },
  indicatorGroups: ()=> {
    return INDICATORGROUPS;
  }
});

Template.Nav.events({
  "click #edit-mode": function(event, template) {
    if (Session.get('edit-mode')) {
      if (confirm("Are you sure? (unsaved updates will be lost)")) {
        Session.set('edit-mode', false);
      }
    }
    else {
      Session.set('edit-mode', true);
    }
  }
});
