import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    selectChamber(params) {
      this.transitionTo('committees', params.chamber);
    }
  }
});
