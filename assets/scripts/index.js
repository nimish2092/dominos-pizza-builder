$(document).ready(function(){

  $("#cheeseSauce").click(function(){
    $(this).addClass("activeStep");
    $('.activeSeperator').addClass('seperatorBoth');
    $('#sp1').addClass('activeSeperator');
    $('#sizeCrustWrapper').css('display','none');
    $('#sizeCrustWrapper').css('display','none');
    $('#cheeseSauceWrapper').css('display','block');

  });

  $("#toppings").click(function(){
    $(this).addClass("activeStep");
    $('.activeSeperator').addClass('seperatorBoth');
    $('.rightEndcap').addClass('final');
    $('#cheeseSauceWrapper').css('display','none');
    $('#toppingsWrapper').css('display','block');
    $('.charts').css('display','inline-block');
  });

  $(".charts").click(function () {
    $('.card').css('display','none');
    $('#sankey_basic').css('display','inline-block');
    $('#piechart').css('display','inline-block');
  });
});
