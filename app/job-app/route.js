import Ember from 'ember';
import { request } from 'ic-ajax';

const { Route } = Ember;

var JobAppRoute = Route.extend({
  model() {
    return request('data/resume.json');
  }
});

export default JobAppRoute;
