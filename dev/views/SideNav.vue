<template>
  <div>
    <div class="sidenav" :class="active?'active':''">
      <ul>
        <li>
          <a href="#">
            <span class="icon">
<!--              <fa-icon icon="home"/>-->
            </span>
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
<!--              <fa-icon icon="user"/>-->
            </span>
            <span class="title">Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
<!--              <fa-icon icon="comment"/>-->
            </span>
            <span class="title">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
<!--              <fa-icon icon="question-circle"/>-->
            </span>
            <span class="title">Help</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
<!--              <fa-icon icon="cog"/>-->
            </span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
<!--              <fa-icon icon="lock"/>-->
            </span>
            <span class="title">Password</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
<!--              <fa-icon icon="sign-out-alt"/>-->
            </span>
            <span class="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="toggle" :class="active?'active':''" @click="toggleMenu"></div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return ({
      active: false
    });
  },
  methods: {
    toggleMenu: function () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
.sidenav {
  position: fixed;
  width: 60px;
  height: 100%;
  background-color: #3e0748;
  transition: .5s;
  overflow: hidden;

  &:hover, &.active {
    width: 300px;

  }

  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;

    li {
      position: relative;
      width: 100%;
      list-style: none;

      &:hover {
        background-color: #ea1d63;
      }

      a {
        position: relative;
        display: flex;
        width: 100%;
        text-decoration: none;
        color: #fff;

        .icon {
          position: relative;
          display: block;
          min-width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: 24px;
        }

        .title {
          position: relative;
          display: block;
          padding: 0 10px;
          height: 60px;
          line-height: 60px;
          text-align: start;
          white-space: nowrap;
        }
      }
    }
  }
}

.toggle {
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 60px;
  background-color: #330748;
  cursor: pointer;

  &.active {
    background-color: #ea1d63;
  }

  &:before {
    content: '\f0c9';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    color: #fff;
  }

  &.active:before {
    content: '\f00d';
  }
}

@media (max-width: 767px) {
  .sidenav{
    left: -60px;

    &.active{
      left: 0;
      width: 100%;
    }
  }
}
</style>