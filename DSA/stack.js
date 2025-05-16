function allFriend(friends) {
  for (i = 0; i < friends.length; i++) {
    if (friends[i].length != 4 && friends[i] != Number) {
      console.log([]);
    } else {
      const yourFriend = [];
      yourFriend.forEach((ele) => {
        ele + friends[i];
      });
      console.log(yourFriend);
    }
  }
}

allFriend(["Thearith", "Thearo", "theara", "brain", "lucy", "ryan", "hood"]);

// function allFriend(friends) {
//   for (i = 0; i < friends.length; i++) {
//     if (friends[i].length != 4) {
//     } else {
//       const friend = [];
//       friend.push(friends[i]);
//     }
//   }
// }
// console.log(["Ryan", "Kieran", "Jason", "Yous"]);
