class DeadDogState extends DogState {

    enter() {
        InterfaceManager.instance().setDeadDogFace();
    }

    update(life) {
        // O cachorro permanece nesse estado.
    }

}
