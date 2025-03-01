// import * as THREE from 'three';

// let scene, camera, renderer;
// let floor, walls = [];
// let roomWidth = 10, roomHeight = 5, roomDepth = 10;
// let floorColor = '#00ff00', wallColor = '#ff0000';


// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 15;

//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     createRoom();

//     document.getElementById('floorColor').addEventListener('input', updateFloorColor);
//     document.getElementById('wallColor').addEventListener('input', updateWallColor);
//     document.getElementById('roomWidth').addEventListener('input', updateRoomDimensions);
//     document.getElementById('roomHeight').addEventListener('input', updateRoomDimensions);
//     document.getElementById('roomDepth').addEventListener('input', updateRoomDimensions);

//     animate();
// }

// function createRoom() {
//     const floorGeometry = new THREE.PlaneGeometry(roomWidth, roomDepth);
//     const floorMaterial = new THREE.MeshBasicMaterial({ color: floorColor, side: THREE.DoubleSide });
//     floor = new THREE.Mesh(floorGeometry, floorMaterial);
//     floor.rotation.x = - Math.PI / 2;
//     scene.add(floor);

//     const wallMaterial = new THREE.MeshBasicMaterial({ color: wallColor, side: THREE.DoubleSide });
    
//     const frontWall = new THREE.PlaneGeometry(roomWidth, roomHeight);
//     walls.push(new THREE.Mesh(frontWall, wallMaterial));
//     walls[0].position.z = -roomDepth / 2;
//     scene.add(walls[0]);

//     const backWall = new THREE.PlaneGeometry(roomWidth, roomHeight);
//     walls.push(new THREE.Mesh(backWall, wallMaterial));
//     walls[1].position.z = roomDepth / 2;
//     walls[1].rotation.y = Math.PI;
//     scene.add(walls[1]);

//     const leftWall = new THREE.PlaneGeometry(roomDepth, roomHeight);
//     walls.push(new THREE.Mesh(leftWall, wallMaterial));
//     walls[2].position.x = -roomWidth / 2;
//     walls[2].rotation.y = Math.PI / 2;
//     scene.add(walls[2]);

//     const rightWall = new THREE.PlaneGeometry(roomDepth, roomHeight);
//     walls.push(new THREE.Mesh(rightWall, wallMaterial));
//     walls[3].position.x = roomWidth / 2;
//     walls[3].rotation.y = -Math.PI / 2;
//     scene.add(walls[3]);
// }

// function updateFloorColor(event) {
//     floor.material.color.set(event.target.value);
// }

// function updateWallColor(event) {
//     walls.forEach(wall => wall.material.color.set(event.target.value));
// }

// function updateRoomDimensions() {
//     roomWidth = document.getElementById('roomWidth').value;
//     roomHeight = document.getElementById('roomHeight').value;
//     roomDepth = document.getElementById('roomDepth').value;

//     // Remove old room
//     scene.remove(floor);
//     walls.forEach(wall => scene.remove(wall));
//     walls = [];

//     // Create new room with updated dimensions
//     createRoom();
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// init();

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Resize Handler
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Objects
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Render Loop
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube for some simple animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
