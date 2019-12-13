(function() 
{
 var allQuestions = [{
   question: "Hvad hed rumraketten der var den første til at sende en mand ud i rummet?",
   options: [" Vostok 1", " Apollo 13", " Sputnik 3"],
   answer: 0
 }, {
   question: "Hvad hed den første mand i rummet?",
   options: [" Neil Armstrong", " Tom Hanks", " Yuri Gagarin"],
   answer: 2
 }, {
   question: "Hvor rejste rumraketten hen?",
   options: [" Til månen", " Rundt om jorden", " Rundt om Saturn"],
   answer: 1
 },{
   question: "Hvornår tog rumraketten afsted?",
   options: [" År 1937", " År 1961", " År 1972"],
   answer: 1
 }, {
   question: "Hvor lang tid tog turen?",
   options: [" 1 time og 48 minutter", " 2 timer og 3 minutter", " 15 timer og 21 minutter"],
   answer: 0
 },{
   question: "Hvilket land sendte den første mand ud i rummet?",
   options: [" England", " USA", " Sovjetunionen"],
   answer: 2
 },{
   question: "Hvor gammel var Yuri Gagarin da han blev sendt afsted?",
   options: [" 17 år", " 27 år", " 37 år"],
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