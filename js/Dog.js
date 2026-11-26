class Dog {

    static #myself;

    constructor() {
        if(Dog.#myself) {
            return Dog.#myself;
        }

        this.name = "Bruce Twist";
        this.life = 500;
        this.isDead = false;
        this.dogStateManager = new DogStateManager();

        this.dogIsDeadEvent = new Event(Event.DogIsDeadEvent, this.life);
        this.dogHitEvent = new Event(Event.DogHitEvent, this.life);

        this.dogIsDeadEvent.addObserver(InterfaceManager.instance());
        this.dogIsDeadEvent.addObserver(SoundManager.instance());
        this.dogHitEvent.addObserver(InterfaceManager.instance());
        this.dogHitEvent.addObserver(SoundManager.instance());

        Dog.#myself = this;
    }

    static instance() {
        if(!Dog.#myself) {
            return new Dog();
        }
        return Dog.#myself;
    }

    
    receiveDamage(damage) {
        if(this.isDead) return;

        this.life -= damage;
        this.life = Math.max(this.life, 0);
        this.isDead = this.life == 0;

        //O método state contrala o homor conforme a vida do cachorro.
        this.dogStateManager.update(this.life);

        if(this.isDead) {
            clearTimeout(this.dogStateManager.hitTimeout);

            this.dogIsDeadEvent.data = this.life;
            this.dogIsDeadEvent.raise();
        }
        else {
            this.dogStateManager.hit();

            this.dogHitEvent.data = this.life;
            this.dogHitEvent.raise();
        }
    }


}
