const express = require('express'),
    bodyParser = require('body-parser'),
    studentData = require('./students.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello World !'));

app.post('/getStudents', (req, res) => {
    /**
     * type: greater equal less
     * score: input -> 分数
     */
    const {type, score} = req.body,
        [_type, _score] = checkBody(type, score),
        resData = getData(_type,_score);

    if (resData.length === 0){
        res.send({
            errorNo: 1001,
            errorMsg: 'No Data'
        })
        return;
    }

    res.send({
        errorNo: 0,
        data: resData
    });
})


/*
app.get('/word',(req,res) => {
    let guess="";
    let word=req.query.guess
    console.log(req.query.guess)
    if(word.length==guessword.length)
    {
        if(word==guessword)
            res.send("correct!");
        else{
            for(let i=0;i<word.length;i++)
            {
                if(i>guessword.length)
                    break;
                if(word[i]==guessword[i])
                    guess=guess+guessword[i]
                else{
                    let sign=1;
                    for(let j=0;j<guessword.length;j++)
                    {if(guessword[j]==word[i])
                    {sign=0;
                        break;}
                    }
                    if(sign==0)
                        guess=guess+"*";
                    if(sign==1)
                        guess=guess+"#"
                }
            }
            res.send(guess)
        }

    }
    else
        res.send("length not good");


});
*/

app.listen(8081, () => {
    console.log('Server is runing on PORT 8081!!!');
})


function checkBody(type, score) {

    return [ checkType(type), checkScore(score)];

    function checkType(type) {
        return ['greater', 'equal', 'less'].includes(type) ? type : 'equal';
    }

    function checkScore(score) {
        const _score = Number(score)
        return isNaN(_score) ? 0 : _score;
    }
}

function getData (type, score){
    switch (type){
        case 'greater':
            return studentData.filter(item => item.score > score);
        case 'equal':
            return studentData.filter(item => item.score === score);
        case 'less':
            return studentData.filter(item => item.score < score);
        default:
            return [];
    }
}