var friendData = require("../data/friendData");

module.exports = function(app){
    app.get("/api/friendData", function(req, res){
        res.json(friendData);
    })

    app.post("/api/friendData", function(req, res){
        // if
        //all form fields are filled out
        friendData.push(req.body)
        res.json(true);

    })
}