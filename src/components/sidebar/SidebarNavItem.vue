<template>

  <li class="nav-item">
    <a href="#"
       @click="selected"
       :class="[item.isActive?item.activeClz:'']"
       class="nav-link">
      <i :class="[item.iconClz]" class="icon"></i> {{item.iconContent}}
    </a>
  </li>

</template>

<script>
  export default {
    name: "SidebarNavItem",
    props: {
      item: {}
    },
    methods: {
      selected() {
        this.$store.commit('selectNavItem', this.item.id);
      }
    }
  }
</script>

<style scoped>

</style>
