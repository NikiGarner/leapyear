var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }

  if (year === "") {
    return false;
  }
var leet = function(word) {
  if (word === "e"){
    return 3;
  } else {
    return none;
  }
}

};

$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
  

  $(".year").text(year);

  if (!result){
    $(".not").text("not");
  } else {
    $(".not").text("");
  }

  $("#result").show();
  event.preventDefault();
  });
});
