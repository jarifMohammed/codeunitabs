from PIL import Image

img = Image.open('public/logo-mark.png').convert("RGBA")
datas = img.getdata()

ORANGE = (254, 74, 0)
newData = []
for item in datas:
    r, g, b, a = item
    if a == 0:
        newData.append((255, 255, 255, 0))
    else:
        opacity = 255 - min(r, g, b)
        if opacity < 5:
            newData.append((255, 255, 255, 0))
        else:
            newData.append((ORANGE[0], ORANGE[1], ORANGE[2], opacity))

img.putdata(newData)
img.save('public/logo-mark.png')
