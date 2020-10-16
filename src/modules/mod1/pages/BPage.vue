<script lang="tsx">
import { defineComponent } from 'vue';

import fb from '@/fb';
import { mod1Register } from '@/store/registerPage';

export default defineComponent({
  props: {
    data: String,
  },
  setup(props, ctx) {
    const myData = '我是BPage';

    return () => (
      <div class="aaa">
        <div fb-drag class="drag">
          拖拽区域
        </div>
        <div>i am BPage</div>
        <br />
        <div>我的数据: {myData}</div>
        <br />
        <div>传过来的数据: {props.data}</div>
        <br />
        <button
          style="text-align: right;"
          onClick={() => {
            fb.closePage(ctx);
          }}
        >
          关闭
        </button>
        <button
          onClick={() => {
            fb.openSidePage(ctx, {
              page: mod1Register.apage,
              width: 300,
              params: {
                data: myData,
              },
            });
          }}
        >
          打开 APage (Sider)
        </button>
        <button
          onClick={() => {
            fb.openPositionPage(ctx, {
              page: mod1Register.apage,
              style: {
                width: '200px',
                height: '600px',
                right: '100px',
                top: '100px',
              },
              params: {
                data: myData,
              },
            });
          }}
        >
          打开 APage (Position)
        </button>
        <button
          onClick={() => {
            fb.openSidePage(ctx, {
              page: mod1Register.bpage,
              width: 300,
              params: {
                data: myData,
              },
            });
          }}
        >
          打开 BPage (Sider)
        </button>
        <button
          onClick={() => {
            fb.openPositionPage(ctx, {
              page: mod1Register.bpage,
              style: {
                width: '200px',
                height: '600px',
                right: '100px',
                top: '100px',
              },
              params: {
                data: myData,
              },
            });
          }}
        >
          打开 BPage (Position)
        </button>
        <button
          onClick={() => {
            fb.screenPage(ctx, { type: 'Content' });
          }}
        >
          内部全屏
        </button>
        <button
          onClick={() => {
            fb.screenPage(ctx, { type: 'Side' });
          }}
        >
          下部全屏
        </button>
        <button
          onClick={() => {
            fb.screenPage(ctx, { type: 'Full' });
          }}
        >
          全屏
        </button>
        <button
          onClick={() => {
            fb.screenPage(ctx, { type: 'Ordinary' });
          }}
        >
          取消全屏
        </button>
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
  padding: 10px;
  .drag {
    height: 100px;
    background: #eee;
  }
  button {
    display: block;
    margin-top: 10px;
  }
}
</style>
