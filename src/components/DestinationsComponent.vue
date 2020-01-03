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
							World's best places to for workcation.
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
		<!-- Destination Card -->
		<div class="max-auto ">
			<div class="bg-gray-100 pb-12 border-gray-200 border-solid border-t">
					<h2 class="text-xl text-gray-800 px-8">Popular destinations</h2>
					<p class="text-gray-600 px-8">
						A selection of great work-friendly 
						cities with lots to see and explore.
					</p>
			</div>
			<div class="flex flex-wrap pb-12">
				<div class="mt-6 w-full px-4 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3"  
							v-for="destination in destinations" 
							:key="destination.id" >
						<DestinationCard :destination="destination"/>
					
				</div>
			</div>
		</div>
		
	</div>
</div>

</template>

<script>
import DestinationCard from './DestinationCardComponent'
import store from '@/data/store'

export default {
	name:'home',
	components: {
		DestinationCard,
	},
  
  data() {
    return {
        destinations:store.PropertyData.popularDestinations ,
     }
 },
}
</script>