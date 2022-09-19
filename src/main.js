import { createApp } from 'vue';
import './style.css';
import router from './router';
import { createI18n } from 'vue-i18n';
import zh_CN from './languages/zh_CN.json';
import en from './languages/en.json';

import App from './App.vue';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') ?? 'en',
  fallbackLocale: 'en',
  message: {
    en: en,
    zh_CN: zh_CN,
  },
});

createApp(App).use(router).use(i18n).mount('#app');
