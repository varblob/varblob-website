import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['container-fluid'],
  classNameBindings: ['title'],
  title: null,
  icon: null
});
