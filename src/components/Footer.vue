<template>
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-content-property1">
                About
            </div>
            <div class="footer-content-property2">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae impedit illo quos eveniet maiores voluptate similique accusamus natus reprehenderit? Beatae, vitae. Quaerat eos, sint eveniet aliquam quia neque vel?

                </p>
            </div>
            <div class="footer-content-property3"></div>
        </div>
        <div class="links">

        </div>
    </div>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config';
@import '../assets/scss/utilities';


footer {
    height: 60vh;
    background: $bg-gradient;
    color: $text-color-white;
    padding: 10px 0;

    &-content {
       display: flex;
       flex-direction: column;
       gap: 4%;
    }
    .links{
        
    }
}
</style>
