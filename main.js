import * as cardContent from './card.js';
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import HolographicMaterial from './texture.js';

// Configurar la escena, la cámara y el renderizador de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(document.querySelector('#cardcontent').clientWidth, document.querySelector('#card').clientHeight);


// Crear el material holográfico
const material = new HolographicMaterial();
const geometry = new THREE.PlaneGeometry(1, 1);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 0.3;

// Función para renderizar la escena y aplicar el canvas como fondo del div
function render() {
  requestAnimationFrame(render);
  material.update();
  renderer.render(scene, camera);

  // Obtener la URL de datos del canvas y aplicarla como fondo de los divs
  const dataURL = renderer.domElement.toDataURL('image/png');
  const cards = document.querySelectorAll('#card');
  cards.forEach(card => {
    card.style.backgroundImage = `url(${dataURL})`;
  });
}
const cards = document.querySelectorAll('#card');
cards.forEach(card => {
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(card.clientWidth, card.clientHeight);
  card.appendChild(renderer.domElement);
  render();
});