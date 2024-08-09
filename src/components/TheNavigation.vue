<template>
  <nav id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name: 'destination.show', params:{id: destination.id}}">
        {{ destination.name }}
    </router-link>
  </nav>
</template>
<script>
import sourceData from '@/data.json'

export default {
    data() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>