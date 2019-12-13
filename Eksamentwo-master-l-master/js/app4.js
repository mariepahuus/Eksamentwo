(function() 
{
 var allQuestions = [{
   question: "Hvem er Galileo Galilei",
   options: [" Italiensk filosof, fysiker og astronom", " Svensk filosof, fysiker og professor", " Tysk astronaut"],
   answer: 0
 }, {
   question: "Hvornår blev Galileo født?",
   options: [" 1518", " 1564", " 1605"],
   answer: 1
 }, {
   question: "Hvad opdagede Galileo?",
   options: [" Mars’ kratere og jordens måne", " Planeten Pluto", " Månens kratere og Jupiters måner"],
   answer: 2
 },{
   question: "Hvordan opdagede Galileo månens krater?",
   options: [" Med kikkert", " Med beregninger", " Med bøger"],
   answer: 0
 }, {
   question: "Hvad på månen blev opkaldt efter Galileo (med navnet Galilaei)?",
   options: [" Alle månens kratere", " Den sydlige halvkugle", " Et nedslagskrater på månen"],
   answer: 2
 },{
   question: "Hvor er Galilaei placeret?",
   options: [" Nordlige halvkugle af månen", " Sydlige halvkugle af månen"],
   answer: 0
 },{
   question: "Hvornår døde Galileo?",
   options: [" år 1630", " år 1642", " år 1749"],
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