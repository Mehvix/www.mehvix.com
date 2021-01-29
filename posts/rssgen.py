from bs4 import BeautifulSoup
from xml.dom import minidom
import os
import datetime
import time
from email import utils


# idk why this is wack
fin = open('posts/index.html').read()
fout = 'posts/rss.xml'
soup = BeautifulSoup(fin, 'html.parser')


mini = minidom.Document()
content = mini.createElement('rss')
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

    title = i.find("a").string
    url = i.find("a")['href']
    date = "20" + i.find("td").string

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

    channel.appendChild(itemElement)


content = content.toprettyxml(indent="\t")


with open(fout, "w") as f:
    f.write(content)
