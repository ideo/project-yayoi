const survey = {}

$(document).ready(function() {
  
  const defaultSliderVal = 50

  $('.range-container').each(function() {
    const topic = $(this).data('topic')
    //initially reset all sliders to 50
    $(this).find('input[type="range"]').val(50)
    if (topic === 'age') {
      survey.age = 'not selected'
    } else {
      survey[topic] = defaultSliderVal;
    }
  })

  $('input[type="range"]').on('input change', function() {    
    const topic = $(this).parents('.range-container').data('topic')
    
      survey[topic] = Number($(this).val());
    
  });

  const age = $('button.age')

  age.on('click', function() {
    age.removeClass('selected')
    $(this).addClass('selected')
    survey.age = $(this).data('age')
  })


  $('.submit-btn').on('click', function() {

    let avg = 0
    let total = 0

    for (let i in survey) {
      if (i !== 'age') {
        total += survey[i]
      }
    }

    avg = Math.floor(total / (Object.keys(survey).length - 1))

    let resultPage = avg >= 50 ? 'results-help' : 'results-tips';

    alert(`* Debugging info: * \nThe average value for the sliders are: ${avg} \nand the chosen age range is ${survey.age} \nBased on this average, you will see the following results page: ${resultPage}`);

    window.location = window.location.pathname.replace('isthisathing', resultPage)

  })

});