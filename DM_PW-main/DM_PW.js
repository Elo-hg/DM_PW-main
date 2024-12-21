// Excercice sur le LEXIQUE//
$(document).ready(function() {


    $('#checkanswerbtn_lexique').on('click', function() {
   const radioButtons1 = document.querySelectorAll('input[name="ex2a"]');
   const radioButtons2 = document.querySelectorAll('input[name="ex2b"]');
   // code from https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
       let score_lexique = 0;
        // Vérifier la réponse ex1a
        if ($("#ex1a").val() === "enfiler") {
            score_lexique++;  // Incrémenter le score
        }

        // Vérifier la réponse ex1b
        if ($("#ex1b").val() === "gerer") {
            score_lexique++;  // Incrémenter encore le score
        }

        // Vérifier la réponse ex1c
        if ($("#ex1c").val() === "entendre") {
            score_lexique++;  // Incrémenter encore le score
        }
let selectedValue1 = null;
   for (const radio of radioButtons1) {
       if (radio.checked) {
           selectedValue1 = radio.value;
           break;
       }
   }
   if (selectedValue1 === "pâle") {
       score_lexique++;  // Incrémenter le score
   }

   // Vérifier la réponse des boutons radio ex2b
   let selectedValue2 = null;
   for (const radio of radioButtons2) {
       if (radio.checked) {
           selectedValue2 = radio.value;
           break;
       }
   }
   if (selectedValue2 === "pale") {
       score_lexique++;  // Incrémenter le score
   }

        // Afficher le résultat final après toutes les vérifications
        $('#results').html("Ton score est : " + score_lexique +"/5");

        // Sauvegarder le score dans localStorage - source //https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
        localStorage.setItem("score_lexique", score_lexique);
    });
}); 

//Exercice CONJUGAISON

$(document).ready(function() {


    $('#checkanswerbtn_conjugaison').on('click', function() {
       const checkboxes1 = document.querySelectorAll('input[name="conj2a"]');
       const checkboxes2 = document.querySelectorAll('input[name="conj2b"]');

       let score_conjugaison = 0;
        // Vérifier la réponse ex1a
        if ($("#conj1a").val() === "résoudre") {
            score_conjugaison++;  // Incrémenter le score
        }

        // Vérifier la réponse ex1b
        if ($("#conj1b").val() === "marcher") {
            score_conjugaison++;  // Incrémenter encore le score
        }

        // Vérifier la réponse ex1c
        if ($("#conj1c").val() === "jouer") {
            score_conjugaison++;  // Incrémenter encore le score
        }
       let correctAnswers1 = ["nettoie"]; // Liste des réponses correctes
   for (const checkbox of checkboxes1) {
       if (checkbox.checked && correctAnswers1.includes(checkbox.value))
           {
            score_conjugaison++;  // Incrémenter le score
       }
   }

   // Vérifier les réponses des cases à cocher ex2b
   let correctAnswers2 = ["joue"]; // Liste des réponses correctes
   for (const checkbox of checkboxes2) {
       if (checkbox.checked && correctAnswers2.includes(checkbox.value)) {
        score_conjugaison++;  // Incrémenter le score
       }
   }

        // Afficher le résultat final après toutes les vérifications
        $('#results').html("Ton score est : " + score_conjugaison +"/5");

         // Sauvegarder le score dans localStorage - source //https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
         localStorage.setItem("score_conjugaison", score_conjugaison);
    });
});

//Exercice GRAMMAIRE

// function from https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API 	 

  
  /* la table contenant les réponses, initialisée à vide */
    var tabRep = {"r1":"vide","r2":"vide","r3":"vide","r4":"vide"};
    /* la table des solutions mettant en relation chaque case avec la réponse attendue */
    var tabSol = {"r1":"el3","r2":"el2","r3":"el1","r4":"el6","r5":"el5","r6":"el4"};

// Fonction qui vérifie la table des réponses
$(document).ready(function() {
     $('#checkanswerbtn_grammaire').on('click', function() {
                 let score_grammaire = 0;
    for (var k in tabRep){
        id = "#"+k;
        if(tabRep[k]==tabSol[k]) {
            score_grammaire++;
        } 
    }
        // Afficher le résultat final après toutes les vérifications
         $('#results').html("Ton score est : " + score_grammaire +"/6" );

    // Sauvegarder le score dans localStorage - source //https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
        localStorage.setItem("score_grammaire", score_grammaire);
 });
 });

 // Exercice ORTHOGRAPHE

 $(document).ready(function() {
    $('#checkanswerbtn_orthographe').on('click', function () {
        // Initialisation du score à 0
        let score_orthographe = 0;
    
        // Texte correct
        const realOrder = "Alors que le soleil brille, une coccinelle attend tranquillement son mille-patte. La belle tourne comme un lion en cage à mesure que le temps passe et puisqu'elle s'impatiente, elle finit par téléphoner à son amoureux. Elle lui demande alors : « Mais où es-tu ? Dépêche-toi ! ». Ni une ni deux, le mille-patte s'explique et lui répond : « Minute, je mets mes chaussures ! ».";
    
        // Récupérer le texte de l'utilisateur dans le textarea 
        const userText = $('#dictee').val().trim();
    
        // Comparaison du texte utilisateur avec le texte réel
        const realWords = realOrder.split(' '); // Découper en mots
        const userWords = userText.split(' '); // Découper le texte de l'utilisateur en mots
    
        // Comparer les mots un par un
        for (let i = 0; i < realWords.length; i++) {
            if (realWords[i] === userWords[i]) {
                score_orthographe++; // Si le mot est correct, incrémenter le score
            }
        }
    
        // Afficher le score dans la page
        // Vous pouvez l'afficher où vous voulez, ici on suppose que vous avez un élément avec l'ID 'score'
        $('#results').html("Ton score est : " + score_orthographe +"/67");

         // Sauvegarder le score dans localStorage - source //https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
            localStorage.setItem("score_orthographe", score_orthographe);

             });
    });
    
    //Exercice COMPREHENSION DE TEXTE 


    
    $(document).ready(function () {
        $('#checkanswerbtn_comprehension').on('click', function () {
            let  score_comprehension=0;
            const vraiOrdre = ["comp4","comp5","comp2","comp6","comp1","comp7","comp3"];
            // va chercher dans la liste la valeur attribuée dans le html pour chaque élément
            const userOrdre = $("#sortable li").map(function () {
                return $(this).attr("value");
            }).get(); 
            
        for (var x in vraiOrdre){
                id = "#"+x;
                if(vraiOrdre[x]==userOrdre[x]) {
                    score_comprehension++;
                } 
            }
            // Afficher le résultat final après toutes les vérifications
                 $('#results').html("Ton score est : " + score_comprehension +"/7");

            // Sauvegarder le score dans localStorage - source //https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
            localStorage.setItem("score_comprehension", score_comprehension);      
         });
        });


//BILAN FINAL


   $(document).ready(function () {
    // Afficher les scores sauvegardés pour chaque exercice
    const savedLexiqueScore = localStorage.getItem("score_lexique");
    if (savedLexiqueScore !== null) {
        $('#lexiqueScore').html("Ton dernier score Lexique : " + savedLexiqueScore);
    }

    const savedConjugaisonScore = localStorage.getItem("score_conjugaison");
    if (savedConjugaisonScore !== null) {
        $('#conjugaisonScore').html("Ton dernier score Conjugaison : " + savedConjugaisonScore);
    }

    const savedGrammaireScore = localStorage.getItem("score_grammaire");
    if (savedGrammaireScore !== null) {
        $('#grammaireScore').html("Ton dernier score Grammaire : " + savedGrammaireScore);
    }
    else    $('#grammaireScore').html("Grammaire : Pas de score sauvegardé");

    const savedOrthographeScore = localStorage.getItem("score_orthographe");
    
        $('#orthographeScore').html("Ton dernier score Orthographe : " + savedOrthographeScore);
    

    const savedComprehensionScore = localStorage.getItem("score_comprehension");
    
        $('#comprehensionScore').html("Ton dernier score Compréhension : " + savedComprehensionScore);
    
         

});

    