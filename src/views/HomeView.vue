<template>
<header class="showcase">
    <div class="container">
        <nav>
            <h1 class="logo">Tracks</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
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
 <offers/>
    <Footer/>
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

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            display: flex;

            li {
                padding: 0.95rem
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
        p{
          z-index: 2;
        }

    }

}

@import '../assets/scss/responsiveness'
</style>
