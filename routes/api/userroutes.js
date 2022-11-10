const { User } = require('../models');

const usercontroller = {
    getAlluser(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
        })
    };

    getUserById({ parms }, res) {
        User.findOne({ _id: parms.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
        })
    }
}