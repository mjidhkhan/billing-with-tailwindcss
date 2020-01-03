<template>
	<div class=" px-8 py-12 max-w-md mx-auto sm:max-w-xl bg-gray-200 
					lg:min-w-6xl lg:w-1/2 lg:py-24 lg:px-12 ">
		<div class="bg-white pb-4 pt-4 text-center 
					font-semibold text-2xl tracking-wide text-white
					bg-gray-800 shadow-md rounded  rounded-bl-none 
					rounded-br-none">
				Password Reset Request
		</div>
		<div class="bg-white shadow-md rounded rounded-tl-none 
					rounded-tr-none px-12 pt-12 
					pb-8 mb-4 flex flex-col ">
			<div class="mb-4 mt-1">
				<label 
					class="block text-grey-700 text-sm 
							font-bold mb-2" 
					for="email">
					Email
				</label>
				<input 
					class="shadow appearance-none border rounded 
							w-full py-2 px-3 text-grey-700" 
					id="email" 
					type="email" 
					placeholder="email">
					
			</div>
			
			<div class="flex items-center justify-between">
				<button class="bg-gray-700 hover:bg-gray-900 text-white
						focus:outline-none focus:shadow-outline focus:bg-gray-900
						font-bold py-2 px-4 rounded"
					type="button">
					Submit
				</button>
				
			</div>
		</div>
	</div>
</template>

