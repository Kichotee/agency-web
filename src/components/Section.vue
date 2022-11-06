<template>
<section class="platform">
    <div v-if="!activeMenu" class="container">

        <div class="platform-content">
            <div class="platform-content-text">
                <h2>
                    Let's bring Your Idea to Life
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laborum fugiat, animi, tempora necessitatibus nostrum libero sed voluptatum delectus nam illum? Rerum nobis quod dicta dignissimos praesentium, ducimus fugit suscipit?
                </p>
                <button class="btn-primary">
                    Join us now
                </button>

            </div>
            <div class="platform-content-media">
                <figure>
                    <img src="../assets/3d-business-man-and-woman-working-at-the-table.png" alt="">
                </figure>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
    return {
        activeMenu: false
    }

}

,

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
@import '../assets/scss/config';
@import '../assets/scss/utilities';
@import '../assets/scss/buttons';



.platform {
    height: 70%;
    margin: 2.5% 0 2.5%;
    background: #fff;
    z-index: 2;

    .container {
        // border: solid;
        border-radius: 2rem;
        color: #343434;
        height: 100%;
        background-color: $bg-color;

    }

}

.platform-content {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 2.5% 0 0;
    text-align: center;
    width: 100%;

    &-media {
        height: 100%;
        align-self: center;
        width: 100%;

        figure {
            height: 100%;

            img {
                width: 70%;
                padding: 0 2%;
                margin: 0 auto;
                z-index: 4;

            }
        }
    }

    &-text {
        max-width: 70%;
        align-self: center;
        margin: 0 0 5.5% 0;
        line-height: 1.2;

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.8rem;
        }

        button {
            outline: none;
            border: none;
            padding: 8px 20px;
            margin: 1% 0 0 0;
        }

    }
}

@import '../assets/scss/responsiveness';
</style>
