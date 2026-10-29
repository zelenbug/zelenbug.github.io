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
}

//TODO for input: make a replace command that replaces the stupid quotation marks tumblr forces with normal ones when it reads the input. just so it could be shared over tumblr lolll. i think i dont have to account for markdown on discord so it could just be pasted on discord without needing to be in a code block