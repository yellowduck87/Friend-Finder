var friendData = require("../data/friendData");

module.exports = function (app) {
    app.get("/api/friendData", function (req, res) {
        res.json(friendData);
    })

    app.post("/api/friendData", function (req, res) {
   
        var user = [];
        var userInput = req.body;


        user.push(userInput);

        var survey = req.body.survey;

        var totalSurveyArray = [];
        for (var i = 0; i < friendData.length; i++) {
            var friendSurvey = friendData[i].survey
            var total = survey.map(function (num, index) {
                return Math.abs(num - friendSurvey[index]);
            });
            var diff = total.reduce((a, b) => a + b, 0);

            totalSurveyArray.push(diff)


        }
        var bestMatch = Math.min.apply(Math, totalSurveyArray);
        var matched = totalSurveyArray.findIndex(match => match === bestMatch);
        
        res.json(friendData[matched])

        friendData.push(userInput);

    })
}

