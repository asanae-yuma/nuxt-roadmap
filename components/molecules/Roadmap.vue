<template>
    <v-row>
        <v-col cols="2" ref="arrow">
            <first-arrow-canvas
                v-resize="getArrowWidth"
                :roadmap="firstRoadmap"
                :canvasSize="Number(canvasSize)"
                @clickArrow="getIndex"
            />
        </v-col>
        <v-col cols="2" v-for="(roadmap, index) in roadmaps" :key="index">
            <arrow-canvas 
                :roadmap="roadmap"
                :canvasSize="Number(canvasSize)"
                :index="Number(index)"
                @clickArrow="getIndex"
            />
        </v-col>
    </v-row>
</template>
<script>
import ArrowCanvas from '../atoms/ArrowCanvas.vue';
import FirstArrowCanvas from '../atoms/FirstArrowCanvas.vue';

export default {
    components: {
        ArrowCanvas,
        FirstArrowCanvas,
    },
    data() {
        return {
            firstRoadmap: {
                strokeStyle: "rgb(50,205,50)",
                fillStyle: "rgb(93,255,93)",
                textColor: "green--text",
                texts: [
                    `~製造の基礎に
                    必要な知識~`,
                    '・SQL(CRUD)',
                    '・Coding/Debug',
                    '・Git',
                    '・テスト仕様書'
                ]
            },
            roadmaps: [
                {
                    strokeStyle: "rgb(0,206,209)",
                    fillStyle: "rgb(0,255,255)",
                    textColor: "cyan--text",
                    texts: [
                        `~実践的な実装
                        に必要な知識~`,
                        '・テスト自動化',
                        '・フレームワーク',
                        '・非同期/並列',
                        '・IT全般'
                    ]
                },
                {
                    strokeStyle: "rgb(0,0,255)",
                    fillStyle: "rgb(30,144,255)",
                    textColor: "blue--text",
                    texts: [
                        `~上級PGに
                        必要な知識~`,
                        '・詳細設計',
                        '・レスポンシブ',
                        '・Linux',
                        '・保守性'
                    ]
                },
                {
                    strokeStyle: "rgb(148,0,211)",
                    fillStyle: "rgb(238,130,238)",
                    textColor: "purple--text",
                    texts: [
                        `~SEやリーダーに
                        必要な知識~`,
                        '・基本設計',
                        '・クラウド',
                        '・仮想環境',
                        '・CI/CD'
                    ]
                },
                {
                    strokeStyle: "rgb(255,0,0)",
                    fillStyle: "rgb(255,93,93)",
                    textColor: "red--text",
                    texts: [
                        `~管理者として
                        必要な知識~`,
                        '・要件定義',
                        '・ネットワーク',
                        '・セキュリティ',
                        '・SEO'
                    ]
                }
            ],
            canvasSize: 0
        }
    },
    mounted() {
        this.getArrowWidth();
    },
    methods: {
        getArrowWidth() {
            this.canvasSize = this.$refs.arrow.offsetWidth;
        },
        getIndex(index) {
            this.$emit("getIndex", index);
        }
    }
}
</script>
