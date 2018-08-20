import Route from '@ember/routing/route'
// import { inject as service } from "@ember/service"

export default Route.extend({
  // session: service('torri-service'),

  beforeModel: function () {
    return this.get('toriiSession').fetch().catch(function () {})
  },
  actions: {

    signOut: function () {
      this.get('toriiSession').close()
    }
  }
})
