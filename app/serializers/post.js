import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModeClass, payload, id, requestType) {
    console.log(payload);
    payload = {
      posts: payload
    }
    return this._super(store, primaryModeClass, payload, id, requestType);
  }
});
