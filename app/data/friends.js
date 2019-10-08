/*You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below. */

let friendsArray = [
{
  "name":"Draven",
  "photo":"https://vignette.wikia.nocookie.net/leagueoflegends/images/6/63/Draven_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414202029",
  "scores":[
      3,
      4,
      1,
      4,
      1,
      5,
      5,
      5,
      1,
      4
    ]
},
{
    "name":"Cho'gath",
    "photo": "https://cdna.artstation.com/p/assets/images/images/001/455/142/large/sixmorevodka-studio-smv-league-of-legends-chogath-seventhpass.jpg?1446721395",
    "scores": [
        3,
        2,
        2,
        4,
        5,
        2,
        4,
        1,
        3,
        4
    ]
},
{
    "name":"Yasuo",
    "photo": "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/cd/Yasuo_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203759",
    "scores": [
        5,
        5,
        1,
        4,
        1,
        3,
        5,
        5,
        2,
        5
    ]
},
{
    "name":"Bard",
    "photo": "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/40/Bard_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414201951",
    "scores": [
        1,
        3,
        5,
        2,
        1,
        5,
        2,
        2,
        5,
        1
    ]
},
{
    "name":"Lux",
    "photo": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
    "scores": [
        3,
        2,
        5,
        4,
        4,
        2,
        2,
        3,
        5,
        3
    ]
},
{
    "name":"Pyke",
    "photo": "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Pyke_OriginalSkin.jpg/revision/latest?cb=20181021052139",
    "scores": [
        4,
        3,
        4,
        3,
        1,
        4,
        5,
        1,
        1,
        2
    ]
}




];

module.exports = friendsArray;






/*
Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.



Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.*/