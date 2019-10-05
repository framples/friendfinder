/*You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below. */

let friendsArray = [
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
    "name":"Viktor",
    "photo": "picvic.jpg",
    "scores": [
        3,
        2,
        2,
        2,
        2,
        4,
        3,
        2,
        5,
        1
    ]
}




];

module.exports = friendsArray;






/*
Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.



Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.*/