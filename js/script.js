//creo le variabili

const emailList = ["manuelguariglia@gmail.com", "mariorossi@gmail.com", "sofiaricci@hotmail.it"];
const userEmail = "manuelguariglia@gmail.com" //prompt("Inserisci la tua email: "); 
let validEmail = false;

//verifico Email

for(let i = 0; i < emailList.length; i++){
  if(emailList[i] === userEmail){
    validEmail = true;
  }
}

//Email non valida quindi "Accesso negato"

if(validEmail === false){
  console.log("Accesso Negato");
}

//Email valida Accesso consentito
else{
  console.log("Accesso esegito con successo.");
  const userNumber = Math.floor(Math.random() * 6) + 1;
  const pcNumber = Math.floor(Math.random() * 6) + 1;
  console.log("Il tuo numero è: " + userNumber);  
  console.log("Il numero del PC è: " + pcNumber);

  if(userNumber > pcNumber){
    console.log("Congratulazioni hai vinto!!!");
  }
  else if(userNumber < pcNumber){
    console.log("Peccato!! hai perso.");
  }
  else{
    console.log("Pareggio!!");
  }
}
