

var multer  = require('multer');
var express = require('express')
var upload = multer({ dest: 'upload/'});
var fs = require('fs');
var app = express();

/** Permissible loading a single file, 
    the value of the attribute "name" in the form of "recfile". **/
var type = upload.single('recfile');

app.post('/upload', type, function (req,res) {

  
    /** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
  var tmp_path = req.file.path;

  /** The original name of the uploaded file
      stored in the variable "originalname". **/
  var target_path = 'uploads/' + req.file.originalname;

  /** A better way to copy the uploaded file. **/
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  src.on('end', function() { res.render('complete'); });
  src.on('error', function(err) { res.render('error'); });

});







// var express = require('express');
// var multer  = require('multer');


var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

// var upload = multer({ dest: 'uploads/' });


// app.use(function (req, res, next) {
//   //console.log(req.files); // JSON Object
//   next();
// });

server.listen(3000, function () {
  console.log('Server listening at port %d', port);
});

// // app.get('/', function(req, res) {
// //   res.sendFile(__dirname + '/public/upload.html');
// // })

// app.post('/upload', upload.single('avatar'),  function(req, res) {
//     req.body&&req.file
//   console.log(req.files);
// });



// // var express = require('express');
// // var fs = require('fs');
// // var mongoose = require('mongoose');
// // var Schema = mongoose.Schema;
// // var multer = require('multer');
// // var app = express();

// // mongoose.connect('mongodb://bobby:123456@ds147228.mlab.com:47228/ancaps2');


// // var ItemSchema = new Schema({
    
// //     itemName: {type:String},
// //     price:{type:Number},
// //     img:{ data: Buffer, contentType: String }
    
// // });
// // var Item = mongoose.model('Clothes',ItemSchema);

// // var upload =(multer({ dest: './uploads/',
// //     rename: function (fieldname, filename) {
// //       return filename;
// //     },
// //    }));

// //    app.post('/api/photo',function(req,res){
// //     var newItem = new Item();
// //     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
// //     newItem.img.contentType = 'image/png';
// //     newItem.save();
// //    })


// //    app.listen(3000, function(err, con){
// //        if(err){
// //            console.log('edo happen');
// //        }else{
// //            console.log('3000')
// //        }
// //    })