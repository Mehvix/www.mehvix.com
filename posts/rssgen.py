from bs4 import BeautifulSoup
from xml.dom import minidom
import os
import datetime
import time
from email import utils
from xml.sax.saxutils import unescape

# todos:
# append <article> tag contents
# figure out how to do <description>

fin = open('posts/index.html', encoding='utf-8').read()
fout = 'posts/rss.xml'
soup = BeautifulSoup(fin, 'html.parser')


mini = minidom.Document()
content = mini.createElement('rss')
content.setAttribute('version', '2.0')
content.setAttribute('xmlns:media', 'http://search.yahoo.com/mrss/')
content.setAttribute(
    'xmlns:content', 'http://purl.org/rss/1.0/modules/content/')
mini.appendChild(content)

channel = content.appendChild(mini.createElement('channel'))

titleElement = mini.createElement('title')
titleContent = mini.createTextNode("mehvix.com")
titleElement.appendChild(titleContent)
channel.appendChild(titleElement)

descElement = mini.createElement('description')
descContent = mini.createTextNode("Updates from mehvix.com (Max Vogel)")
descElement.appendChild(descContent)
channel.appendChild(descElement)

# https://stackoverflow.com/questions/3453177/convert-python-datetime-to-rfc-2822
pubDate = utils.formatdate(time.mktime(datetime.datetime.now().timetuple()))
buildElement = mini.createElement('lastBuildDate')
buildContent = mini.createTextNode(pubDate)
buildElement.appendChild(buildContent)
channel.appendChild(buildElement)

langElement = mini.createElement('language')
langContent = mini.createTextNode("en-us")
langElement.appendChild(langContent)
channel.appendChild(langElement)

linkElement = mini.createElement('link')
linkContent = mini.createTextNode("https://www.mehvix.com")
linkElement.appendChild(linkContent)
channel.appendChild(linkElement)

catElement = mini.createElement('category')
catContent = mini.createTextNode('Blog')
catElement.appendChild(catContent)
channel.appendChild(catElement)


for i in soup.find_all("tr"):
    title = i.find("a").string.strip()
    url = i.find("a")['href']
    date = "20" + i.find("td").string

    contPath = 'posts/' + url.split("/")[-1]
    contFile = open(contPath, encoding='utf-8').read()
    contSoup = BeautifulSoup(contFile, 'html.parser')
    cont = str(contSoup.find("article"))

    date = utils.formatdate(time.mktime(
        (datetime.datetime.strptime(date, '%Y-%m-%d')).timetuple()))

    itemElement = mini.createElement('item')

    authElement = mini.createElement('author')
    authContent = mini.createTextNode('Max Vogel')
    authElement.appendChild(authContent)
    itemElement.appendChild(authElement)

    titleElement = mini.createElement('title')
    titleContent = mini.createTextNode(title)
    titleElement.appendChild(titleContent)
    itemElement.appendChild(titleElement)

    dateElement = mini.createElement('pubDate')
    dateContent = mini.createTextNode(date)
    dateElement.appendChild(dateContent)
    itemElement.appendChild(dateElement)

    linkElement = mini.createElement('link')
    linkContent = mini.createTextNode("https://mehvix.com/posts/"+url)
    linkElement.appendChild(linkContent)
    itemElement.appendChild(linkElement)

    guidElement = mini.createElement('guid')
    guidContent = mini.createTextNode("https://mehvix.com/posts/"+url)
    guidElement.appendChild(guidContent)
    itemElement.appendChild(guidElement)

    contElement = mini.createElement('content:encoded')
    contContent = mini.createTextNode("<![CDATA["+cont+"]]>")
    contElement.appendChild(contContent)
    itemElement.appendChild(contElement)

    channel.appendChild(itemElement)

# with codecs.open(mini.toxml(), "r", "utf-8") as inp:
#     xml = minidom.parseString(inp.read().encode("utf-8"))
# with codecs.open(fout, "w", "utf-8") as out:
#     xml.writexml(out)

# with codecs.open(fout, "w", "utf-8") as out:
#     mini.writexml(out)

# f = open(fout, 'w', encoding='utf-8')
# mini.writexml(f, indent="\t", newl="\n", encoding='utf-8')
# f.close()

with open(fout, "w", encoding='utf-8') as f:
    f.write(unescape(mini.toprettyxml(indent="\t", newl="\n")))
