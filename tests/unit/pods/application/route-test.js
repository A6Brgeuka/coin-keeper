import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | pods/application', function (hooks) {
  setupTest(hooks)

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:pods/application')
    assert.ok(route)
  })
})
