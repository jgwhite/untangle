import { moduleFor, test } from 'ember-qunit';

moduleFor('route:authenticated/welcome', 'Unit | Route | authenticated/welcome', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
