import Ember from 'ember';
import request from 'ic-ajax';

const { Route } = Ember;

var JobAppKnewtonRoute = Route.extend({
  model() {
    var resume = this.modelFor('job-app');
    return request('data/cover/knewton.json').then((cover)=> {
      return Ember.Object.create({
        resume: resume,
        cover: cover
      });
    });
  }
});

export default JobAppKnewtonRoute;
