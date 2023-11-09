<template>
     <div class="result_layout">
            <img src="../assets/result.svg" alt="">
            <p class="result_title">Узнайте о других <span>интересных предложениях</span></p>
            <h1 class="result_main_content">Ипотека 0.1%</h1>
                <div class="result_container">
                    <div>
                        <p>Ежемесячный платёж</p>
                        <h2>12 591 ₽</h2>
                    </div>
                    <div>
                        <p>Ставка</p>
                        <h2>0.1%</h2>
                    </div>
                    <div>
                        <p>Ежемесячный платёж</p>
                        <h2>4 465 050 ₽</h2>
                    </div>
                    <div>
                        <p>Срок кредита</p>
                        <h2>5 лет</h2>
                    </div>
                </div>
                <div class="result_info">
                   <p>
                    Приведенные расчеты носят предварительный характер. Окончательный расчет суммы кредита и размер ежемесячного платежа производится банком после предоставления оценки платежеспособности клиента.
                   </p>
                   <button>
                    Подать заявку на точный расчёт
                   </button>
                </div>
        </div>
</template>
<style scoped lang="scss">
  .result_layout {
            flex-basis: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            img {
                position: absolute;
                width: 100%;
                object-fit: contain;
            }
        }
        .result_layout {
        width: 100%;
        height: auto;
        position: relative;

        .result_title {
            position: absolute;
            top: 10px;
            background: none;
            right: 20px;
            font-family: var(--font-med);

            span {
                color: var(--color-prim);
            }
        }
        .result_main_content {
                padding: 20px 24px;
                font-size: 60px;
                position: absolute;
                top: 70px;
                color: var(--color-prim);
                left: 40px;
                background: var(--color-white);
                border-radius: 16px;
            }
    }
    .result_container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        position: absolute;
        background: none;
        left: 40px;
        flex-wrap: wrap;
        gap: 0 60px;
        margin-top: 24%;
        

        div {
            display: flex;
            flex-direction: column;
            background: none;
            align-items: flex-start;
            justify-content: center;

            p {
                background: none;
                color: rgba(255, 255, 255, 0.70);
            }
            h2 {
                color: var(--color-white);
                background: none;
                margin-top: 15px;
                font-size: 30px;
            }
        }
    }
    .result_info {
        margin-top: 39%;

        p {
            color: var(--color-main);
        }
        
        button {
            background: var(--color-prim);
            padding: 20px 25px;
            margin-top: 20px;
            color: var(--color-white);
            border: none;
            border-radius: 100px;
            font-family: var(--font-med);
            font-size: 17px;
            transition: all 0.2s ease-out;

            &:hover {
                filter: brightness(1.3);
            }
        }
    }
</style>