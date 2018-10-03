// ==UserScript==
// @name         FBM Demetricator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Demetricates FB Mobile, returning the human in social relations!
// @author       Gug
// @match        https://m.facebook.com/*
// @run-at       document-end
// @require https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==
(function() {
    'use strict';

    function hideIt(targObjClass){
        var likeObjArray = document.getElementsByClassName(targObjClass);
        for (var i in likeObjArray){
            if (likeObjArray[i] != undefined && likeObjArray[i].style != undefined && likeObjArray[i].style.display != undefined ){
                likeObjArray[i].style.display = "none";
            }
        };
    }

    function hideCommentsCounter(targObjClass){
        var commentsArray = document.getElementsByClassName(targObjClass);
        for (var i in commentsArray){
            i.innerHTML = "comments";
        }
    }

    function init(jNode){
        hideIt("_1g06");
        hideIt("_14va");
        //hideCommentsCounter("_1j-c");
    };




    // ------------ FUNCTIONS REFERENCE START -------------------
    //hideIt("_1g06"); //hide like counter in posts
    //hideIt("_14va"); //hide like counter in comments
    //hideCommentsCounter("_1j-c"); // replace "x number of comments" with "comments"
    // ------------ FUNCTIONS REFERENCE END   -------------------


    // -------------         INIT              -------------------
    waitForKeyElements("._1g06", init);
})();