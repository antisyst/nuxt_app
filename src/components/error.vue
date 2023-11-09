<script>
import Calculator from './src/components/Calculator.vue';
import Swiper from './src/components/Swiper.vue';

export default {
  name: 'App',
  components: {
    Swiper,
    Calculator,
  },
  props: ['error']
}
</script>
<template>
 <Swiper/>
 <Calculator/>
</template>
