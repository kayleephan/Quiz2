const mongoose = require('mongoose')
const express = require('express')

app = express();

mongoose.connect('mongodb+srv://kaylee:kaylee@cluster0.gpgvvof.mongodb.net/Exam')
//
const quizesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sid: { type: String, required: true }
  })

//create a collection name 'Activity'
const quizesModel = mongoose.model('Quizes', quizesSchema);

const port = process.env.port || 7000;

app.get('/', (req,res)=>{
    //create an activity document
    const newQuizes = new quizesModel({
        name: 'Kaylee Phan',
        sid: '300364275'
      });

      quizesModel.insertMany([newQuizes]);
    res.send('<h2>Document Added</h2>')
    console.log(newQuizes)
})

app.listen(port, () => {
    console.log('Server is running on port:' + port);
})

