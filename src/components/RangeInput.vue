<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const range1 = ref(5.6); 
    const range2 = ref(5.6); 

    const updateValues = () => {

    };

    const selectedValues = computed(() => {
      return `Range 1: ${range1.value}, Range 2: ${range2.value}`;
    });

    return {
      range1,
      range2,
      selectedValues,
      updateValues,
    };
  },
};
  </script>
<template>
    <div class="multi-range-body">
        <div class="range_value">
            <p>{{ range1 }}</p>
            <div class="border_item"></div>
            <p class="second_item">{{ range2 }}</p>
        </div>
        <div class="range_items">
            <input
                type="range"
                min="0"
                max="5.6"
                step="0.01"
                v-model="range1"
                @input="updateValues"
                style="transform: rotate(180deg);"
                />
                <input
                type="range"
                min="0"
                max="5.6"
                step="0.01"
                v-model="range2"
                @input="updateValues"
                />
        </div>
    </div>
  </template>
  <style scoped lang="scss">
.multi-range-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
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

    .border_item {
        width: 1.3px;
        overflow: hidden;
        height: 10px;
        background: rgba(8, 62, 76, 0.50);
    }
    .second_item {
      text-align: right;
    }

    p {
      background: #F1F5F5;
      width: 30%;
      color: var(--color-main);
    }
}
.range_items {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: center;

        input {
            width: 180px;
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
    }
  </style>
  