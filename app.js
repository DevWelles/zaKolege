const prompt = require('prompt-sync')({sigint: true}); 
//sa ovim samo unosite modul 'prompt-sync' i assignate ga u const prompt 
// to se tako koristi u node.jsu da možete svoj code izvršiti odma tu u terminalu a ne u browseru
// kako bi rekao naš profa "jako jednostavno, ništa komplicirano :)"


/* u zadatku imamo dvije funkcije brojGaraza1() i brojGaraza2() prva ima jednu grešku vezanu za type podatka, a
u drugoj funckiji, brojGaraza2(), ta greška je ipsravljena. Ja sam na ovaj "teži" način naučio te blesave automatkse 
konverzije koje radi JS, a sada na svu sreću imamo našeg profu Antuna koji nam je to sve lipo objasnio :) 
*/
const brojGaraza1 = () => { //ovo je obična funkcija napisana u obliku arrow function sintakse može se napisati i function brojGaraža () {}
  let userInput = Number(prompt('Unesite broj garaza(N): ')); //pitamo usera da upiše broj garaža i to pospremamo u varijablu  userInput
  while (typeof userInput === "number") { // Što mislite što nevalja sa ovim dijelom? i zašto stvara infinite while loop?
    console.log('Molimo ispravno unesite broj!')
    console.log(`Tip podatka kojeg ste unijeli je: ${typeof userInput}`) //provjeravamo tip podatka čisto da vidimo u consoli
    userInput = Number(prompt('Unesite broj garaza(N): ')); //ponosvno tražimo userInput pomoću prompt funkcije
} 
  console.log(userInput);
  return (userInput); 
};


const brojGaraza2 = () => { 
  let userInput = Number(prompt('Unesite broj garaza(N): ')); 
  while (!(isNaN(userInput)) || userInput == ' ' || userInput <= 0) { // provjevaravamo da li je userInput NaN jer znamo da JavaScript u funkciji Number() sve pretvara u typeof "number" i ako user utipka neki string onda ce biti convertan u NaN, a NaN je tipa "number" u javascriptu
                                                                  // još sam dodatno stavio i da pokrijem edge cases u slucaju da user utipka praznne ili nulu i negativne brojeve
                                                                  // probajte upisati decimalan broj i vidjeti kakav je ispis. Što mislite zašto je takav? :)
    console.log('Molimo ispravno unesite broj!')
    console.log(`Tip podatka kojeg ste unijeli je: ${typeof userInput}`) //provjeravamo tip podatka čisto da vidimo u consoli
    userInput = Number(prompt('Unesite broj garaza(N): ')); //ponosvno tražimo userInput pomoću prompt funkcije
} 
  console.log(`Vaš broj unesenih garaža je: ${Math.ceil(userInput)}`);
  return Math.ceil(userInput); 
};

brojGaraza1(); //pozivamo funkciju, u terminalu pritistine ctr+c da iziđete iz infinite while loopa
//pozovite funkciju brojGaraza2() umjesto brojGaraza1()

//za pokretanje programa u otvorite terminal u ovom folderu i napišite node app.js i ne zaboravite ctrl+c za prekid
