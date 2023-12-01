import { Observer } from "./Observer";
// Classe base Editor
export class Editor extends Observer {
    protected content: string = "";
  
    open(): void {
      console.log("Editor aberto");
      this.notifyObservers();
    }
  
    save(): void {
      console.log("Conteúdo salvo:", this.content);
    }
  }
  