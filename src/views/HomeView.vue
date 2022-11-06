<template>
<header class="showcase">
    <transition name="menu">
     <div v-if="activeMenu" class="navmobile">
        <div  @click="toggleMenu" class="close">
                <i class="fa-solid fa-close"></i>
            </div>

            <ul  >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            

        </div>
    </transition>

    <div   class="container">
        <nav >
            <h1 class="logo">Tracks</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <i @click="toggleMenu" class="fa-solid fa-bars"></i>

        </nav>
       

        <div class="showcase-content">
            <div>
                <h1>Make Your Marketing Real</h1>
                <p class="my-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                    eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
                    vitae dolore.
                </p>
                <div class="buttons">
                    <a href="#" class="btn-primary">Learn More</a>
                    <a href="#" class="btn-secondary">Sign Up</a>

                </div>
            </div>
            <img src="../assets/3d-business-man-standing-with-laptop-and-coffee.png" />
        </div>
    </div>

</header>
<Section />
<offers />
<Footer />
</template>

<script>
// @ is an alias to /src
import Section from '@/components/Section.vue'
import Footer from '@/components/Footer.vue'
import offers from '@/components/offers.vue'

export default {
    name: 'HomeView',
    components: {
        Section,
        Footer,
        offers

    },
    data() {
        return {
            activeMenu: false
        }

    },
    methods: {
        toggleMenu() {
            this.activeMenu = !this.activeMenu
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config';
@import '../assets/scss/utilities';
@import '../assets/scss/buttons';

img {
    width: 100%;
}

a {
    text-decoration: none;

}

.showcase {

    background: #343434;
    background: $bg-gradient;
    color: #fff;
    font-family: $font-stack;
    line-height: 1.6;
    width: 100vw;
    max-height: 80vh;
    position: relative;
    .container{
        position: relative;
    }
    // i{
    //     font-size: 2rem;
    // }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            display: none;
           

            li {
                // padding: 0.95rem
            }

            a {
                color: inherit;
                font-size: 0.5rem;
            }
        }

        a {
            color: inherit;
            font-size: 0.5rem;
        }

        a:hover {
            color: $secondary-color;
        }
    }

    .navmobile {

        display: grid;
       grid-template-rows: 0.2fr 1f;
        color: #343434;
        position: fixed;
        top:0;
        right:0;
         background: $bg-color;
         z-index: 6;
         height: 100vh;
         width: 100%;
         overflow: hidden;
         transition: all 1s ease-in-out;

        ul {
           
            display: flex;
            align-items: center;
             flex-direction: column;

            li {
                padding: 0.95rem;
                font-size:1.5rem;
            }
            a{
                text-decoration: none;
                color: #343434;
            }
            a:hover{
                padding: 5% 10%;
                background-color: #7d7d7d;
                border-radius: 5px;
            }
           
        }
        .close{
            align-self: flex-start;
            justify-self: end;
            margin: 05% 5%;
            overflow: hidden;
          
        }
    }

    &-content {
        height: 60%;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.85rem;
        text-align: center;

        img {
            display: none;
        }

        h1 {
            font-size: 3rem;
            line-height: 1.2;
        }

        p {
            z-index: 2;
        }

    }

}
 ::-webkit-scrollbar{
            }

.menu-enter-from{
    transform: translateY(100%);


}
.menu-leave-to{
    transform: translateY(-100%);


}

@import '../assets/scss/responsiveness'
</style>
