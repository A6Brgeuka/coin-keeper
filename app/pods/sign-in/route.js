import Route from '@ember/routing/route'

export default Route.extend({
  signIn (provider) {
    this.get('toriiSession')
      .open('firebase', {provider: provider})
      .then(data => {
        console.log(data.currentUser)
      })
  }
})
