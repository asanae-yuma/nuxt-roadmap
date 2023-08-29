<template>
    <swiper class="swiper-flex-container" :options="swiperOption">
        <swiper-slide class="swiper-image-wrap" v-for="(logo, index) in logos" :key="index">
            <img 
                :src="logo.src"
                @mouseover="mouseOver(logo)" 
                @mouseout="mouseOut(logo)"
            >
        </swiper-slide>
        <!-- <swiper-slide >
            <img src="~/assets/img/java-logo_1280x960.jpg">
        </swiper-slide>
        <swiper-slide >
            <img src="~/assets/img/PHP-logo.svg.png">
        </swiper-slide>
        <swiper-slide >
            <img src="~/assets/img/Python.png">
        </swiper-slide> -->
    </swiper>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 8,//スライドの枚数
                speed: 1000,//スライドの切り替わりスピード
                spaceBetween: 0,//各スライドの余白
                centeredSlides: true,//スライダーを真ん中に
                loop: true, //無限ループ
                autoplay: { //スライドの自動切り替え
                    delay: 2000,//スライドの自動切り替えの秒数
                    disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
                },
                autoHeight: true,
                breakpoints: {
                    1910: {
                        slidesPerView: 7
                    },
                    1450: {
                        slidesPerView: 6
                    },
                    1280: {
                        slidesPerView: 5
                    },
                    1000: {
                        slidesPerView: 4
                    },
                    700: {
                        slidesPerView: 3,
                    },
                    650: {
                        slidesPerView: 2
                    },
                    300: {
                        slidesPerView: 1
                    },
                }
            },
            path: "~/src/assets/img/",
            logos: [
                {
                    src: require("@/assets/img/java.png"),
                    language: require("@/assets/img/java.png"),
                    framework: require("@/assets/img/spring_boot.png")
                },
                {
                    src: require("@/assets/img/php.png"),
                    language: require("@/assets/img/php.png"),
                    framework: require("@/assets/img/laravel.png")
                },
                {
                    src: require("@/assets/img/python.png"),
                    language: require("@/assets/img/python.png"),
                    framework: require("@/assets/img/django.png")
                },
                {
                    src: require("@/assets/img/csharp.png"),
                    language: require("@/assets/img/csharp.png"),
                    framework: require("@/assets/img/visual-studio.png")
                },
                {
                    src: require("@/assets/img/ruby.png"),
                    language: require("@/assets/img/ruby.png"),
                    framework: require("@/assets/img/rails.png")
                },
                {
                    src: require("@/assets/img/javascript.png"),
                    language: require("@/assets/img/javascript.png"),
                    framework: require("@/assets/img/vue.png")
                },
                {
                    src: require("@/assets/img/swift.png"),
                    language: require("@/assets/img/swift.png"),
                    framework: require("@/assets/img/perfect.png")
                },
                {
                    src: require("@/assets/img/dart.png"),
                    language: require("@/assets/img/dart.png"),
                    framework: require("@/assets/img/flatter.png")
                }
            ]
        }
    },
    methods: {
        mouseOver(logo) {
            logo.src = logo.framework;
        },
        mouseOut(logo) {
            logo.src = logo.language;
        }
    }
}
</script>
