<script lang="tsx">
import { computed, defineComponent, ref, watchEffect, nextTick, reactive } from 'vue';
import { useSideStore } from '@/store/side';

export default defineComponent({
  setup() {
    const list = computed(() => useSideStore.state.sideList);

    const sideBox = ref(null);

    // 超出自动左移
    watchEffect(() => {
      if (list.value && list.value.length) {
        let width = 0;
        list.value.forEach((item) => {
          width += item.pageInfo.width;
        });
        nextTick(() => {
          const dom = sideBox.value as any;
          const pw = dom.parentNode.clientWidth;
          dom.style.width = `${width}px`;
          if (pw < width) {
            dom.style.left = `${pw - width}px`;
          } else {
            dom.style.left = '0px';
          }
        });
      }
    });

    // 移动
    const state = reactive({
      ismove: false,
    });
    const move = (e: any) => {
      // 设置可移动属性
      const dragDoms = e.path.filter((item: any) => item.attributes && item.attributes['fb-drag']);
      dragDoms.forEach((item: HTMLBaseElement) => {
        item.style.userSelect = 'none';
      });
      if (!dragDoms.length) {
        return;
      }
      // 获取最大长度
      const dom = sideBox.value as any;
      let maxWidth = 0;
      list.value.forEach((item, index) => {
        if (index < list.value.length - 1) {
          maxWidth += item.pageInfo.width;
        }
      });
      document.onmousemove = (e) => {
        state.ismove = true;
        const leftx = dom.offsetLeft;
        let left = Number(leftx) + e.movementX;
        if (left <= maxWidth * -1) {
          left = maxWidth * -1;
        }
        if (left >= 0) {
          left = 0;
        }
        dom.style.left = left + 'px';
      };
      document.onmouseup = () => {
        state.ismove = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    return () => (
      <div
        id="fb-side"
        class="fb-side-content"
        ref={sideBox}
        onMousedown={move}
        style={{ transition: state.ismove ? '' : 'left 0.3s' }}
      >
        {list.value.map((item, index) => {
          const { page, width } = item.pageInfo;
          const props = item.params;
          const attrs: unknown = {
            fbindex: index,
            fbtype: item.pageInfo.type,
          };
          return (
            <div class="fb-side-item" style={{ width: width + 'px' }}>
              <page {...props} {...attrs} />
            </div>
          );
        })}
      </div>
    );
  },
});
</script>

<style lang="scss">
.fb-side-content {
  height: 100%;
  position: absolute;
  .fb-side-item {
    height: 100%;
    float: left;
  }
}
</style>
