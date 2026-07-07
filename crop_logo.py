from PIL import Image

img = Image.open('public/logo.jpg').convert('RGB')
w, h = img.size

empty_cols = []
for x in range(w):
    is_empty = True
    for y in range(h):
        r,g,b = img.getpixel((x,y))
        if r < 245 or g < 245 or b < 245: # not white
            is_empty = False
            break
    empty_cols.append(is_empty)

start_x = 0
while start_x < w and empty_cols[start_x]:
    start_x += 1

gap_start = -1
for x in range(start_x, w):
    if empty_cols[x]:
        if all(empty_cols[x:min(x+20, w)]):
            gap_start = x
            break

crop_right = gap_start if gap_start != -1 else w // 2

top_y = h
bottom_y = 0
for x in range(start_x, crop_right):
    for y in range(h):
        r,g,b = img.getpixel((x,y))
        if r < 245 or g < 245 or b < 245:
            if y < top_y: top_y = y
            if y > bottom_y: bottom_y = y

# add some padding
padding = 10
start_x = max(0, start_x - padding)
crop_right = min(w, crop_right + padding)
top_y = max(0, top_y - padding)
bottom_y = min(h, bottom_y + padding)

crop_box = (start_x, top_y, crop_right, bottom_y)
print("Cropping to:", crop_box)
logo_mark = img.crop(crop_box)

# Make a transparent PNG instead of JPG with white background
# Convert white to transparent
logo_mark = logo_mark.convert("RGBA")
datas = logo_mark.getdata()
newData = []
for item in datas:
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)
logo_mark.putdata(newData)

logo_mark.save('public/logo-mark.png')
