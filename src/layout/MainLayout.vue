<script lang="tsx">
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';

import HeaderLayout from './HeaderLayout.vue';
import SiderLayout from './SiderLayout.vue';
import ContentLayout from './ContentLayout.vue';

export default defineComponent({
  setup() {
    return () => (
      <Layout class="fb-main-layout">
        <Layout.Header class="fb-main-layout-header">
          <HeaderLayout />
        </Layout.Header>
        <Layout>
          <Layout.Sider class="fb-main-layout-sider">
            <SiderLayout />
          </Layout.Sider>
          <Layout.Content>
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
    background: transparent;
    height: auto;
    line-height: initial;
  }
  .fb-main-layout-sider {
    background: transparent;
    max-width: initial !important;
    min-width: initial !important;
    width: auto !important;
    flex: initial !important;
  }
}
</style>
