import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),

  actions: {
    authenticate() {
      let firebase = this.get('firebase');
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
