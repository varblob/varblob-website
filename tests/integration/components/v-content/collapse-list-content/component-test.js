import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('v-content/collapse-list-content', 'Integration | Component | v content/collapse list content', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{v-content/collapse-list-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#v-content/collapse-list-content}}
      template block text
    {{/v-content/collapse-list-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
