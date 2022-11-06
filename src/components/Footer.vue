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
            
            <div class="footer-content-property4">
                <p>
                    Services
                </p>
            </div>
            <div class="footer-content-property5">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minus rerum commodi cum tempore, molestias suscipit sint ullam et repellat, culpa sequi aliquam quas exercitationem recusandae nam corrupti eveniet laboriosam!
                    Blanditiis ab, quis expedita modi autem quae velit placeat non! Distinctio nobis pariatur unde animi culpa eius cumque labore tempore. Nemo dolorum tenetur inventore ipsam ea fugit esse soluta doloremque?
                </p>
            </div>
            <div class="footer-content-property6">
                <div class="social-media-links">
                    <p>Social-media</p>
                </div>

            </div>
            <div class="footer-content-property3">

                <div class="links">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>

            </div>
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
    font-size: smaller;

    .container {
        height: 80%;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        gap: 4%;
        align-items: center;

    }

    .links {
        i {
            margin: 0 0.5rem 0 0
        }
    }
    .footer-content-property4, .footer-content-property5{
        display: none;
    }

}

@import '../assets/scss/responsiveness';
</style>
