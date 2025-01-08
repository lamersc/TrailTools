import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { update_camera } from "./editor/movement.js";
import { EditorAPI } from "./editor/editor_api.js";
import { UserInterface } from "./editor/interface.js";

// initialize the Editor modules
const editor_api = new EditorAPI();
UserInterface.hook();

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