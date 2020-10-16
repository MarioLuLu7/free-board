<script lang="tsx">
import { defineComponent } from 'vue';
import { mod1Register } from '@/store/registerPage';
import fb from '@/fb';

export default defineComponent({
  setup() {
    return () => (
      <div class="fb-sider-layout-container">
        i am menu(sider)
        <div>
          <button
            onClick={() => {
              fb.openSidePage(null, {
                page: mod1Register.apage,
                width: 200,
                params: {
                  name: '123',
                },
              });
            }}
          >
            打开 APage (sider)
          </button>
        </div>
      </div>
    );
  },
});
</script>

<style lang="scss">
.fb-sider-layout-container {
  width: 200px;
  font-size: 30px;
  background: #ddd;
  text-align: center;
  height: 100%;
  button {
    font-size: 16px;
  }
}
</style>
