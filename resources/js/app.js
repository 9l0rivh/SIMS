
require('./bootstrap');

window.Vue = require('vue');

Vue.mixin(require('./trans'))



Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('chat-component', require('./components/chat/ChatComponent.vue').default);
Vue.component('group-chat-component', require('./components/chat/GroupChatComponent.vue').default);
Vue.component('notification-component', require('./components/chat/NotificationComponent.vue').default);
Vue.component('jquery-notification-component', require('./components/chat/JqueryNotificationComponent.vue').default);

Vue.component('jquery-chat-component', require('./components/chat/JqueryChatComponent.vue').default);
Vue.component('jquery-group-chat-component', require('./components/chat/JqueryGroupChatComponent.vue').default);

Vue.component('side-panel-component', require('./components/chat/SidePanelComponent.vue').default);
Vue.component('status-change-component', require('./components/chat/StatusChangeComponent.vue').default);

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

const app = new Vue({
    el: '#admin-visitor-area'
});

const app1 = new Vue({
    el: '#main-nav-for-chat'
});
