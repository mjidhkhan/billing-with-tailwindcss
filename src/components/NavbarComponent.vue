<template>
  <div class="bg-gray-900 fixed w-full z-10
              sm:flex sm:justify-between 
              sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between 
                  px-4 py-3 sm:p-0">
          <div>
            <img class="h-8" 
              src="/img/logo-inverted.svg" 
              alt="Workcation">
          </div>
        <div class="sm:hidden">
        <button @click="isOpen = !isOpen"
            type="button" 
            class="block text-gray-500 hover:text-white 
                focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" 
                viewBox="0 0 24 24">
          <path v-if="isOpen" class="bg-red-900 focus:text-red-a200"
                fill-rule="evenodd" 
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 
                  4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 
                  1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 
                  4.829 4.828 4.828z"/>
            <path v-if="!isOpen" 
                fill-rule="evenodd" 
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 
                  2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
      </div>
      
      <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
        <div class="border-t border-teal-800 sm:border-t-0">
        <div class=" px-2 pt-2 pb-4 sm:flex sm:p-0  z-20">
          <router-link to="/home"  name="home" 
              class="cursor-pointer block px-2 py-1 text-gray-500 focus:text-white font-semibold 
                      rounded hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-700">
              Home
          </router-link>
          <router-link to="destinations" 
              class="cursor-pointer block px-2 py-1 text-gray-500 focus:text-white font-semibold 
                      rounded hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-700">
              Billing
          </router-link>
          <router-link to="properties" 
              class="cursor-pointer block px-2 py-1 text-gray-500 focus:text-white font-semibold 
                      rounded hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-700">
              About
          </router-link>
          <router-link to="trips" 
              class="cursor-pointer mt-1 block px-2 py-1 text-gray-500 focus:text-white font-semibold 
                      rounded hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-700 sm:mt-0 sm:ml-2">
              Themes
          </router-link>
          <router-link to="review" 
              class="cursor-pointer mt-1 block px-2 py-1 text-gray-500 focus:text-white font-semibold 
                      rounded hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-700 sm:mt-0 sm:ml-2">
              Help
          </router-link>
          <router-link v-if="!isLogin" to="login" 
              class=" cursor-pointer mt-1 block px-2 py-1 text-gray-500 focus:text-white font-semibold 
                      rounded hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-700 sm:mt-0 sm:ml-2">
              Login
          </router-link>
          <AccountDropdown v-if="isLogin" class="hidden sm:block sm:ml-6"/>
        </div>
        </div>
        <div v-if="isLogin" class="px-4 py-5 border-t border-gray-800 sm:hidden">
          <div class="flex items-center">
            <img class="h-8 w-8 border-2 border-gray-600 rounded-full object-cover" 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib
                        =rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" 
                        alt="Your avatar">
            <span class="ml-3 font-semibold text-white">Jane Doe</span>
          </div>
          <div class="mt-4">
            <router-link to="settings" class="block text-gray-600 hover:text-white ">Account settings</router-link >
            <router-link  to="support" class="mt-2 block text-gray-600 hover:text-white ">Support</router-link >
            <router-link  to="signout" class="mt-2 block text-gray-600 hover:text-white ">Sign out</router-link >
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AccountDropdown from './AccountDropdownComponent'
export default {
  
  components: {
    AccountDropdown,
  },
  data() {
    return {
      isOpen: false,
      isLogin:false,
    }
  },
  
}
</script>