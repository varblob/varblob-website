import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ["g-post"],
  attributeBindings: ['data-href'],
  "data-href": computed('postId', function(){
    return "https://plus.google.com/+AnthonyLee0/posts/" + this.get('postId');
  }),
  postId: null
});
