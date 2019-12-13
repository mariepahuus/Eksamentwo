(function() 
{
 var allQuestions = [{
   question: "Hvad er Den internationale Rumstation?",
   options: [" Rumstation i rummet", " Rumstation i USA", " Rumstation i Rusland"],
   answer: 0
 }, {
   question: "Hvor højt oppe er Den internationale Rumstation?",
   options: [" Ca. 200 km oppe", " Ca. 386 km oppe", " Ca. 521 km oppe"],
   answer: 1
 }, {
   question: "Hvor meget vejer rumstationen?",
   options: [" 10 tons", " 180 tons", " 450 tons"],
   answer: 2
 },{
   question: "Hvor mange gange når rumstationen rundt om jorden på et døgn?",
   options: [" 12", " 16", " 25"],
   answer: 1
 }, {
   question: "Hvad koster rumstationen i drift for 10 år?",
   options: [" 5 mia. kr.", " 150 mia. kr.", " 300 mia. kr."],
   answer: 2
 },{
   question: "Kan man se rumstationen nede fra jorden?",
   options: [" Ja", " Nej"],
   answer: 0
 },{
   question: "Deltager Danmark i programmet?",
   options: [" Ja", " Nej"],
   answer: 0
 },{
    question: "Hvor mange personer har cirka besøgt rumstationen?",
    options: [" 20 personer", " 120 personer", " 220 personer"],
    answer: 2
  },{
    question: "Hvilken dansker har i år 2015 besøgt rumstationen?",
    options: [" Andreas Mogensen", " Mads Mikkelsen", " Anders Fogh Rasmussen"],
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