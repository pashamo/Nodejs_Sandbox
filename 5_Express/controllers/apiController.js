module.exports = function(app) {

    app.get('/api', (req, res) => {
        res.json({ firstname: 'Mohammed', lastname: 'Pasha'});
    });

    app.get('/api/person/:id', (req, res) => {
        //get data from database
        res.json({ firstname: 'John', lastname: 'Doe'});
    });

    app.post('/api/person', (req, res) => {
        //save to database
    })

    app.delete('/api/person/:id', (req, res) => {
        //delete from database
    })
}