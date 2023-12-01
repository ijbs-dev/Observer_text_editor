// Implementação base do padrão Observer
export class Observer {
    private observers: Function[] = [];
  
    addObserver(observer: Function): void {
      this.observers.push(observer);
    }
  
    notifyObservers(): void {
      this.observers.forEach(observer => observer());
    }
  }
  
  