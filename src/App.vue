<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity .5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
<template>
  <TheNavigation />

  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  components: {TheNavigation}
}
</script>