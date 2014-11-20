module.exports = function (userIDs, load, done) {
    var users = [],
        count = 0,
        len = userIDs.length;
    userIDs.forEach(function (userID, index) {
        load(userID, function (user) {
            users[index] = user
            if (++count === len) {
                return done(users)
            }
        })
    })
}


    // if we should preserve the sequence, then use following code
//    function fnNext(index) {
//        if (index >= userIDs.length) {
//            return done(users)
//        }
//        users.push(userIDs[index])
//        load(userIDs[index], function () {
//            fnNext(index+1)
//        })
//    }
