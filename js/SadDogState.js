class SadDogState extends DogState {

    enter() {
        InterfaceManager.instance().setSadDogFace();
    }

    update(life) {
        if(life > 300) {
            this.stateManager.setState(new HappyDogState(this.stateManager));
        }
        else if(life <= 200) {
            this.stateManager.setState(new AngryDogState(this.stateManager));
        }
    }

}
