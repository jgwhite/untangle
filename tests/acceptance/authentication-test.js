import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'untangle/tests/helpers/start-app';

var application;

module('Acceptance | authentication', {
  beforeEach: function() {
    application = startApp();
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

  andThen(() => {
    assert.ok(find(':contains("Logged in")').length,
      'expected to see "Logged in"');
  });
});
