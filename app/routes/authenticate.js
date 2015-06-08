import Ember from 'ember';
import Firebase from 'firebase';
import config from 'untangle/config/environment';

export default Ember.Route.extend({
  actions: {
    authenticate() {
      let firebase = new Firebase(config.firebase);
      let credentials = {};

      firebase.authWithPassword(credentials, (error, authData) => {
        if (error) {
          console.warn(error);
        } else {
          console.info(authData);
          this.transitionTo('authenticated.welcome');
        }
      });
    }
  }
});
