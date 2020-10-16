import { defineAsyncComponent } from 'vue';

export const mod1Register = {
  apage: defineAsyncComponent(() => import('@/modules/mod1/pages/APage.vue')),
  bpage: defineAsyncComponent(() => import('@/modules/mod1/pages/BPage.vue')),
};
