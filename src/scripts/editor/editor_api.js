import * as THREE from "three";


const clock = new THREE.Clock();

class KeyStates {
    key_map = new Map();

    constructor() {
        document.addEventListener("keydown", (event) => {
            this.key_map.set(event.key.toLowerCase(), true);
        })
        document.addEventListener("keyup", (event) => {
            this.key_map.set(event.key.toLowerCase(), false);
        })
    }
    hold(key) {
        this.key_map.set(key.toLowerCase(), true);
    }
    release(key) {
        this.key_map.set(key.toLowerCase(), false);
    }
    is_pressed(key) {
        return Boolean(this.key_map.get(key.toLowerCase())); // convert to bool in case of null
    }
}

class EditorAPI {
    keys = new KeyStates();
    delta_time = clock.getDelta();
    assets = new Map();
    constructor() {
        
    }
    update_state() {
        this.delta_time = clock.getDelta();
    }
}

export { EditorAPI };