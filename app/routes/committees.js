import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.chamber + '&per_page=50&subcommittee=false&apikey=259df8401a28465d8b7ce94351a68fcb';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function(committee) {
        committees.push(committee);
      });
      return committees;
    });
  }
});
