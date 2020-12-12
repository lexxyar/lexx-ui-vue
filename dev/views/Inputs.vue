<template>
  <div>
    <div>
      <h3>Inputs</h3>
      <template v-for="val in inputValues">
        <lx-input v-model="val.value" :label="val.label" :type="val.type">
          <template v-if="val.iconprepend" v-slot:prepend>
            L
          </template>
          <template v-if="val.iconappend" v-slot:append>
            $
          </template>
        </lx-input>
      </template>

      <lx-input v-model="input.value" :label="input.label" :readonly="true" />
      <lx-input v-model="input.value" :label="input.label" :readonly="true">
        <template v-if="true" #prepend>
          $
        </template>
      </lx-input>

    </div>

    <div>
      <h3>Checkboxes</h3>
      <template v-for="cb in checkboxes">
        <lx-checkbox v-model="checked" :val="cb.value" :label="cb.label"/>
      </template>
      <span>{{ checked }}</span>

      <template v-for="cb in checkboxes">
        <div class="row h-2r" style="border-bottom: 1px solid black;">
          <div class="col-1">{{ cb.value }}</div>
          <div class="col-1">
            <lx-checkbox v-model="checked" :val="cb.value" :readonly="true"/>
          </div>
        </div>
      </template>
    </div>

    <div>
      <h3>Switches</h3>
      <lx-switch/>
      <lx-switch :readonly="true"/>
    </div>

    <div>
      <h3>Search Help</h3>
      <lx-search-help v-model="shSelected"
                      :fields="shFields"
                      :items="shValues"
                      keyField="key"
                      text-field="value"/>
      <span>{{ shSelected }}</span>

      <lx-search-help v-model="shSelected"
                      :fields="shFields"
                      :items="shValues"
                      keyField="key"
                      text-field="value"
                      :readonly="true"
      />
    </div>
  </div>
</template>

<script>
import {lxSearchHelp, lxSwitch, lxCheckbox, lxInput} from '@/entry'

export default {
  name: "Inputs",
  components: {lxSearchHelp, lxSwitch, lxCheckbox, lxInput},
  data() {
    return ({
      input: {type: 'text', label: 'Disabled input', value: 'Disabled'},
      inputValues: [
        {type: 'text', label: '', value: 'Text value'},
        {type: 'text', label: 'Labeled input', value: 'Labeled'},
        {type: 'password', label: 'Password', value: 'password'},
        {type: 'password', value: 'password', iconprepend: 'true'},
        {type: 'number', value: '99.90', label: 'Price', iconappend: 'true'},
      ],
      checkboxes: [
        {label: 'Checkbox 1', value: 'CB1'},
        {label: 'Checkbox 2', value: 'CB2'},
        {label: 'Checkbox 3', value: 'CB3'},
      ],
      checked: ['CB3'],
      shValues: [
        {key: 'key1', value: 'Key 1'},
        {key: 'key2', value: 'Key 2'},
        {key: 'key3', value: 'Key 3'},
        {key: 'key4', value: 'Key 4'},
      ],
      shFields: [
        {key: 'key', label: 'ID'},
        {key: 'value', label: 'Value'},
      ],
      shSelected: '',
    })
  }
}
</script>

<style scoped>

</style>