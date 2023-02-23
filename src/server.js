const express = require('express')

module.exports = 
{
    digits:[],
    run()
    {
        const app = express()
        const port = 8015
        app.use(express.static('public'))
        app.set('view engine', 'ejs');
        app.get('/', (req, res) => {
            res.render('index');
        });
        app.get('/digits', (req, res) => {
            res.json(this.digits);
        });
        app.post('/digits', (req, res) => {

            let pair = [this.randomDigit(),this.randomDigit()]
            this.digits.push(pair)
            res.json(pair);
        });
        app.delete('/digits', (req, res) => {
            this.digits =[];
            res.json({});
        });

        app.listen(port);
    },
    randomDigit()
    {
        return Math.floor((Math.random() * 5) + 1)
    }
}




