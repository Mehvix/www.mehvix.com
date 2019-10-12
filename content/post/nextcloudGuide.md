---
title: "Nextcloud Ubuntu Complete Guide"
description: ""
tags: ["nextcloud", "server"]
categories: ["project"]
date: 2019-09-03T09:32:54-05:00
# download_url: "http://github.com/USERNAME/PROJECTNAME"
draft: false
---


#### Getting the machine up-to-date
>`sudo su`<br>
>`apt autoremove`<br>
>`apt update`<br>
>`apt upgrade`<br>


#### Installing Apache - the webserver
>`apt install apache2`<br>
>`systemctl start apache2`<br>
>`systemctl enable apache2`- start apache2 on startup

>If you've configured the server right, you should be able to go to your machine's IP (you can get this via `hostname -I`) in the webbrowser of your choice and see the ["Apache2 Ubuntu Default Page"](/media/apache2page.png)


#### Installing MariaDB - the database

>`apt install mariadb-server`<br>
>`mysql_secure_installation`

>This will prompt you to login to MariaDB. Since we don't have a password, just hit enterset one up. After that, just accept all of the prompts and you're set.


#### Installing phpMyAdmin

>`apt install php libapache2-mod-php php-mysql`<br>
>`apt install phpmyadmin`<br>

>You should follow all of the default steps, just make sure that you set the webserver as `apache2` and you'll be good


>`ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf`<br>
>`a2enconf phpmyadmin`<br>
>`service apache2 reload`<br>
>`systemctl reload apache2`<br>

>Now, if you go to `192.168.something.whatever/phpmyadmin/` (your computer's IP) you should see the phpMyAdmin login page; **however, you should not login yet.**


#### Configuring MariaDB

>`mariadb`<br>
>`CREATE DATABASE nextcloud;`<br>
>`CREATE USER nextcloud IDENTIFIED BY 'Password';`, but with your password<br>
>`GRANT USAGE ON *.* TO nextcloud@localhost IDENTIFIED BY 'Password';`, again, your password<br>
>`GRANT ALL privileges ON nextcloud.* TO nextcloud@localhost;`<br>
>`FLUSH PRIVILEGES;`<br>
>`quit;`<br>

>Now you should be able to login on the myphpadmin forum with the `nextcloud` as the username, and the password you just set up as the password.


#### Installing PHP

>`apt install php-gd php-json php-mysql php-curl php-mbstring`<br>
>`apt install php-intl php-imagick php-xml php-zip`<br>


#### Installing Nextcloud

>I'm going to install Nextcloud 15 because 16 doesn't work with [Collabora Online](https://nextcloud.com/collaboraonline/) (at the time of writing this)<br>
>`wget https://download.nextcloud.com/server/releases/nextcloud-15.0.7.tar.bz2`<br>
>`tar -xvf nextcloud-15.0.7.tar.bz2`<br>
>`cd nextcloud`<br>
>`mv ./* /var/www/html/`<br>
>`mv ./.htaccess /var/www/html`<br>
>`mv ./.user.ini /var/www/html`<br>
>`cd /var/www/html`<br>
>`chown -R www-data:www-data ./*`<br>
>`chown www-data:www-data .htaccess`<br>
>`chown www-data:www-data .user.ini`<br>

>Now if you go to `192.168.something.whatever` you'll get the Nextcloud page **BUT DO NOT LOGIN / CREATE ACCOUNT**. You need to set up encryption


#### Setting up Encryption

>`apt install certbot`<br>
>`apt install python-certbot-apache`<br>

>`nano /etc/apache2/sites-available/000-default.conf` and uncomment and change `ServerName` to whatever domain you're using, e.g. `cloud.mehvix.com`. Additionally, it's good practice to change the server admin to your email.

>Then you need to point your domain at your server and open your server to the external access. You'll first need to port forward your server (you can find the ip via `hostname -I`) to port `443`, and then create an A record under your domain's DNS settings pointing at your external IP (found via `dig +short myip.opendns.com @resolver1.opendns.com`) 

>**NOTE:** If you're using Cloudflare, you have to disable Universal SSL for Nextcloud to work

>`systemctl restart apache2`<br>
>`certbot --apache`<br>

>It will prompt you to autoredirect from http to https, and I would go ahead and choose redirect. 


#### Setting up Storage/Login

>For security reasons, it's a good idea to have the data folder outside of the web root (`/var/www/`)
>I already set up my drives/raid config, so all I had to do was create and mount a partition:<br>
>`mkdir /media/nextcloud-data/`<br>
>`chown www-data:www-data /media/nextcloud-data/`<br>
>`mkfs.ext4 /dev/sda`<br>
>`mount /dev/sda /media/nextcloud-data/`<br>

>After that, you can go ahead to the Nextcloud page, create an account (you will use this for all Nextcloud logins). Make sure to change the data folder to `/media/nextcloud-data/`
or whatever dir you are using, then enter the MariaDB user/password.<br><br>

Now you've got yourself a Nextcloud Server! However, there are still a couple things that you still need to configure which I'll cover in the following section.<br><br><br><br>

## Securing Nextcloud
If you head to `https://yournextcloud.com/settings/admin/overview` you'll see all security and setup warnings. Here's how you fix the ones that I encountered:

#### The PHP memory limit is below the recommended value of 512MB.

>`nano /etc/php/7.2/apache2/php.ini`<br>
>```
upload_max_filesize = 512M
memory_limit = 512M
post_max_size = 512M
```

>`systemctl restart apache2`


#### The "Strict-Transport-Security" HTTP header is not set to at least "15552000" seconds. For enhanced security, it is recommended to enable HSTS as described in the security tips.

>`nano /etc/apache2/sites-available/000-default-le-ssl.conf`<br>

>Add the following under `ServerName`:
>```
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=15552000; includeSubDomains; preload"
</IfModule>
```

>`a2enmod headers`<br>
>`systemctl restart apache2`


#### Your web server is not properly set up to resolve "/.well-known/[caldav][carddav]". Further information can be found in the documentation

>`nano /etc/apache2/sites-available/000-default-le-ssl.conf`<br>

>Add the following under `ServerName`:
>```
<Directory /var/www/html/>
    Options +FollowSymLinks
    AllowOverride All
</Directory>
```

>`systemctl restart apache2`


#### No memory cache has been configured. To enhance performance, please configure a memcache, if available. Further information can be found in the documentation

>`apt install php-apcu`<br>
>`nano /var/www/html/config/config.php`<br>
>```
'memcache.local' => '\OC\Memcache\APCu'
```
>`systemctl restart apache2`


#### The PHP OPcache is not properly configured


>`nano /etc/php/7.2/apache2/php.ini`<br>
>The following are default settings, consider checking out [this blog](https://www.scalingphpbook.com/blog/2014/02/14/best-zend-opcache-settings.html) for information on what each parameter means<br>
>```
opcache.enable=1
opcache.enable_cli=1
opcache.memory_consumption=128
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=10000
opcache.revalidate_freq=1
opcache.save_comments=1
```

>`systemctl restart apache2`


#### Some columns in the database are missing a conversion to big int

>`sudo -u www-data php /var/www/html/occ db:convert-filecache-bigint`


#### MySQL is used as database but does not support 4-byte characters

>First, update MariaDB:<br>
>`nano /etc/mysql/my.cnf`

>```
[mysqld]
innodb_file_per_table=1
```

>`systemctl restart mariadb`<br>
>`mariadb`<br>
>`ALTER DATABASE nextcloud CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;`<br>
>`use nextcloud;`<br>
>`set global innodb_large_prefix=on;`<br>
>`set global innodb_file_format=Barracuda;`<br>
>`quit;`<br>

>Then, update Nextcloud:<br>
>`sudo -u www-data php /var/www/html/occ config:system:set mysql.utf8mb4 --type boolean --value="true"`<br>
>`sudo -u www-data php /var/www/html/occ maintenance:repair`<br><br><br><br>


## Further Securing / Optimization

There are various other actions you can take to ensure that both your os and nextcloud are secure. I'll be covering the one's found on [this wiki page](https://docs.nextcloud.com/server/14/admin_manual/configuration_server/harden_server.html).


#### Give PHP read access to `/dev/urandom`
> On my system this ended up breaking Nextcloud, but I'll keep it in here because it's in the Nextcloud docs. If you're site breaks, you should try commenting out `open_basedir`<br>
>`sudo nano /etc/php/7.2/apache2/php.ini`<br>
>Add `open_basedir = /dev/urandom`<br>
>`systemctl restart apache2`<br>


#### Configure SELinux
>Because this delicate, you should [check out the wiki](https://docs.nextcloud.com/server/14/admin_manual/installation/selinux_configuration.html) for the latest information


### Install and Tune PHP-FPM

>`apt-get install php-fpm`<br>
>`a2enmod proxy_fcgi setenvif`<br>
>`a2enconf php7.2-fpm`<br>
>`systemctl reload apache2`<br>
>`nano /etc/php/7.2/fpm/pool.d/www.conf` and add the following:<br>
>```
pm = dynamic
pm.max_children = 120
pm.start_servers = 12
pm.min_spare_servers = 6
pm.max_spare_servers = 18
pm.max_requests = 1000
```<br>
>Note that these are the recommended settings for 4gb total/1 gb database and should be modified for your system.<br><br>


## Quality of Life Changes

While theses tips aren't needed for security, they're nice to have.

#### Removing `/index.php` from every URL

>`nano /var/www/html/config/config.php`
>```
'htaccess.RewriteBase' => '/'
```
>`sudo -u www-data php /var/www/html/occ maintenance:update:htaccess`<br>
>`systemctl restart apache2`<br>


#### Increasing the max file size

>`nano /etc/php/7.2/apache2/php.ini`<br>
>```
upload_max_filesize = 16G
post_max_size = 16G
max_input_time = 3600
max_execution_time = 3600
upload_tmp_dir = /var/big_temp_files/
```
>`nano /var/www/html/.user.ini`<br>
>```
upload_max_filesize = 16G
post_max_size = 16G
```

>`chown www-data:www-data /media/big_temp_files/`


#### Ability to extract from archieves

>`apt-get install unrar`<br>
>`apt-get install p7zip p7zip-full`<br>

>Then add the "Extract" app from the store<br>

#### Generating file previews

>Install "Preview Generator" from the appstore<br>
>`sudo -u www-data php /var/www/html/occ preview:generate-all -vvv`


#### Converting files via ffmpeg

>Install "Video Converter" from the appstore<br>
>`apt install ffmpeg`


#### Downloading YouTube/BitTorrent files remotely

>Install "ocDownloader" from the appstore<br>

>#### For BitTorrent:<br>
>`apt-get install aria2 curl php-curl`<br>
>```
mkdir /var/log/aria2c /var/local/aria2c
touch /var/log/aria2c/aria2c.log
touch /var/local/aria2c/aria2c.sess
chown www-data.www-data -R /var/log/aria2c /var/local/aria2c
chmod 770 -R /var/log/aria2c /var/local/aria2c
sudo -u www-data aria2c --enable-rpc --rpc-allow-origin-all -c -D --log=/var/log/aria2c/aria2c.log --check-certificate=false --save-session=/var/local/aria2c/aria2c.sess --save-session-interval=2 --continue=true --input-file=/var/local/aria2c/aria2c.sess --rpc-save-upload-metadata=true --force-save=true --log-level=warn
```

>#### For YouTube:<br>
>`apt-get install python-pip`<br>
>`pip install youtube-dl`<br>


#### Solving "Index column size too large. The maximum column size is 767 bytes."

>`mariadb`<br>
>`set global innodb_file_format = BARRACUDA;`<br>
>`set global innodb_large_prefix = ON;`<br>
>`set global innodb_file_per_table = ON;`<br>
>`set global innodb_default_row_format = 'DYNAMIC';`<br>
>`quit;`<br>

>`nano /etc/mysql/my.cnf`<br>
>```
innodb_file_per_table=1
innodb-file-format=barracuda
innodb-file-per-table=ON
innodb-large-prefix=ON
innodb_default_row_format = 'DYNAMIC'
```

>`systemctl restart mariadb`



#### Fixing right click not working

>[As of writing this, 0.13 is the last working version](https://github.com/nextcloud/files_rightclick/issues/83#issuecomment-525592831)<br>
>`cd /var/www/html/apps/`<br>
>`wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=1usRzYpaOVFwKn63xrCrtJTHuLpMXQz_j' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=1usRzYpaOVFwKn63xrCrtJTHuLpMXQz_j" -O rclick && rm -rf /tmp/cookies.txt`<br>
>`rm -rf files_rightclick/`<br>
>`unzip rclick`<br>
>`rm rclick`<br>
>`systemctl restart apache2`
>Then make sure that you re-enable the right click app too. If that doesn't work, try
>`apt-get install php-ldap`<br>
>`systemctl restart apache2`


#### Set timezone

>`nano /var/www/html/config/config.php`<br>
>Find your timezone in the ones avaliabe [here](https://www.php.net/manual/en/timezones.php)<br>
>```
'logtimezone' => 'America/Chicago',
```

>`nano /etc/php/7.2/apache2/php.ini`<br>
>```
date.timezone = America/Chicago,
```

#### Change default files for new users

>All files that are created for a user can be found in `/var/www/html/core/skeleton/`