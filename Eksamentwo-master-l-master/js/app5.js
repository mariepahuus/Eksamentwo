(function() 
{
 var allQuestions = [{
   question: "Hvad er sputnik 1?",
   options: [" Den første satellit sendt i kredsløb om jorden", " Den anden satellit sendt i kredsløb om jorden", " Den første satellit sendt i kredsløb om månen"],
   answer: 0
 }, {
   question: "Hvornår sendte man Sputnik 1 afsted?",
   options: [" 1920", " 1957", " 1997"],
   answer: 1
 }, {
   question: "Hvad var satellittens mission?",
   options: [" At finde andre levende væsener i rummet", " At sende data hjem om andre planeter", " At bevise at man godt kunne sende en satellit ud i rummet"],
   answer: 2
 },{
   question: "Hvilken hastighed nåede satellitten op på?",
   options: [" ca. 15.000 km/t", " ca. 29.000 km/t", " ca. 100.000 km/t"],
   answer: 1
 }, {
   question: "I hvor mange dage sendte satellitten radiosignaler inden batteriet døde?",
   options: [" 22 dage", " 30 dage", " 43 dage"],
   answer: 0
 },{
   question: "Hvor mange km rejste satellitten?",
   options: [" 60 tusinde km", " 20 millioner km", " 60 millioner km"],
   answer: 2
 },{
   question: "Hvem foreslog at bygge Sputnik 1?",
   options: [" Mikhail Tikhonravov", " Sergej Koroljov", " Arnold Schwarzenegger"],
   answer: 1
 },{
    question: "Hvordan ser Sputnik ud?",
    options: [" Formet som en kugle", " Formet som et rektangel", " Formet som en stjerne"],
    answer: 0
  },{
    question: "Kunne man se Sputnik fra jorden uden kikkert?",
    options: [" Ja", " Nej"],
    answer: 0
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