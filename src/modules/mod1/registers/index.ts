import { defineAsyncComponent } from 'vue';

export const mod1Register = {
  page1: defineAsyncComponent(() => import('@/modules/mod1/pages/SideContent.vue')),
};
