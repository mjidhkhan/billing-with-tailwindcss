<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden ">
  
    <img class="h-32 w-32 md:object-cover  sm:object-cover sm:object-center md:object-center  flex-shrink-0 h-full" :src="destination.imageUrl" :alt="destination.imageAlt">
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ destination.city }} </h3>
      <p class="text-gray-600">${{ destination.averagePrice }} / night average</p>
      <div class="mt-4">
        <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore {{ destination.propertyCount }} properties</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['destination'],
}
</script>

