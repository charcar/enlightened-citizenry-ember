import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees', {path: '/committees/:chamber'});
  this.route('committee', {path: '/committees/:committee_id'});
});

export default Router;
