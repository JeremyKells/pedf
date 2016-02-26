Template.ECCESection.helpers({
  dataStr: function(){
    return JSON.stringify( CountryIndicators.find({country: 'Cook Islands'}, {fields: {"year": 1, ecce: 1}, sort: {"year": 1}}).fetch(), null, 2);
  },
  data: function(){
    return CountryIndicators.find({country: 'Cook Islands'}, {fields: {"year": 1, ecce: 1}, sort: {"year": 1}});
  },
});

Template.ECCESection.onRendered(function () {
  $('.popover-link').popover();

  ci = CountryIndicators.find({country: 'Cook Islands'}, {fields: {"year": 1, "ecce": 1}, sort: {"year": 1}}).fetch()
  data = _.map(ci, function(i){return [String(i.year), i.ecce.Net_Enrolment_Ratio.male, i.ecce.Net_Enrolment_Ratio.female, i.ecce.Net_Enrolment_Ratio.total];})

  chart = {
   target: 'chart1',
   type: 'BarChart',
   columns: [
     ['string', 'Year'],
     ['number', 'Female'],
     ['number', 'Male'],
     ['number', 'Total'],
   ],
   rows: data,
   options: {
     'title':'Net Enrolment Ratio',
     'width':600,
     'height':450
   }
 };

  drawChart(chart);


  var options = {
    width: 600,
    height: 400
  }

  new Chartist.Line('#chart2', {
       labels: [1, 2, 3, 4],
       series: [[100, 120, 180, 200]]
     }, options);

   // Initialize a Line chart in the container with the ID chart2
   new Chartist.Bar('#chart3', {
     labels: [1, 2, 3, 4],
     series: [[8, 9, 2, 5], [5, 2, 8, 3], [6, 3, 4, 7]]
   }, options);

});
