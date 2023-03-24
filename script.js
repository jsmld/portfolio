// import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const body = document.body;
const button = document.querySelector('.menu-button');
button.addEventListener('click', () => {
  body.classList.toggle('offsite-container-is-open');
})
