import Ember from 'ember';

const { Controller, computed } = Ember;
const { alias } = computed;

export default Controller.extend({
  posts: [
    'bWmR1MrHZrF',
    '5cJo995QtjT',
    'KfSCuAsTyWZ',
    '6KUKezJ2vYp',
    'GayUkvgE6wp',
    'E7uhiiPScoy',
    'UdTtJdejGQW',
    'SxtSQ55nu5E',
    'GwMjofT1xzd',
    'NsYpt5rk7Rj',
    'LTwgbtDyWbx'
  ],
  resume: alias('model.resume'),
  cover: alias('model.cover')
});
