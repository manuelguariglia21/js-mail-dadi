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
      btnInvia.innerHTML = `Rigioca`;
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
    const welcomePage = document.getElementById("welcome");
    welcomePage.classList.add("hide");
    const userBox = document.getElementById("userBox");
    const pcBox = document.getElementById("pcBox");
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    const risultato = document.getElementById("risultato");


    userBox.innerHTML += `
    <div class="text-center mt-5"><i class="fas fa-user-ninja"></i><div>
    <h2 class="text-center">Il tuo numero è <span>${userNumber}<span><h2>
    `;

    pcBox.innerHTML += `
    <div class="text-center mt-5"><i class="fas fa-laptop"></i><div>
    <h2 class="text-center">Il numero del PC è <span>${pcNumber}<span><h2>
    `;

    if(userNumber > pcNumber){
      risultato.classList.add("win");
      risultato.innerHTML += `
      <div class="text-center mt-2"><i class="far fa-grin-wink"></i><div>
      <h2 class="text-center">Congratulazioni Hai Vinto!!!<h2>
      `;
    }
    else if(userNumber < pcNumber){
      risultato.classList.add("lose");
      risultato.innerHTML += `
      <div class="text-center mt-2"><i class="far fa-sad-tear"></i></i><div>
      <h2 class="text-center">Peccato!!! Hai Perso.<h2>
      `;
    }
    else{
      risultato.classList.add("neutral");
      risultato.innerHTML += `
      <div class="text-center mt-2"><i class="far fa-meh"></i></i></i><div>
      <h2 class="text-center">Avete pareggiato.<h2>
      `;
    }
  }

});
