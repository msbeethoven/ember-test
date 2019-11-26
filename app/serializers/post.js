import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModeClass, payload, id, requestType) {
    console.log(payload);
    payload = {
      posts: payload
    }

    return this._super(store, primaryModeClass, payload, id, requestType);
  },

  normalizeSingleResponse(store, primaryModeClass, payload, id, requestType) {
    payload.posts.user = payload.posts.userId;
    delete payload.posts.userId;

    return this._super(store, primaryModeClass, payload, id, requestType)
  },

  normalizeArrayResponse(store, primaryModeClass, payload, id, requestType){
    payload.posts.forEach((post) => {
      post.user = post.userId;
      delete post.userId;
    });

    return this._super(store, primaryModeClass, payload, id, requestType);
  }
});
