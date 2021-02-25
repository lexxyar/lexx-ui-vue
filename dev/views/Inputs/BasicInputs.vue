<template>
  <div>
    <title-component>Basic inputs</title-component>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Control types</template>
          <lx-input class="mb-1" placeholder="Search text..."></lx-input>
          <lx-select-input class="mb-1" :options="options"></lx-select-input>
          <lx-select-input class="mb-1" :options="options" :multiple="true"></lx-select-input>
          <lx-textarea-input></lx-textarea-input>
          <lx-file-input></lx-file-input>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Sizing</template>
          <lx-input class="mb-1" placeholder="lg" size="lg"></lx-input>
          <lx-input class="mb-1" placeholder="default"></lx-input>
          <lx-input class="mb-5" placeholder="sm" size="sm"></lx-input>

          <lx-select-input class="mb-1" :options="[{title:'Large select'}]" size="lg"></lx-select-input>
          <lx-select-input class="mb-1" :options="[{title:'Default select'}]"></lx-select-input>
          <lx-select-input class="mb-1" :options="[{title:'Small select'}]" size="sm"></lx-select-input>
        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Radios & checkboxes</template>
          <lx-input class="mb-1" placeholder="Search text..."></lx-input>
          <template v-for="cb in checkboxes">
            <lx-checkbox v-model="checked" :val="cb.value" :label="cb.label"/>
          </template>
          <div class="mb-5"></div>
          <template v-for="rb in radiobuttons">
            <lx-radio v-model="rbChecked" :val="rb.value" :label="rb.label" :group="rb.group"/>
          </template>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Disabled</template>

          <lx-input class="mb-1" placeholder="Search text..." :readonly="true"></lx-input>
          <lx-select-input class="mb-1" :options="options" :readonly="true"></lx-select-input>
          <lx-select-input class="mb-1" :options="options" :multiple="true" :readonly="true"></lx-select-input>
          <lx-textarea-input class="mb-1" :readonly="true"></lx-textarea-input>
          <lx-file-input class="mb-5" :readonly="true"></lx-file-input>

          <template v-for="cb in checkboxes">
            <lx-checkbox v-model="checked" :val="cb.value" :label="cb.label" :readonly="true"/>
          </template>
          <div class="mb-5"></div>
          <template v-for="rb in radiobuttons">
            <lx-radio v-model="rbChecked" :val="rb.value" :label="rb.label" :group="rb.group" :readonly="true"/>
          </template>
        </lx-card>
      </div>
    </div>

    <pre>
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;title-component&gt;Basic inputs&lt;/title-component&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Control types&lt;/template&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; placeholder=&quot;Search text...&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-select-input class=&quot;mb-1&quot; :options=&quot;options&quot;&gt;&lt;/lx-select-input&gt;</code>
<code>          &lt;lx-select-input class=&quot;mb-1&quot; :options=&quot;options&quot; :multiple=&quot;true&quot;&gt;&lt;/lx-select-input&gt;</code>
<code>          &lt;lx-textarea-input&gt;&lt;/lx-textarea-input&gt;</code>
<code>          &lt;lx-file-input&gt;&lt;/lx-file-input&gt;</code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Sizing&lt;/template&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; placeholder=&quot;lg&quot; size=&quot;lg&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; placeholder=&quot;default&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-input class=&quot;mb-5&quot; placeholder=&quot;sm&quot; size=&quot;sm&quot;&gt;&lt;/lx-input&gt;</code>
<code></code>
<code>          &lt;lx-select-input class=&quot;mb-1&quot; :options=&quot;[{title:'Large select'}]&quot; size=&quot;lg&quot;&gt;&lt;/lx-select-input&gt;</code>
<code>          &lt;lx-select-input class=&quot;mb-1&quot; :options=&quot;[{title:'Default select'}]&quot;&gt;&lt;/lx-select-input&gt;</code>
<code>          &lt;lx-select-input class=&quot;mb-1&quot; :options=&quot;[{title:'Small select'}]&quot; size=&quot;sm&quot;&gt;&lt;/lx-select-input&gt;</code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Radios &amp; checkboxes&lt;/template&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; placeholder=&quot;Search text...&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;template v-for=&quot;cb in checkboxes&quot;&gt;</code>
<code>            &lt;lx-checkbox v-model=&quot;checked&quot; :val=&quot;cb.value&quot; :label=&quot;cb.label&quot;/&gt;</code>
<code>          &lt;/template&gt;</code>
<code>          &lt;div class=&quot;mb-5&quot;&gt;&lt;/div&gt;</code>
<code>          &lt;template v-for=&quot;rb in radiobuttons&quot;&gt;</code>
<code>            &lt;lx-radio v-model=&quot;rbChecked&quot; :val=&quot;rb.value&quot; :label=&quot;rb.label&quot; :group=&quot;rb.group&quot;/&gt;</code>
<code>          &lt;/template&gt;</code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Disabled&lt;/template&gt;</code>
<code></code>
<code>          &lt;lx-input class=&quot;mb-1&quot; placeholder=&quot;Search text...&quot; :readonly=&quot;true&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-select-input class=&quot;mb-1&quot; :options=&quot;options&quot; :readonly=&quot;true&quot;&gt;&lt;/lx-select-input&gt;</code>
<code>          &lt;lx-select-input class=&quot;mb-1&quot; :options=&quot;options&quot; :multiple=&quot;true&quot; :readonly=&quot;true&quot;&gt;&lt;/lx-select-input&gt;</code>
<code>          &lt;lx-textarea-input class=&quot;mb-1&quot; :readonly=&quot;true&quot;&gt;&lt;/lx-textarea-input&gt;</code>
<code>          &lt;lx-file-input class=&quot;mb-5&quot; :readonly=&quot;true&quot;&gt;&lt;/lx-file-input&gt;</code>
<code></code>
<code>          &lt;template v-for=&quot;cb in checkboxes&quot;&gt;</code>
<code>            &lt;lx-checkbox v-model=&quot;checked&quot; :val=&quot;cb.value&quot; :label=&quot;cb.label&quot; :readonly=&quot;true&quot;/&gt;</code>
<code>          &lt;/template&gt;</code>
<code>          &lt;div class=&quot;mb-5&quot;&gt;&lt;/div&gt;</code>
<code>          &lt;template v-for=&quot;rb in radiobuttons&quot;&gt;</code>
<code>            &lt;lx-radio v-model=&quot;rbChecked&quot; :val=&quot;rb.value&quot; :label=&quot;rb.label&quot; :group=&quot;rb.group&quot; :readonly=&quot;true&quot;/&gt;</code>
<code>          &lt;/template&gt;</code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import TitleComponent from &quot;../../components/TitleComponent&quot;;</code>
<code>import LxCard from &quot;@/lib-components/lxCard&quot;;</code>
<code>import LxSelectInput from &quot;@/lib-components/lxSelectInput&quot;;</code>
<code>import LxTextareaInput from &quot;@/lib-components/lxTextareaInput&quot;;</code>
<code>import LxFileInput from &quot;@/lib-components/lxFileInput&quot;;</code>
<code>import LxInput from &quot;@/lib-components/lxInput&quot;;</code>
<code>import LxCheckbox from &quot;@/lib-components/lxCheckbox&quot;;</code>
<code>import LxRadio from &quot;@/lib-components/lxRadio&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;BasicInputs&quot;,</code>
<code>  components: {LxRadio, LxCheckbox, LxInput, LxFileInput, LxTextareaInput, LxSelectInput, LxCard, TitleComponent},</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      options: [</code>
<code>        {value: 1, title: 'JavaScript'},</code>
<code>        {value: 2, title: 'C++'},</code>
<code>        {value: 3, title: 'C#'},</code>
<code>        {value: 4, title: 'Python'},</code>
<code>        {value: 5, title: 'PHP'},</code>
<code>      ],</code>
<code>      checkboxes: [</code>
<code>        {label: 'Checkbox 1', value: 'CB1'},</code>
<code>        {label: 'Checkbox 2', value: 'CB2'},</code>
<code>        {label: 'Checkbox 3', value: 'CB3'},</code>
<code>      ],</code>
<code>      checked: ['CB3'],</code>
<code>      radiobuttons: [</code>
<code>        {label: 'Ready', value: 'ready', group: 'gr1'},</code>
<code>        {label: 'Steady', value: 'steady', group: 'gr1'},</code>
<code>        {label: 'Go', value: 'go', group: 'gr1'},</code>
<code>      ],</code>
<code>      rbChecked: 'go',</code>
<code>    })</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>
  </div>
</template>

<script>
import TitleComponent from "../../components/TitleComponent";
import LxCard from "@/lib-components/lxCard";
import LxSelectInput from "@/lib-components/lxSelectInput";
import LxTextareaInput from "@/lib-components/lxTextareaInput";
import LxFileInput from "@/lib-components/lxFileInput";
import LxInput from "@/lib-components/lxInput";
import LxCheckbox from "@/lib-components/lxCheckbox";
import LxRadio from "@/lib-components/lxRadio";

export default {
  name: "BasicInputs",
  components: {LxRadio, LxCheckbox, LxInput, LxFileInput, LxTextareaInput, LxSelectInput, LxCard, TitleComponent},
  data() {
    return ({
      options: [
        {value: 1, title: 'JavaScript'},
        {value: 2, title: 'C++'},
        {value: 3, title: 'C#'},
        {value: 4, title: 'Python'},
        {value: 5, title: 'PHP'},
      ],
      checkboxes: [
        {label: 'Checkbox 1', value: 'CB1'},
        {label: 'Checkbox 2', value: 'CB2'},
        {label: 'Checkbox 3', value: 'CB3'},
      ],
      checked: ['CB3'],
      radiobuttons: [
        {label: 'Ready', value: 'ready', group: 'gr1'},
        {label: 'Steady', value: 'steady', group: 'gr1'},
        {label: 'Go', value: 'go', group: 'gr1'},
      ],
      rbChecked: 'go',
    })
  }
}
</script>

<style scoped>

</style>