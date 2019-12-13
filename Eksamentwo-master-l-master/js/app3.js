(function() 
{
 var allQuestions = [{
   question: "Hvornår var Big Bang?",
   options: [" ca. 14 mia. år siden", " ca. 16 mia. år siden", " ca. 20 mia. år siden"],
   answer: 0
 }, {
   question: "Hvad startede også lige efter Big Bang udover universet?",
   options: [" Levende væsener", " Tiden", " Rumrejser"],
   answer: 1
 }, {
   question: "Var der lys og tyngekræft inden big bang?",
   options: [" Ja", " Nej"],
   answer: 1
 },{
   question: "Hvad blev der dannet under Big Bang?",
   options: [" Atomer", " Sten", " Subatomare partikler"],
   answer: 2
 }, {
   question: "Hvordan blev der skabt galakser?",
   options: [" Planeterne samlede sig", " Stjernerne samlede sig", " Atomerne samlede sig"],
   answer: 1
 },{
   question: "Hvornår blev stjernerne formet efter Big Bang?",
   options: [" Nogle få år senere", " nogle hundrede millioner år senere", " nogle milliarder år senere"],
   answer: 1
 },{
   question: "Hvad er Steady state-teorien?",
   options: [" Den siger at universet altid har eksisteret og har haft samme form", " Den siger at universet altid har eksisteret, men ikke haft samme form"],
   answer: 0
 },{
    question: "Hvem lagde Big Bang-teoriens fundament?",
    options: [" Edwin Hubble", " Albert Einstein", " Georges Lemaître"],
    answer: 2
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