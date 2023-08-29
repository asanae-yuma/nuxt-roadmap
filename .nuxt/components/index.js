export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as AtomsArrowCanvas } from '../../components/atoms/ArrowCanvas.vue'
export { default as AtomsFirstArrowCanvas } from '../../components/atoms/FirstArrowCanvas.vue'
export { default as AtomsItem } from '../../components/atoms/Item.vue'
export { default as MoleculesDetail } from '../../components/molecules/Detail.vue'
export { default as MoleculesRoadmap } from '../../components/molecules/Roadmap.vue'
export { default as MoleculesSwiperLogo } from '../../components/molecules/SwiperLogo.vue'
export { default as OrganismsDetailArea } from '../../components/organisms/DetailArea.vue'
export { default as OrganismsToppage } from '../../components/organisms/Toppage.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
