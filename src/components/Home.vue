<template>

  <div :class="{'sidebar-hidden':$store.state.sidebar.hide}"
       class="sidebar-fixed header-fixed main-wrapper">


    <div class="page-wrapper">
      <nav-header/>
      <div class="main-container">
        <side-bar/>
        <div class="content">
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  import NavHeader from "@/components/NavHeader";
  import SideBar from "@/components/sidebar/Sidebar";

  export default {
    name: "Home",
    components: {SideBar, NavHeader}
  }
</script>

<style scoped>

</style>
