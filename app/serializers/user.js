import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModeClass, payload, id, requestType) {
    console.log("user:", payload);
    payload = {
      users: payload
    }
    return this._super(store, primaryModeClass, payload, id, requestType);
  }
});
