$(function (){
    var $starships =  $('#starships');
  
  $.ajax({
      type: 'GET',
      url: "https://swapi.co/api/starships/9/",
      success: function(starships) {
        console.log(starships);
          $.each(starships, function(i, starship) {
              $starships.append('<li>' + i + ' = ' + starship + '</li>');
          });
      }
});

});