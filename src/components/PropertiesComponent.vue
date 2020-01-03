<template>
<div class="start"> 
	<div  class="antialiased text-gray-800">
		<div class=" flex bg-white overflow-hidden  lg:max-w-full ">
			<div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl 
						lg:max-w-full lg:w-full lg:py-24 lg:px-12 ">
				<div class="xl:max-w-lg xl:ml-auto">
					<img class="h-10" 
						src="/img/logo.svg" 
						alt="Workcation">
					
					<h1 class="mt-2 text-lg font-bold text-gray-800 leading-tight  
								sm:mt-8  sm:text-4xl lg:text-3xl xl:text-4xl">
							World's best places to rent.
							<br class="sm:hidden">
							<span class="text-indigo-500">
								Take advantage of it.
							</span>
					</h1>
					<p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
						Workcation helps you find work-friendly rentals in beautiful 
						locations so you can enjoy some nice weather even when you're 
						not on vacation.
					</p>
				</div>
			</div>
			
		</div>
			<!-- Property Card -->
		<div class="max-auto ">
			<div class="bg-gray-100 pb-12 border-gray-200 border-solid border-t">
					<h2 class="text-xl text-gray-800 px-8">Rentials</h2>
					<p class="text-gray-600 px-8">Available to rent at any time.</p>
			</div>
			<div class="flex flex-wrap pb-12">
				<div class=" items-center justify-center mt-6 w-full 
							px-4 sm:w-1/2 lg:w-1/2 xl:w-1/4 "  
						v-for="property in properties" 
						:key="property.id" >
					<PropertyCard :property="property"/>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>

import PropertyCard from './PropertyCardComponent'
import store from '@/data/store'

export default {
	name:'home',
	components: {
		PropertyCard,
	},
  
  data() {
    return {
        properties:store.PropertyData.popularProperties ,
     }
 },
}
</script>