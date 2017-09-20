
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import Admin from './Admin.vue';

Vue.use(ElementUI);

const app = new Vue({
    el: '#admin',
    render: h => h(Admin)
});
