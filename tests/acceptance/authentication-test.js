import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'untangle/tests/helpers/start-app';

var application;
var mockFirebase;

module('Acceptance | authentication', {
  beforeEach: function() {
    mockFirebase = new MockFirebase();
    application = startApp({ firebase: mockFirebase });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('success', function(assert) {
  visit('/');

  fillIn('input[name="email"]', 'test@example.com');
  fillIn('input[name="password"]', 'test-password');
  click('button:contains("Log in")');

  mockFirebase.authWithPassword = (credentials, callback) => {
    assert.equal(credentials.email, 'test@example.com');
    assert.equal(credentials.password, 'test-password');
let authData = {
      uid: 'testUid',
      provider: 'custom',
      token: 'authToken'
    };

    mockFirebase.changeAuthState(authData);
    mockFirebase.flush();

    callback(null, authData);
  };

  andThen(() => {
    assert.ok(find(':contains("Logged in")').length,
      'expected to see "Logged in"');
  });
});
