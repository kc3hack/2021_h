(function () {
	function drawLine() {
		var elem = document.getElementById('myCanvas');
		var two = new Two({ type: Two.Types.svg, width: 285, height: 200 }).appendTo(elem);

		var rect = two.makeRectangle(70, 0, 100, 100);
		rect.fill = 'white';
		rect.stroke = '#1C75BC';
		
		two.update();
	}
})();

/**
 * チャットの木を作成表示するクラス
 */
class Chatree {
    /**
     * コンストラクタ
     */
    constructor() {
        this.elem = document.getElementById('myCanvas');
        this.two = new Two({ type: Two.Types.svg, width: 1280, height: 720 }).appendTo(this.elem);

        this.tree = {}
        this.parents = {}
    }

    setCard(text, sendTo, cardId, updatedAt, createBy) {
        if (text == undefined) return;

        const aCard = new Card(text, sendTo, cardId, updatedAt, createBy);
        this.parents[aCard.cardId] = aCard;

        if(aCard.sendTo == -1) {}
        else if(this.tree[aCard.sendTo] != undefined) this.tree[aCard.sendTo] += [aCard.cardId];
        else this.tree[aCard.sendTo] = [aCard.cardId];
    }

    drawTree() {
        
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


