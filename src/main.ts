import { createApp } from 'vue'
import { SvgIcon } from './components';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './locales';
import router from './router';
import App from './App.vue'
// 导入样式文件
import '@/styles/theme.less';
import '@/styles/variables.less';

const app = createApp(App);

app.component('svg-icon', SvgIcon)
app.use(ElementPlus);
app.use(i18n);
app.use(router);
app.use(createPinia());
app.mount('#app')
