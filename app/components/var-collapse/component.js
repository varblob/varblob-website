import Ember from 'ember';

export default Ember.Component.extend({
  isCollapsed: false,
  click() {
    this.toggleProperty('isCollapsed');
  }
});
