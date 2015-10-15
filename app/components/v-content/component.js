import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  content: null,
  componentPath: computed('content.type', function(){
    var type = this.get('content.type');
    return 'v-content/' + type + '-content';
  }),
  isString: computed('content', function(){
    return typeof this.get('content') === 'string';
  })
});
