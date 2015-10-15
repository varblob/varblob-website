import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({
  classNames: ['position'],
  content: null,
  position: alias('content')
});
