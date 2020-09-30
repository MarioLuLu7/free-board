<script lang="tsx">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { mod1Register } from '@/store/registerPage';
import { useSideStore } from '@/store/side';

export default defineComponent({
  setup() {
    setTimeout(() => {
      useSideStore.openPage(null, 200, mod1Register.page1, {
        name: 1,
      });
    }, 2000);
    return () => <MainLayout />;
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
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
