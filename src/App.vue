<template>
  <div class="antialiased text-gray-800">
   <Navbar/>
   <router-view>
    </router-view>
    
  </div>
</template>

<script>

  import Navbar from '@/components/NavbarComponent'
 
  export default {
    namw:'app',
    components: {
      Navbar,
    },
  }

</script>

<style src="./assets/tailwind.css"></style>
