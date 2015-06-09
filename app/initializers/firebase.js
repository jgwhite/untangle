import config from 'untangle/config/environment';
import Firebase from 'firebase';

export function initialize(container, application) {
  let firebase = application.firebase || new Firebase(config.firebase);
  application.register('service:firebase', firebase, { instantiate: false });
}

export default {
  name: 'firebase',
  initialize: initialize
};
