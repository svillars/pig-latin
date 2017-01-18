// business logic
function translate(sentence) {
  var splitSentence = sentence.split(' ');
  var vowels = /^[aeiou]/gi;
  var consonants = /^[bcdfghjklmnpqrstvwxyz]+/gi;
  var newList = [];

  for (index = 0; index < splitSentence.length; index += 1) {
    if (splitSentence[index].match(vowels)) {
      newList.push(splitSentence[index] + "ay");
      console.log(newList);
    } else if (splitSentence[index].match(consonants)) {
      newList.push(splitSentence[index] + splitSentence[index][0] + "ay");
      console.log(newList);
    }
  }

};


// user logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#blank").val();
    var translation = translate(userInput);
    $(".translation").show();
    $(".translation").text('hi');
  });
});
