<script lang="ts">
import { useMessage } from 'naive-ui'

export default {
  name: 'MessageContent',
  setup() {
    ;(<any>window).$message = useMessage()
  },
}
</script>
