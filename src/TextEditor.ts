import { Editor } from './Editor';

// Subclasse TextEditor com métodos adicionais insertLine e removeLine
export class TextEditor extends Editor {
    insertLine(lineNumber: number, text: string): void {
      const lines = this.content.split('\n');
      lines.splice(lineNumber - 1, 0, text);
      this.content = lines.join('\n');
    }
  
    removeLine(lineNumber: number): void {
      const lines = this.content.split('\n');
      lines.splice(lineNumber - 1, 1);
      this.content = lines.join('\n');
    }
  }