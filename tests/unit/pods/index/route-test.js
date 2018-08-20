import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | pods/index', function (hooks) {
  setupTest(hooks)

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:pods/index')
    assert.ok(route)
  })
})
