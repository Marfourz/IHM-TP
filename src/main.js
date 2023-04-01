import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as rules from "@vee-validate/rules";

import BaseButton from "@/components/globals/BaseButton.vue"
import BaseInput from "@/components/globals/BaseInput.vue"
import BaseSimpleAlert from "@/components/globals/BaseSimpleAlert.vue"
import BaseIcon from "@/components/globals/BaseIcon.vue"
import { defineRule, configure } from "vee-validate";


import App from './App.vue'
import router from './router'

import './assets/main.css'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App)

// Install all rules
Object.keys(rules).forEach((rule) => {
    if (rule != "default")
        defineRule(rule, rules[rule]);
});

// Define globals component
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('BaseSimpleAlert', BaseSimpleAlert)
app.component('BaseIcon',BaseIcon)




app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)


app.mount('#app')
