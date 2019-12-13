(function() 
{
 var allQuestions = [{
   question: "Hvem var den første mand på månen?",
   options: [" Yuri Gagarin", " Niel Armstrong", " Clint Eastwood"],
   answer: 1
 }, {
   question: "Hvilken rumraket brugte man?",
   options: [" Apollo 11", " Apollo 13", " Sputnik 2"],
   answer: 0
 }, {
   question: "Hvornår tog rumraketten afsted?",
   options: [" År 1921", " År 1940", " År 1969"],
   answer: 2
 },{
   question: "Hvor kom Niel Armstrong fra?",
   options: [" USA", " Sovjetunionen", " Tyskland"],
   answer: 0
 }, {
   question: "Hvor lang tid var Niel Armstrong på månen?",
   options: [" Ca. 2 timer og 46 minutter", " Ca. 10 timer og 17 minutter", " Ca. 21 timer og 36 minutter",  ],
   answer: 2
 },{
   question: "Hvor blev Apollo 11 sendt afsted fra?",
   options: [" Rockefeller Center", " Kennedy Space Center ", " Nasa Space Station"],
   answer: 1
 },{
   question: "Hvor landede de da de kom  tilbage på Jorden",
   options: [" I havet", " På en mark", " I en skov"],
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