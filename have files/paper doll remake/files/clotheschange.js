//implements all clothes. probably coded like butt
// ===================================================================================
//layer 1 (hats)   -------------------------------------------------------------------

// empty
function layer1remove() {
document.getElementById("layer1_0").style.backgroundImage = "none";
document.getElementById("layer1_1").style.backgroundImage = "none";
document.getElementById("layer1_2").style.backgroundImage = "none";
document.getElementById("layer1_3").style.backgroundImage = "none";

document.getElementById("layer1_1_used").style.backgroundColor = "transparent";
document.getElementById("layer1_2_used").style.backgroundColor = "transparent";
document.getElementById("layer1_3_used").style.backgroundColor = "transparent";
}

//fit 2
function layer1fit2() {
document.getElementById("layer1_0").style.backgroundImage = "url(files/1_fit2_0.png)";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_fit2_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "url(files/1_fit2_2.png)";
document.getElementById("layer1_3").style.backgroundImage = "url(files/1_fit2_3.png)";

document.getElementById("layer1_1_hue").value = 66;
document.getElementById("layer1_1_sat").value = 60;
document.getElementById("layer1_1_bri").value = 263;
color_layer1_1();

document.getElementById("layer1_2_hue").value = 70;
document.getElementById("layer1_2_sat").value = 400;
document.getElementById("layer1_2_bri").value = 300;
color_layer1_2();

document.getElementById("layer1_3_hue").value = 0;
document.getElementById("layer1_3_sat").value = 0;
document.getElementById("layer1_3_bri").value = 0;
color_layer1_3();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_3_used").style.backgroundColor = "var(--pink)";
}

//the thing from time for a change
function layer1headband() {
document.getElementById("layer1_0").style.backgroundImage = "none";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_headband_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "url(files/1_headband_2.png)";
document.getElementById("layer1_3").style.backgroundImage = "none";

document.getElementById("layer1_1_hue").value = 345;
document.getElementById("layer1_1_sat").value = 30;
document.getElementById("layer1_1_bri").value = 355;
color_layer1_1();

document.getElementById("layer1_2_hue").value = 325;
document.getElementById("layer1_2_sat").value = 60;
document.getElementById("layer1_2_bri").value = 138;
color_layer1_2();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_3_used").style.backgroundColor = "transparent";
}

//fit 5
function layer1fit5() {
document.getElementById("layer1_0").style.backgroundImage = "none";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_fit5_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "none";
document.getElementById("layer1_3").style.backgroundImage = "none";

document.getElementById("layer1_1_hue").value = 68;
document.getElementById("layer1_1_sat").value = 35;
document.getElementById("layer1_1_bri").value = 350;
color_layer1_1();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "transparent";
document.getElementById("layer1_3_used").style.backgroundColor = "transparent";
}

//biker wig
function layer1biker() {
document.getElementById("layer1_0").style.backgroundImage = "none";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_biker_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "url(files/1_biker_2.png)";
document.getElementById("layer1_3").style.backgroundImage = "none";

document.getElementById("layer1_1_hue").value = 68;
document.getElementById("layer1_1_sat").value = 81;
document.getElementById("layer1_1_bri").value = 321;
color_layer1_1();

document.getElementById("layer1_2_hue").value = 69;
document.getElementById("layer1_2_sat").value = 40;
document.getElementById("layer1_2_bri").value = 385;
color_layer1_2();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_3_used").style.backgroundColor = "transparent";
}

//witch hat from dvd cover
function layer1witch() {
document.getElementById("layer1_0").style.backgroundImage = "url(files/1_witch_0.png)";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_witch_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "url(files/1_witch_2.png)";
document.getElementById("layer1_3").style.backgroundImage = "none";

document.getElementById("layer1_1_hue").value = 0;
document.getElementById("layer1_1_sat").value = 75;
document.getElementById("layer1_1_bri").value = 100;
color_layer1_1();

document.getElementById("layer1_2_hue").value = 150;
document.getElementById("layer1_2_sat").value = 0;
document.getElementById("layer1_2_bri").value = 300;
color_layer1_2();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_3_used").style.backgroundColor = "transparent";
}

//our ancestors the humans
function layer1princess() {
document.getElementById("layer1_0").style.backgroundImage = "url(files/1_princess_0.png)";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_princess_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "url(files/1_princess_2.png)";
document.getElementById("layer1_3").style.backgroundImage = "url(files/1_princess_3.png)";

document.getElementById("layer1_1_hue").value = 336;
document.getElementById("layer1_1_sat").value = 27;
document.getElementById("layer1_1_bri").value = 217;
color_layer1_1();

document.getElementById("layer1_2_hue").value = 325;
document.getElementById("layer1_2_sat").value = 50;
document.getElementById("layer1_2_bri").value = 148;
color_layer1_2();

document.getElementById("layer1_3_hue").value = 180;
document.getElementById("layer1_3_sat").value = 15;
document.getElementById("layer1_3_bri").value = 270;
color_layer1_3();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_3_used").style.backgroundColor = "var(--pink)";
}

//fit 11
function layer1fit11() {
document.getElementById("layer1_0").style.backgroundImage = "none";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_fit11_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "none";
document.getElementById("layer1_3").style.backgroundImage = "none";

document.getElementById("layer1_1_hue").value = 74;
document.getElementById("layer1_1_sat").value = 30;
document.getElementById("layer1_1_bri").value = 358;
color_layer1_1();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "transparent";
document.getElementById("layer1_3_used").style.backgroundColor = "transparent";
}

//madame zelza disguise
function layer1flowers() {
document.getElementById("layer1_0").style.backgroundImage = "none";
document.getElementById("layer1_1").style.backgroundImage = "url(files/1_flowers_1.png)";
document.getElementById("layer1_2").style.backgroundImage = "url(files/1_flowers_2.png)";
document.getElementById("layer1_3").style.backgroundImage = "none";

document.getElementById("layer1_1_hue").value = 58;
document.getElementById("layer1_1_sat").value = 40;
document.getElementById("layer1_1_bri").value = 400;
color_layer1_1();

document.getElementById("layer1_2_hue").value = 314;
document.getElementById("layer1_2_sat").value = 100;
document.getElementById("layer1_2_bri").value = 95;
color_layer1_2();

document.getElementById("layer1_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer1_3_used").style.backgroundColor = "transparent";
}

//layer 1 (hats)   -------------------------------------------------------------------
// ===================================================================================
//layer 2 (coats)  -------------------------------------------------------------------

// empty
function layer2remove() {
document.getElementById("layer2_0").style.backgroundImage = "none";
document.getElementById("layer2_1").style.backgroundImage = "none";
document.getElementById("layer2_2").style.backgroundImage = "none";
document.getElementById("layer2_3").style.backgroundImage = "none";

document.getElementById("layer2_1_used").style.backgroundColor = "transparent";
document.getElementById("layer2_2_used").style.backgroundColor = "transparent";
document.getElementById("layer2_3_used").style.backgroundColor = "transparent";
}

//fit 5
function layer2fit5() {
document.getElementById("layer2_0").style.backgroundImage = "url(files/2_fit5_0.png)";
document.getElementById("layer2_1").style.backgroundImage = "url(files/2_fit5_1.png)";
document.getElementById("layer2_2").style.backgroundImage = "url(files/2_fit5_2.png)";
document.getElementById("layer2_3").style.backgroundImage = "none";

document.getElementById("layer2_1_hue").value = 215;
document.getElementById("layer2_1_sat").value = 110;
document.getElementById("layer2_1_bri").value = 66;
color_layer2_1();

document.getElementById("layer2_2_hue").value = 250;
document.getElementById("layer2_2_sat").value = 400;
document.getElementById("layer2_2_bri").value = 60;
color_layer2_2();

document.getElementById("layer2_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer2_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer2_3_used").style.backgroundColor = "transparent";
}

//vampire
function layer2vamp() {
document.getElementById("layer2_0").style.backgroundImage = "url(files/2_vamp_0.png)";
document.getElementById("layer2_1").style.backgroundImage = "url(files/2_vamp_1.png)";
document.getElementById("layer2_2").style.backgroundImage = "url(files/2_vamp_2.png)";
document.getElementById("layer2_3").style.backgroundImage = "none";

document.getElementById("layer2_1_hue").value = 0;
document.getElementById("layer2_1_sat").value = 75;
document.getElementById("layer2_1_bri").value = 100;
color_layer2_1();

document.getElementById("layer2_2_hue").value = 56;
document.getElementById("layer2_2_sat").value = 100;
document.getElementById("layer2_2_bri").value = 200;
color_layer2_2();

document.getElementById("layer2_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer2_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer2_3_used").style.backgroundColor = "transparent";
}

//madame zelza disguise
function layer2flowers() {
document.getElementById("layer2_0").style.backgroundImage = "none";
document.getElementById("layer2_1").style.backgroundImage = "url(files/2_flowers_1.png)";
document.getElementById("layer2_2").style.backgroundImage = "url(files/2_flowers_2.png)";
document.getElementById("layer2_3").style.backgroundImage = "url(files/2_flowers_3.png)";

document.getElementById("layer2_1_hue").value = 335;
document.getElementById("layer2_1_sat").value = 75;
document.getElementById("layer2_1_bri").value = 102;
color_layer2_1();

document.getElementById("layer2_2_hue").value = 250;
document.getElementById("layer2_2_sat").value = 14;
document.getElementById("layer2_2_bri").value = 400;
color_layer2_2();

document.getElementById("layer2_3_hue").value = 250;
document.getElementById("layer2_3_sat").value = 14;
document.getElementById("layer2_3_bri").value = 400;
color_layer2_3();

document.getElementById("layer2_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer2_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer2_3_used").style.backgroundColor = "var(--pink)";
}

//layer 2 (coats)  -------------------------------------------------------------------
// ===================================================================================
//layer 3 (shirts) -------------------------------------------------------------------

// empty
function layer3remove() {
document.getElementById("layer3_0").style.backgroundImage = "none";
document.getElementById("layer3_1").style.backgroundImage = "none";
document.getElementById("layer3_2").style.backgroundImage = "none";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_used").style.backgroundColor = "transparent";
document.getElementById("layer3_2_used").style.backgroundColor = "transparent";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//fit 2
function layer3fit2() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_fit2_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_fit2_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "url(files/3_fit2_2.png)";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 54;
document.getElementById("layer3_1_sat").value = 69;
document.getElementById("layer3_1_bri").value = 376;
color_layer3_1();

document.getElementById("layer3_2_hue").value = 60;
document.getElementById("layer3_2_sat").value = 243;
document.getElementById("layer3_2_bri").value = 205;
color_layer3_2();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//fit 6
function layer3fit6() {
document.getElementById("layer3_0").style.backgroundImage = "none";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_fit6_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "url(files/3_fit6_2.png)";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 325;
document.getElementById("layer3_1_sat").value = 97;
document.getElementById("layer3_1_bri").value = 106;
color_layer3_1();

document.getElementById("layer3_2_hue").value = 150;
document.getElementById("layer3_2_sat").value = 0;
document.getElementById("layer3_2_bri").value = 300;
color_layer3_2();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//fit 12
function layer3fit12() {
document.getElementById("layer3_0").style.backgroundImage = "none";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_fit12_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "none";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 0;
document.getElementById("layer3_1_sat").value = 100;
document.getElementById("layer3_1_bri").value = 100;
color_layer3_1();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "transparent";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//fit 5
function layer3fit5() {
document.getElementById("layer3_0").style.backgroundImage = "none";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_fit5_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "none";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 68;
document.getElementById("layer3_1_sat").value = 400;
document.getElementById("layer3_1_bri").value = 350;
color_layer3_1();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "transparent";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//alternate shirt for the 5th fit based on the s2 overalls disguise
function layer3turtleneck() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_turtleneck_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_turtleneck_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "none";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 58;
document.getElementById("layer3_1_sat").value = 85;
document.getElementById("layer3_1_bri").value = 200;
color_layer3_1();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "transparent";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//biker shirt
function layer3biker() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_biker_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_biker_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "none";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 0;
document.getElementById("layer3_1_sat").value = 0;
document.getElementById("layer3_1_bri").value = 20;
color_layer3_1();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "transparent";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//from musical chairs
function layer3coatthingy() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_coatthingy_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_coatthingy_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "url(files/3_coatthingy_2.png)";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 180;
document.getElementById("layer3_1_sat").value = 25;
document.getElementById("layer3_1_bri").value = 330;
color_layer3_1();

document.getElementById("layer3_2_hue").value = 180;
document.getElementById("layer3_2_sat").value = 21;
document.getElementById("layer3_2_bri").value = 262;
color_layer3_2();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//our ancestors the humans
function layer3princess() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_princess_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_princess_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "url(files/3_princess_2.png)";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 336;
document.getElementById("layer3_1_sat").value = 27;
document.getElementById("layer3_1_bri").value = 217;
color_layer3_1();                               
                                                
document.getElementById("layer3_2_hue").value = 325;
document.getElementById("layer3_2_sat").value = 50;
document.getElementById("layer3_2_bri").value = 148;
color_layer3_2();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//fit 11
function layer3fit11() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_fit11_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_fit11_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "url(files/3_fit11_2.png)";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 69;
document.getElementById("layer3_1_sat").value = 12;
document.getElementById("layer3_1_bri").value = 400;
color_layer3_1();

document.getElementById("layer3_2_hue").value = 60;
document.getElementById("layer3_2_sat").value = 75;
document.getElementById("layer3_2_bri").value = 215;
color_layer3_2();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

//layer 3 (shirts) -------------------------------------------------------------------
// ===================================================================================
//layer 4 (pants)  -------------------------------------------------------------------

// empty
function layer4remove() {
document.getElementById("layer4_0").style.backgroundImage = "none";
document.getElementById("layer4_1").style.backgroundImage = "none";
document.getElementById("layer4_2").style.backgroundImage = "none";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_used").style.backgroundColor = "transparent";
document.getElementById("layer4_2_used").style.backgroundColor = "transparent";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

// default skirt/apron thingy
function layer4default() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_default0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_default1.png)";
document.getElementById("layer4_2").style.backgroundImage = "url(files/4_default2.png)";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 51;
document.getElementById("layer4_1_sat").value = 95;
document.getElementById("layer4_1_bri").value = 270;
color_layer4_1();

document.getElementById("layer4_2_hue").value = 0;
document.getElementById("layer4_2_sat").value = 100;
document.getElementById("layer4_2_bri").value = 57;
color_layer4_2();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//fit 2
function layer4fit2() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_fit2_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_fit2_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "none";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 0;
document.getElementById("layer4_1_sat").value = 19;
document.getElementById("layer4_1_bri").value = 142;
color_layer4_1();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "transparent";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//fit 6
function layer4fit6() {
document.getElementById("layer4_0").style.backgroundImage = "none";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_fit6_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "url(files/4_fit6_2.png)";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 325;
document.getElementById("layer4_1_sat").value = 97;
document.getElementById("layer4_1_bri").value = 106;
color_layer4_1();

document.getElementById("layer4_2_hue").value = 150;
document.getElementById("layer4_2_sat").value = 0;
document.getElementById("layer4_2_bri").value = 300;
color_layer4_2();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//fit 12
function layer4fit12() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_fit12_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_fit12_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "none";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 150;
document.getElementById("layer4_1_sat").value = 0;
document.getElementById("layer4_1_bri").value = 300;
color_layer4_1();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "transparent";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//fit 5
function layer4fit5() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_fit5_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_fit5_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "url(files/4_fit5_2.png)";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 215;
document.getElementById("layer4_1_sat").value = 110;
document.getElementById("layer4_1_bri").value = 66;
color_layer4_1();

document.getElementById("layer4_2_hue").value = 185;
document.getElementById("layer4_2_sat").value = 20;
document.getElementById("layer4_2_bri").value = 264;
color_layer4_2();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//biker skirt
function layer4biker() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_biker_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_biker_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "url(files/4_biker_2.png)";
document.getElementById("layer4_3").style.backgroundImage = "url(files/4_biker_3.png)";

document.getElementById("layer4_1_hue").value = 0;
document.getElementById("layer4_1_sat").value = 0;
document.getElementById("layer4_1_bri").value = 20;
color_layer4_1();

document.getElementById("layer4_2_hue").value = 150;
document.getElementById("layer4_2_sat").value = 0;
document.getElementById("layer4_2_bri").value = 300;
color_layer4_2();

document.getElementById("layer4_3_hue").value = 150;
document.getElementById("layer4_3_sat").value = 0;
document.getElementById("layer4_3_bri").value = 300;
color_layer4_3();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_3_used").style.backgroundColor = "var(--pink)";
}

//our ancestors the humans
function layer4princess() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_princess_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_princess_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "none";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 336;
document.getElementById("layer4_1_sat").value = 27;
document.getElementById("layer4_1_bri").value = 217;
color_layer4_1();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "transparent";
document.getElementById("layer4_4_used").style.backgroundColor = "transparent";
}

// REALIGNED default skirt/apron thingy
function layer4defaultalt() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_defaultalt_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_defaultalt_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "url(files/4_defaultalt_2.png)";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 51;
document.getElementById("layer4_1_sat").value = 95;
document.getElementById("layer4_1_bri").value = 270;
color_layer4_1();

document.getElementById("layer4_2_hue").value = 0;
document.getElementById("layer4_2_sat").value = 100;
document.getElementById("layer4_2_bri").value = 57;
color_layer4_2();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//fit 11
function layer4fit11() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_fit11_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_fit11_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "url(files/4_fit11_2.png)";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 232;
document.getElementById("layer4_1_sat").value = 22;
document.getElementById("layer4_1_bri").value = 146;
color_layer4_1();

document.getElementById("layer4_2_hue").value = 232;
document.getElementById("layer4_2_sat").value = 23;
document.getElementById("layer4_2_bri").value = 95;
color_layer4_2();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//madame zelza disguise
function layer4flowers() {
document.getElementById("layer4_0").style.backgroundImage = "url(files/4_flowers_0.png)";
document.getElementById("layer4_1").style.backgroundImage = "url(files/4_flowers_1.png)";
document.getElementById("layer4_2").style.backgroundImage = "url(files/4_flowers_2.png)";
document.getElementById("layer4_3").style.backgroundImage = "none";

document.getElementById("layer4_1_hue").value = 45;
document.getElementById("layer4_1_sat").value = 91;
document.getElementById("layer4_1_bri").value = 240;
color_layer4_1();

document.getElementById("layer4_2_hue").value = 168;
document.getElementById("layer4_2_sat").value = 48;
document.getElementById("layer4_2_bri").value = 241;
color_layer4_2();

document.getElementById("layer4_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer4_3_used").style.backgroundColor = "transparent";
}

//layer 4 (pants)  -------------------------------------------------------------------
// ===================================================================================
//layer 5 (shoes)  -------------------------------------------------------------------

// empty
function layer5remove() {
document.getElementById("layer5_0").style.backgroundImage = "none";
document.getElementById("layer5_1").style.backgroundImage = "none";
document.getElementById("layer5_2").style.backgroundImage = "none";
document.getElementById("layer5_3").style.backgroundImage = "none";

document.getElementById("layer5_1_used").style.backgroundColor = "transparent";
document.getElementById("layer5_2_used").style.backgroundColor = "transparent";
document.getElementById("layer5_3_used").style.backgroundColor = "transparent";
}

//fit 2
function layer5fit2() {
document.getElementById("layer5_0").style.backgroundImage = "url(files/5_fit2_0.png)";
document.getElementById("layer5_1").style.backgroundImage = "url(files/5_fit2_1.png)";
document.getElementById("layer5_2").style.backgroundImage = "url(files/5_fit2_2.png)";
document.getElementById("layer5_3").style.backgroundImage = "url(files/5_fit2_3.png)";

document.getElementById("layer5_1_hue").value = 67;
document.getElementById("layer5_1_sat").value = 64;
document.getElementById("layer5_1_bri").value = 257;
color_layer5_1();

document.getElementById("layer5_2_hue").value = 50;
document.getElementById("layer5_2_sat").value = 25;
document.getElementById("layer5_2_bri").value = 277;
color_layer5_2();

document.getElementById("layer5_3_hue").value = 150;
document.getElementById("layer5_3_sat").value = 0;
document.getElementById("layer5_3_bri").value = 300;
color_layer5_3();

document.getElementById("layer5_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_3_used").style.backgroundColor = "var(--pink)";
}

//fit 6
function layer5fit6() {
document.getElementById("layer5_0").style.backgroundImage = "none";
document.getElementById("layer5_1").style.backgroundImage = "url(files/5_fit6_1.png)";
document.getElementById("layer5_2").style.backgroundImage = "none";
document.getElementById("layer5_3").style.backgroundImage = "none";

document.getElementById("layer5_1_hue").value = 325;
document.getElementById("layer5_1_sat").value = 97;
document.getElementById("layer5_1_bri").value = 106;
color_layer5_1();

document.getElementById("layer5_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_2_used").style.backgroundColor = "transparent";
document.getElementById("layer5_3_used").style.backgroundColor = "transparent";
}

//fit 12
function layer5fit12() {
document.getElementById("layer5_0").style.backgroundImage = "url(files/5_fit12_0.png)";
document.getElementById("layer5_1").style.backgroundImage = "url(files/5_fit12_1.png)";
document.getElementById("layer5_2").style.backgroundImage = "url(files/5_fit12_2.png)";
document.getElementById("layer5_3").style.backgroundImage = "url(files/5_fit12_3.png)";

document.getElementById("layer5_1_hue").value = 58;
document.getElementById("layer5_1_sat").value = 60;
document.getElementById("layer5_1_bri").value = 210;
color_layer5_1();

document.getElementById("layer5_2_hue").value = 58;
document.getElementById("layer5_2_sat").value = 60;
document.getElementById("layer5_2_bri").value = 120;
color_layer5_2();

document.getElementById("layer5_3_hue").value = 0;
document.getElementById("layer5_3_sat").value = 100;
document.getElementById("layer5_3_bri").value = 100;
color_layer5_3();

document.getElementById("layer5_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_3_used").style.backgroundColor = "var(--pink)";
}

//fit 12 alt
function layer5fit12alt() {
document.getElementById("layer5_0").style.backgroundImage = "url(files/5_fit12_0.png)";
document.getElementById("layer5_1").style.backgroundImage = "url(files/5_fit12_1.png)";
document.getElementById("layer5_2").style.backgroundImage = "url(files/5_fit12_2.png)";
document.getElementById("layer5_3").style.backgroundImage = "none"; //same as above but with the last color layer (socks) removed

document.getElementById("layer5_1_hue").value = 58;
document.getElementById("layer5_1_sat").value = 60;
document.getElementById("layer5_1_bri").value = 210;
color_layer5_1();

document.getElementById("layer5_2_hue").value = 58;
document.getElementById("layer5_2_sat").value = 60;
document.getElementById("layer5_2_bri").value = 120;
color_layer5_2();

document.getElementById("layer5_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_3_used").style.backgroundColor = "transparent";
}

//fit 5
function layer5fit5() {
document.getElementById("layer5_0").style.backgroundImage = "url(files/5_fit5_0.png)";
document.getElementById("layer5_1").style.backgroundImage = "url(files/5_fit5_1.png)";
document.getElementById("layer5_2").style.backgroundImage = "none";
document.getElementById("layer5_3").style.backgroundImage = "none";

document.getElementById("layer5_1_hue").value = 62;
document.getElementById("layer5_1_sat").value = 39;
document.getElementById("layer5_1_bri").value = 290;
color_layer5_1();

document.getElementById("layer5_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_2_used").style.backgroundColor = "transparent";
document.getElementById("layer5_3_used").style.backgroundColor = "transparent";
}

//fit 11
function layer5fit11() {
document.getElementById("layer5_0").style.backgroundImage = "url(files/5_fit11_0.png)";
document.getElementById("layer5_1").style.backgroundImage = "url(files/5_fit11_1.png)";
document.getElementById("layer5_2").style.backgroundImage = "none";
document.getElementById("layer5_3").style.backgroundImage = "none";

document.getElementById("layer5_1_hue").value = 44;
document.getElementById("layer5_1_sat").value = 80;
document.getElementById("layer5_1_bri").value = 115;
color_layer5_1();

document.getElementById("layer5_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer5_2_used").style.backgroundColor = "transparent";
document.getElementById("layer5_3_used").style.backgroundColor = "transparent";
}

//layer 5 (shoes)  -------------------------------------------------------------------
// ===================================================================================
//for copying      -------------------------------------------------------------------

/*

1 color

function layer3asdasd() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_asdasd_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_asdasd_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "none";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 69;
document.getElementById("layer3_1_sat").value = 300;
document.getElementById("layer3_1_bri").value = 300;
color_layer3_1();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "transparent";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

2 colors

function layer3asdasd() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_asdasd_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_asdasd_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "url(files/3_asdasd_2.png)";
document.getElementById("layer3_3").style.backgroundImage = "none";

document.getElementById("layer3_1_hue").value = 69;
document.getElementById("layer3_1_sat").value = 300;
document.getElementById("layer3_1_bri").value = 300;
color_layer3_1();

document.getElementById("layer3_2_hue").value = 69;
document.getElementById("layer3_2_sat").value = 300;
document.getElementById("layer3_2_bri").value = 300;
color_layer3_2();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_3_used").style.backgroundColor = "transparent";
}

3 colors

function layer3asdasd() {
document.getElementById("layer3_0").style.backgroundImage = "url(files/3_asdasd_0.png)";
document.getElementById("layer3_1").style.backgroundImage = "url(files/3_asdasd_1.png)";
document.getElementById("layer3_2").style.backgroundImage = "url(files/3_asdasd_2.png)";
document.getElementById("layer3_3").style.backgroundImage = "url(files/3_asdasd_3.png)";

document.getElementById("layer3_1_hue").value = 69;
document.getElementById("layer3_1_sat").value = 300;
document.getElementById("layer3_1_bri").value = 300;
color_layer3_1();

document.getElementById("layer3_2_hue").value = 69;
document.getElementById("layer3_2_sat").value = 300;
document.getElementById("layer3_2_bri").value = 300;
color_layer3_2();

document.getElementById("layer3_3_hue").value = 69;
document.getElementById("layer3_3_sat").value = 300;
document.getElementById("layer3_3_bri").value = 300;
color_layer3_3();

document.getElementById("layer3_1_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_2_used").style.backgroundColor = "var(--pink)";
document.getElementById("layer3_3_used").style.backgroundColor = "var(--pink)";
}

common white color values ok
150;
0;
300;

*/