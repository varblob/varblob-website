import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('job-app', function() {
    this.route('knewton');
  });
  this.route('cv');
});

export default Router;
