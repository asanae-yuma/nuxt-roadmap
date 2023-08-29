<template>
    <div>
        <p class="arrow-text" :class="roadmap.textColor">Step1</p>
        <canvas 
            id="arrow" 
            v-resize="create" 
            :width="canvasSize" 
            :height="canvasSize"
            @mouseover="mouseOver" 
            @mouseout="mouseOut"
            @click="click"
        ></canvas>
    </div>
</template>
<script>
export default {
    props: {
        roadmap: Object,
        canvasSize: {
            default: 0,
            type: Number
        }
    },
    data() {
        return {
            text: {
                titleX: 0,
                startX: 0,
                startY: 0,
                size: 0
            }
        }
    },
    watch: {
        canvasSize() {
            this.draw(this.canvasSize);
        }
    },
    methods: {
        draw(canvasSize) {
            const firstX = canvasSize * 0.05;
            const firstY = canvasSize * 0.05;
            const secondX = canvasSize * 0.65;
            const secondY = canvasSize * 0.95;
            const topX = canvasSize * 0.95;
            const topY = canvasSize * 0.5;
            this.text.titleX = canvasSize * 0.1;
            this.text.startX = canvasSize * 0.15;
            this.text.startY = canvasSize * 0.12;
            this.text.size = canvasSize * 0.07;
            setTimeout(() => {
                this.ctx.beginPath();
                this.ctx.lineWidth = canvasSize * 0.04;
                this.ctx.moveTo(firstX, firstY); //最初の点の場所
                this.ctx.lineTo(secondX,firstY); //2番目の点の場所
                this.ctx.lineTo(topX,topY); //3番目の点の場所
                this.ctx.lineTo(secondX, secondY);
                this.ctx.lineTo(firstX, secondY);
                this.ctx.closePath();	//三角形の最後の線 closeさせる
    
                this.ctx.strokeStyle = this.roadmap.strokeStyle; //枠線の色
                this.ctx.stroke();
    
                this.ctx.fillStyle= this.roadmap.fillStyle;//塗りつぶしの色
                this.ctx.fill();
                
                this.ctx.shadowColor ="#555";
                this.ctx.shadowOffsetX = 2;
                this.ctx.shadowOffsetY = 1;
                this.ctx.shadowBlur = 3;
                this.drawText();
            }, 10);
        },
        getCanvas() {
            const canvas = document.getElementById("arrow");
            canvas.setAttribute("width", this.canvasSize);
            canvas.setAttribute("height", this.canvasSize);
            this.ctx = canvas.getContext("2d");
        },
        create() {
            setTimeout(() => {
                this.getCanvas();
                this.draw(this.canvasSize);
            }, 10);
        },
        mouseOver() {
            if (typeof this.ctx === "undefined" || typeof this.roadmap === "undefined")
                return;
            this.ctx.strokeStyle = this.roadmap.fillStyle; //枠線の色
            this.ctx.stroke();

            this.ctx.fillStyle= this.roadmap.strokeStyle;//塗りつぶしの色
            this.ctx.fill();

            this.drawText();
        },
        mouseOut() {
            if (typeof this.ctx === "undefined" || typeof this.roadmap === "undefined")
                return;
            this.ctx.strokeStyle = this.roadmap.strokeStyle; //枠線の色
            this.ctx.stroke();

            this.ctx.fillStyle= this.roadmap.fillStyle;//塗りつぶしの色
            this.ctx.fill();

            this.drawText();
        },
        drawText() {
            setTimeout(() => {
                this.ctx.font = `${this.text.size}px serif`;
                this.ctx.fillStyle = "#FFF";
                const texts = [...this.roadmap.texts];
                if (!texts.length) return;
                const y = this.text.startY;
                const titles = texts.shift().split(/\n/g);
                let row = 0;
                for (let title of titles) {
                    const addY = y * row;
                    this.ctx.fillText(title.trim(), this.text.titleX, y + addY);
                    row++;
                }
                const addY = y * row;
                this.ctx.fillText('', this.text.startX, y + addY);
                row += 0.5;
                for (let text of texts) {
                    const addY = y * row;
                    this.ctx.fillText(text, this.text.startX, y + addY);
                    row++;
                }
            }, 10);
        },
        click() {
            this.$emit("clickArrow", 0)
        }
    },
    mounted() {
        this.create();
    }
}
</script>
