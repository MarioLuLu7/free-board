<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => <div class="fb-header-layout-container">i am header</div>;
  },
});
</script>

<style lang="scss">
.fb-header-layout-container {
  height: 50px;
  background: #f1f1f1;
  font-size: 30px;
  text-align: center;
}
</style>
