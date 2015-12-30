---
title: Apply spam filter to your Google Analytics account – step by step
maintitle: Apply spam filter to your Google Analytics account – step by step
date: 2015/05/17
category: Google Analytics
excerpt: "Recently, I noticed in one of our clients’ Google Analytics account, there’s an unfamiliar event registered called: to use this feature visit: EVENT-TRACKING.COM. Judging by the look of the name I suspect this is a spam so first thing I did was checking my web server to ensure the site is not compromised."
featimg: 
---

Recently, I noticed in one of our clients’ Google Analytics account, there’s an unfamiliar event registered called: “to use this feature visit: EVENT-TRACKING.COM”. Judging by the look of the name I suspect this is a spam so first thing I did was checking my web server to ensure the site is not compromised.

After check a few of the weak spots where hacking could mostly happen, I didn’t see any thing suspicious. So I went search for the event name above and it turn out that event belongs to a spammy refer traffic called “Ghost Referral Traffic“. I tried to follow  Sayf Sharif‘s solution however play around with cookie is not something close to my skillset. Luckily after a bit complaining in Analytics forum I was pointed to Simo’s blog where he actually wrote a tool called “Spam Filter Insertion Tool” to deal with this kind of activity, which basically add filters to your GA account and update the filters automatically.

I have to say the purpose for me to write this thread is for SEOs who are not so tech-inclined (like me), all the credit should be attributed to Simo Ahava, who is a true legend in web analytics and an expert in Google Tag Manager (If you’re a GTM fun like me, you won’t miss any of his articles).

Here is the step by step guide:

###	1) download the tool at github

<img src="../images/download-spam-insertion-tool.jpg" alt="Github Spam Tool" />

### 2) Create your own Google Analytics API project in <a href="href="https://console.developers.google.com" target="_blank">Google Developer</a> Console. Make sure to enable Analytics API.

<img src="../images/ga-api.jpg" alt="Google Analytics" />

### 3) Create New client ID. Select API Project, and choose credentials on your left menu under APIs & Auth, then follow the instructions below:

<img src="../images/client-id" alt="Google client id" />

### 4) Create New public access API key, make sure you choose “Browser key”.

<img src="../images/browser-key.jpg" alt="Google client id" />

Then paste your website address as the referrer:

<img src="../images/public-key.jpg" alt="Google client id" />

### 5) Get your Client ID and Public API key:

<img src="../images/client-id-public-key.jpg" alt="Google client id" />

### 6) Unzip the file you downloaded at step 1), open authutil.js under js folder and replace clientId and apiKey with the ones you got from above step, then save the file.

### 7) Upload the folder (“spam-filter-tool-master”) to the root of your web server (If you don’t have ftp access, ask your developer to do this for you).

### 8) Open your browser and type: yourdomain/spam-filter-tool-master/index.html (replace yourdomain with your website). You should see this:

<img src="../images/spam-filter-in-browser1.jpg" alt="Google client id" />

### 9) Click Initialize and choose the right account and profile to apply the spam filter, then you’re good to go!

### 10) I checked under the last filter: “sa_Spam_filter_#6”, EVENT-TRACKING.COM is listed there. Leave comments if you have any questions.

<img src="../images/event-tracking-spam.jpg" alt="Google client id" />
