# Vue UI library

## Install
```
npm i lexx-ui-vue
```
```vuejs
import Vue from "vue"
import LexxUiVue from "lexx-ui-vue"

Vue.use(LexxUiVue)
```
## Usage
```vue
...
<div>
  <h3>Checkboxes</h3>
  <template v-for="cb in checkboxes">
    <lx-checkbox v-model="checked" :val="cb.value" :label="cb.label"/>
  </template>
  <span>{{ checked }}</span>
</div>
...
<script>
import { lxCheckbox } from "lexx-ui-vue"

export default {
  components: { lxCheckbox },
    data() {
        return ({
          checkboxes: [
            {label: 'Checkbox 1', value: 'CB1'},
            {label: 'Checkbox 2', value: 'CB2'},
            {label: 'Checkbox 3', value: 'CB3'},
...
          ],
        })
    }
...
 }
</script>
```

* [lxInput](docs/lxInput.md)
* [lxTable](docs/lxTable.md)
