import Ember from 'ember';
import request from 'ic-ajax';

const { Route } = Ember;

export default Route.extend({
  model() {
    return request('data/resume.json');
  }
});
