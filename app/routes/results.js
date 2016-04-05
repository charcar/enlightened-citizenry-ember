import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=259df8401a28465d8b7ce94351a68fcb&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var legislators = [];
      responseJSON.results.forEach(function(legislator) {
        legislators.push(legislator);
      });
      return legislators;
    });
  }
});
