
import Login from  '@/components/LoginCardComponent'
import Register from  '@/components/RegisterCardComponent'
import PasswordResetRequest from '@/components/PasswordResetRequestComponent'
import PasswordReset from '@/components/PasswordResetComponent'
import Home from  '@/components/HomeComponent'
import Properties from '@/components/PropertiesComponent'
import Destinations from '@/components/DestinationsComponent'
import Trips from '@/components/TripsComponent'
import Review from '@/components/ReviewComponent'




	const routes = [
		{
			path:'/login',
			name:'login',
			component: Login
		},
		{
			path:'/register', 
			name:'register',
			component: Register
		},
		{
			path:'/passwordreset-request', 
			name:'passwordreset-request',
			component: PasswordResetRequest
		},
		{
			path:'/passwordreset', 
			name:'passwordreset',
			component: PasswordReset
		},
		{
			path:'/properties', 
			name:'properties',
			component: Properties
		},
		{
			path:'/destinations', 
			name:'destinations',
			component: Destinations
		},
		{
			path:'/trips', 
			name:'trips',
			component: Trips
		},
		{
			path:'/review', 
			name:'review',
			component: Review
		},
		{
			path:'/home',
			name:'home', 
			component: Home
		},
		
	]

export default routes;


