class AngryDogState extends DogState {

    enter() {
        InterfaceManager.instance().setAngryDogFace();
    }

    update(life) {
        if(life > 200) {
            this.stateManager.setState(new SadDogState(this.stateManager));
        }
        else if(life <= 0) {
            this.stateManager.setState(new DeadDogState(this.stateManager));
        }
    }

}
