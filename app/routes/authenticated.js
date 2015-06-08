import Ember from 'ember';
import Firebase from 'firebase';
import config from 'untangle/config/environment';

export default Ember.Route.extend({
  beforeModel() {
    let firebase = new Firebase(config.firebase);

    if (!firebase.getAuth()) {
      this.transitionTo('authenticate');
    }
  }
});
