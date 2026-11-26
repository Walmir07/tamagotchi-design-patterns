class DogStateManager {

    constructor() {
        this.currentState = new HappyDogState(this);
        this.currentState.enter();
    }

    setState(state) {
        this.currentState = state;
        this.currentState.enter();
    }

    update(life) {
        this.currentState.update(life);
    }

    hit() {
        clearTimeout(this.hitTimeout);

        InterfaceManager.instance().setSadDogFace();

        this.hitTimeout = setTimeout(() => {
            this.currentState.enter();
        }, 250);
    }

}
