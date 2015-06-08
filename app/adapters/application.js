import FirebaseAdapter from 'emberfire/adapters/firebase';
import Ember from 'ember';
const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service()
});
