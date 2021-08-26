let scene, camera, renderer, cloudGeo, cloudMaterial, cloudParticles=[], flash, rain, rainGeo, rainCount = 15000, verticies=[];
let divWidth = window.innerWidth;
let divHeight = window.innerHeight;


function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1000);
  camera.position.z = 1;
  camera.position.x = 1.16;
  camera.rotation.y= -0.12;
  camera.rotation.z = 0.27;

  ambient =new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  directionalLight = new THREE.DirectionalLight(0xffeedd);
  directionalLight.position.set(0,0,1);
  scene.add(directionalLight);

  flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
  flash.position.set(200,300,100);
  scene.add(flash);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  for(let i=0; i<rainCount; i++) {
    rainDrop = new THREE.Vector3(
      Math.random() * 400 - 200,
      Math.random() * 500 - 250,
      Math.random() * 400 - 200
    );
    rainDrop.velocity = {};
    rainDrop.velocity = 0;
    verticies.push(rainDrop);
  }
  rainGeo = new THREE.BufferGeometry().setFromPoints(verticies);

  rainMaterial = new THREE.PointsMaterial( {
    color: 0xaaaaaa,
    size: 0.1,
    transparent: true
  });
  rain = new THREE.Points(rainGeo, rainMaterial);
  scene.add(rain);

  let loader = new THREE.TextureLoader();
  loader.load("../image/cloud-texture.png", function(texture){
    cloudGeo = new THREE.PlaneBufferGeometry(500,500);
    cloudMaterial = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true
    });

    for(let p=0; p<40; p++) {
      let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
      cloud.position.set(
        Math.random()*divWidth-200,
        Math.random()*divHeight-120,
        Math.random()*500 - 450
      );
      cloud.rotation.x = 1.16;
      cloud.rotation.y = -0.12;
      cloud.rotation.z = Math.random()*360;
      cloud.material.opacity = 0.8;
      cloudParticles.push(cloud);
      scene.add(cloud);
    }
    animate();
  });
}

function animate() {
  cloudParticles.forEach(p => {
    p.rotation.z -= 0.002;
  });

  for(let k=0; k<verticies.length; k++) {
    verticies[k].velocity += verticies[k].acceleration;
    verticies[k].y -= verticies[k].velocity;
    if(verticies[k].y < -200) {
      verticies[k].y = 200;
      verticies[k].velocity = 0;
    }
  }
  rainGeo.setFromPoints(verticies);
  
  if(Math.random() > 0.93 || flash.power>100) {
    flash.position.set(
      Math.random()*divWidth,
      300 + Math.random() * divHeight,
      100
    );
    flash.power += 50 + Math.random()*500;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();