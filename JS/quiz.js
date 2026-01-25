let profileButton = document.getElementById('profileButton');
let settingsBox = document.getElementById('settingsBox');
let FullClose = document.getElementById('FullClose');
let logoffbtn = document.getElementById('logoffbtn');
let mainname = document.getElementById('mainname');
let nameInput = document.getElementById('nameInput');
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let userName = window.localStorage.getItem("UserName") || "";
mainname.innerText = userName;
nameInput.value = userName;
FullClose.onclick = function () {
    settingsBox.style.left = "-250px";
    document.body.style.overflowY = 'auto';
    FullClose.style.display = "none";
}
logoffbtn.onclick = function () {
    localStorage.clear();
    window.location.href = "index.html";
}
let questions = document.querySelectorAll(".question");
let current = 0;
questions.forEach(q => q.style.display = "none");
questions[current].style.display = "block";
function updateButtons() {
    if (current === questions.length - 1) {
        nextBtn.style.opacity = "0.4";
        nextBtn.style.pointerEvents = "none";
    } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
    }
    if (current === 0) {
        prevBtn.style.opacity = "0.4";
        prevBtn.style.pointerEvents = "none";
    } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents = "auto";
    }
}
updateButtons();
function next() {
    if (current < questions.length - 1) {
        questions[current].style.display = "none";
        current++;
        questions[current].style.display = "block";
    }
    updateButtons();
}
function prev() {
    if (current > 0) {
        questions[current].style.display = "none";
        current--;
        questions[current].style.display = "block";
    }
    updateButtons();
}
let time = 60 * 60;
let timer = setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;
    document.getElementById("timer").innerText =
        m + ":" + (s < 10 ? "0" : "") + s;
    time--;
    if (time < 0) {
        clearInterval(timer);
        alert("انتهى الوقت! سيتم إرسال الاختبار تلقائيًا.");
        submitExam();
    }
}, 1000);
function showConfirm() {
    document.getElementById("confirmBox").style.display = "block";
}
function hideConfirm() {
    document.getElementById("confirmBox").style.display = "none";
}
function submitExam() {
    let name = window.localStorage.getItem("UserName") || "";
    if (name === "") {
        alert("من فضلك أدخل اسم الطالب");
        return;
    }
    let score = 0;
    for (let i = 1; i <= questions.length; i++) {
        let q = document.querySelector(`input[name="q${i}"]:checked`);
        if (q) score += Number(q.value);
    }
    fetch("https://formcarry.com/s/1NgWuRbfGwv", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "اسم الطالب": name,
            "الدرجة": score
        })
    })
        .then(res => {
            if (res.ok) {
                localStorage.setItem("examSubmitted", "true");
                localStorage.setItem("LastScore", score);
                window.onbeforeunload = null;
                window.location.replace("../index.html");
            } else {
                alert("فشل الإرسال، حاول مرة أخرى.");
            }
        })
        .catch(() => {
            alert("خطأ في الاتصال، تأكد من الإنترنت.");
        });
};

window.onbeforeunload = function () {
    return "هل أنت متأكد؟ لم تقم بتسليم الامتحان بعد!";
};

const bar = document.getElementById('progress');
const duration = 3600;
let startTime = Date.now();

function updateBar() {
    const elapsed = (Date.now() - startTime) / 1000;
    const percentage = Math.max(100 - (elapsed / duration) * 100, 0);
    bar.style.width = percentage + '%';

    if (percentage > 0) {
        requestAnimationFrame(updateBar);
    }
}

updateBar();