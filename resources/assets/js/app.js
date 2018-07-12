// Import required plugins
require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import {routes} from './routes';
import StoreData from './store';
import MainApp from './components/MainApp.vue';
import {initialize} from './helpers/general';

// Tell Vue to use the plugins
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

// Declare store for vuex
const store = new Vuex.Store(StoreData);

// Declare router for application
const router = new VueRouter({
	routes,
	mode: 'history'
});

initialize(store, router);

// The Vue instance
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
    	MainApp
    }
});
