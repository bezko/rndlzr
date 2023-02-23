const express = require('express')

module.exports = 
{
    data:[],
    run()
    {
        const app = express()
        const port = 8015
        app.use(express.static('public'))
        app.set('view engine', 'ejs');
    
        app.get('/', (req, res) => {
            res.render('index');
        });
        app.listen(port);
    }
}




