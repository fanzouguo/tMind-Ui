// @ts-nocheck
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ColorPicker from '../lib/tmind-ui.umd';
import '../lib/tmind-ui.css';

createApp(App).use(store).use(router)
.use(ColorPicker)
.mount('#app');
