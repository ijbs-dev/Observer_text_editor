"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/v1', (req, res) => {
    res.send('Hello World!');
});
// GET http://localhost:3000/api/v1
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
/**
 * Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no
 * Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

- implementar uma subclasse da classe Editor chamada TextEditor;

- aplicar o método insertLine, que recebe os parâmetros lineNumber e text; inserir o texto na ordem correspondente
a lineNumber e deslocar as linhas posteriores se necessário;

aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca
as linhas posteriores se necessário;

instanciar um TextEditor e disparar o evento "open";

receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto "EOF",
que não deve ser inserido no objeto textEditor;

- por fim, o textEditor deve disparar o evento "save" para que o conteúdo seja salvo no arquivo configurado e
imprimir todo o conteúdo do arquivo na tela.

*/
// Recebe linhas de texto do usuário até que seja inserido "EOF"
const readlineSync = __importStar(require("readline-sync"));
const TextEditor_1 = require("./TextEditor");
// Exemplo de uso
const textEditor = new TextEditor_1.TextEditor();
// Adiciona um observer para o evento "open"
textEditor.addObserver(() => {
    console.log("Evento 'open' foi disparado");
});
let lineNumber = 1;
let userInput = "";
while (userInput !== "EOF") {
    userInput = readlineSync.question(`Insira o texto para a linha ${lineNumber} (ou digite 'EOF' para encerrar):`);
    if (userInput !== "EOF") {
        textEditor.insertLine(lineNumber, userInput);
        lineNumber++;
    }
}
// Dispara o evento "save" para salvar o conteúdo no arquivo e imprime o conteúdo na tela
textEditor.save();
