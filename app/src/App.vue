<template>
  <div id="app">
    <Header
      v-if="$route.name != 'Login' && $route.name != '404'"
    ></Header>
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
    <Footer
      v-if="$route.name != 'Login' && $route.name != '404'"
    ></Footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "@/assets/style/global.scss";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  }
};
</script>
