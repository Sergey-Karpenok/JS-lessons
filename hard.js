'use strict'


const DomElement = function() {

    this.selector = '';
    this.height = "100px";
    this.width = "100px";
    this.bg = "#00FFFF";
    this.fontSize = "16px";
    this.color = "#000000";

};

const domElement = new DomElement();

DomElement.prototype.createElement = function(selector) {
    if (selector[0] === '.') {
        let div = document.createElement('div');
        div.className = selector.substr(1);
        div.style.cssText = `height: ${this.height};
                              width: ${this.width};
                              background: ${this.bg};
                              fontSize: ${this.fontSize};
                              color: ${this.color};`;
        div.textContent = prompt('Введите текст', " Привет, друзья!!");
        return document.body.appendChild(div);
    } else if (selector[0] === '#') {
        let id = document.createElement('p')
        id.setAttribute('id', selector.substr(1));
        id.style.cssText = `height: ${this.height};
                              width: ${this.width};
                              background: ${this.bg};
                              fontSize: ${this.fontSize};
                              color: ${this.color};`;
        id.textContent = prompt('Введите текст', " Привет, друзья!!");
        return document.body.appendChild(id);
    }
};

let income = domElement.createElement('.income')
console.log('income: ', income);