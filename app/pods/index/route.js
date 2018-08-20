import Route from '@ember/routing/route'
// import { inject as service } from "@ember/service"

export default Route.extend({
  // session: service('torri-service'),

  beforeModel () {
    if (this.get('toriiSession.isAuthenticated')) {
      this.transitionTo('authenticated')
    } else {
      this.transitionTo('sign-in')
    }
  }
})
