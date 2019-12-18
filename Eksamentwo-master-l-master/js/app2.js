
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
},{
  question: "Hvor mange gange tungere er Jupiter end Jorden?",
  options: [" 251 gange", " 318 gange", " 403 gange"],
  answer: 1
},{
  question: "Hvad består størstedelen af Jupiter af?",
  options: [" Gas", " Støv", " Sten"],
  answer: 0
},{
  question: "Hvad er Saturn kendt for?",
  options: [" Sit store ringsystem", " At den er meget lille", " At der er græs på overfladen"],
  answer: 0
},{
  question: "Hvorfor er Saturns største måne ‘Titan’ unik?",
  options: [" Det er den mindste måne i solsystemet", " Det er den eneste måne med en atmosfære i solsystemet", " Fordi mennesker kan bo på den"],
  answer: 1
},{
  question: "Uranus var den..",
  options: [" Første planet der blev opdaget i solsystemet", " Fjerde planet der blev opdaget i solsystemet", " Sidste planet der blev opdaget i solsystemet"],
  answer: 0
},{
  question: "Hvad er alle Uranus’ måner dækket af?",
  options: [" Vand", " Græs", " Is"],
  answer: 2
},{
  question: "Hvor høj kan vindhastigheden komme op på, på Neptun?",
  options: [" 500 km/t", " 1300 km/t", " 2100 km/t"],
  answer: 2
},{
  question: "Neptun er den planet der er..",
  options: [" Tættest på solen", " Længst væk fra solen", " Tættest på Jorden"],
  answer: 1
}];
 
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