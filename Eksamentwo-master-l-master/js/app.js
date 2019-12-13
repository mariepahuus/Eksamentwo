(function() 
{
 var allQuestions = [{
   question: "Hvornår var Big Bang?",
   options: [" ca. 14 mia. år siden", " ca. 16 mia. år siden", " ca. 20 mia. år siden"],
   answer: 0
 }, {
   question: "Hvordan blev der skabt galakser?",
   options: [" Planeterne samlede sig", " Stjernerne samlede sig", " Atomerne samlede sig"],
   answer: 1
 }, {
   question: "Hvem er Galileo Galilei?",
   options: [" Italiensk filosof, fysiker og astronom", " Svensk filosof, fysiker og professor", " Tysk astronaut"],
   answer: 0
 },{
   question: "Hvad opdagede Galileo?",
   options: [" Mars’ kratere og jordens måne", " Planeten Pluto", " Månens kratere og Jupiters måner"],
   answer: 2
 }, {
   question: "Hvad er sputnik 1?",
   options: [" Den første satellit sendt i kredsløb om Jorden", " Den anden satellit sendt i kredsløb om jorden", " Den første satellit sendt i kredsløb om månen"],
   answer: 0
 },{
   question: "Hvor mange km rejste satellitten 'Sputnik 1'?",
   options: [" 60 tusinde km", " 20 mio. km", " 60 mio. km"],
   answer: 2
 },{
   question: "Hvilket dyr var Laika?",
   options: [" En hund", " En kat", " En fugl"],
   answer: 0
 },{
   question: "Hvad hed det rumfartøj som Laika blev sendt afsted i?",
   options: [" Sovjet Shuttle", " Sputnik 2", " Apollo 13"],
   answer: 1
 },{
   question: "Hvad hed første mand der blev sendt ud i rummet?",
   options: [" Neil Armstrong", " Tom Hanks", " Jurij Gagarin"],
   answer: 2
 },{
   question: "Hvilket land sendte den første rumraket ud i rummet?",
   options: [" USA", " Sovjetunionen", " England"],
   answer: 1
   },{
    question: "Hvad hed den rumraket som landede på månen?",
    options: [" Sputnik 2", " Apollo 11", " Apollo 13"],
    answer: 1
},{
  question: "Hvilket år landede den første mand på månen?",
  options: [" 1921", " 1969", " 1987"],
  answer: 1
},{
  question: "Hvem var den første mand på månen?",
  options: [" Niel Armstrong", " Clint Eastwood", " Jurij Gagarin"],
  answer: 0
},{
  question: "Hvad er Den Internationale Rumstation?",
  options: [" Rumstation i rummet", " Rumstation i USA", " Rumstation i Rusland"],
  answer: 0
},{
  question: "Hvor mange gange når Den Internationale Rumstation rundt om jorden på et døgn?",
  options: [" 11", " 16", " 23"],
  answer: 1
}];
 
 var quesCounter = 0;
 var selectOptions = [];
 var quizSpace = $('#quiz');
   
 nextQuestion();
   
 $('#next').click(function () 
   {
       chooseOption();
       if (isNaN(selectOptions[quesCounter])) 
       {
           alert('Vælg venligst et svar!');
       } 
       else 
       {
         quesCounter++;
         nextQuestion();
       }
   });
 
 $('#prev').click(function () 
   {
       chooseOption();
       quesCounter--;
       nextQuestion();
   });
 
 function createElement(index) 
   {
       var element = $('<div>',{id: 'question'});
       var header = $('<h2>Spørgsmål nr. ' + (index + 1) + ' :</h2>');
       element.append(header);

       var question = $('<p>').append(allQuestions[index].question);
       element.append(question);

       var radio = radioButtons(index);
       element.append(radio);

       return element;
   }
 
 function radioButtons(index) 
   {
       var radioItems = $('<ul>');
       var item;
       var input = '';
       for (var i = 0; i < allQuestions[index].options.length; i++) {
         item = $('<li>');
         input = '<input type="radio" name="answer" value=' + i + ' />';
         input += allQuestions[index].options[i];
         item.append(input);
         radioItems.append(item);
       }
       return radioItems;
 }
 
 function chooseOption() 
   {
       selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
   }
  
 function nextQuestion() 
   {
       quizSpace.fadeOut(function() 
           {
             $('#question').remove();
             if(quesCounter < allQuestions.length)
               {
                   var nextQuestion = createElement(quesCounter);
                   quizSpace.append(nextQuestion).fadeIn();
                   if (!(isNaN(selectOptions[quesCounter]))) 
                   {
                     $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                   }
                   if(quesCounter === 1)
                   {
                     $('#prev').show();
                   } 
                   else if(quesCounter === 0)
                   {
                     $('#prev').hide();
                     $('#next').show();
                   }
               }
             else 
               {
                   var scoreRslt = displayResult();
                   quizSpace.append(scoreRslt).fadeIn();
                   $('#next').hide();
                   $('#prev').hide();
               }
       });
   }
 
 function displayResult() 
   {
       var score = $('<p>',{id: 'question'});
       var correct = 0;
       for (var i = 0; i < selectOptions.length; i++) 
       {
         if (selectOptions[i] === allQuestions[i].answer) 
         {
           correct++;
         }
       }
       score.append('Du fik ' + correct + ' ud af ' +allQuestions.length);
       return score;
 }
})
();

(function() 
{
 var allQuestions2 = [{
   question: "Hvor mange planeter findes i solsystemet?",
   options: [" 6", " 7", " 8", " 9"],
   answer: 2
 }, {
   question: "Hvilken planet er den største i solsystemet?",
   options: [" Jupiter", " Mars", " Jorden"],
   answer: 0
 }, {
   question: "Hvor mange grader er solens kerne?",
   options: [" 10,5 mio. grader", " 12,5 mio. grader", " 15,5 mio. grader"],
   answer: 2
 },{
   question: "Kan vi overleve på jorden uden solen?",
   options: [" Ja", " Nej"],
   answer: 1
 }, {
   question: "Hvor lang tid tager det for lys at komme fra solen til jorden?",
   options: [" 8,19 sekunder", " 8 minutter og 19 sekunder", " 8 timer og 19 minutter"],
   answer: 1
 },{
   question: "Hvorfor bliver der meget koldt på Merkur om natten?",
   options: [" Fordi planeten bevæger sig langt væk fra solen", " Der er altid meget koldt på Merkur", " Fordi der ikke er nogen atmosfære"],
   answer: 2
 },{
   question: "Hvor varm kan temperaturen cirka blive på Merkur?",
   options: [" 50 grader", " 250 grader", " 450 grader"],
   answer: 2
 },{
   question: "Hvilken planet er den mindste i solsystemet??",
   options: [" Merkur", " Uranus", " Månen"],
   answer: 0
 },{
   question: "Hvor mange måner har planeten Venus?",
   options: [" 0", " 2", " 63"],
   answer: 0
 },{
   question: "Findes der liv på Venus?",
   options: [" Ja", " Nej"],
   answer: 1
},{
    question: "Hvad består størstedelen af atmosfæren på Jorden af?",
    options: [" Nitrogen", " Helium", " Vand"],
    answer: 0
},{
    question: "Hvad er luften fyldt med på Venus?",
    options: [" Regn", " Giftige dampe", " Røg"],
    answer: 1
},{
    question: "Hvad er den laveste temperatur på Jorden?",
    options: [" -50 grader", " -70 grader", " -90 grader"],
    answer: 2
},{
    question: "Hvor mange måner har planeten Mars?",
    options: [" 0", " 2", " 63"],
    answer: 2
},{
    question: "Hvad består Mars’ overflade af?",
    options: [" Vand", " Støv", " Sand"],
    answer: 1
},];
 
 var quesCounter = 0;
 var selectOptions = [];
 var quizSpace = $('#quiz_2');
   
 nextQuestion();
   
 $('#next').click(function () 
   {
       chooseOption();
       if (isNaN(selectOptions[quesCounter])) 
       {
           alert('Vælg venligst et svar!');
       } 
       else 
       {
         quesCounter++;
         nextQuestion();
       }
   });
 
 $('#prev').click(function () 
   {
       chooseOption();
       quesCounter--;
       nextQuestion();
   });
 
 function createElement(index) 
   {
       var element = $('<div>',{id: 'question'});
       var header = $('<h2>Spørgsmål nr. ' + (index + 1) + ' :</h2>');
       element.append(header);

       var question = $('<p>').append(allQuestions2[index].question);
       element.append(question);

       var radio = radioButtons(index);
       element.append(radio);

       return element;
   }
 
 function radioButtons(index) 
   {
       var radioItems = $('<ul>');
       var item;
       var input = '';
       for (var i = 0; i < allQuestions2[index].options.length; i++) {
         item = $('<li>');
         input = '<input type="radio" name="answer" value=' + i + ' />';
         input += allQuestions2[index].options[i];
         item.append(input);
         radioItems.append(item);
       }
       return radioItems;
 }
 
 function chooseOption() 
   {
       selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
   }
  
 function nextQuestion() 
   {
       quizSpace.fadeOut(function() 
           {
             $('#question').remove();
             if(quesCounter < allQuestions2.length)
               {
                   var nextQuestion = createElement(quesCounter);
                   quizSpace.append(nextQuestion).fadeIn();
                   if (!(isNaN(selectOptions[quesCounter]))) 
                   {
                     $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                   }
                   if(quesCounter === 1)
                   {
                     $('#prev').show();
                   } 
                   else if(quesCounter === 0)
                   {
                     $('#prev').hide();
                     $('#next').show();
                   }
               }
             else 
               {
                   var scoreRslt = displayResult();
                   quizSpace.append(scoreRslt).fadeIn();
                   $('#next').hide();
                   $('#prev').hide();
               }
       });
   }
 
 function displayResult() 
   {
       var score = $('<p>',{id: 'question'});
       var correct = 0;
       for (var i = 0; i < selectOptions.length; i++) 
       {
         if (selectOptions[i] === allQuestions2[i].answer) 
         {
           correct++;
         }
       }
       score.append('Du fik ' + correct + ' ud af ' +allQuestions2.length);
       return score;
 }
})
();

 
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
data () {
return {
  items: [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ],
}
}
})
 


function toggle_visibility(id) {
  var e = document.getElementById(id);
  var myClasses = document.querySelectorAll('.income'),
  i = 0,
  l = myClasses.length;

for (i; i < l; i++) {
  myClasses[i].style.display = 'none';
}
  if (e.style.display == 'none') e.style.display = 'block';
  
}

/* 
function closeBox() {
  var i = 1;
  for (i = 1; i < 8; i++) {
    var x = document.getElementById("popup_" + i) ;
    x.style.display = "none"
  }
  
}


function myFunction() {
  var x = document.getElementById("popup_1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("popup_2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  closeBox()
}

function myFunction3() {
  var x = document.getElementById("popup_3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction4() {
  var x = document.getElementById("popup_4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction5() {
  var x = document.getElementById("popup_5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction6() {
  var x = document.getElementById("popup_6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction7() {
  var x = document.getElementById("popup_7");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
 */

