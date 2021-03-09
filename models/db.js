const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
//     if (!err) { console.log('MongoDB Connection Succeeded.') }
//     else { console.log('Error in DB connection : ' + err) }
// });


const dbURI = 'mongodb+srv://user1:test1234@cluster0.iyyja.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {  useNewUrlParser: true})
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));

require('./employee.model');