<template>
    <div class="calculator_layout">
        <Action/>
        <Result/>
    </div>
</template>
<style scoped lang="scss">
    .calculator_layout {
        margin-top: 40px;
        display: flex;
        padding: 0 30px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: 0 30px;
    }
</style>
<script>
import Action from './Action.vue';
import Result from './Result.vue';

export default {
  components: {
    Action,
    Result,
  },
  data() {
    return {
        selectedValues: 'Range 1: 0, Range 2: 0',
    };
  },
};
</script>