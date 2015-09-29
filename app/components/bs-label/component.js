import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['label'],
  classNameBindings: ['labelStatus'],
  labelStatus: computed('status', function(){
    return 'label-' + this.get('status');
  }),
  status: 'default'
});
