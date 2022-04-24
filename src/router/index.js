import Vue from 'vue';
import VueRouter from 'vue-router';
import TheOverview from '../views/TheOverview.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: TheOverview,
	},
	{
		path: '/entrance',
		name: 'entrance',
		component: () => import('../views/TheEntrance.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

Vue.use(VueRouter);

export default router;
