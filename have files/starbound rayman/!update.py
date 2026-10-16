#you are free to steal and modify this code! it kinda sucks lol
#https://www.geeksforgeeks.org/python/python-list-files-in-a-directory/
import os
file = "!pics.html"
#empties file to overwrite it
empty = open(file, "w", encoding="utf-8")
empty.write("")
#overwrites it
with open(file, "a", encoding="utf-8") as f:
    print('''<!DOCTYPE html><html><head>
<title>outfit images</title>
<style>
body { font: 16px trebuchet ms, sans-serif; }
div {border: 1px solid black; padding: 5px; display: inline-block; margin: 3px; text-align: center; max-width: 200px;}
img {width: 86px; height: auto; image-rendering: pixelated;}
a { color: #0000EE; text-decoration: none; } a:hover, a:focus {text-decoration: underline;}
</style></head><body>clothes for a starbound mod, Rayman Species, version 1.7 | <a href="https://community.playstarbound.com/resources/rayman-species.6336/" target="_blank">chucklefish forums</a>, <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3464040801" target="_blank">steam workshop</a> | <a href="!files.html">all item filenames</a>
<h2>globox</h2>''', file=f)
    
    for filename in os.listdir():
        if filename.endswith(".png"):
            propername = filename.replace('.png', '')
            propername = propername.replace('rayman ', '')
            propername = propername.replace('globox ', '')
            propername = propername.replace('teensy ', '')
            propername = propername.replace('vanilla ', '')
            propername = propername.replace('z ', '')
            print('<div><img loading="lazy" src="', filename, '"><br>', propername, '</div>', sep="", file=f)
    print('</body></html>', file=f)
    
#update if theres clothes names for each race that come earlier than what i have here
with open(file, "r", encoding="utf-8") as f:
    data = f.read()
    data = data.replace('<div><img loading="lazy" src="rayman betilla.png"><br>betilla</div>', '<hr><h2>rayman</h2><div><img src="rayman betilla.png"><br>betilla</div>')
    data = data.replace('<div><img loading="lazy" src="teensy ales.png"><br>ales</div>', '<hr><h2>teensy</h2><div><img src="teensy ales.png"><br>ales</div>')
    data = data.replace('<div><img loading="lazy" src="vanilla aviangodwings.png"><br>aviangodwings</div>', '<hr><h2>vanilla</h2><div><img src="vanilla aviangodwings.png"><br>aviangodwings</div>')

    data = data.replace('<div><img loading="lazy" src="z colors globox.png"><br>colors globox</div>', '<hr><h2>clothes colors</h2><div style="max-width: 1000px"><img src="z colors globox.png" style="width: 862px"></div>')
    data = data.replace('<div><img loading="lazy" src="z colors rayman.png"><br>colors rayman</div>', '<div style="max-width: 1000px"><img src="z colors rayman.png" style="width: 862px"></div>')
    data = data.replace('<div><img loading="lazy" src="z colors teensy.png"><br>colors teensy</div>', '<div style="max-width: 1000px"><img src="z colors teensy.png" style="width: 862px"></div>')
    
with open(file, 'w') as f:
    f.write(data)