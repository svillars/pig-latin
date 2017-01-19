// business logic
function translate(word) {
  //var splitSentence = sentence.split(' ');

  //var vowels = /^[aeiou]/gi;
  //var consonants = /^[bcdfghjklmnpqrstvwxyz]+/gi;
  //var newList = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  //The below statement handles words that start with vowels.
  if (vowels.indexOf(word[0]) != -1) {
    return word + "ay";
  }
  //The below will handle qu at the 2 and 3 position of word.
  if ((vowels.indexOf(word[0]) === -1) && (word[1] === 'q') && (word[2] === 'u')) {
    var firstLetter = word[0];
    var secondLetter = word[1];
    var thirdLetter = word[2];
    console.log(firstLetter);
    return word.slice(3, word.length) + firstLetter + secondLetter + thirdLetter + "ay";
  }

  //The below will handle qu at the beginning of word.
  if ((vowels.indexOf(word[0]) === -1) && (word[0] === 'q') && (word[1] === 'u')) {
    var firstLetter = word[0];
    var secondLetter = word[1];
    console.log(firstLetter);
    return word.slice(2, word.length) + firstLetter + secondLetter + "ay";
  }

  //The below statement handles words that start with 2 consonants.
  if ((vowels.indexOf(word[0]) === -1) && (vowels.indexOf(word[1]) === -1)){
    var firstLetter = word[0];
    var secondLetter = word[1];
    return word.slice(2, word.length) + firstLetter + secondLetter + "ay";
  }

  //The below statemtn handles words that start with a single consonants.
  if (vowels.indexOf(word[0]) === -1) {
    var firstLetter = word[0];
    return word.slice(1, word.length) + firstLetter + "ay";
  }



  // for (index = 0; index < splitSentence.length; index += 1) {
  //   var splitWord = splitSentence[index].split('');
  //   for (i = 0; i < splitWord.length; i += 1) {
  //     if (splitWord[i].match(consonants)) {
  //       newList1.push(splitWord);
  //       console.log(newList1);
  //     }
  //   }
  // }

  // for (index = 0; index < splitSentence.length; index += 1) {
  //   if (splitSentence[index].match(vowels)) {
  //     newList.push(splitSentence[index] + "ay");
  //     console.log(newList);
  //   } else if (splitSentence[index].match(consonants)) {
  //     newList.push(splitSentence + splitSentence[index].charAt(0) + ("ay"));
  //     console.log(newList)
  //   }
  // }

  // for (elem = 0; elem < newList1.length; elem += 1) {
  //
  //   for (i = 0; i < newList1[elem].length; i += 1) {
  //     if (newList1[i].match(consonants)) {
  //       newList2.push(newList1[i] + "test");
  //     }
  //   }
  // }
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
