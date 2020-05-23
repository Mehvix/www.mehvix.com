---
title: "Nextcloud: Importing Google Calendars & Automating External Cals"
description: ""
tags: []
categories: ["blog"]
date: 2020-05-08T11:23:33-05:00
draft: false
---

Upgrading to Nextcloud 18 broke both importing public Google calendars and external calendars so that they don't update automatically. Fortunately, both of these issues have workarounds<br>

---

## Importing Google Calendars

Nextcloud needs a `.ics` or `.ical` file. To get a public Google calendar's `.ics` location (as of 5/8/20), you need to get the `src` or `cid` of the Google calendar. All Google calendars have this in the URL of the calendar. 


For example, for embedded calendars (in this example the [Codeforces calendar](https://codeforces.com/calendar)) you can find the `cid` by clicking on the plus button in the bottom right corner which will open the following URL:

```
https://calendar.google.com/calendar/render?cid=k23j233gtcvau7a8ulk2p360m4%40group.calendar.google.com
```

Alternatively, you can get also use inspect element which will yield the following:

```
https://calendar.google.com/calendar/embed?src=k23j233gtcvau7a8ulk2p360m4@group.calendar.google.com&amp;ctz=America/Chicago&amp;hl=en&amp;wkst=1
```

Then take everything **after** `src=`, `cid=`, or `/ical/` and up to `&amp`. Add it to the following:

```
https://calendar.google.com/calendar/ical/[add here!]/public/basic.ics
```

For example, using the Codeforces calendar:

```
https://calendar.google.com/calendar/ical/k23j233gtcvau7a8ulk2p360m4@group.calendar.google.com/public/basic.ics
```

You can then use that URL as the "External URL" when adding a new calendar in the Nextcloud Calendar app. 


---

## Automatically Updating External Calendars

Create a cron job: `sudo crontab -e`<br>
Then, add the following to the bottom of the file: 
```php
0 0 * * * su -m www-data -c "php -f /var/www/html/cron.php"
```
This will result at 0 hours and 0 minutes every day cron being ran, which will update the calendar(s).
