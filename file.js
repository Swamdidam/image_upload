const 
    express = require('express'),
    multer = require('multer'),
    app = express(),
    mongoose = require('mongoose')
// var url = mongoose.connect('mongodb://bobby:123456@ds147228.mlab.com:47228/ancaps2');
    var upload = multer({
        storage: multer.diskStorage({
            destination: (res, file, cb) => cb(null, 'uploads'),
            filename: (res, file, cb) =>cb(null, file.originalname)
        })
    });

    // app.use(express.static(__dirname + '/'));

    app.post('/uploads', upload.array('file', 6));

    app.listen(3005, function(err, doc){
        if(err){
            console.log('error');
        }
        else{
            console.log('started at 3000')
        }
    });