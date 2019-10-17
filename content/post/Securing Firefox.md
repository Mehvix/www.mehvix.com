---
title: "Securing Firefox"
description: ""
tags: ["privacy"]
categories: ["blog"]
date: 2019-09-01T13:40:47-05:00
# download_url: "http://github.com/USERNAME/PROJECTNAME"
draft: true
---


While Firefox isn't as bad as Chrome, Firefox isn't that good either out of the box. Most users download it from Mozzila's website, where they're told Firefox allows them to “start getting the respect [they] deserve with [Mozilla’s] family of privacy-first products.” However, shortly after install they're prompted with pop-ups for Pocket and advertisement articles on the front page - not something you'd expect from a browser that claims to be privacy-focused.


In addition, Mozzila isn't a trustworthy company and have made various stupid mistakes through the years, such as:

1. [The time they disabled ever extension for two days without any user confirmation](https://archive.is/2sCXB/).
2. The general trend towards reducing the amount of control given to the user, e.g.:
    * Firefox 40-42: Firefox warns about signatures but doesn't enforce them.
    * Firefox 43: Firefox enforces the use of signatures by default, but has a preference that allows signature enforcement to be disabled (xpinstall.signatures.required in about:config).
    * Firefox 48: (Pushed from Firefox 46). Release and Beta versions of Firefox for Desktop will not allow unsigned extensions to be installed, with no override. Firefox for Android will enforce add-on signing, and will retain a preference — which will be removed in a future release — to allow the user to disable signing enforcement.
3. Completely killing XUL addons
4. Creating a false sense of privacy with [send.firefire.com](https://send.firefox.com), which claims in the [fine print](https://send.firefox.com/legal) that it collects meta data, such as your IP, time spent, clicks, referrer information, etc. - all of which is stored for 90 days and can easily be used to fingerprint and connect to your account. 


However, that's not to say that Chrome is any better. With the right settings, Firefox can be hardend for security and privacy that is currently unrivaled by any other browser.

For the purpose of optimal privacy and security, I'm just going to use the regular build of Firefox. However, you may be interested in using a forks such as [Pale Moon](https://www.palemoon.org/) or [GNUzilla / IceCat](https://www.gnu.org/software/gnuzilla/) - the reason I'm not going to use either is because they aren't immediately up-to-date security-wise because the developers have to manually implement ESR patches.


### Step 1: Changing Search Engines
>* [DuckDuckGo](duckduckgo.com) is the American-based search engine that's arguably the face of private search. While they claim not to "[collect or share personal information](https://duckduckgo.com/privacy)]", they are hosted in the USA. This means that there is a possibility that they could be compromised by the US Government ([Read more](https://spyware.neocities.org/translations/duckduckgo_article.html)). Additionally, [they have various analytics scripts running in the background](https://web.archive.org/web/20180909162803/https://duck.co/help/privacy/atb) - not something you would think a privacy-focused browser would do.
>* [SearX](https://searx.me/) is an interesting search engine because it's crawler is made up of a bunch of other ones, such as DuckDuckGo, Bing, Startpage, etc. Addiontally, SearX ideally is self hosted, meaning that as long as you configure everything correctly, you're not giving away any information. If you can't selfhost, I'd recommend using [disroot's instance](https://search.disroot.org/) because they claim that "No data (IP address, session cookie etc) is stored on the server, unless for troubleshooting purposes, after which the log data is purged from the server."
>* [Startpage](https://www.startpage.com/) is Dutch-based search engine that's unique in that it's more or less a proxy for Google. It uses the same crawler, except it's limited to Google's safe search setting that heavily limits your results. Even worse, on there [privacy page](https://www.startpage.com/en/search/privacy-policy.html) they reveal that "In order to enable the prevention of click fraud, some non-identifying system information is shared". Therefore, you have to put your trust in StartPage's determination of what's "non-identifying" enough to be safe in Google's hands.
>* [Qwant](https://www.qwant.com/) is based in France and claims to "dissociated your IP from your query", which is weird - Why would Qwant need to anonymize my queries if they aren't storing it? This wasn't answered in the privacy policy, so I don't know. Qwant is also [pro-censorship](https://archive.is/6f686) and also has a reporting system, despite it claiming that "Qwant presents the reality of a complex world, with diverse opinions, which make it rich and worth living."

### Step 2: Extensions to Consider



### Step 3: Setting up a `user.js`

