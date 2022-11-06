<template>
<section class="offers">
    <div v v-if="!activeMenu" class="container">
        <div class="cards-box">
            <div v-for="card in offerCards" class="offer-card">
                <div class="offer-card-box">
                    <div class="offer-card-box-detail">
                        <h4>
                            {{card.offer}}
                        </h4>
                        <img :src="card.img" alt="">
                    </div>

                    <p>{{card.text}}</p>
                    <a class="btn-primary">
                        contact-us
                    </a>
                </div>
            </div>
        </div>

    </div>
</section>
</template>

<script>
import {
    useStore
} from 'vuex'
import {
    computed
} from 'vue'
export default {
    name: 'HelloWorld',
    
    setup() {
        const store = useStore()

        const offerCards = store.state.cards
        const images = store.state.images
        return {
            offerCards
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
@import '../assets/scss/config';
@import '../assets/scss/utilities';
@import '../assets/scss/buttons';

.offers {
    height: 80vh;
    width: 100%;
    background: #fff;

    .container {
        // border: solid;
        padding: 0;
        color: #343434;
        height: 100%;
        overflow-y: hidden;
    padding-left: 0 0 3rem;


    }

    .cards-box {

        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 80vh;
        overflow-x: scroll;
        margin-top: 1rem;
        padding: 1rem 0 3rem 0;
        width: 100%;

        .offer-card {
            width: 100%;
            height: 80vh;
            background-color: #f8f8f8;
            display: flex;
            border-radius: 20px;
            padding: 0.2rem 1rem
             }
   
        }
   

}

.offer-card-box {
    display: flex;
    width: 100%;
    gap: 5%;
    justify-content: space-around;

    flex-direction: column;
    height: 90%;

     .btn-primary{
        width: 35%;
        align-self: center;
        border-radius: 15px;
        text-align: center;
        // flex-basis: 20%;
    }

    &-detail {
        width: 100%;
        flex-basis: 60%;
        display: flex;
        align-items: center;
    }

    h4 {
        font-weight: 600;
        font-size: 1.5rem;
        flex-basis: 60%;
    }
    p{
        font-size: 0.8rem;
        flex-basis: 20%;
    }

    img {
        max-width: 40%;

    }
}
.cards-box::-webkit-scrollbar{
    width: 0;
}
@import '../assets/scss/responsiveness';
</style>
