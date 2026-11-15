//wip lol

function savefit() {
//just gets all the values together for all colors. this is One Damn Command apparently js just lets you do that
fitcode = document.getElementById("layer1_1_hue").value + ","
        + document.getElementById("layer1_1_sat").value + ","
        + document.getElementById("layer1_1_bri").value + ","
        + document.getElementById("layer1_2_hue").value + ","
        + document.getElementById("layer1_2_sat").value + ","
        + document.getElementById("layer1_2_bri").value + ","
        + document.getElementById("layer1_3_hue").value + ","
        + document.getElementById("layer1_3_sat").value + ","
        + document.getElementById("layer1_3_bri").value + ","
//------------------------------------------------------------
        + document.getElementById("layer2_1_hue").value + ","
        + document.getElementById("layer2_1_sat").value + ","
        + document.getElementById("layer2_1_bri").value + ","
        + document.getElementById("layer2_2_hue").value + ","
        + document.getElementById("layer2_2_sat").value + ","
        + document.getElementById("layer2_2_bri").value + ","
        + document.getElementById("layer2_3_hue").value + ","
        + document.getElementById("layer2_3_sat").value + ","
        + document.getElementById("layer2_3_bri").value + ","
//------------------------------------------------------------
        + document.getElementById("layer3_1_hue").value + ","
        + document.getElementById("layer3_1_sat").value + ","
        + document.getElementById("layer3_1_bri").value + ","
        + document.getElementById("layer3_2_hue").value + ","
        + document.getElementById("layer3_2_sat").value + ","
        + document.getElementById("layer3_2_bri").value + ","
        + document.getElementById("layer3_3_hue").value + ","
        + document.getElementById("layer3_3_sat").value + ","
        + document.getElementById("layer3_3_bri").value + ","
//------------------------------------------------------------
        + document.getElementById("layer4_1_hue").value + ","
        + document.getElementById("layer4_1_sat").value + ","
        + document.getElementById("layer4_1_bri").value + ","
        + document.getElementById("layer4_2_hue").value + ","
        + document.getElementById("layer4_2_sat").value + ","
        + document.getElementById("layer4_2_bri").value + ","
        + document.getElementById("layer4_3_hue").value + ","
        + document.getElementById("layer4_3_sat").value + ","
        + document.getElementById("layer4_3_bri").value + ","
//------------------------------------------------------------
        + document.getElementById("layer5_1_hue").value + ","
        + document.getElementById("layer5_1_sat").value + ","
        + document.getElementById("layer5_1_bri").value + ","
        + document.getElementById("layer5_2_hue").value + ","
        + document.getElementById("layer5_2_sat").value + ","
        + document.getElementById("layer5_2_bri").value + ","
        + document.getElementById("layer5_3_hue").value + ","
        + document.getElementById("layer5_3_sat").value + ","
        + document.getElementById("layer5_3_bri").value + ","
//------------------------------------------------------------
//then we get outfit images
        + document.getElementById("layer1_0").style.backgroundImage + ","
        + document.getElementById("layer1_1").style.backgroundImage + ","
        + document.getElementById("layer1_2").style.backgroundImage + ","
        + document.getElementById("layer1_3").style.backgroundImage + ","
//------------------------------------------------------------
        + document.getElementById("layer2_0").style.backgroundImage + ","
        + document.getElementById("layer2_1").style.backgroundImage + ","
        + document.getElementById("layer2_2").style.backgroundImage + ","
        + document.getElementById("layer2_3").style.backgroundImage + ","
//------------------------------------------------------------
        + document.getElementById("layer3_0").style.backgroundImage + ","
        + document.getElementById("layer3_1").style.backgroundImage + ","
        + document.getElementById("layer3_2").style.backgroundImage + ","
        + document.getElementById("layer3_3").style.backgroundImage + ","
//------------------------------------------------------------
        + document.getElementById("layer4_0").style.backgroundImage + ","
        + document.getElementById("layer4_1").style.backgroundImage + ","
        + document.getElementById("layer4_2").style.backgroundImage + ","
        + document.getElementById("layer4_3").style.backgroundImage + ","
//------------------------------------------------------------
        + document.getElementById("layer5_0").style.backgroundImage + ","
        + document.getElementById("layer5_1").style.backgroundImage + ","
        + document.getElementById("layer5_2").style.backgroundImage + ","
        + document.getElementById("layer5_3").style.backgroundImage + ","
//------------------------------------------------------------
//then we get background color
        + document.getElementById("bgcolor").value;
//------------------------------------------------------------
//then finally spits the code out
document.getElementById("codeoutput").innerHTML = fitcode;
//workaround because the code box might just break
console.log('copy the code from here if the code box doesnt update')
console.log(fitcode)
}

function loadfit() {
inputted = document.getElementById("codeinput").value;
//for compatibility with tumblr's weird quotation marks
inputted = inputted.replace(/“/g, '"');
inputted = inputted.replace(/”/g, '"');
//does everything else
fitarray = inputted.split(',')
//makes sure that theres code actually present, length of at least 65, otherwise if you dont have any code it just resets all colors to cyan
if (fitarray.length>64) {
//loads colors
document.getElementById("layer1_1_hue").value = fitarray[0]
document.getElementById("layer1_1_sat").value = fitarray[1]
document.getElementById("layer1_1_bri").value = fitarray[2]
document.getElementById("layer1_2_hue").value = fitarray[3]
document.getElementById("layer1_2_sat").value = fitarray[4]
document.getElementById("layer1_2_bri").value = fitarray[5]
document.getElementById("layer1_3_hue").value = fitarray[6]
document.getElementById("layer1_3_sat").value = fitarray[7]
document.getElementById("layer1_3_bri").value = fitarray[8]
document.getElementById("layer2_1_hue").value = fitarray[9]
document.getElementById("layer2_1_sat").value = fitarray[10]
document.getElementById("layer2_1_bri").value = fitarray[11]
document.getElementById("layer2_2_hue").value = fitarray[12]
document.getElementById("layer2_2_sat").value = fitarray[13]
document.getElementById("layer2_2_bri").value = fitarray[14]
document.getElementById("layer2_3_hue").value = fitarray[15]
document.getElementById("layer2_3_sat").value = fitarray[16]
document.getElementById("layer2_3_bri").value = fitarray[17]
document.getElementById("layer3_1_hue").value = fitarray[18]
document.getElementById("layer3_1_sat").value = fitarray[19]
document.getElementById("layer3_1_bri").value = fitarray[20]
document.getElementById("layer3_2_hue").value = fitarray[21]
document.getElementById("layer3_2_sat").value = fitarray[22]
document.getElementById("layer3_2_bri").value = fitarray[23]
document.getElementById("layer3_3_hue").value = fitarray[24]
document.getElementById("layer3_3_sat").value = fitarray[25]
document.getElementById("layer3_3_bri").value = fitarray[26]
document.getElementById("layer4_1_hue").value = fitarray[27]
document.getElementById("layer4_1_sat").value = fitarray[28]
document.getElementById("layer4_1_bri").value = fitarray[29]
document.getElementById("layer4_2_hue").value = fitarray[30]
document.getElementById("layer4_2_sat").value = fitarray[31]
document.getElementById("layer4_2_bri").value = fitarray[32]
document.getElementById("layer4_3_hue").value = fitarray[33]
document.getElementById("layer4_3_sat").value = fitarray[34]
document.getElementById("layer4_3_bri").value = fitarray[35]
document.getElementById("layer5_1_hue").value = fitarray[36]
document.getElementById("layer5_1_sat").value = fitarray[37]
document.getElementById("layer5_1_bri").value = fitarray[38]
document.getElementById("layer5_2_hue").value = fitarray[39]
document.getElementById("layer5_2_sat").value = fitarray[40]
document.getElementById("layer5_2_bri").value = fitarray[41]
document.getElementById("layer5_3_hue").value = fitarray[42]
document.getElementById("layer5_3_sat").value = fitarray[43]
document.getElementById("layer5_3_bri").value = fitarray[44]
color_layer1_1()
color_layer1_2()
color_layer1_3()
color_layer2_1()
color_layer2_2()
color_layer2_3()
color_layer3_1()
color_layer3_2()
color_layer3_3()
color_layer4_1()
color_layer4_2()
color_layer4_3()
color_layer5_1()
color_layer5_2()
color_layer5_3()
//loads images
document.getElementById("layer1_0").style.backgroundImage = fitarray[45]
document.getElementById("layer1_1").style.backgroundImage = fitarray[46]
document.getElementById("layer1_2").style.backgroundImage = fitarray[47]
document.getElementById("layer1_3").style.backgroundImage = fitarray[48]
document.getElementById("layer2_0").style.backgroundImage = fitarray[49]
document.getElementById("layer2_1").style.backgroundImage = fitarray[50]
document.getElementById("layer2_2").style.backgroundImage = fitarray[51]
document.getElementById("layer2_3").style.backgroundImage = fitarray[52]
document.getElementById("layer3_0").style.backgroundImage = fitarray[53]
document.getElementById("layer3_1").style.backgroundImage = fitarray[54]
document.getElementById("layer3_2").style.backgroundImage = fitarray[55]
document.getElementById("layer3_3").style.backgroundImage = fitarray[56]
document.getElementById("layer4_0").style.backgroundImage = fitarray[57]
document.getElementById("layer4_1").style.backgroundImage = fitarray[58]
document.getElementById("layer4_2").style.backgroundImage = fitarray[59]
document.getElementById("layer4_3").style.backgroundImage = fitarray[60]
document.getElementById("layer5_0").style.backgroundImage = fitarray[61]
document.getElementById("layer5_1").style.backgroundImage = fitarray[62]
document.getElementById("layer5_2").style.backgroundImage = fitarray[63]
document.getElementById("layer5_3").style.backgroundImage = fitarray[64]
//and then sets the background color, if the variable is present
if (fitarray.length==66) {
document.getElementById("bgcolor").value = fitarray[65]
bgrecolor()
}
}}

//and now for the code to load existing outfits!! very simple
function fit1() {
document.getElementById("codeinput").value = '276,33,400,150,0,300,0,100,100,276,33,400,276,33,400,276,33,400,150,0,300,0,100,100,0,100,100,276,33,400,150,0,300,0,100,100,276,33,400,276,33,400,0,100,100,none,url("files/1_flowers_1.png"),url("files/1_flowers_2.png"),none,none,url("files/2_flowers_1.png"),url("files/2_flowers_2.png"),url("files/2_flowers_3.png"),url("files/3_biker_0.png"),url("files/3_biker_1.png"),none,none,url("files/4_defaultalt_0.png"),url("files/4_defaultalt_1.png"),url("files/4_defaultalt_2.png"),none,url("files/5_fit12_0.png"),url("files/5_fit12_1.png"),url("files/5_fit12_2.png"),none'
loadfit()
}
function fit2() {
document.getElementById("codeinput").value = '341,100,42,338,75,80,0,100,100,0,100,100,0,100,100,0,100,100,0,0,0,0,100,100,0,100,100,0,0,0,150,0,300,150,0,0,172,100,250,0,100,100,0,100,100,none,url("files/1_biker_1.png"),url("files/1_biker_2.png"),none,none,none,none,none,url("files/3_biker_0.png"),url("files/3_biker_1.png"),none,none,url("files/4_biker_0.png"),url("files/4_biker_1.png"),url("files/4_biker_2.png"),url("files/4_biker_3.png"),none,url("files/5_fit6_1.png"),none,none'
loadfit()
}
function fit0() {
document.getElementById("codeinput").value = '0,100,100,0,100,100,0,100,100,0,100,100,0,100,100,0,100,100,0,100,100,0,100,100,0,100,100,51,95,270,0,100,57,0,100,100,0,100,100,0,100,100,0,100,100,none,none,none,none,none,none,none,none,none,none,none,none,url("files/4_default0.png"),url("files/4_default1.png"),url("files/4_default2.png"),none,none,none,none,none'
loadfit()
}
function fit3() {
document.getElementById("codeinput").value = '0,100,100,0,100,100,0,100,100,58,90,200,58,90,200,0,100,100,175,97,168,0,100,100,0,100,100,58,90,200,58,90,200,0,100,100,52,80,85,64,80,50,150,0,300,none,none,none,none,url("files/2_fit5_0.png"),url("files/2_fit5_1.png"),url("files/2_fit5_2.png"),none,url("files/3_turtleneck_0.png"),url("files/3_turtleneck_1.png"),none,none,url("files/4_fit5_0.png"),url("files/4_fit5_1.png"),url("files/4_fit5_2.png"),none,url("files/5_fit2_0.png"),url("files/5_fit2_1.png"),url("files/5_fit2_2.png"),url("files/5_fit2_3.png")'
loadfit()
}
function fitcyan() {
document.getElementById("codeinput").value = 'a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a'
loadfit()
}