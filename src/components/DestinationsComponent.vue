<template>
<div class="start p-6 "> 
	<div class="mt-16 ml-auto flex shadow-xl ">
			<div class="w-full bg-gray-800 p-5 shadow-xl">
				<h1 class=" text-4xl antialiased tracking-wider text-white">
					G3T Billing
				</h1>
			</div>
	</div>
	<div class="mt-4 flex  overflow-hidden shadow-lg ">
		<div class="mx-auto w-full bg-gray-600 pt-8   bg-gray-600 p-4 shadow-xl">
			<div class="w-full bg-gray-200 ">
				<div class="">
					<div class="mb-0 bg-gray-800">
						<h1 class="p-4 text-white font-medium tracking-wide">
						<i class="far fa-folder-open text-white z-10"></i> Browse CSV File
						</h1>
					</div>
					<div class="text-gray-700 text-base bg-white pl-6 p-2 h-1/2">
						<h1>Test</h1>
					
						
					</div>
				<div class="px-6 py-4 bg-gray-200 flex flex-row-reverse flex-wrap border-t border-gray-500">
					<button class="bg-transparent hover:bg-blue-500 text-blue-700 text-base flex-end 
						hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded 
						font-normal hover:font-medium " v-on:click="BrowseForFiles()">
						Browse
					</button>
					
					
				</div>
				</div>
				
			</div>

		</div>
		
	</div>

</div>

</template>

<script>

import {ipcRenderer } from 'electron'
import Swal from 'sweetalert2'


ipcRenderer.on('selected-file', (event, files) => {
				if (files.length == 0) {
					Swal.fire({
					type: 'error',
					title: 'Whoops!...',
					text: 'You did not select any file',
					footer: ''
					})
					//showBasicButtons()
					return
				}
				this.console.log(files)
				//this.addToList(files)
				
				//gui.hideSummaryData()
				})
export default {
	methods:{
			BrowseForFiles:function(){
			ipcRenderer.send('open-file-dialog')
		},
		AddToList: function(files){
			files.forEach(element => {
				//filePath = appUtils.showFile(element);
				//console.log(filePath)
				this.console.log(element)
				//addFilesToList(filePath)
			});

		}
	}

}
</script>