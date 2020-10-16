<script lang="tsx">
import { defineComponent } from 'vue';

import fb from '@/fb';

import HeaderLayout from '@/layout/HeaderLayout.vue';
import SiderLayout from '@/layout/SiderLayout.vue';

export default defineComponent({
  setup() {
    return () => <fb.Layout header={<HeaderLayout />} side={<SiderLayout />} />;
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
