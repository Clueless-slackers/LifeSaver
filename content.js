// const fileGrabber = chrome.runtime.getURL('./crimeData.json');

// fetch(fileGrabber)
//     .then((response) => response.json()) //assuming file contains json
//     .then((json) => doSomething(json))
//     .catch((err) => {
//         console.log("error " + err);
//     });

// function doSomething(fileJSON){
//     console.log("file data is ::\n" + JSON.stringify(fileJSON, null, "\t"));
//     url = window.location.href
//     X = url.split("@"); // ['sdfsfsfs', '435345, 3242342, r3wr32r']
//     y = X[0].split("/"); //  [2342342, 1231231231, ASDFAEWFAE];
//     z = y[y.length - 2];
//     zipcode = z.split("+");
//     zipcode = zipcode[zipcode.length - 1];
//     console.log("url zipcode is " + zipcode);

//     if (fileJSON["zc" + zipcode]) {
//         console.log(`The crime rating here is ${fileJSON["zc" + zipcode]}`);

//     }
//     else {
//         console.log("NO daata for this zipcode");
//     }

// }





