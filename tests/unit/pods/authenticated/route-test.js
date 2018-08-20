import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | pods/authenticated', function (hooks) {
  setupTest(hooks)

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:pods/authenticated')
    assert.ok(route)
  })
})
