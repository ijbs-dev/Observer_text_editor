"use strict";
// Implementação base do padrão Observer
class Observer {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer());
    }
}
