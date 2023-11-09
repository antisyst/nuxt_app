<script>
 import { ref, computed } from 'vue';

export default {
  setup() {
    const selectedPercentage = ref(30);
    
    const currentPercentage = computed(() => selectedPercentage.value + '%');

    return {
      selectedPercentage,
      currentPercentage,
    };
  },
};
  </script>
<template>
    <div class="range_value">
            <p>1 000 000</p>
            <p>{{ selectedPercentage }}%</p>
    </div>
    <div class="percentage_body">
      <input
        type="range"
        id="percentageRange"
        v-model="selectedPercentage"
        min="1"
        max="100"
        step="1"
      />
    </div>
  </template>
 <style scoped lang="scss">
  input {
            width: 86%;
            -webkit-appearance: none;
            border: none;
            height: 2px;
            background: #083E4C;
            outline: none;
            -webkit-transition: .2s;
            transition: opacity .2s;

            &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 17px;
            height: 17px;
            background: #083E4C;
            border: 2px solid #083E4C;
            transition: all 0.1s ease-out;
            cursor: pointer;
            border-radius: 50%;

            &:hover {
              background: var(--color-white);
              width: 20px;
              height: 20px;
            }
            }
        }
        .range_value {
            display: flex;
            flex-direction: row;
            width: 100%;
            border-radius: 100px;
            background: #F1F5F5;
            align-items: center;
            padding: 20px 22px;
            justify-content: space-between;

            p {
                background: #F1F5F5;
                user-select: none;
                color: var(--color-main);
            }
        }
        .percentage_body {
            display: flex;
            justify-content: center;
            align-items: center;
        }
</style>