
const friends = require("../data/friends");


module.exports = function (app) {
    //accesses preexisting objects in the friends array
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    // when a user posts information to the API, it takes the information submitted( the request), runs it through the following functions
    app.post("/api/friends", function (req, res) {
        let bestFriend = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        //attaches a variable name to incoming object
        let userData = req.body;
        //specifies the scores
        let userScores = userData.scores;
  
        let totalDifference = 0;

        //runs through each friend, and for each friend, it runs another for loop
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log(totalDifference + "total difference at line 29")

    
            // in the second for loop
            for (let j = 0; j < friends[i].scores[j] ; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]) );

                if (totalDifference <= bestFriend.friendDifference) {
                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.friendDifference = totalDifference;
                    console.log(bestFriend.friendDifference +  "Line 38")

                }
                console.log(bestFriend.friendDifference +  "Line 41")

            }

        }

        //sends the json to the friends api
        friends.push(userData);

        //sends the response of best friend
        res.json(bestFriend);
        console.log(bestFriend);

    })




};

