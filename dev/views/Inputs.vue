<template>
  <div>
    <div>
      <h2 class="mb-1"><a href="#simple_inputs">Inputs</a></h2>
      <div class="row">
        <div class="col-8">
          <h4 class="mb-1 mt-1"><a href="#">Simple input</a></h4>
          <lx-input class="mb-1" placeholder="Search text..."></lx-input>

          <h4 class="mb-1 mt-2"><a href="#">Labeled input</a></h4>
          <lx-input class="mb-1" label="Search input" placeholder="Search text..."></lx-input>

          <h4 class="mb-1 mt-2"><a href="#">Label size</a></h4>
          <lx-input class="mb-1" label="Small" labelSize="sm" placeholder="Search text..."></lx-input>
          <lx-input class="mb-1" label="Default" placeholder="Search text..."></lx-input>
          <lx-input class="mb-1" label="Large" labelSize="lg" placeholder="Search text..."></lx-input>
          <lx-input class="mb-1" label="Extra large" labelSize="xl" placeholder="Search text..."></lx-input>

          <h4 class="mb-1 mt-2"><a href="#">Input type</a></h4>
          <lx-input class="mb-1" label="Text" value="Simple text"></lx-input>
          <lx-input class="mb-1" type="password" label="Password" value="Password"></lx-input>
          <lx-input class="mb-1" type="number" label="Number" value="99.90"></lx-input>

          <h4 class="mb-1 mt-2"><a href="#">Extended input</a></h4>
          <lx-input label="Prepend" type="number" class="mb-1" value="99.90">
            <template #prepend>$</template>
          </lx-input>
          <lx-input label="Append" placeholder="Put e-mail here" class="mb-1">
            <template #append>@mail.com</template>
          </lx-input>
          <lx-input label="Both" placeholder="subdomain" class="mb-1">
            <template #prepend>domain.</template>
            <template #append>.com</template>
          </lx-input>

          <h4 class="mb-1 mt-2"><a href="#">Disabled input</a></h4>
          <lx-input label="Disabled input" :readonly="true" class="mb-1" value="readonly"/>
          <lx-input label="Calculated price" label-size="xl" :readonly="true" class="mb-1" type="number" value="99.90">
            <template v-if="true" #prepend>$</template>
          </lx-input>

        </div>
      </div>
    </div>

    <div class="mt-2">
      <h2 class="mb-1"><a href="#checkboxes">Checkboxes</a></h2>
      <div class="row">
        <div class="col-6">
          <h4 class="mb-1"><a href="#">Normal</a></h4>
          <template v-for="cb in checkboxes">
            <lx-checkbox v-model="checked" :val="cb.value" :label="cb.label"/>
          </template>
          <div class="mt-1 mb-1">Selected values: {{ checked }}</div>

          <h4 class="mb-1 mt-2"><a href="#">Disabled</a></h4>
          <template v-for="cb in checkboxes">
            <div class="row h-2r" style="border-bottom: 1px solid black;">
              <div class="col-6 flex flex-middle">{{ cb.value }}</div>
              <div class="col-6 flex flex-end">
                <lx-checkbox v-model="checked" :val="cb.value" :readonly="true"/>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <h2 class="mb-1"><a href="#radiobuttons">Radiobuttons</a></h2>
      <div class="row">
        <div class="col-6">
          <h4 class="mb-1"><a href="#">Normal</a></h4>
          <template v-for="rb in radiobuttons">
            <lx-radio v-model="rbChecked" :val="rb.value" :label="rb.label" :group="rb.group"/>
          </template>
          <div class="mt-1 mb-1">Selected value: {{ rbChecked }}</div>

          <h4 class="mb-1 mt-2"><a href="#">Disabled</a></h4>
          <template v-for="rb in radiobuttons">
            <div class="row h-2r" style="border-bottom: 1px solid black;">
              <div class="col-6 flex flex-middle">{{ rb.value }}</div>
              <div class="col-6 flex flex-end">
                <lx-radio v-model="rbChecked" :val="rb.value" :group="`${rb.group}_1`" :readonly="true"/>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <h2 class="mb-1"><a href="#switches">Switches</a></h2>
      <div class="row">
        <div class="col-6">
          <h4 class="mb-1"><a href="#">Normal</a></h4>
          <lx-switch v-model="switchState"/>
          <div>Switch state: {{switchState}}</div>

          <h4 class="mb-1 mt-1"><a href="#">Disabled</a></h4>
          <lx-switch :readonly="true" v-model="switchState"/>

        </div>
      </div>
    </div>

    <div class="mt-2">
      <h2 class="mb-1"><a href="#search_help">Search Help</a></h2>
      <div class="row">
        <div class="col-6">
          <h4 class="mb-1"><a href="#">Normal</a></h4>
          <lx-search-help v-model="shSelected"
                          :fields="shFields"
                          :items="shValues"
                          keyField="key"
                          text-field="value" class="mb-1"/>
          <div class="mb-2">Selected keys: {{ shSelected }}</div>

          <h4 class="mb-1"><a href="#">Disabled</a></h4>
          <lx-search-help v-model="shSelected"
                          :fields="shFields"
                          :items="shValues"
                          keyField="key"
                          text-field="value"
                          :readonly="true"
                          class="mb-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {lxSearchHelp, lxSwitch, lxCheckbox, lxInput} from '@/entry'
import LxRadio from "@/lib-components/lxRadio";

export default {
  name: "Inputs",
  components: {LxRadio, lxSearchHelp, lxSwitch, lxCheckbox, lxInput},
  data() {
    return ({
      checkboxes: [
        {label: 'Checkbox 1', value: 'CB1'},
        {label: 'Checkbox 2', value: 'CB2'},
        {label: 'Checkbox 3', value: 'CB3'},
      ],
      checked: ['CB3'],
      radiobuttons:[
        {label:'Ready', value:'ready', group:'gr1'},
        {label:'Steady', value:'steady', group:'gr1'},
        {label:'Go', value:'go', group:'gr1'},
      ],
      rbChecked:'go',
      switchState:false,
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

<style scoped lang="scss">

</style>