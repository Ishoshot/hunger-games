<template>
  <div class="rand">
    <Category />
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'


export default {
  name: 'Categories',
  components: {
    Category,
  }
};
</script>
