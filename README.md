# Project Overview

In this project , I wasgiven a web-based application that reads RSS feeds.with an incomplete test suite.
I was asked to complete the suite to match the app requirements as detailed in the rubric

## How to run the project

You can download the file by clicking clone or download button. You can either download the zip file or clone the repository. Open file index.html in browser. The test results will be displayed at the bottom of the page. Instead of manually refreshing the browser each time when a test is edited, you can run a http-server to see the changes taking effect immediately

## How did I complete the project

* To complete the 1st spec of the first suite (RSS ), I check whether the **allFeeds** variable is defined and it has atleast 1 feed.
* 2nd spec needs the **allFeeds** variable to have a valid url. I check whether the url exists and also do a second check to see whether the url is a string , as the url can't be a number or a boolean.
* The same checks are done for 3rd spec of RSS suite as well
* **The menu** suite was quite tricky. I notice that when the menu icon is not clicked (initial state) , the **body** element had a class of **menu-hidden**.
* The 2nd spec of the **The menu** suite required me to simulate a mouse click. 

>Element.click();

I just had to check whether **body** element's class of **menu-hidden** was toggled for simultaneous clicks.
* To check **Initial Entires** suite , I had to make use of done function of Jasmine spec. The done function is used for asynchronous operations when the spec(it function) depends on completed results of asynchrous function which happen in future. After the **loadFeed** function callwas completed, I check whether there is atleast a single feed.
* **New Feed Selection** suite specs were tested by making the use of done function I used before. Here I make note of the old header . Then, I load another feed by passing an another index to **loadFeed** function like

```js
    loadFeed(1, function () {
                    done();
            });
```

I checked whether the headers changed when the new feed was loaded
