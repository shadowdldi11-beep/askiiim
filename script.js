function sifreSor() {
    let sifre = prompt("Şifre gir:");

    if (sifre === "benilyam1705") {
        document.getElementById("login").style.display = "none";
        document.getElementById("site").style.display = "block";

        let muzik = document.getElementById("muzik");
        muzik.play().catch(() => {});

        kalpYagdir();
    } else {
        document.body.style.animation = "shake 0.3s";
        setTimeout(()=>{document.body.style.animation="";},300);
        alert("Yanlış şifre!");
    }
}

/* Yazı animasyonu */
function notGoster() {
    let text = "SENİ ÇOK SEVİYORUM HAYATIMDA OLDUĞUN İÇİN DÜNYANIN EN MUTLU İNSANIYIM HAYATIMIN ANLAMI KURBAN OLDUĞUM";
    let mesaj = document.getElementById("mesaj");

    mesaj.innerHTML = "";
    let i = 0;

    let yaz = setInterval(() => {
        mesaj.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(yaz);
    }, 40);

    konfeti();
}

/* Kalp yağmuru */
function kalpYagdir() {
    setInterval(() => {
        let kalp = document.createElement("div");
        kalp.innerHTML = "❤";
        kalp.classList.add("heart");

        kalp.style.left = Math.random() * 100 + "vw";
        kalp.style.fontSize = (20 + Math.random() * 30) + "px";
        kalp.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(kalp);

        setTimeout(() => {
            kalp.remove();
        }, 5000);
    }, 300);
}

/* Konfeti efekti */
function konfeti() {
    for (let i = 0; i < 40; i++) {
        let c = document.createElement("div");
        c.innerHTML = "✨";
        c.style.position = "absolute";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = Math.random() * 100 + "vh";
        c.style.fontSize = "20px";

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 2000);
    }
}