$(function(){
  $('#animals > div').click(function(){

    //make var of the click object with selector info
    var animal = "#"+($(this).attr('name')+"-info");

    //Hiding animals before showing next
    $("#animal-info > div").hide();

    //show clicked animal
    $(animal).slideDown(300);
  });
});
