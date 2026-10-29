//excuse me this is poorly coded. couldnt figure out a good way for it to just get the id of the element the script is being called from, and then pass the name of the id into a string to work with

//layer 1 ------------------------------------------------------------------------

function color_layer1_1() {
var hue = document.getElementById("layer1_1_hue").value;
var sat = document.getElementById("layer1_1_sat").value;
var bri = document.getElementById("layer1_1_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer1_1_hue_label").value = hue;
document.getElementById("layer1_1_sat_label").value = sat;
document.getElementById("layer1_1_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";

document.getElementById("layer1_1").style.filter = hue+sat+bri;
}

function color_layer1_2() {
var hue = document.getElementById("layer1_2_hue").value;
var sat = document.getElementById("layer1_2_sat").value;
var bri = document.getElementById("layer1_2_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer1_2_hue_label").value = hue;
document.getElementById("layer1_2_sat_label").value = sat;
document.getElementById("layer1_2_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer1_2").style.filter = hue+sat+bri;
}

function color_layer1_3() {
var hue = document.getElementById("layer1_3_hue").value;
var sat = document.getElementById("layer1_3_sat").value;
var bri = document.getElementById("layer1_3_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer1_3_hue_label").value = hue;
document.getElementById("layer1_3_sat_label").value = sat;
document.getElementById("layer1_3_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer1_3").style.filter = hue+sat+bri;
}

//layer 2 ------------------------------------------------------------------------

function color_layer2_1() {
var hue = document.getElementById("layer2_1_hue").value;
var sat = document.getElementById("layer2_1_sat").value;
var bri = document.getElementById("layer2_1_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer2_1_hue_label").value = hue;
document.getElementById("layer2_1_sat_label").value = sat;
document.getElementById("layer2_1_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer2_1").style.filter = hue+sat+bri;
}

function color_layer2_2() {
var hue = document.getElementById("layer2_2_hue").value;
var sat = document.getElementById("layer2_2_sat").value;
var bri = document.getElementById("layer2_2_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer2_2_hue_label").value = hue;
document.getElementById("layer2_2_sat_label").value = sat;
document.getElementById("layer2_2_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer2_2").style.filter = hue+sat+bri;
}

function color_layer2_3() {
var hue = document.getElementById("layer2_3_hue").value;
var sat = document.getElementById("layer2_3_sat").value;
var bri = document.getElementById("layer2_3_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer2_3_hue_label").value = hue;
document.getElementById("layer2_3_sat_label").value = sat;
document.getElementById("layer2_3_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer2_3").style.filter = hue+sat+bri;
}

//layer 3 ------------------------------------------------------------------------

function color_layer3_1() {
var hue = document.getElementById("layer3_1_hue").value;
var sat = document.getElementById("layer3_1_sat").value;
var bri = document.getElementById("layer3_1_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer3_1_hue_label").value = hue;
document.getElementById("layer3_1_sat_label").value = sat;
document.getElementById("layer3_1_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer3_1").style.filter = hue+sat+bri;
}

function color_layer3_2() {
var hue = document.getElementById("layer3_2_hue").value;
var sat = document.getElementById("layer3_2_sat").value;
var bri = document.getElementById("layer3_2_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer3_2_hue_label").value = hue;
document.getElementById("layer3_2_sat_label").value = sat;
document.getElementById("layer3_2_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer3_2").style.filter = hue+sat+bri;
}

function color_layer3_3() {
var hue = document.getElementById("layer3_3_hue").value;
var sat = document.getElementById("layer3_3_sat").value;
var bri = document.getElementById("layer3_3_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer3_3_hue_label").value = hue;
document.getElementById("layer3_3_sat_label").value = sat;
document.getElementById("layer3_3_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer3_3").style.filter = hue+sat+bri;
}

//layer 4 ------------------------------------------------------------------------

function color_layer4_1() {
var hue = document.getElementById("layer4_1_hue").value;
var sat = document.getElementById("layer4_1_sat").value;
var bri = document.getElementById("layer4_1_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer4_1_hue_label").value = hue;
document.getElementById("layer4_1_sat_label").value = sat;
document.getElementById("layer4_1_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer4_1").style.filter = hue+sat+bri;
}

function color_layer4_2() {
var hue = document.getElementById("layer4_2_hue").value;
var sat = document.getElementById("layer4_2_sat").value;
var bri = document.getElementById("layer4_2_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer4_2_hue_label").value = hue;
document.getElementById("layer4_2_sat_label").value = sat;
document.getElementById("layer4_2_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer4_2").style.filter = hue+sat+bri;
}

function color_layer4_3() {
var hue = document.getElementById("layer4_3_hue").value;
var sat = document.getElementById("layer4_3_sat").value;
var bri = document.getElementById("layer4_3_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer4_3_hue_label").value = hue;
document.getElementById("layer4_3_sat_label").value = sat;
document.getElementById("layer4_3_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer4_3").style.filter = hue+sat+bri;
}

//layer 5 ------------------------------------------------------------------------

function color_layer5_1() {
var hue = document.getElementById("layer5_1_hue").value;
var sat = document.getElementById("layer5_1_sat").value;
var bri = document.getElementById("layer5_1_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer5_1_hue_label").value = hue;
document.getElementById("layer5_1_sat_label").value = sat;
document.getElementById("layer5_1_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer5_1").style.filter = hue+sat+bri;
}

function color_layer5_2() {
var hue = document.getElementById("layer5_2_hue").value;
var sat = document.getElementById("layer5_2_sat").value;
var bri = document.getElementById("layer5_2_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer5_2_hue_label").value = hue;
document.getElementById("layer5_2_sat_label").value = sat;
document.getElementById("layer5_2_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer5_2").style.filter = hue+sat+bri;
}

function color_layer5_3() {
var hue = document.getElementById("layer5_3_hue").value;
var sat = document.getElementById("layer5_3_sat").value;
var bri = document.getElementById("layer5_3_bri").value;
hue = hue.toString();
sat = sat.toString();
bri = bri.toString();

document.getElementById("layer5_3_hue_label").value = hue;
document.getElementById("layer5_3_sat_label").value = sat;
document.getElementById("layer5_3_bri_label").value = bri;

hue = "hue-rotate("+hue+"deg)";
sat = "saturate("+sat+"%)";
bri = "brightness("+bri+"%)";
document.getElementById("layer5_3").style.filter = hue+sat+bri;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

//layer 1 label ------------------------------------------------------------------------

function color_layer1_1_label() {
var hue = document.getElementById("layer1_1_hue_label").value;
var sat = document.getElementById("layer1_1_sat_label").value;
var bri = document.getElementById("layer1_1_bri_label").value;
document.getElementById("layer1_1_hue").value = hue;
document.getElementById("layer1_1_sat").value = sat;
document.getElementById("layer1_1_bri").value = bri;
color_layer1_1()
}

function color_layer1_2_label() {
var hue = document.getElementById("layer1_2_hue_label").value;
var sat = document.getElementById("layer1_2_sat_label").value;
var bri = document.getElementById("layer1_2_bri_label").value;
document.getElementById("layer1_2_hue").value = hue;
document.getElementById("layer1_2_sat").value = sat;
document.getElementById("layer1_2_bri").value = bri;
color_layer1_2()
}

function color_layer1_3_label() {
var hue = document.getElementById("layer1_3_hue_label").value;
var sat = document.getElementById("layer1_3_sat_label").value;
var bri = document.getElementById("layer1_3_bri_label").value;
document.getElementById("layer1_3_hue").value = hue;
document.getElementById("layer1_3_sat").value = sat;
document.getElementById("layer1_3_bri").value = bri;
color_layer1_3()
}

//layer 2 label ------------------------------------------------------------------------

function color_layer2_1_label() {
var hue = document.getElementById("layer2_1_hue_label").value;
var sat = document.getElementById("layer2_1_sat_label").value;
var bri = document.getElementById("layer2_1_bri_label").value;
document.getElementById("layer2_1_hue").value = hue;
document.getElementById("layer2_1_sat").value = sat;
document.getElementById("layer2_1_bri").value = bri;
color_layer2_1()
}

function color_layer2_2_label() {
var hue = document.getElementById("layer2_2_hue_label").value;
var sat = document.getElementById("layer2_2_sat_label").value;
var bri = document.getElementById("layer2_2_bri_label").value;
document.getElementById("layer2_2_hue").value = hue;
document.getElementById("layer2_2_sat").value = sat;
document.getElementById("layer2_2_bri").value = bri;
color_layer2_2()
}

function color_layer2_3_label() {
var hue = document.getElementById("layer2_3_hue_label").value;
var sat = document.getElementById("layer2_3_sat_label").value;
var bri = document.getElementById("layer2_3_bri_label").value;
document.getElementById("layer2_3_hue").value = hue;
document.getElementById("layer2_3_sat").value = sat;
document.getElementById("layer2_3_bri").value = bri;
color_layer2_3()
}

//layer 3 label ------------------------------------------------------------------------

function color_layer3_1_label() {
var hue = document.getElementById("layer3_1_hue_label").value;
var sat = document.getElementById("layer3_1_sat_label").value;
var bri = document.getElementById("layer3_1_bri_label").value;
document.getElementById("layer3_1_hue").value = hue;
document.getElementById("layer3_1_sat").value = sat;
document.getElementById("layer3_1_bri").value = bri;
color_layer3_1()
}

function color_layer3_2_label() {
var hue = document.getElementById("layer3_2_hue_label").value;
var sat = document.getElementById("layer3_2_sat_label").value;
var bri = document.getElementById("layer3_2_bri_label").value;
document.getElementById("layer3_2_hue").value = hue;
document.getElementById("layer3_2_sat").value = sat;
document.getElementById("layer3_2_bri").value = bri;
color_layer3_2()
}

function color_layer3_3_label() {
var hue = document.getElementById("layer3_3_hue_label").value;
var sat = document.getElementById("layer3_3_sat_label").value;
var bri = document.getElementById("layer3_3_bri_label").value;
document.getElementById("layer3_3_hue").value = hue;
document.getElementById("layer3_3_sat").value = sat;
document.getElementById("layer3_3_bri").value = bri;
color_layer3_3()
}

//layer 4 label ------------------------------------------------------------------------

function color_layer4_1_label() {
var hue = document.getElementById("layer4_1_hue_label").value;
var sat = document.getElementById("layer4_1_sat_label").value;
var bri = document.getElementById("layer4_1_bri_label").value;
document.getElementById("layer4_1_hue").value = hue;
document.getElementById("layer4_1_sat").value = sat;
document.getElementById("layer4_1_bri").value = bri;
color_layer4_1()
}

function color_layer4_2_label() {
var hue = document.getElementById("layer4_2_hue_label").value;
var sat = document.getElementById("layer4_2_sat_label").value;
var bri = document.getElementById("layer4_2_bri_label").value;
document.getElementById("layer4_2_hue").value = hue;
document.getElementById("layer4_2_sat").value = sat;
document.getElementById("layer4_2_bri").value = bri;
color_layer4_2()
}

function color_layer4_3_label() {
var hue = document.getElementById("layer4_3_hue_label").value;
var sat = document.getElementById("layer4_3_sat_label").value;
var bri = document.getElementById("layer4_3_bri_label").value;
document.getElementById("layer4_3_hue").value = hue;
document.getElementById("layer4_3_sat").value = sat;
document.getElementById("layer4_3_bri").value = bri;
color_layer4_3()
}

//layer 5 label ------------------------------------------------------------------------

function color_layer5_1_label() {
var hue = document.getElementById("layer5_1_hue_label").value;
var sat = document.getElementById("layer5_1_sat_label").value;
var bri = document.getElementById("layer5_1_bri_label").value;
document.getElementById("layer5_1_hue").value = hue;
document.getElementById("layer5_1_sat").value = sat;
document.getElementById("layer5_1_bri").value = bri;
color_layer5_1()
}

function color_layer5_2_label() {
var hue = document.getElementById("layer5_2_hue_label").value;
var sat = document.getElementById("layer5_2_sat_label").value;
var bri = document.getElementById("layer5_2_bri_label").value;
document.getElementById("layer5_2_hue").value = hue;
document.getElementById("layer5_2_sat").value = sat;
document.getElementById("layer5_2_bri").value = bri;
color_layer5_2()
}

function color_layer5_3_label() {
var hue = document.getElementById("layer5_3_hue_label").value;
var sat = document.getElementById("layer5_3_sat_label").value;
var bri = document.getElementById("layer5_3_bri_label").value;
document.getElementById("layer5_3_hue").value = hue;
document.getElementById("layer5_3_sat").value = sat;
document.getElementById("layer5_3_bri").value = bri;
color_layer5_3()
}

//hey its still changing colors isnt it?? ------------------------------------------------------------------------

function bgrecolor() {
bgcolor = document.getElementById("bgcolor").value;
document.getElementById("hexinput").value = bgcolor;
document.getElementById("bg").style.backgroundColor = bgcolor;
}
function bgrecolorhex() {
colorhex = document.getElementById("hexinput").value;
//ensures the # isnt required by removing it and just readding it anyway (so there isnt any ##)
bgcolor = colorhex.replace("#", "");
bgcolor = "#" + bgcolor;
document.getElementById("bgcolor").value = bgcolor;
bgrecolor()
}