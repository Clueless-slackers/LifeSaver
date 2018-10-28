let idTimeout = undefined;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("tab onupdated response");
    if (tab.url.indexOf("https://www.google.com") > -1 &&
        changeInfo.url !== undefined) {
        // chrome.tabs.executeScript(tabId, { file: "program.js" });
        console.log("tab onupdated google url found");
        console.log("changeInfo.url " + changeInfo.url);
        console.log("changeInfo \n" + JSON.stringify(changeInfo, null, "\t"));


        if (idTimeout) {
            console.log("clearTimeout");
            clearTimeout(idTimeout);
        }
        idTimeout = setTimeout(() => {
            console.log("//////////\\\\\\\\\\");
            console.log("changeInfo.url " + changeInfo.url);
            findCrime(changeInfo.url);
        }, 3000);  
    }
});



console.log("background js loaded");

function notify(crimeRating){

    var opt = {
        type: "basic",
        // title: "Primary Title",
        // message: (crimeRating > 945.73) ? "If you see something, Say something!!" + crimeRating : "Do you feel lucky punk? \n I have no data on that zip code! ",
        // message: (crimeRating < 945.73) ? "Don't Worry you won't robbed!!" + crimeRating : ,
        // iconUrl: "dice.jpg"
    };

    if (crimeRating === 0) {
        opt.title = "ERROR!!";
        opt.message = "The force does not understand";
        opt.iconUrl = "images/error.jpg";
    } else if (crimeRating < 945.73) {
        opt.title = "THE FORCE IS WITH YOU";
        opt.message = "Safe you are.";
        opt.iconUrl = "images/safety.jpg";
    } else {
        opt.title = "WARNING!!!";
        opt.message = "Warning. Danger you may be in.";
        opt.iconUrl = "images/danger.jpg";
    }

    chrome.notifications.create(null, opt, creationCallback);

    function creationCallback(notificationId) {
        console.log("creation callback" + notificationId);
    } notify(fileJSON["zc" + zipcode]);
}

// notify();

function findCrime(url) {
    const fileGrabber = chrome.runtime.getURL('./crimeData.json');

    fetch(fileGrabber)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => doSomething(json))
        .catch((err) => {
            console.log("error " + err);
        });

    function doSomething(fileJSON) {
        console.log("file data is ::\n" + JSON.stringify(fileJSON, null, "\t"));
        // url = window.location.href;
        // url = changeInfo.url;
        X = url.split("@"); // ['sdfsfsfs', '435345, 3242342, r3wr32r']
        y = X[0].split("/"); //  [2342342, 1231231231, ASDFAEWFAE];
        z = y[y.length - 2];
        zipcode = z.split("+");
        zipcode = zipcode[zipcode.length - 1];
        console.log("url zipcode is " + zipcode);

        if (fileJSON["zc" + zipcode]) {
            console.log(`The crime rating here is ${fileJSON["zc" + zipcode]}`);
            notify(fileJSON["zc" + zipcode]);

        }
        else if (zipcode.toString().length !== 5){
            console.log("known error ignoring incomplete zipcode");
        }
        else {
            console.log("NO data for this zipcode");
            notify(0);
        }

    }
}
