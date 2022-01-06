const BG_COLOR = new THREE.Color("rgb(255, 255, 255)");
const SCENE = new THREE.Scene();
SCENE.background = BG_COLOR;
const CAMERA = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const RENDERER = new THREE.WebGLRenderer();
RENDERER.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(RENDERER.domElement);
const GEOMETRY = new THREE.BoxGeometry();
const MATERIAL = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const CUBE = new THREE.Mesh(GEOMETRY, MATERIAL);
SCENE.add(CUBE);

CAMERA.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  RENDERER.render(SCENE, CAMERA);
  CUBE.rotation.x += 0.01;
  CUBE.rotation.y += 0.01;
}
animate();
