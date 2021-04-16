'use strict'


const DomElement = function() {

    this.selector = '';
    this.height = 0;
    this.width = 0;
    this.bg = 0;
    this.fontSize = 0;

    createElement: function(selector) {
        if (selector[0] === '.') {
            let div = document.createElement('div');
            div.className = selector.substr(1);
        } else if (selector[0] === '#') {
            let id = document.createElement('p')
            id.setAttribute('id', selector.substr(1));
        }
    };
};

const domElement = new DomElement();