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
import { Alpine } from "alpinejs";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { update_camera } from "./editor/movement.js";
import { EditorAPI } from "./editor/editor_api.js";
import { UserInterface } from "./editor/interface.js";

// initialize the Editor modules
const editor_api = new EditorAPI(Alpine);
UserInterface.hook(editor_api);
Alpine.start();

// initialize threejs renderer
const renderer = new THREE.WebGLRenderer({
	antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.domElement.classList.add("position-fixed");
document.body.appendChild(renderer.domElement);

// set up editor camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera_controls = new PointerLockControls(camera, renderer.domElement);


const clock = editor_api.time;
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(60, 60, 60)")
const gridHelper = new THREE.GridHelper(100, 100);
scene.add(gridHelper);




const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
camera.position.y = 5;

setTimeout(() => {
	camera_controls.lock()
}, 1000)

function animate() {
	editor_api.update_state();
	const delta_time = editor_api.delta_time;
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	update_camera(editor_api.keys, camera, delta_time);
	renderer.render(scene, camera);

	
}