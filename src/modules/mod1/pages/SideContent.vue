<script lang="tsx">
import { defineComponent, ref } from 'vue';

import { useSideStore } from '@/store/side';
import { mod1Register } from '@/store/registerPage';

export default defineComponent({
  props: {
    name: String,
  },
  setup(props, ctx) {
    // console.log(props.name)
    return () => (
      <div class="aaa">
        <div>{Math.random()}</div>
        <div
          style="text-align: right;"
          onClick={() => {
            useSideStore.closePage(ctx);
          }}
        >
          close
        </div>
        <span
          onClick={() => {
            useSideStore.openPage(ctx, 300, mod1Register.page1, {
              name: 33333,
            });
          }}
        >
          open
        </span>
        <div fb-drag>
          <span>12313</span>
        </div>
      </div>
    );
  },
});
</script>

<style lang="scss">
.aaa {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
}
</style>
