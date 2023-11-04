const LOADER = document.getElementById('js-loader');

var cakeModel;

var MODEL_PATH = "cake_modeling.glb";

var loaded = false;

window.onload = function () { buildCalendar(); }   

let nowMonth = new Date();  
let today = new Date();    
today.setHours(0, 0, 0, 0);    

function buildCalendar() {

    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  

    let tbody_Calendar = document.querySelector(".calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();            
    document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  

    while (tbody_Calendar.rows.length > 0) {                        
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();                

    for (let j = 0; j < firstDate.getDay(); j++) {  
        let nowColumn = nowRow.insertCell();        
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {     

        let nowColumn = nowRow.insertCell();       


        let newDIV = document.createElement("p");
        newDIV.innerHTML = leftPad(nowDay.getDate());       
        nowColumn.appendChild(newDIV);

        if (nowDay.getDay() == 6) {                
            nowRow = tbody_Calendar.insertRow();   
        }

        if (nowDay < today) {                      
            newDIV.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            newDIV.className = "today";
            newDIV.onclick = function () { choiceDate(this); }
        }
        else {                                      
            newDIV.className = "futureDay";
            newDIV.onclick = function () { choiceDate(this); }
        }
    }
}

function choiceDate(newDIV) {
    if (document.getElementsByClassName("choiceDay")[0]) {                     
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay"); 
    }
    newDIV.classList.add("choiceDay");
    document.getElementById("pickupDate").innerHTML = document.getElementById("calYear").innerText + ". " + document.getElementById("calMonth").innerText + ". " + document.querySelector(".choiceDay").innerText;  
}

function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   
    buildCalendar();    
}

function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   
    buildCalendar();    
}

function leftPad(value) {
    return value;
}


function checkedtime11(){
  document.getElementById("time11").classList.replace("time-button", "time-selected");
  document.getElementById("time12").classList.replace("time-selected", "time-button");
  document.getElementById("time13").classList.replace("time-selected", "time-button");
  document.getElementById("time14").classList.replace("time-selected", "time-button");
  document.getElementById("time15").classList.replace("time-selected", "time-button");
  document.getElementById("time16").classList.replace("time-selected", "time-button");
  document.getElementById("time17").classList.replace("time-selected", "time-button");
  document.getElementById("time18").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "11:00";
}

function checkedtime12(){
  document.getElementById("time12").classList.replace("time-button", "time-selected");
  document.getElementById("time11").classList.replace("time-selected", "time-button");
  document.getElementById("time13").classList.replace("time-selected", "time-button");
  document.getElementById("time14").classList.replace("time-selected", "time-button");
  document.getElementById("time15").classList.replace("time-selected", "time-button");
  document.getElementById("time16").classList.replace("time-selected", "time-button");
  document.getElementById("time17").classList.replace("time-selected", "time-button");
  document.getElementById("time18").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "12:00";
}

function checkedtime13(){
  document.getElementById("time13").classList.replace("time-button", "time-selected");
  document.getElementById("time11").classList.replace("time-selected", "time-button");
  document.getElementById("time12").classList.replace("time-selected", "time-button");
  document.getElementById("time14").classList.replace("time-selected", "time-button");
  document.getElementById("time15").classList.replace("time-selected", "time-button");
  document.getElementById("time16").classList.replace("time-selected", "time-button");
  document.getElementById("time17").classList.replace("time-selected", "time-button");
  document.getElementById("time18").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "13:00";
}

function checkedtime14(){
  document.getElementById("time14").classList.replace("time-button", "time-selected");
  document.getElementById("time11").classList.replace("time-selected", "time-button");
  document.getElementById("time12").classList.replace("time-selected", "time-button");
  document.getElementById("time13").classList.replace("time-selected", "time-button");
  document.getElementById("time15").classList.replace("time-selected", "time-button");
  document.getElementById("time16").classList.replace("time-selected", "time-button");
  document.getElementById("time17").classList.replace("time-selected", "time-button");
  document.getElementById("time18").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "14:00";
}

function checkedtime15(){
  document.getElementById("time15").classList.replace("time-button", "time-selected");
  document.getElementById("time11").classList.replace("time-selected", "time-button");
  document.getElementById("time12").classList.replace("time-selected", "time-button");
  document.getElementById("time13").classList.replace("time-selected", "time-button");
  document.getElementById("time14").classList.replace("time-selected", "time-button");
  document.getElementById("time16").classList.replace("time-selected", "time-button");
  document.getElementById("time17").classList.replace("time-selected", "time-button");
  document.getElementById("time18").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "15:00";
}

function checkedtime16(){
  document.getElementById("time16").classList.replace("time-button", "time-selected");
  document.getElementById("time11").classList.replace("time-selected", "time-button");
  document.getElementById("time12").classList.replace("time-selected", "time-button");
  document.getElementById("time13").classList.replace("time-selected", "time-button");
  document.getElementById("time14").classList.replace("time-selected", "time-button");
  document.getElementById("time15").classList.replace("time-selected", "time-button");
  document.getElementById("time17").classList.replace("time-selected", "time-button");
  document.getElementById("time18").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "16:00";
}

function checkedtime17(){
  document.getElementById("time17").classList.replace("time-button", "time-selected");
  document.getElementById("time11").classList.replace("time-selected", "time-button");
  document.getElementById("time12").classList.replace("time-selected", "time-button");
  document.getElementById("time13").classList.replace("time-selected", "time-button");
  document.getElementById("time14").classList.replace("time-selected", "time-button");
  document.getElementById("time15").classList.replace("time-selected", "time-button");
  document.getElementById("time16").classList.replace("time-selected", "time-button");
  document.getElementById("time18").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "17:00";
}

function checkedtime18(){
  document.getElementById("time18").classList.replace("time-button", "time-selected");
  document.getElementById("time11").classList.replace("time-selected", "time-button");
  document.getElementById("time12").classList.replace("time-selected", "time-button");
  document.getElementById("time13").classList.replace("time-selected", "time-button");
  document.getElementById("time14").classList.replace("time-selected", "time-button");
  document.getElementById("time15").classList.replace("time-selected", "time-button");
  document.getElementById("time16").classList.replace("time-selected", "time-button");
  document.getElementById("time17").classList.replace("time-selected", "time-button");
  document.getElementById("pickupTime").innerHTML = "18:00";
}

function checkedVanilla(){
  document.getElementById("vanilla-check").src = "checked.png";
  document.getElementById("chocolate-check").src = "unchecked.png";
  document.getElementById("redvelvet-check").src = "unchecked.png";
  document.getElementById("matcha-check").src = "unchecked.png";
}

function checkedChocolate(){
  document.getElementById("vanilla-check").src = "unchecked.png";
  document.getElementById("chocolate-check").src = "checked.png";
  document.getElementById("redvelvet-check").src = "unchecked.png";
  document.getElementById("matcha-check").src = "unchecked.png";
}

function checkedRedvelvet(){
  document.getElementById("vanilla-check").src = "unchecked.png";
  document.getElementById("chocolate-check").src = "unchecked.png";
  document.getElementById("redvelvet-check").src = "checked.png";
  document.getElementById("matcha-check").src = "unchecked.png";
}

function checkedMatcha(){
  document.getElementById("vanilla-check").src = "unchecked.png";
  document.getElementById("chocolate-check").src = "unchecked.png";
  document.getElementById("redvelvet-check").src = "unchecked.png";
  document.getElementById("matcha-check").src = "checked.png";
}

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
  document.getElementById("final_palette1").style.display = "none";
  document.getElementById("final_palette2").style.display = "none";
  document.getElementById("final_garden1_leaves").style.display = "none";
  document.getElementById("final_garden2_leaves").style.display = "none";
  document.getElementById("final_garden3_leaves").style.display = "none";
  document.getElementById("final_garden4_trunks").style.display = "none";
  document.getElementById("final_garden1_petals").style.display = "none";
  document.getElementById("final_garden2_petals").style.display = "none";
  document.getElementById("final_garden3_petals").style.display = "none";
  document.getElementById("final_garden4_petals").style.display = "none";
  document.getElementById("final_garden1_points").style.display = "none";
  document.getElementById("final_garden3_points").style.display = "none";
  document.getElementById("solid-check").src = "checked.png";
  document.getElementById("palette-check").src = "unchecked.png";
  document.getElementById("garden-check").src = "unchecked.png";
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
  document.getElementById('finalBase').style.fill ="#f1f1f1";
  document.getElementById('finalTop').style.fill = "#f1f1f1";
  document.getElementById('finalSide').style.fill = "#f1f1f1";
  document.getElementById('finalBottom').style.fill = "#f1f1f1";
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
  document.getElementById("final_palette1").style.display = "block";
  document.getElementById("final_palette2").style.display = "block";
  document.getElementById("final_garden1_leaves").style.display = "none";
  document.getElementById("final_garden2_leaves").style.display = "none";
  document.getElementById("final_garden3_leaves").style.display = "none";
  document.getElementById("final_garden4_trunks").style.display = "none";
  document.getElementById("final_garden1_petals").style.display = "none";
  document.getElementById("final_garden2_petals").style.display = "none";
  document.getElementById("final_garden3_petals").style.display = "none";
  document.getElementById("final_garden4_petals").style.display = "none";
  document.getElementById("final_garden1_points").style.display = "none";
  document.getElementById("final_garden3_points").style.display = "none";
  document.getElementById("solid-check").src = "unchecked.png";
  document.getElementById("palette-check").src = "checked.png";
  document.getElementById("garden-check").src = "unchecked.png";
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
  document.getElementById('finalBase').style.fill ="#f1f1f1";
  document.getElementById('finalTop').style.fill = "#f1f1f1";
  document.getElementById('finalSide').style.fill = "#f1f1f1";
  document.getElementById('finalBottom').style.fill = "#f1f1f1";
  document.getElementById('final_palette1').style.fill = "#f1f1f1";
  document.getElementById('final_palette2').style.fill = "#f1f1f1";
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
  document.getElementById("final_palette1").style.display = "none";
  document.getElementById("final_palette2").style.display = "none";
  document.getElementById("final_garden1_leaves").style.display = "block";
  document.getElementById("final_garden2_leaves").style.display = "none";
  document.getElementById("final_garden3_leaves").style.display = "none";
  document.getElementById("final_garden4_trunks").style.display = "none";
  document.getElementById("final_garden1_petals").style.display = "block";
  document.getElementById("final_garden2_petals").style.display = "none";
  document.getElementById("final_garden3_petals").style.display = "none";
  document.getElementById("final_garden4_petals").style.display = "none";
  document.getElementById("final_garden1_points").style.display = "block";
  document.getElementById("final_garden3_points").style.display = "none";
  document.getElementById("solid-check").src = "unchecked.png";
  document.getElementById("palette-check").src = "unchecked.png";
  document.getElementById("garden-check").src = "checked.png";
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
  document.getElementById("gardenDesign").value="garden1"
  MTL_1.color.set(0xf1f1f1);
  MTL_2.color.set(0xf1f1f1);
  MTL_3.color.set(0xf1f1f1);
  MTL_4.color.set(0xf1f1f1);
  MTL_7.color.set(0xf1f1f1);
  MTL_8.color.set(0xf1f1f1);
  MTL_9.color.set(0xf1f1f1);
  document.getElementById('finalBase').style.fill ="#f1f1f1";
  document.getElementById('finalTop').style.fill = "#f1f1f1";
  document.getElementById('finalSide').style.fill = "#f1f1f1";
  document.getElementById('finalBottom').style.fill = "#f1f1f1";
  document.getElementById('final_garden1_petals').style.fill = "#f1f1f1";
  document.getElementById('final_garden1_points').style.fill = "#f1f1f1";
  document.getElementById('final_garden1_leaves').style.fill = "#f1f1f1";
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
  document.getElementById("final_garden1_leaves").style.display = "block";
  document.getElementById("final_garden2_leaves").style.display = "none";
  document.getElementById("final_garden3_leaves").style.display = "none";
  document.getElementById("final_garden4_trunks").style.display = "none";
  document.getElementById("final_garden1_petals").style.display = "block";
  document.getElementById("final_garden2_petals").style.display = "none";
  document.getElementById("final_garden3_petals").style.display = "none";
  document.getElementById("final_garden4_petals").style.display = "none";
  document.getElementById("final_garden1_points").style.display = "block";
  document.getElementById("final_garden3_points").style.display = "none";
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
  document.getElementById("final_garden1_leaves").style.display = "none";
  document.getElementById("final_garden2_leaves").style.display = "block";
  document.getElementById("final_garden3_leaves").style.display = "none";
  document.getElementById("final_garden4_trunks").style.display = "none";
  document.getElementById("final_garden1_petals").style.display = "none";
  document.getElementById("final_garden2_petals").style.display = "block";
  document.getElementById("final_garden3_petals").style.display = "none";
  document.getElementById("final_garden4_petals").style.display = "none";
  document.getElementById("final_garden1_points").style.display = "none";
  document.getElementById("final_garden3_points").style.display = "none";
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
  document.getElementById("final_garden1_leaves").style.display = "none";
  document.getElementById("final_garden2_leaves").style.display = "none";
  document.getElementById("final_garden3_leaves").style.display = "block";
  document.getElementById("final_garden4_trunks").style.display = "none";
  document.getElementById("final_garden1_petals").style.display = "none";
  document.getElementById("final_garden2_petals").style.display = "none";
  document.getElementById("final_garden3_petals").style.display = "block";
  document.getElementById("final_garden4_petals").style.display = "none";
  document.getElementById("final_garden1_points").style.display = "none";
  document.getElementById("final_garden3_points").style.display = "block";
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
  document.getElementById("final_garden1_leaves").style.display = "none";
  document.getElementById("final_garden2_leaves").style.display = "none";
  document.getElementById("final_garden3_leaves").style.display = "none";
  document.getElementById("final_garden4_trunks").style.display = "block";
  document.getElementById("final_garden1_petals").style.display = "none";
  document.getElementById("final_garden2_petals").style.display = "none";
  document.getElementById("final_garden3_petals").style.display = "none";
  document.getElementById("final_garden4_petals").style.display = "block";
  document.getElementById("final_garden1_points").style.display = "none";
  document.getElementById("final_garden3_points").style.display = "none";
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
    document.getElementById("final_bottom1").style.display = "block";
    document.getElementById("final_side1").style.display = "block";
    document.getElementById("final_top1").style.display = "block";
    document.getElementById("final_bottom2").style.display = "none";
    document.getElementById("final_bottom3").style.display = "none";
    document.getElementById("final_bottom4").style.display = "none";
    document.getElementById("final_bottom5").style.display = "none";
    document.getElementById("final_side5").style.display = "none";
    document.getElementById("final_top2").style.display = "none";
    document.getElementById("final_top3").style.display = "none";
    document.getElementById("final_top4").style.display = "none";
    document.getElementById("final_top5").style.display = "none";
    document.getElementById("final_creamline").src = "cream1_line.svg";

    document.getElementById("shell-check").src = "checked.png";
    document.getElementById("minishell-check").src = "unchecked.png";
    document.getElementById("round-check").src = "unchecked.png";
    document.getElementById("line-check").src = "unchecked.png";
    document.getElementById("rosettes-check").src = "unchecked.png";

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
    document.getElementById("final_bottom2").style.display = "block";
    document.getElementById("final_side1").style.display = "block";
    document.getElementById("final_top2").style.display = "block";
    document.getElementById("final_bottom1").style.display = "none";
    document.getElementById("final_bottom3").style.display = "none";
    document.getElementById("final_bottom4").style.display = "none";
    document.getElementById("final_bottom5").style.display = "none";
    document.getElementById("final_side5").style.display = "none";
    document.getElementById("final_top1").style.display = "none";
    document.getElementById("final_top3").style.display = "none";
    document.getElementById("final_top4").style.display = "none";
    document.getElementById("final_top5").style.display = "none";
    document.getElementById("final_creamline").src = "cream2_line.svg";

    document.getElementById("shell-check").src = "unchecked.png";
    document.getElementById("minishell-check").src = "checked.png";
    document.getElementById("round-check").src = "unchecked.png";
    document.getElementById("line-check").src = "unchecked.png";
    document.getElementById("rosettes-check").src = "unchecked.png";

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
    document.getElementById("final_bottom3").style.display = "block";
    document.getElementById("final_top3").style.display = "block";
    document.getElementById("final_bottom1").style.display = "none";
    document.getElementById("final_bottom2").style.display = "none";
    document.getElementById("final_bottom4").style.display = "none";
    document.getElementById("final_bottom5").style.display = "none";
    document.getElementById("final_side1").style.display = "none";
    document.getElementById("final_side5").style.display = "none";
    document.getElementById("final_top1").style.display = "none";
    document.getElementById("final_top2").style.display = "none";
    document.getElementById("final_top4").style.display = "none";
    document.getElementById("final_top5").style.display = "none";
    document.getElementById("final_creamline").src = "cream3_line.svg";

    document.getElementById("shell-check").src = "unchecked.png";
    document.getElementById("minishell-check").src = "unchecked.png";
    document.getElementById("round-check").src = "checked.png";
    document.getElementById("line-check").src = "unchecked.png";
    document.getElementById("rosettes-check").src = "unchecked.png";

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
    document.getElementById("final_bottom4").style.display = "block";
    document.getElementById("final_top4").style.display = "block";
    document.getElementById("final_bottom1").style.display = "none";
    document.getElementById("final_bottom2").style.display = "none";
    document.getElementById("final_bottom3").style.display = "none";
    document.getElementById("final_bottom5").style.display = "none";
    document.getElementById("final_side1").style.display = "none";
    document.getElementById("final_side5").style.display = "none";
    document.getElementById("final_top1").style.display = "none";
    document.getElementById("final_top2").style.display = "none";
    document.getElementById("final_top3").style.display = "none";
    document.getElementById("final_top5").style.display = "none";
    document.getElementById("final_creamline").src = "cream4_line.svg";
    
    document.getElementById("shell-check").src = "unchecked.png";
    document.getElementById("minishell-check").src = "unchecked.png";
    document.getElementById("round-check").src = "unchecked.png";
    document.getElementById("line-check").src = "checked.png";
    document.getElementById("rosettes-check").src = "unchecked.png";

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
    document.getElementById("final_bottom5").style.display = "block";
    document.getElementById("final_side5").style.display = "block";
    document.getElementById("final_top5").style.display = "block";
    document.getElementById("final_bottom1").style.display = "none";
    document.getElementById("final_bottom2").style.display = "none";
    document.getElementById("final_bottom3").style.display = "none";
    document.getElementById("final_bottom4").style.display = "none";
    document.getElementById("final_side1").style.display = "none";
    document.getElementById("final_top1").style.display = "none";
    document.getElementById("final_top2").style.display = "none";
    document.getElementById("final_top3").style.display = "none";
    document.getElementById("final_top4").style.display = "none";
    document.getElementById("final_creamline").src = "cream5_line.svg";
    document.getElementById("shell-check").src = "unchecked.png";
    document.getElementById("minishell-check").src = "unchecked.png";
    document.getElementById("round-check").src = "unchecked.png";
    document.getElementById("line-check").src = "unchecked.png";
    document.getElementById("rosettes-check").src = "checked.png";

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
  document.getElementById('finalBase').style.fill = a;
};

function selectTopColor(b){
  MTL_2.color.set(b);
  document.getElementById('finalTop').style.fill = b;
};

function selectSideColor(c){
  MTL_3.color.set(c);
  document.getElementById('finalSide').style.fill = c;
};

function selectBottomColor(d){
  MTL_4.color.set(d);
  document.getElementById('finalBottom').style.fill = d;
};

function selectColor1Color(e){
  MTL_5.color.set(e);
  document.getElementById('final_palette1').style.fill = e;
};

function selectColor2Color(f){
  MTL_6.color.set(f);
  document.getElementById('final_palette2').style.fill = f;
};

function selectGarden1Color(g){
  MTL_7.color.set(g);
  document.getElementById('final_garden1_petals').style.fill = g;
};

function selectGarden2Color(h){
  MTL_8.color.set(h);
  document.getElementById('final_garden1_points').style.fill = h;
};

function selectGarden3Color(i){
  MTL_9.color.set(i);
  document.getElementById('final_garden1_leaves').style.fill = i;
};

function selectGarden4Color(j){
  MTL_10.color.set(j);
  document.getElementById('final_garden2_petals').style.fill = j;
};

function selectGarden5Color(k){
  MTL_11.color.set(k);
  document.getElementById('final_garden2_leaves').style.fill = k;
};

function selectGarden6Color(l){
  MTL_12.color.set(l);
  document.getElementById('final_garden3_petals').style.fill = l;
};

function selectGarden7Color(m){
  MTL_13.color.set(m);
  document.getElementById('final_garden3_leaves').style.fill = m;
};

function selectGarden8Color(n){
  MTL_14.color.set(n);
  document.getElementById('final_garden3_points').style.fill = n;
};

function selectGarden9Color(o){
  MTL_15.color.set(o);
  document.getElementById('final_garden4_trunks').style.fill = o;
};

function selectGarden10Color(p){
  MTL_16.color.set(p);
  document.getElementById('final_garden4_petals').style.fill = p;
};

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
  });
  
  cakeModel.scale.set(0.1, 0.1, 0.1);
  cakeModel.rotation.y = Math.PI;
  cakeModel.position.y = 3.5;
  

  for (let object of INITIAL_MAP) {
    initColor(cakeModel, object.childID, object.mtl);
  };

  function initColor(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type;
      }
    }
  });
};


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
};

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
};


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

date = new Date();
year = date.getFullYear();
month = ('0' + (today.getMonth() + 1)).slice(-2);
day = ('0' + today.getDate()).slice(-2);
document.getElementById("current_date").innerHTML = year + " - " + month + " - " + day;
document.getElementById("ordernumber").innerHTML = year + "" + month + "" + day + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

function printName()  {
  const nameResult = document.getElementById("inputName").value;
  document.getElementById("orderName").innerHTML = nameResult;
};

function printPhone()  {
  const phoneResult1 = document.getElementById("inputPhone1").value;
  const phoneResult2 = document.getElementById("inputPhone2").value;
  const phoneResult3 = document.getElementById("inputPhone3").value;
  document.getElementById("orderPhone").innerHTML = phoneResult1 + " - " + phoneResult2 + " - " + phoneResult3;
};

function printEmail()  {
  const emailResult1 = document.getElementById("inputEmail1").value;
  const emailResult2 = document.getElementById("inputEmail2").value;
  document.getElementById("orderEmail").innerHTML = emailResult1 + "@" + emailResult2;
};

function downImg(){
  var svgElements = document.body.querySelectorAll('svg');
  svgElements.forEach(function(item) {
  item.setAttribute("width", item.getBoundingClientRect().width);
  item.setAttribute("height", item.getBoundingClientRect().height);
  item.style.width = null;
  item.style.height= null;
});
  html2canvas($("#img_area")[0]).then(function(canvas){
      var myImage = canvas.toDataURL();
      downloadURI(myImage, "cyberbakery_myorder.png") 
  });
}

function downloadURI(uri, name){
  var link = document.createElement("a")
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}

function orderFinish(){
  document.getElementById("finishWindowBlur").style.display = "block";
  document.getElementById("finishWindow").style.display = "block";
  document.getElementById("formBlur").style.display = "none";
  document.getElementById("formContainer").style.display = "none";
  document.getElementById("c").style.display = "none";
}
