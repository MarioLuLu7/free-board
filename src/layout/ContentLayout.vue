<script lang="tsx">
import { defineComponent } from 'vue';

import SideContent from './content/SideContent.vue';

export default defineComponent({
  setup() {
    return () => (
      <div class="fb-content-layout-container">
        <SideContent />
      </div>
    );
  },
});
</script>

<style lang="scss">
.fb-content-layout-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
