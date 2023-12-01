"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
// Classe base Editor
class Editor extends Observer {
    constructor() {
        super(...arguments);
        this.content = "";
    }
    open() {
        console.log("Editor aberto");
        this.notifyObservers();
    }
    save() {
        console.log("Conteúdo salvo:", this.content);
    }
}
exports.Editor = Editor;
