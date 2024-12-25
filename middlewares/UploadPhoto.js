const path = require("path");
const multer = require("multer");

const photoStorage = multer.diskStorage({
  distination:function (req,file,cb){
    cb(null,path.join(__dirname,'../images'));
  },
  filename:fumction(req,file,cb){
    if(file){
       cb(null,new Data().toISOString().replace("/:/g","-")+file.originalname);
    }else{
       cb(null,false);
    }
  }
});

const photoUpload = multer({
  storage:photoStorage,
  fileFilter:function (req,file,cb){
    if(file.mimetype.startWith("image"){
      cb(null,true);
    }else{
      cb({message:"unsuported file format" },false);
    }
  },
  limits:{filesize: 1024*1024 * 3}
})

moudel.exports = photoUpload;
