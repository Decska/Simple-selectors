/*Events & Event Listeners, Excercise 1*/
$('body').append('<p>He lights the lamp at 8.00pm</p>');
$('#first').on('click', () => {
    console.log ('Yeah, you clicked me!');
  })

//Events & Event Listeners, Excercise 2
$('#second').on('click', () => {
  $('#first').text('Click ME!');
    })
    
//Events & Event Listeners, Excercise 3   
$('#color').on('click', () => {
      $('button').css('background','lightblue');
        })
       