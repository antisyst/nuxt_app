<template>
  <div class="swiper_body">
    <div class="swiper_first">
            <h1>Варианты покупки</h1>
        <div class="swiper_controls">
            <button>Подробнее</button>
            <button>
                <font-awesome-icon icon="play" />        
            </button>
            <button>
                <font-awesome-icon icon="play" />
            </button>
        </div>
    </div>
    <div class="swiper_container">
        <div class="swiper_card">
            <img src="../assets/first.svg" alt="" v-if="shouldRenderSvg">
            <h1>Ипотека от 4,3%</h1>
            <p>
                Выгодные условия при оформлении  у банков-партнеров
            </p>
            <div class="button_element">
                <button>
                    <font-awesome-icon icon="play" /> 
                </button>
            </div>
        </div>
        <div class="swiper_card">
            <img src="../assets/second.svg" alt="" v-if="shouldRenderSvg">
            <h1>Рассрочка 0%</h1>
            <p>
                Гибкие условия по размеру первоначального взноса, платежам и срокам
            </p>
            <div class="button_element">
                <button>
                    <font-awesome-icon icon="play" />  
                </button>
            </div>
        </div>
        <div class="swiper_card">
            <img src="../assets/third.svg" alt="" v-if="shouldRenderSvg">
            <h1>Покупка в Trade-in</h1>
            <p>
                Выгодный обмен старой квартиры  на новую квартиру или апартаменты
            </p>
            <div class="button_element">
                <button>
                    <font-awesome-icon icon="play" />  
                </button>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.swiper_body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30px;
    justify-content: flex-start;
}
.swiper_first {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--color-main);
        font-size: 42px;
    }
}
.swiper_controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 20px;

    button {
        border: 1.5px solid var(--color-prim);
        font-family: var(--font-med);
        color: var(--color-prim);
        padding: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-out;
        border-radius: 50%;

        &:nth-child(2) {
            padding: 22px;
        }
        &:nth-child(3) {
            padding: 22px;
        }



        &:hover {
            background: var(--color-prim);
            color: var(--color-white);
            filter: brightness(1.3);

            &:nth-child(2) {
            filter: brightness(1.3);
            transform: scale(1.2);
            }
            &:nth-child(3) {
            filter: brightness(1.3);
            transform: scale(1.2);
            }

            svg {
                color: var(--color-white);
                background: var(--color-prim);
            }
        
        }

        svg {
            width: 10px;
            height: 10px;
            background: transparent;
        }

        &:nth-child(1) {
            font-size: 17px;
            padding: 18px 22px;
            border-radius: 100px;
        }
        &:nth-child(2) {
            svg {
                transform: rotate(180deg);
            }
        }
    }
}
.swiper_container {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .swiper_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 470px;
    position: relative; 
    background: none;
    border-radius: 20px;
    cursor: pointer;
    height: auto;
    justify-content: center;
    transition: all 0.2s ease-out;
    overflow: hidden; 

    &:hover {
        filter: brightness(1.2);
        img {
            transform: scale(1.5);
        }
        h1 {
            background: var(--color-prim);
            color: var(--color-white);
        }
        .button_element {
            padding: 20px;
            background: var(--color-white);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            bottom: -12px;
            right: -12px;
        }
       button {
        transform: scale(1.1);
        filter: brightness(1.2);

        svg {
            transform: rotate(-20deg);
        }
       }
    }

    
        img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: all 0.3s ease-out;
        border-radius: 20px;
            }
        h1 {
            position: absolute;
            z-index: 100;
            color: var(--color-main);
            padding: 10px 12px;
            border-radius: 10px;
            transition: all 0.2s ease-out;
            font-size: 24px;
            left: 20px;
            top: 20px
        }
        p {
            position: absolute;
            left: 20px;
            bottom: 35px;
            height: 76px;
            background: none;
            padding-top: 15px;
            border-top: 1.5px solid var(--color-white);
            width: 70%;
            color: var(--color-white);
        }  
       .button_element {
        position: absolute;
        bottom: 12px;
        right: 12px;
        transition: all 0.2s ease-out;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        height: 50px;

        button {
            display: flex;
            justify-content: center;
            border: none;
            transition: all 0.2s ease-out;
            border-radius: 50%;
            align-items: center;
            padding: 24px;
            background: var(--color-prim);
            color: var(--color-white);

            svg {
            width: 20px;
            transition: all 0.2s ease-out;
            height: 20px;
            background: transparent;
        }
        }
       }
    }
}
</style>
<script>
export default {
  data() {
    return {
      shouldRenderSvg: false, 
    };
  },
  mounted() {
    this.shouldRenderSvg = true;
  },
};

</script>