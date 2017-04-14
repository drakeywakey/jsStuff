var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('./User');

// Create new user
router.post('/', function (req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function (err, user) {
        if (err) {
            return res.status(500).send('There was a problem creating the user.');
        }
        res.status(200).send(user);
    })
});

// Get all users
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            return res.status(500).send('There was a problem finding the users.');
        }
        res.status(200).send(users);
    });
});

// Get a single user by id
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('Could not find that user')
        res.status(200).send(user);
    })
});

// Delete a single user
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send('There was a problem deleting the user.');
        res.status(200).send('User ' + user.name + ' was deleted.');
    })
});

// Update a single user
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    })
});

module.exports = router;