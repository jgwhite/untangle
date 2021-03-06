import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticate');
  this.route('authenticated', { path: '' }, function() {
    this.route('welcome');
  });
});

export default Router;
