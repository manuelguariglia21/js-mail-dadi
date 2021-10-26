//creo le variabili

const btnInvia = document.getElementById('btn-invia');
btnInvia.addEventListener('click',function(){

  const emailList = ["manuelguariglia@gmail.com", "mariorossi@gmail.com", "sofiaricci@hotmail.it"];
  const userEmail = document.getElementById('userEmail').value; 
  const emailBox = document.getElementById('userEmail');
  let validEmail = false;

  //verifico Email

  for(let i = 0; i < emailList.length; i++){
    if(userEmail == emailList[i]){
      validEmail = true;
      emailBox.classList.remove("is-invalid");
      emailBox.classList.add("is-valid");
      btnInvia.classList.remove("bg-danger");
      btnInvia.classList.add("bg-success");
      btnInvia.innerHTML = `Email valida, Puoi Iniziare!!`;
    }
  }

  //Email non valida quindi "Accesso negato"

  if(validEmail === false){
    emailBox.classList.add("is-invalid");
    btnInvia.classList.add("bg-danger");
    btnInvia.innerHTML = `Email non valida`;
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

});
