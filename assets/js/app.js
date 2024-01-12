// const myBtn = document.querySelectorAll(".my-btn");
// let btnImg = document.getElementById("btn-img");

// for(let i = 0; i < myBtn.length; i++){
//     myBtn[i].addEventListener("click", function (){
//         const txt = myBtn[i].innerText;
//         ai(txt);
//     });
// }

// document.addEventListener("keypress", (e) => {
//     let txt = e.key.toUpperCase();
//     let txt2 = txt.toLowerCase();
//     ai(`${txt} ${txt2}`);
// })


// const ai = (text) => {
//     switch(text){
//         case 'A a':
//             new Audio('assets/audio/a.mp3').play();
//             btnImg.src="assets/img/a.png";
//             break;
//         case 'B b':
//             new Audio('assets/audio/b.mp3').play();
//             btnImg.src="assets/img/b.png";
//             break;
//         case 'C c':
//             new Audio('assets/audio/c.mp3').play();
//             btnImg.src="assets/img/c.png";
//             break;
//         case 'D d':
//             new Audio('assets/audio/d.mp3').play();
//             btnImg.src="assets/img/d.png";
//             break;
//         case 'E e':
//             new Audio('assets/audio/e.mp3').play();
//             btnImg.src="assets/img/e.png";
//             break;
//         case 'F f':
//             new Audio('assets/audio/f.mp3').play();
//             btnImg.src="assets/img/f.png";
//             break;
//         case 'G g':
//             new Audio('assets/audio/g.mp3').play();
//             btnImg.src="assets/img/g.png";
//             break;
//         case 'H h':
//             new Audio('assets/audio/h.mp3').play();
//             btnImg.src="assets/img/h.png";
//             break;
//         case 'I i':
//             new Audio('assets/audio/i.mp3').play();
//             btnImg.src="assets/img/i.png";
//             break;
//         case 'J j':
//             new Audio('assets/audio/j.mp3').play();
//             btnImg.src="assets/img/j.png";
//             break;
//         case 'K k':
//             new Audio('assets/audio/k.mp3').play();
//             btnImg.src="assets/img/k.png";
//             break;
//         case 'L l':
//             new Audio('assets/audio/l.mp3').play();
//             btnImg.src="assets/img/l.png";
//             break;
//         case 'M m':
//             new Audio('assets/audio/m.mp3').play();
//             btnImg.src="assets/img/m.png";
//             break;
//         case 'N n':
//             new Audio('assets/audio/n.mp3').play();
//             btnImg.src="assets/img/n.png";
//             break;
//         case 'O o':
//             new Audio('assets/audio/o.mp3').play();
//             btnImg.src="assets/img/o.png";
//             break;
//         case 'P p':
//             new Audio('assets/audio/p.mp3').play();
//             btnImg.src="assets/img/p.png";
//             break;
//         case 'Q q':
//             new Audio('assets/audio/q.mp3').play();
//             btnImg.src="assets/img/q.png";
//             break;
//         case 'R r':
//             new Audio('assets/audio/r.mp3').play();
//             btnImg.src="assets/img/r.png";
//             break;
//         case 'S s':
//             new Audio('assets/audio/s.mp3').play();
//             btnImg.src="assets/img/s.png";
//             break;
//         case 'T t':
//             new Audio('assets/audio/t.mp3').play();
//             btnImg.src="assets/img/t.png";
//             break;
//         case 'U u':
//             new Audio('assets/audio/u.mp3').play();
//             btnImg.src="assets/img/u.png";
//             break;
//         case 'V v':
//             new Audio('assets/audio/v.mp3').play();
//             btnImg.src="assets/img/v.png";
//             break;
//         case 'W w':
//             new Audio('assets/audio/w.mp3').play();
//             btnImg.src="assets/img/w.png";
//             break;
//         case 'X x':
//             new Audio('assets/audio/x.mp3').play();
//             btnImg.src="assets/img/x.png";
//             break;
//         case 'Y y':
//             new Audio('assets/audio/y.mp3').play();
//             btnImg.src="assets/img/y.png";
//             break;
//         case 'Z z':
//             new Audio('assets/audio/z.mp3').play();
//             btnImg.src="assets/img/z.png";
//             break;
        
//     }
// }

//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------


// const myBtn = document.querySelectorAll(".my-btn");
// let btnImg = document.getElementById("btn-img");

// for(let i = 0; i < myBtn.length; i++){
//     myBtn[i].addEventListener("click", function (){
//         const text = myBtn[i].innerText.split(" ")[1];
//         audioFunc(text)
//     });
// }

// document.addEventListener("keypress", (e) => {
//     let text =  e.key.toLowerCase();
//     audioFunc(text)
// })

// const audioFunc = (text) => {
//     if(text){
//         new Audio(`assets/audio/${text}.mp3`).play();
//         btnImg.src=`assets/img/${text}.png`;
//     } 
// }
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------


const myBtn = document.querySelectorAll(".my-btn");
const btnImg = document.getElementById("btn-img");

myBtn.forEach(btn => btn.addEventListener("click", () => audioFunc(btn.innerText.split(" ")[1])));
document.addEventListener("keypress", e => audioFunc(e.key.toLowerCase()));

const audioFunc = text => text && (new Audio(`assets/audio/${text}.mp3`).play(), btnImg.src = `assets/img/${text}.png`);


