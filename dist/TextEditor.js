"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEditor = void 0;
const Editor_1 = require("./Editor");
// Subclasse TextEditor com métodos adicionais insertLine e removeLine
class TextEditor extends Editor_1.Editor {
    insertLine(lineNumber, text) {
        const lines = this.content.split('\n');
        lines.splice(lineNumber - 1, 0, text);
        this.content = lines.join('\n');
    }
    removeLine(lineNumber) {
        const lines = this.content.split('\n');
        lines.splice(lineNumber - 1, 1);
        this.content = lines.join('\n');
    }
}
exports.TextEditor = TextEditor;
