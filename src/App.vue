<script lang="tsx">
import { defineComponent } from 'vue';
import MainLayout from '@/fb/layout/MainLayout.vue';
import { mod1Register } from '@/store/registerPage';
import fb from '@/fb/use-store';

export default defineComponent({
  setup() {
    setTimeout(() => {
      fb.openSidePage(null, mod1Register.page1, 200, {
        name: '123',
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
