class Event {
    static DogIsDeadEvent = "DogIsDeadEvent";
    static DogHitEvent = "DogHitEvent";
    constructor(type, data) {
        this.type = type;
        this.data = data;
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    raise() {
        for(let observer of this.observers) {
            observer.receiveEvent(this);
        }
    }
}