import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectChamber() {
      var params = {
        chamber: this.get('chamber')
      };


      this.sendAction('selectChamber', params);
    }
  }
});
