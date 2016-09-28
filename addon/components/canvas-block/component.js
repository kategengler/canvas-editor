import BlockEvents from 'canvas-editor/mixins/block-events';
import Ember from 'ember';
import styles from './styles';

const { computed } = Ember;

/**
 * A generic component to be extended for representing canvas blocks.
 *
 * @class CanvasEditor.CanvasBlockComponent
 * @extends Ember.Component
 */
export default Ember.Component.extend(BlockEvents, {
  attributeBindings: ['block.id:data-block-id'],
  classNames: ['canvas-block'],
  classNameBindings: ['isFocusedClass'],
  isFocused: false,
  localClassNames: ['canvas-block'],
  styles,

  isFocusedClass: computed('isFocused', function() {
    return this.get('isFocused') ? this.get('styles.is-focused') : '';
  })
});
