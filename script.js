const LOADER = document.getElementById('js-loader');

var cakeModel;

var MODEL_PATH = "cake_modeling.glb";

var loaded = false;

document.getElementById("palettecolor1").style.display="none";
document.getElementById("palettecolor2").style.display="none";
document.getElementById("gardencolor1").style.display="none";
document.getElementById("gardencolor2").style.display="none";
document.getElementById("gardencolor3").style.display="none";
document.getElementById("gardencolor4").style.display="none";
document.getElementById("gardencolor5").style.display="none";
document.getElementById("gardencolor6").style.display="none";
document.getElementById("gardencolor7").style.display="none";
document.getElementById("gardencolor8").style.display="none";
document.getElementById("gardencolor9").style.display="none";
document.getElementById("gardencolor10").style.display="none";
document.getElementById("gardenDesign").style.display="none";

function checkedSolid(){
  document.getElementById("palettecolor1").style.display="none";
  document.getElementById("palettecolor2").style.display="none";
  document.getElementById("gardencolor1").style.display="none";
  document.getElementById("gardencolor2").style.display="none";
  document.getElementById("gardencolor3").style.display="none";
  document.getElementById("gardencolor4").style.display="none";
  document.getElementById("gardencolor5").style.display="none";
  document.getElementById("gardencolor6").style.display="none";
  document.getElementById("gardencolor7").style.display="none";
  document.getElementById("gardencolor8").style.display="none";
  document.getElementById("gardencolor9").style.display="none";
  document.getElementById("gardencolor10").style.display="none";
  document.getElementById("gardenDesign").style.display="none";
  document.getElementById("cBase").value="#f1f1f1";
  document.getElementById("cTop").value="#f1f1f1";
  document.getElementById("cSide").value="#f1f1f1";
  document.getElementById("cBottom").value="#f1f1f1";
  MTL_1.color.set(0xf1f1f1);
  MTL_2.color.set(0xf1f1f1);
  MTL_3.color.set(0xf1f1f1);
  MTL_4.color.set(0xf1f1f1);
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("palette")||child.name.includes("garden")||child.name.includes("cream2")||child.name.includes("cream3")||child.name.includes("cream4")||child.name.includes("cream5")){
        child.visible = false;
      } else {
        child.visible = true;
      }
    }
  });
}


function checkedPalette(){
  document.getElementById("palettecolor1").style.display="flex";
  document.getElementById("palettecolor2").style.display="flex";
  document.getElementById("gardencolor1").style.display="none";
  document.getElementById("gardencolor2").style.display="none";
  document.getElementById("gardencolor3").style.display="none";
  document.getElementById("gardencolor4").style.display="none";
  document.getElementById("gardencolor5").style.display="none";
  document.getElementById("gardencolor6").style.display="none";
  document.getElementById("gardencolor7").style.display="none";
  document.getElementById("gardencolor8").style.display="none";
  document.getElementById("gardencolor9").style.display="none";
  document.getElementById("gardencolor10").style.display="none";
  document.getElementById("gardenDesign").style.display="none";
  document.getElementById("cBase").value="#f1f1f1";
  document.getElementById("cTop").value="#f1f1f1";
  document.getElementById("cSide").value="#f1f1f1";
  document.getElementById("cBottom").value="#f1f1f1";
  document.getElementById("cPalette1").value="#f1f1f1";
  document.getElementById("cPalette2").value="#f1f1f1";
  MTL_1.color.set(0xf1f1f1);
  MTL_2.color.set(0xf1f1f1);
  MTL_3.color.set(0xf1f1f1);
  MTL_4.color.set(0xf1f1f1);
  MTL_5.color.set(0xf1f1f1);
  MTL_6.color.set(0xf1f1f1);
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("palette")){
        child.visible = true;
      }
      else if(child.name.includes("garden")){
        child.visible = false;
      }
    }
  })
}

function checkedGarden(){
  document.getElementById("palettecolor1").style.display="none";
  document.getElementById("palettecolor2").style.display="none";
  document.getElementById("gardencolor1").style.display="flex";
  document.getElementById("gardencolor2").style.display="flex";
  document.getElementById("gardencolor3").style.display="flex";
  document.getElementById("gardencolor4").style.display="none";
  document.getElementById("gardencolor5").style.display="none";
  document.getElementById("gardencolor6").style.display="none";
  document.getElementById("gardencolor7").style.display="none";
  document.getElementById("gardencolor8").style.display="none";
  document.getElementById("gardencolor9").style.display="none";
  document.getElementById("gardencolor10").style.display="none";
  document.getElementById("gardenDesign").style.display="block";
  document.getElementById("cBase").value="#f1f1f1";
  document.getElementById("cTop").value="#f1f1f1";
  document.getElementById("cSide").value="#f1f1f1";
  document.getElementById("cBottom").value="#f1f1f1";
  document.getElementById("cGarden1").value="#f1f1f1";
  document.getElementById("cGarden2").value="#f1f1f1";
  document.getElementById("cGarden3").value="#f1f1f1";
  MTL_1.color.set(0xf1f1f1);
  MTL_2.color.set(0xf1f1f1);
  MTL_3.color.set(0xf1f1f1);
  MTL_4.color.set(0xf1f1f1);
  MTL_7.color.set(0xf1f1f1);
  MTL_8.color.set(0xf1f1f1);
  MTL_9.color.set(0xf1f1f1);
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("garden_a")){
        child.visible = true;
      }
      else if(child.name.includes("palette", "garden_b", "garden_c", "garden_d")){
        child.visible = false;
      }
    }
  })
}

function selectGarden(z){
 if(z.value == "garden1"){
  document.getElementById("gardencolor1").style.display="flex";
  document.getElementById("gardencolor2").style.display="flex";
  document.getElementById("gardencolor3").style.display="flex";
  document.getElementById("gardencolor4").style.display="none";
  document.getElementById("gardencolor5").style.display="none";
  document.getElementById("gardencolor6").style.display="none";
  document.getElementById("gardencolor7").style.display="none";
  document.getElementById("gardencolor8").style.display="none";
  document.getElementById("gardencolor9").style.display="none";
  document.getElementById("gardencolor10").style.display="none";
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("garden_a")){
        child.visible = true;
      }
      else if(child.name.includes("garden_b")){
        child.visible = false;
      }
      else if(child.name.includes("garden_c")){
        child.visible = false;
      }
      else if(child.name.includes("garden_d")){
        child.visible = false;
      }
    }
  })
 }
 else if(z.value == "garden2"){
  document.getElementById("gardencolor1").style.display="none";
  document.getElementById("gardencolor2").style.display="none";
  document.getElementById("gardencolor3").style.display="none";
  document.getElementById("gardencolor4").style.display="flex";
  document.getElementById("gardencolor5").style.display="flex";
  document.getElementById("gardencolor6").style.display="none";
  document.getElementById("gardencolor7").style.display="none";
  document.getElementById("gardencolor8").style.display="none";
  document.getElementById("gardencolor9").style.display="none";
  document.getElementById("gardencolor10").style.display="none";
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("garden_b")){
        child.visible = true;
      }
      else if(child.name.includes("garden_a")){
        child.visible = false;
      }
      else if(child.name.includes("garden_c")){
        child.visible = false;
      }
      else if(child.name.includes("garden_d")){
        child.visible = false;
      }
    }
  })
 }
 else if(z.value == "garden3"){
  document.getElementById("gardencolor1").style.display="none";
  document.getElementById("gardencolor2").style.display="none";
  document.getElementById("gardencolor3").style.display="none";
  document.getElementById("gardencolor4").style.display="none";
  document.getElementById("gardencolor5").style.display="none";
  document.getElementById("gardencolor6").style.display="flex";
  document.getElementById("gardencolor7").style.display="flex";
  document.getElementById("gardencolor8").style.display="flex";
  document.getElementById("gardencolor9").style.display="none";
  document.getElementById("gardencolor10").style.display="none";
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("garden_c")){
        child.visible = true;
      }
      else if(child.name.includes("garden_a")){
        child.visible = false;
      }
      else if(child.name.includes("garden_b")){
        child.visible = false;
      }
      else if(child.name.includes("garden_d")){
        child.visible = false;
      }
    }
  })
 }
 else if(z.value == "garden4"){
  document.getElementById("gardencolor1").style.display="none";
  document.getElementById("gardencolor2").style.display="none";
  document.getElementById("gardencolor3").style.display="none";
  document.getElementById("gardencolor4").style.display="none";
  document.getElementById("gardencolor5").style.display="none";
  document.getElementById("gardencolor6").style.display="none";
  document.getElementById("gardencolor7").style.display="none";
  document.getElementById("gardencolor8").style.display="none";
  document.getElementById("gardencolor9").style.display="flex";
  document.getElementById("gardencolor10").style.display="flex";
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("garden_d")){
        child.visible = true;
      }
      else if(child.name.includes("garden_a")){
        child.visible = false;
      }
      else if(child.name.includes("garden_b")){
        child.visible = false;
      }
      else if(child.name.includes("garden_c")){
        child.visible = false;
      }
    }
  })
 }
}

function selectCream(y){
  if(y.value == "cream1"){
    document.getElementById("sidecolor").style.display="flex";
    cakeModel.traverse(function(child){
      if(child instanceof THREE.Mesh){
        if(child.name.includes("cream1")){
          child.visible = true;
        }
        else if(child.name.includes("cream2")){
          child.visible = false;
        }
        else if(child.name.includes("cream3")){
          child.visible = false;
        }
        else if(child.name.includes("cream4")){
          child.visible = false;
        }
        else if(child.name.includes("cream5")){
          child.visible = false;
        }
      }
    })
   }
   else if(y.value == "cream2"){
    document.getElementById("sidecolor").style.display="flex";
    cakeModel.traverse(function(child){
      if(child instanceof THREE.Mesh){
        if(child.name.includes("cream2")){
          child.visible = true;
        }
        else if(child.name.includes("cream1")){
          child.visible = false;
        }
        else if(child.name.includes("cream3")){
          child.visible = false;
        }
        else if(child.name.includes("cream4")){
          child.visible = false;
        }
        else if(child.name.includes("cream5")){
          child.visible = false;
        }
      }
    })
   }
   else if(y.value == "cream3"){
    document.getElementById("sidecolor").style.display="none";
    cakeModel.traverse(function(child){
      if(child instanceof THREE.Mesh){
        if(child.name.includes("cream3")){
          child.visible = true;
        }
        else if(child.name.includes("cream1")){
          child.visible = false;
        }
        else if(child.name.includes("cream2")){
          child.visible = false;
        }
        else if(child.name.includes("cream4")){
          child.visible = false;
        }
        else if(child.name.includes("cream5")){
          child.visible = false;
        }
      }
    })
   }
   else if(y.value == "cream4"){
    document.getElementById("sidecolor").style.display="none";
    cakeModel.traverse(function(child){
      if(child instanceof THREE.Mesh){
        if(child.name.includes("cream4")){
          child.visible = true;
        }
        else if(child.name.includes("cream1")){
          child.visible = false;
        }
        else if(child.name.includes("cream2")){
          child.visible = false;
        }
        else if(child.name.includes("cream3")){
          child.visible = false;
        }
        else if(child.name.includes("cream5")){
          child.visible = false;
        }
      }
    })
   }
   else if(y.value == "cream5"){
    document.getElementById("sidecolor").style.display="flex";
    cakeModel.traverse(function(child){
      if(child instanceof THREE.Mesh){
        if(child.name.includes("cream5")){
          child.visible = true;
        }
        else if(child.name.includes("cream1")){
          child.visible = false;
        }
        else if(child.name.includes("cream3")){
          child.visible = false;
        }
        else if(child.name.includes("cream4")){
          child.visible = false;
        }
        else if(child.name.includes("cream2")){
          child.visible = false;
        }
      }
    })
   }
}

const scene = new THREE.Scene();
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha : true });
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);


var cameraFar = 5;

document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = cameraFar;
camera.position.y = 55;

let MTL_1 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_2 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_3 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_4 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_5 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_6 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_7 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_8 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_9 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_10 = new THREE.MeshLambertMaterial({color: 0xf1f1f1, transparent : true, opacity : 0.6});
let MTL_11 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_12 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_13 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_14 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_15 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_16 = new THREE.MeshLambertMaterial({color: 0xf1f1f1, transparent : true, opacity : 0.8});

function selectBaseColor(a){
  MTL_1.color.set(a);
}
function selectTopColor(b){
  MTL_2.color.set(b);
}
function selectSideColor(c){
  MTL_3.color.set(c);
}
function selectBottomColor(d){
  MTL_4.color.set(d);
}
function selectColor1Color(e){
  MTL_5.color.set(e);
}
function selectColor2Color(f){
  MTL_6.color.set(f);
}
function selectGarden1Color(g){
  MTL_7.color.set(g);
}
function selectGarden2Color(h){
  MTL_8.color.set(h);
}
function selectGarden3Color(i){
  MTL_9.color.set(i);
}
function selectGarden4Color(j){
  MTL_10.color.set(j);
}
function selectGarden5Color(k){
  MTL_11.color.set(k);
}
function selectGarden6Color(l){
  MTL_12.color.set(l);
}
function selectGarden7Color(m){
  MTL_13.color.set(m);
}
function selectGarden8Color(n){
  MTL_14.color.set(n);
}
function selectGarden9Color(o){
  MTL_15.color.set(o);
}
function selectGarden10Color(p){
  MTL_16.color.set(p);
}
let INITIAL_MAP = [
{ childID: "base", mtl: MTL_1},
{ childID: "cream1_t", mtl: MTL_2},
{ childID: "cream2_t", mtl: MTL_2},
{ childID: "cream3_t", mtl: MTL_2},
{ childID: "cream4_t", mtl: MTL_2},
{ childID: "cream5_t", mtl: MTL_2},
{ childID: "cream1_s", mtl: MTL_3},
{ childID: "cream2_s", mtl: MTL_3},
{ childID: "cream5_s", mtl: MTL_3},
{ childID: "cream1_b", mtl: MTL_4},
{ childID: "cream2_b", mtl: MTL_4},
{ childID: "cream3_b", mtl: MTL_4},
{ childID: "cream4_b", mtl: MTL_4},
{ childID: "cream5_b", mtl: MTL_4},
{ childID: "palette_1", mtl: MTL_5},
{ childID: "palette_2", mtl: MTL_6},
{ childID: "garden_a_1", mtl: MTL_7},
{ childID: "garden_a_2", mtl: MTL_8},
{ childID: "garden_a_3", mtl: MTL_9},
{ childID: "garden_b_1", mtl: MTL_10},
{ childID: "garden_b_2", mtl: MTL_11},
{ childID: "garden_c_1", mtl: MTL_12},
{ childID: "garden_c_2", mtl: MTL_13},
{ childID: "garden_c_3", mtl: MTL_14},
{ childID: "garden_d_1", mtl: MTL_15},
{ childID: "garden_d_2", mtl: MTL_16}];

var loader = new THREE.GLTFLoader();

loader.load(MODEL_PATH, function (gltf) {
  cakeModel = gltf.scene;

  cakeModel.traverse(o => {
    if (o.isMesh) {
      o.receiveShadow = true;
    }
  });

  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("palette")||child.name.includes("garden")||child.name.includes("cream2")||child.name.includes("cream3")||child.name.includes("cream4")||child.name.includes("cream5")){
        child.visible = false;
      }
    }
  })
  
  cakeModel.scale.set(0.1, 0.1, 0.1);
  cakeModel.rotation.y = Math.PI;
  cakeModel.position.y = 3.5;
  

  for (let object of INITIAL_MAP) {
    initColor(cakeModel, object.childID, object.mtl);
  }

  function initColor(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type;
      }
    }
  });
}


  scene.add(cakeModel);

  LOADER.remove();

}, undefined, function (error) {
  console.error(error);
});

var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
hemiLight.position.set(0, 50, 0);  
scene.add(hemiLight);

var dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
dirLight.position.set(-20, 30, 20);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1920, 1920); 
dirLight.shadow.radius = 2;
scene.add(dirLight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2.5;
controls.minPolarAngle = Math.PI / 4.5;
controls.minDistance = 38;
controls.maxDistance = 48;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = true;
controls.autoRotateSpeed = 3;

function animate() {

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}

animate();

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}


var sliderWrapper = document.getElementsByClassName('page-container'),
     sliderContainer = document.getElementsByClassName('slider-container'),
     slides = document.getElementsByClassName('page'),
     slideCount = slides.length,
     currentIndex = 0,
     topHeight = 0,
     navPrev = document.getElementById('prev'),
     navNext = document.getElementById('next'),
     navFinish = document.getElementById('finish');
	
function goToSlide(idx){
    sliderContainer[0].style.left = idx * -460 + 'px';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;

    updateNav();
}

function updateNav(){

    if(currentIndex == 0){
        navPrev.classList.add('disabled');
    }else{
        navPrev.classList.remove('disabled');
    }

    if(currentIndex == slideCount -1){
        navNext.classList.add('disabled');
        navFinish.classList.remove('disabled');
    }else{
        navNext.classList.remove('disabled');
        navFinish.classList.add('disabled');
    }
}

navPrev.addEventListener('click', function(e){
    e.preventDefault();
    goToSlide(currentIndex - 1);
});

navNext.addEventListener('click', function(e){
    e.preventDefault();
    goToSlide(currentIndex + 1);
});

goToSlide(0);
