<template>
  <component :is="iconComponent" />
</template>

<script>
export default {
  name: 'TheIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  methods: {
    getIconName(iconName) {
      return require(`../assets/icons/${iconName}.svg`).default;
    },
  },

  computed: {
    iconComponent() {
      return this.getIconName(this.name);
    },
  },

  created() {
    console.log(this.iconComponent);
  },
};
</script>
