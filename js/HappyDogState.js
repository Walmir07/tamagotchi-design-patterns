class HappyDogState extends DogState {

    enter() {
        InterfaceManager.instance().setHappyDogFace();
    }

    update(life) {
        if(life <= 300) {
            this.stateManager.setState(new SadDogState(this.stateManager));
        }
    }

}
