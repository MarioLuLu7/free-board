<script lang="tsx">
import { computed, defineComponent, ref } from 'vue';
import { usepositionStore } from '../../use-store/position';

export default defineComponent({
  setup() {
    const list = computed(() => usepositionStore.state.positionList);

    const divs = ref([]);

    const styles = ref([])

    // 移动
    const move = (e: any, index: number) => {
      const dom = divs.value[index] as HTMLBaseElement;
      // 设置可移动属性
      const dragDoms = e.path.filter((item: any) => item.attributes && item.attributes['fb-drag']);
      dragDoms.forEach((item: HTMLBaseElement) => {
        item.style.userSelect = 'none';
      });
      if (!dragDoms.length) {
        return;
      }
      document.onmousemove = (e) => {
        const leftx = dom.offsetLeft;
        const topx = dom.offsetTop;
        const left = Number(leftx) + e.movementX;
        dom.style.left = left + 'px';
        const top = Number(topx) + e.movementY;
        dom.style.top = top + 'px';
        (styles.value[index] as any) = {
          left: dom.style.left,
          top: dom.style.top
        }
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    return () => (
      <div id="fb-position" class="fb-position-content">
        {list.value.map((item, index) => {
          const { page, style } = item.pageInfo;
          const ItemComp = page;
          if (!page) {
            return ''
          }
          const props = item.params;
          const attrs: unknown = {
            fbindex: index,
            fbtype: item.pageInfo.type,
          };
          return (
            <div
              class="fb-position-item"
              style={{...style, ...(styles.value[index] as object || {})}}
              onMousedown={(e) => {
                move(e, index);
              }}
              ref={(el) => {
                if (el) (divs.value as any[])[index] = el;
              }}
            >
              <ItemComp {...props} {...attrs} />
            </div>
          );
        })}
      </div>
    );
  },
});
</script>

<style lang="scss">
.fb-position-content {
  .fb-position-item {
    position: absolute;
    overflow: hidden;
  }
}
</style>
