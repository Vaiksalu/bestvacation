console.log ("Hello from script"); 

/*let - palun loo kastige, muutuja. vaja kasutaja andmeid, operatiivmälu, ma ütlen, et on vaja kuupäeva kätte saada, vahemälus luua kast, kuhu palun veebilehitsejal lisada aega mis saab süsteemi käest*/
let now = new Date(); /*arvutiaja kuvamine consolis*/
console.log(now); 

let time = now.getTime();
console.log(time) /*1654943068170 - need on millisekundid, 1970a. on nullpunkt*/


let year = now.getFullYear(); /*tee ära on ()*/
console.log (year);

let yearSpan = document.querySelector("#year");
console.log(yearSpan);

yearSpan.innerText = year; /*tekst (ja peab olema suure T-tähega) mis salvestatakse spanni*/