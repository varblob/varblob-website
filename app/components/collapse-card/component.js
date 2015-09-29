import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card', 'no-border', 'flat', 'no-margin', 'no-padding', 'collapse-card'],
  classNameBindings: ['isCollapsed'],
  isCollapsed: false,
  actions:{
    collapse() {
      this.toggleProperty('isCollapsed');
    }
  }
});
