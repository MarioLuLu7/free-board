<script lang="tsx">
import { defineComponent } from 'vue';

import fb from '@/fb/use-store';
import { mod1Register } from '@/store/registerPage';

export default defineComponent({
  props: {
    name: String,
  },
  setup(props, ctx) {
    console.log(props.name)
    return () => (
      <div class="aaa">
        <div>{Math.random()}</div>
        <div
          style="text-align: right;"
          onClick={() => {
            fb.closePage(ctx);
          }}
        >
          close
        </div>
        <span
          onClick={() => {
            fb.openSidePage(ctx, mod1Register.page1, 300, {
              name: '33333',
            });
          }}
        >
          open
        </span>
        <span
          onClick={() => {
            fb.openPositionPage(
              ctx,
              mod1Register.page1,
              {
                width: '100px',
                height: '100px',
                right: '100px',
                top: '100px',
              },
              {
                name: '33333',
              }
            );
          }}
        >
          openp
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
