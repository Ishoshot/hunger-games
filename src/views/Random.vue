<template>
  <div class="rand">
    <RandomComp />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomComp from '@/components/RandomComp.vue'


export default {
  name: 'Random',
  components: {
    RandomComp,
  }
}
</script>
