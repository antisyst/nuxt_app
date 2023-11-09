<script>
import Calculator from './src/components/Calculator.vue';
import Swiper from './src/components/Swiper.vue';

export default {
  name: 'App',
  components: {
    Swiper,
    Calculator,
  },
};
</script>
<template>
 <Swiper/>
 <Calculator/>
</template>
