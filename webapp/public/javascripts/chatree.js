/**
 * チャットの木を作成表示するクラス
 */
class Chatree {
    /**
     * コンストラクタ
     */
    constructor() {
        this.elem = document.getElementById('myCanvas');

        this.windowWidth = screen.width;
        this.windowHeight = screen.height;

        this.cardBetween = 80;
        this.cardWidth = 180;
        this.cardHeight = 70;

        this.betweenHeight = 30;

        this.two = new Two({ type: Two.Types.svg, width: this.windowWidth, height: this.windowHeight }).appendTo(this.elem);

        this.tree = {};
        this.parents = {};
        this.oneParent = {};
        this.root = [];

        this.coordinates = {};
    }

    setCard(text, sendTo, cardId, updatedAt, createBy) {
        if (text == undefined) return;

        const aCard = new Card(text, sendTo, cardId, updatedAt, createBy);
        this.parents[aCard.cardId] = aCard;

        if(aCard.sendTo == -1) { this.root.push(aCard.cardId); }
        else if(this.tree[aCard.sendTo] != undefined) this.tree[aCard.sendTo].push(aCard.cardId);
        else this.tree[aCard.sendTo] = [aCard.cardId];
    }

    setCoordinates() {
        if(this.root.length == 0) return;

        let queue = []; // キューを定義
        let nowLayer = -1;
        let width;

        for(let i = 0; i < this.root.length; i++) {
            queue.push([this.root[i], 0]);
        }

        while(queue.length != 0) {
            const pop = queue.shift();

            if(pop[1] != nowLayer) {
                nowLayer++;
                width = this.equalBetween(queue.length+1);
            }

            const popWidth = width.shift();
            const popHeight = this.layerToHeight(nowLayer);
            this.coordinates[pop[0]] = [popWidth, popHeight];

            this.drawCard(popWidth, this.parents[pop[0]], nowLayer);
            if(nowLayer != 0) this.drawLine(this.oneParent[pop[0]], pop[0]);

            if(this.tree[pop[0]] == undefined) continue;
            this.tree[pop[0]].forEach((card) => {
                this.oneParent[card] = pop[0];
                queue.push([card, pop[1]+1]);
            });
        }
    }

    /**
     * 座標内で均等に幅を定義する
     * カードの中央のx座標を定義する
     * @param {Integer} total 均等に異配分するカードの個数
     * @return {List<Integer>} 均等に配分した後の座標
     */
    equalBetween(total) {
        this.cardBetween = (this.windowWidth - this.cardWidth * total) / 4;

        if(this.cardBetween < 20) { this.cardBetween = 20; }

        let cardsWidth = [];
        let start = 0;

        for(let i = 0; i < total; i++) {
            start += parseInt(this.cardWidth / 2) + this.cardBetween;
            cardsWidth.push(start);
        }

        return cardsWidth;
    }

    /**
     * カードを書き出す
     */
    drawCard(width, card, layer) {
        const height = this.layerToHeight(layer);
        const rect = this.two.makeRectangle(width, height, this.cardWidth, this.cardHeight);

        rect.stroke = "#AAAAAA";

        const text = this.two.makeText(card.text, width, height);
        const num = this.two.makeText(card.cardId.toString(), width - this.cardWidth/2 + 10, height - this.cardHeight/2 + 10);

        console.log(card.createBy);
        const createBy = this.two.makeText("by " + card.createBy, width + 30, height + this.cardHeight/2 - 10);

        text.stroke = "#333333";
        num.stroke = "#333333";
        createBy.stroke = "#333333";
    }

    layerToHeight(layer) {
        const height = this.cardHeight + layer*(this.cardHeight+this.betweenHeight);
        return height;
    }

    /**
     * ラインを書き出す
     */
    drawLine(parent, child) {
        let [px, py] = this.coordinates[parent];
        let [cx, cy] = this.coordinates[child];

        const line = this.two.makeLine(px, py + this.cardHeight/2, cx, cy - this.cardHeight/2);
        line.stroke = "#AAAAAA";
    }

    update() {
        this.two.update();
    }
}

class Card {
    constructor(text, sendTo, cardId, updatedAt, createBy) {
        this.text = text;
        if(sendTo == "") this.sendTo = -1;
        else this.sendTo = parseInt(sendTo);
        this.cardId = parseInt(cardId);
        this.updatedAt = new Date(updatedAt);
        this.createBy = createBy;
    }
}
