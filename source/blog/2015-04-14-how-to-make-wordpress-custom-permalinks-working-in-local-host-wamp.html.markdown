---
title: "How to make WordPress custom permalinks working in local host (wamp)"
maintitle: "How to make WordPress custom permalinks working in local host (wamp)"
date: 2015/05/14
category: WordPress
excerpt: WordPress Custom Permalinks allow you to display urls in a semantic structure which is search engine friendly. However, if your WordPress is installed in a local server such as WAMP, you’re likely to running into “404 Not Found” issue, once you changed your permalinks settings. Here is a quick guide to show you how to resolve this issue...
introtext: WordPress Custom Permalinks allow you to display urls in a semantic structure which is search engine friendly. However, if your WordPress is installed in a local server such as WAMP, you’re likely to running into “404 Not Found” issue, once you changed your permalinks settings. Here is a quick guide to show you how to resolve this issue
---

##Step 1: Changed permalink to:

<code>mysite.com/%category%/%postname%/</code>

##Step 2: Update .htaccess file:

<code># BEGIN WordPress<br /><IfModule mod_rewrite.c><br />RewriteEngine On<br />RewriteBase /<br />RewriteRule ^index\.php$ - [L]<br />RewriteCond %{REQUEST_<br />FILENAME} !-f<br />RewriteCond %{REQUEST_FILENAME} !-d<br />RewriteRule . /index.php [L]<br /></IfModule><br /># END WordPress</code>

If your WordPress is not installed in the root, such as a sub-folder (i.e webiste_root_location), then you need to change the mod_rewrite accordingly.

<code># BEGIN WordPress<br /><IfModule mod_rewrite.c><br />RewriteEngine On<br />RewriteBase /website_root_location/<br />RewriteRule ^index\.php$ - [L]<br />RewriteCond %{REQUEST_FILENAME} !-f<br />RewriteCond %{REQUEST_FILENAME} !-d<br />RewriteRule . /website_root_location/index.php [L]<br /></IfModule><br /># END WordPress</code>

##Step 3: Updated httpd.conf file to uncomment this line:

<code>#LoadModule rewrite_module modules/mod_rewrite.so</code>

change to

<code>LoadModule rewrite_module modules/mod_rewrite.so</code>

##Step 4: Configure wamp server

Open wamp server and navigate to: Apache ->Apache modules and scroll down to rewrite_module, then click on it to activated module rewrite.

Follow the above all 4 steps, you should be able to get your custom parmalinks working. Let us know if you have any problem.