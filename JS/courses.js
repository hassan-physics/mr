let cssbuttons = document.getElementById("cssbuttons");
let okmassage = document.getElementById('okmassage');
let nomassage = document.getElementById('nomassage');
let UserName = document.getElementById('UserName');
let UserEmail = document.getElementById('UserEmail');
let UserNumber = document.getElementById('UserNumber');
let UserPassword = document.getElementById('UserPassword');
let logoButton = document.getElementById('logoButton');
let profileButton = document.getElementById('profileButton');
let settingsBox = document.getElementById('settingsBox');
let FullClose = document.getElementById('FullClose');
let mainbtncontent = document.getElementById('mainbtncontent');
let logoffbtn = document.getElementById('logoffbtn');
let mainname = document.getElementById('mainname');

profileButton.onclick = function () {
    if (settingsBox.style.left === "-250px") {
        settingsBox.style.left = "0px"
        document.body.style.overflowY = 'hidden';
        FullClose.style.display = "flex";
    } else {
        settingsBox.style.left = "-250px"
        document.body.style.overflowY = 'auto';
        FullClose.style.display = "none";
    }
}

FullClose.onclick = function () {
    FullClose.style.display = "none";
    settingsBox.style.left = "-250px"
    document.body.style.overflowY = 'auto';
}

logoffbtn.onclick = function () {
    localStorage.clear();
    window.location.href = "index.html";
}
mainname.innerText = window.localStorage.getItem("UserName");
