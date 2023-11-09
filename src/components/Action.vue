<template>
     <div class="action_layout">
            <div>
                <button class="disable_button">Ипотечный калькулятор</button>
            </div>
            <div>
                <p class="specs_item">Стоимость, млн ₽</p>
                <range-input v-model="selectedValues" />
            </div>
            <section class="checkbox_item">
               <div>
                    <input type="checkbox" class="ui-checkbox" />
                    <label>Квартира</label>
               </div>
               <div>
                    <input type="checkbox" class="ui-checkbox" />
                    <label>Апартамент</label>
               </div>
            </section>
            <div>
                <p class="specs_item">Первоначальный взнос, ₽</p>
                 <PercentageInput/>
            </div>
            <div>
                <p class="specs_item">Срок выплат</p>
                <YearIndicator/>
            </div>
        </div>
</template>
<script>
import RangeInput from './RangeInput.vue';
import PercentageInput from './PercentageInput.vue';
import Result from './Result.vue';
import YearIndicator from './YearIndicator.vue';

export default {
  components: {
    RangeInput,
    PercentageInput,
    YearIndicator,
  },
  data() {
    return {
        selectedValues: 'Range 1: 0, Range 2: 0',
    };
  },
};
</script>
<style scoped lang="scss">
 .action_layout {
            flex-basis: 430px;
            padding: 40px 30px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            border: 1.5px solid var(--color-prim);
            border-radius: 50px;
            gap: 20px 0;

            .disable_button {
            padding: 12px;
            border: none;
            opacity: 0.6;
            background: var(--color-prim);
            color: var(--color-white);
            border-radius: 10px;
            pointer-events: none;
        }
        .checkbox_item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-top: 10px;
        justify-content: center;
        gap: 10px 20px;
        width: 71%;
        margin-left: 8px;
        
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0 8px;
        }
    }

            div {
                width: 100%;
            }
            .specs_item {
                color: var(--color-main);
                margin: 10px 0;
            }
        }
</style>