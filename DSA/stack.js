/// DELETING VOWEL LETTER FROM SENTENCE

/// In working
const letter = "THis is the website for loser";

function disemvowel(str) {
  //   const newStr = str.split("");
  //   const new2str = newStr.join("");
  const vowel = ["a", "e", "i", "o", "u"];
  const strnow = str.split("");
  for (i = 0; i < strnow.length; i++) {
    if (strnow[i] == vowel) {
      const newstr = strnow[i].splice(vowel);
    }
    return newstr;
  }
  return console.log(newstr);
}

disemvowel("bonjoiur toute le monded");

// function disemvowel(str) {
//   const vowel = ["a", "e", "i", "o", "u"];

//   for ( i = 0;  i < str.length; i ++) {
//     if( str )
//   }
// }
