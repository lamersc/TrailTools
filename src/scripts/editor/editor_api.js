/*
 * Web-based program for creating mods in Trailmakers
 * Copyright (C) 2025  lamersc
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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