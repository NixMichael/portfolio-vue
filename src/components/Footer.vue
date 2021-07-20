<template>
    <div class='footer'>
        <div>&copy;&nbsp;<span id='current-year'>2021</span>&nbsp;Michael Nix</div>
        <div>
            <span><a href="tel:+44-7597832857">07597 832 857</a></span>
            <span><a href="mailto:mpnix@protonmail.com">mpnix@protonmail.com</a></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/scss/_colors.scss' as *;

    .footer {
        position: fixed;
        bottom: 0;
        right: calc(-100vw + 4em);
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
        padding: 1.5em 0;
        width: 100vw;
        height: 4em;
        background: $darkmode-menu-color;
        color: white;
        clip-path: polygon(4em 0, 100% 0, 100% 100%, 0 100%);
        transition: right 400ms ease-in-out, clip-path 400ms ease-in-out;
        outline: 1px solid $fader-bg-color;
        z-index: 9;

        &::before {
            content: '';
            background-image: url('../assets/graphics/info-icon.png');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            position: absolute;
            left: 2em;
            bottom: 0.5em;
            width: 2em;
            height: 2em;
        }

        &:hover {
            right: 0;
            clip-path: none;
            &::before, &::after {
                visibility: hidden;
            }
        }

        div:last-child {
            display: flex;

            span:first-child {
                position: relative;
                margin-top: 0.05em;
                margin-right: 2em;

                &::after {
                    content: '';
                    background-color: $highlightFont;
                    position: absolute;
                    right: -1em;
                    top: 0;
                    width: 2px;
                    height: 100%;
                }
            }
            a {
                color: white;
                text-decoration: none;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .footer {
            position: relative;
            margin: 1rem auto 0;
            padding: 3em 0;
            color: white;
            background: $darkmode-menu-color;
            flex-direction: column;
            right: 0;
            width: 100vw;
            clip-path: none;

            &::before {
                display: none;
            }

            a {
                color: white;
            }

            div:last-child {
                margin-top: 0.5em;
                display: flex;
                flex-direction: column;
                align-items: center;

                span:first-child {
                    margin: 0;

                    &::after {
                        display: none;
                    }
                }
            }
        }
    }
</style>