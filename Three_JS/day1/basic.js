
const scene = new THREE.Scene();

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75,                 // FOV
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 3. Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 4. Geometry + Material = Mesh
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

// Render
renderer.render( scene, camera );

