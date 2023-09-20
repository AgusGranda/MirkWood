const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({

	         	destination:(req,file,cb) => {   		// donde se va a guardar
					cb(null,'./public/images/products')
				},
			    filename:(req,file,cb) => {
						let fileName = `${Date.now()}_img${path.extname(file.originalneme)}`; //nombre
						cb(null, fileName)
					}
                })

const uploadFile = multer({ storage })



module.exports = uploadFile;
