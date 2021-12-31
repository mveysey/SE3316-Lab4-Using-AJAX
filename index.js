const express = require('express');
let questionList = require('./questions.json');
var alert = require('alert');

const app = express();

// serve static contents
app.use(express.static('static'));

app.use(express.urlencoded({
    extended: true
}))

app.get('/questions', (req,res) => {
    res.json(questionList);
})

app.get('/q1result', (req, res) =>{

    let answer = questionList[0].options[questionList[0].answerIndex];
    let msg = '';

    if (req.query.group1 === answer) {
        msg = 'correct'
    } else {
        msg = 'incorrect'
    }

    res.send(msg);
})

app.get('/q2result', (req, res) =>{

    let answer = questionList[1].options[questionList[1].answerIndex];
    let msg = '';

    if (req.query.group2 === answer) {
        msg = 'correct'
    } else {
        msg = 'incorrect'
    }

    res.send(msg);
})

app.get('/q3result', (req, res) =>{

    let answer = questionList[2].options[questionList[2].answerIndex];
    let msg = '';

    if (req.query.group3 === answer) {
        msg = 'correct'
    } else {
        msg = 'incorrect'
    }

    res.send(msg);
})

app.get('/q4result', (req, res) =>{

    let answer = questionList[3].options[questionList[3].answerIndex];
    let msg = '';

    if (req.query.group4 === answer) {
        msg = 'correct'
    } else {
        msg = 'incorrect'
    }

    res.send(msg);
})

app.get('/q5result', (req, res) =>{

    let answer = questionList[4].options[questionList[4].answerIndex];
    let msg = '';

    if (req.query.group5 === answer) {
        msg = 'correct'
    } else {
        msg = 'incorrect'
    }

    res.send(msg);
})

app.get('/score', (req, res) => {

    let answer1 = questionList[0].options[questionList[0].answerIndex];
    let answer2 = questionList[1].options[questionList[1].answerIndex];
    let answer3 = questionList[2].options[questionList[2].answerIndex];
    let answer4 = questionList[3].options[questionList[3].answerIndex];
    let answer5 = questionList[4].options[questionList[4].answerIndex];

    let score = 0;

    if (req.query.group1 === answer1) {
        score += 1;
    }

    if (req.query.group2 === answer2) {
        score += 1;
    }

    if (req.query.group3 === answer3) {
        score += 1;
    }

    if (req.query.group4 === answer4) {
        score += 1;
    }

    if (req.query.group5 === answer5) {
        score += 1;
    }

    let msg = 'Your score is: ' + score;

    res.send(msg);
})

app.listen(80);