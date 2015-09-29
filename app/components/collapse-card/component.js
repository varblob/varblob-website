import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card', 'no-border', 'flat', 'no-margin', 'no-padding'],
  classNameBindings: ['isCollapsed'],
  isCollapsed: false,
  actions:{
    collapse() {
      this.toggleProperty('isCollapsed');
    }
  }
});
