<template>
  <div class="sidebar">

    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-title">Navigation</li>

        <sidebar-nav-item
          v-for="item in items"
          v-bind:key="item.id"
          v-bind:item="item"
        ></sidebar-nav-item>


      </ul>
    </nav>

  </div>
</template>

<script>
  import SidebarNavItem from "@/components/sidebar/SidebarNavItem";

  export default {
    name: "Sidebar",
    components: {SidebarNavItem},
    computed:{
      items(){
        return this.$store.state.sidebar.navItems;
      }
    },
    data() {
      return {
      };
    }
  }
</script>

<style scoped>

</style>
