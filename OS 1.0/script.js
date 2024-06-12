
function openApp(url) {
    window.location.href = url;
}

function AppsM(N) {
    if (N.trim() === "B") {
        u = "index.html";
    } else {
        u = N + ".App.html";
    }
    openApp(u);
}

function openForm(P) {
    let x = document.getElementById(P);
    if (x.style.display === "none") {
        document.getElementById(P).style.display = "flex";
    } else {
        document.getElementById(P).style.display = "none";
    }
}