<script lang="ts">
import { useDialog } from 'naive-ui'

export default {
  name: 'DialogContent',
  setup() {
    ;(<any>window).$dialog = useDialog()
  },
}
</script>
