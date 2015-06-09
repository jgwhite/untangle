import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),

  model() {
    return {
      credentials: {},
      error: null
    };
  },

  actions: {
    authenticate() {
      let firebase = this.get('firebase');
      let credentials = this.get('currentModel.credentials');

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
