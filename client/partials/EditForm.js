Template.EditForm.helpers({
  docHelper: ()=> {
    var indicators = CountryIndicators.findOne({country:  FlowRouter.getParam('country'), year: Number(Session.get('yearSelected'))})
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

Template.EditForm.onCreated(function(){
  this.formType = new ReactiveVar( 'insert' );
});

AutoForm.hooks({
  editIndicatorsForm: {
    before: {
      insert: function (doc) {
        doc.country = FlowRouter.getParam('country');
        doc.year = Session.get('yearSelected')
        // dd = doc;
        // console.log(doc);
        // console.log('IsValid: ' + Match.test(doc, CountryIndicatorsSchema))
        this.result(doc);
      },
    }
  }
});
