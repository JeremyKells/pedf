Template.CountryProfile.helpers({
  data: ()=> {
    var country = FlowRouter.getParam('country');
    return {country: country}
  },
  years: ()=> {
    return _.range(2010, new Date().getUTCFullYear());
  },
  yearSelected: ()=> {
    var year = Template.instance().yearSelected.get();
		return year;
  },
  docHelper: ()=> {
    var indicators = CountryIndicators.findOne({country:  FlowRouter.getParam('country'), year: Number(Template.instance().yearSelected.get())})
    if( indicators ){
      Template.instance().formType.set('update');
      return indicators;
    }
    else{
      Template.instance().formType.set('insert');
    }
  },
  typeHelper: ()=> {
    var formType = Template.instance().formType.get();
		return formType;
  }
});

Template.CountryProfile.events({
  "click .year-menuitem": function(event, template){
     template.yearSelected.set(event.target.text);
  }
});

Template.CountryProfile.onCreated(function(){
  this.formType = new ReactiveVar( 'insert' );
  this.yearSelected = new ReactiveVar( new Date().getUTCFullYear()-1);
});

AutoForm.hooks({
  editIndicatorsForm: {
    before: {
      insert: function (doc) {
        doc.country = FlowRouter.getParam('country');
        doc.year = this.template.view.parentView.parentView.templateInstance().yearSelected.get()   // Just move to Session Variable!!!!!
        return doc;
      },
    }
  }
});
