import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + params.committee_id + '&per_page=50&apikey=259df8401a28465d8b7ce94351a68fcb';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var subcommittees = [];
      responseJSON.results.forEach(function(subcommittee) {
        subcommittees.push(subcommittee);
      });
      console.log(subcommittees.length);
      return subcommittees;
    });
   }
});
