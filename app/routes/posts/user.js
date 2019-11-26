import Ember from 'ember';

const { Route, set} = Ember; 

export default Route.extend({
  model(params) {
    return this.store.query('post', {
      userId: params.id
    }).catch(function() {
      this.transitionTo('no', 404)
    })
  },
  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});
