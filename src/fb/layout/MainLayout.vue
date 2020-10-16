<script lang="tsx">
import { defineComponent, VNode, PropType, onMounted } from 'vue';
import { Layout } from 'ant-design-vue';
import { useScreenStore } from '../use-store/screen';

import ContentLayout from './ContentLayout.vue';

export default defineComponent({
  props: {
    header: Object as PropType<VNode | JSX.Element>,
    side: Object as PropType<VNode | JSX.Element>,
  },
  setup(props) {
    onMounted(() => {
      setTimeout(() => {
        useScreenStore.initscreen();
      }, 0);
    });

    return () => (
      <Layout class="fb-main-layout">
        <Layout.Header class="fb-main-layout-header">{props.header}</Layout.Header>
        <Layout id="fb-side-layout">
          <Layout.Sider class="fb-main-layout-sider">{props.side}</Layout.Sider>
          <Layout.Content  class="fb-main-layout-content">
            <ContentLayout />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  },
});
</script>

<style lang="scss">
.fb-main-layout {
  height: 100%;
  width: 100%;
  display: flex;
  .fb-main-layout-header {
    padding: 0;
    margin: 0;
    background: #fff;
    height: auto;
    line-height: initial;
  }
  .fb-main-layout-sider {
    background: #fff;
    max-width: initial !important;
    min-width: initial !important;
    width: auto !important;
    flex: initial !important;
  }
  .fb-main-layout-content{
    background: #fff;
  }
}
</style>
