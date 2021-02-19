<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <h3>Usage</h3>

    <pre>
<code>
&lt;template&gt;
  &lt;lx-side-nav :expanded=&quot;expanded&quot;&gt;
    &lt;lx-side-nav-menu title=&quot;Demo&quot;&gt;
      &lt;lx-side-nav-item&gt;Link 01&lt;/lx-side-nav-item&gt;
      &lt;lx-side-nav-item-drop-down title=&quot;Drop Down Link&quot;&gt;
        &lt;lx-side-nav-item&gt;Link 001&lt;/lx-side-nav-item&gt;
        &lt;lx-side-nav-item&gt;Link 002&lt;/lx-side-nav-item&gt;
        &lt;lx-side-nav-item&gt;Link 003&lt;/lx-side-nav-item&gt;
      &lt;/lx-side-nav-item-drop-down&gt;
      &lt;lx-side-nav-item&gt;Link 03&lt;/lx-side-nav-item&gt;
    &lt;/lx-side-nav-menu&gt;
  &lt;/lx-side-nav&gt;
&lt;/template&gt;

&lt;script&gt;
...

export default {
  name: &quot;SideNavComponent&quot;,
  components: {LxSideNav, LxSideNavItemDropDown, LxSideNavItem, LxSideNavMenu},
  props: {
    expanded: {
      type: Boolean
    }
  }
}
&lt;/script&gt;

    </code>
</pre>

  </div>
</template>

<script>

export default {
  name: "SideNav",
  data() {
    return ({});
  },
  methods: {}
}
</script>

<style scoped lang="scss">

</style>