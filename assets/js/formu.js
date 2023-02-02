/*
    //declearing the data here
    let nom = document.getElementById("nom").value;
    let prénom = document.getElementById("prénom").value;
    let ville = document.getElementById("ville").value;
    let message = document.getElementById("message").value;
    let myForm = document.getElementById("contact");
  
    //setting alert if the submit button clicked without filling the form
  
    if (nom == "" && prénom == "" && ville == "" && message == "") {
      alert("Veuillez remplir le formulaire. !");
    }


myForm.addEventListener('submit', function(e) {

    let myRegex = /^[a-zA-Z-\s]+$/;

    if (nom.value.trim() == "")
    {
        let myError = document.getElementById("error1");
        myError.innerHTML = "Le champs Nom est requis.";
        myError.style.color = "red";
        e.preventDefault();

    } 
    
    else if (myRegex.test(nom.value) == false) 
    {
        let myError = document.getElementById("error1");
        myError.innerHTML = "Le champs doit comporter des lettres, des tirets uniquement.";
        myError.style.color = "red";
        e.preventDefault();
    }
   
    else if (prénom.value.trim() == "")
    {
        let myError = document.getElementById("error2");
        myError.innerHTML = "Le champs Nom est requis.";
        myError.style.color = "red";
        e.preventDefault();
    } 

    else if (myRegex.test(prénom.value) == false) 
    {
        let myError = document.getElementById("error2");
        myError.innerHTML = "Le champs doit comporter des lettres, des tirets uniquement.";
        myError.style.color = "red";
        e.preventDefault();
    }

    else if (ville.value.trim() == "")
    {
        let myError = document.getElementById("error3");
        myError.innerHTML = "Le champs Nom est requis.";
        myError.style.color = "red";
        e.preventDefault();
    } 

    else if (myRegex.test(ville.value) == false) 
    {
        let myError = document.getElementById("error3");
        myError.innerHTML = "Le champs doit comporter des lettres, des tirets uniquement.";
        myError.style.color = "red";
        e.preventDefault();
    } 
        
});

*/

let myForm = document.getElementById("myForm");

myForm.addEventListener('submit', function(e) {

    let myInput = document.getElementById("username");
    let myRegex = /^[a-zA-Z-\s]+$/;
    

    if (myInput.value.trim() == ""){

        let myError = document.getElementById("error");
        myError.innerHTML = "Le champs Nom est requis.";
        myError.style.color = "red";
        e.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {

        let myError = document.getElementById("error");
        myError.innerHTML = "Le champs doit comporter des lettres, des tirets uniquement.";
        myError.style.color = "red";
        e.preventDefault();
    }
    });

/*input2*/ 

myForm.addEventListener("submit", function(f) {

    let myInput2 = document.getElementById("firstname");
    let myRegex2 = /^[a-zA-Z-\s]+$/;

        if (myInput2.value.trim() == "") {
            let myError2 = document.getElementById("error2");
            myError2.innerHTML = "Le champs Prénom est requis.";   
            myError2.style.color = "red";
            f.preventDefault();

        } else if (myRegex2.test(myInput2.value) == false) {

            let myError2 = document.getElementById("error2");
            myError2.innerHTML = "Le champs doit comporter des lettres, des tirets uniquement.";
            myError2.style.color = "red";
            f.preventDefault();
        }
    });

/*input3*/ 

myForm.addEventListener("submit", function(g) {
    let myRegex3 = /^[a-zA-Z-\s]+$/;

        let myInput3 = document.getElementById("ville");
            if (myInput3.value.trim() == "") {
                let myError3 = document.getElementById("error3");
                myError3.innerHTML = "L'adresse est requise.";
                myError3.style.color = "red";
                g.preventDefault();

            } else if (myRegex3.test(myInput3.value) == false) {

                let myError3 = document.getElementById("error3");
                myError3.innerHTML = "Le champs doit comporter des lettres et des chiffres";
                myError3.style.color = "red";
                g.preventDefault();
            }

});