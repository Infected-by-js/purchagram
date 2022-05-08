import icons from './iconsList';
/**
 * Register all icons globally
 *
 * @param {Object} Vue - The vue application object
 * @description  when to create icon component in template invoke <icon-{iconName} />
 */

export default (Vue) => {
  Object.entries(icons).forEach(([key, value]) => {
    Vue.component(`icon-${key}`, value);
  });
};
