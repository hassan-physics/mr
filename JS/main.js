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
let coursesBox = document.getElementById('coursesBox');
let why_we = document.getElementById('why_we');
let socialfooter = document.getElementById('socialfooter');


if (window.localStorage.getItem("UserLogined") === "true") {
    logoButton.style.display = "none";
    why_we.style.display = "none";
    coursesBox.style.display = "block";
    socialfooter.style.display = "block";
    profileButton.style.display = "flex";
    mainbtncontent.innerText = "المزيد من المعلومات";
    cssbuttons.onclick = function () {
        window.location.href = "index.html#idBTN";
    };
} else {
    socialfooter.style.display = "none";
    coursesBox.style.display = "none";
    why_we.style.display = "block";
    logoButton.style.display = "flex";
    profileButton.style.display = "none";
    mainbtncontent.innerText = "إشترك معنا الأن";
    cssbuttons.onclick = function () {
        window.location.href = "login.html";
    };
}

// window.localStorage.setItem("UserLogined", "true")
// window.localStorage.setItem("UserName", "حازم محمد حسن")
// window.localStorage.setItem("UserEmail", "moasdmasdjkfsa2@gmail.com")

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