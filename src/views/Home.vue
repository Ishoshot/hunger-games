<template>
  <div class="home">
    <Catalogue />
  </div>
</template>

<script>
// @ is an alias to /src
import Catalogue from '@/components/Catalogue.vue'


export default {
  name: 'home',
  components: {
    Catalogue,
  }
}
</script>
