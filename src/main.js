import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faList, faQuestionCircle);

createApp(App).mount('#app')
