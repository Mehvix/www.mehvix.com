
import urllib.request
import wget
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup


url_base = "https://knowyourmeme.com/memes/polar-bear-gif/photos/page/"  # num following last backslash
url_range = range(1, 6)
directory = r"Bears\\"

for i in url_range:
    url = url_base + str(i)
    print("Downloading " + url)

    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    html = soup(webpage, "html.parser")

    for a in html.select('a[class="photo"]'):
        for img in a.select('img'):
            image_url = img.get("data-src")
            if image_url[-4:] == ".gif":
                print(image_url)
                file_url = image_url
                file_dir = directory + "\\" + image_url[-7:]

                try:
                    wget.download(file_url, out=file_dir)  # faster
                except urllib.error.HTTPError as e:
                    print("wget 404!", file_url, file_dir, str(e))

                    print("Trying with URLLib...")
                    try:
                        urllib.request.urlretrieve(file_url, file_dir)
                    except:
                        print("URLLib 404!", file_url, file_dir, )

