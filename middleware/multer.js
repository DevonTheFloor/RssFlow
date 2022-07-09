const multer = require('multer');

const TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
	'application/pdf': 'pdf',
	'application/msword': 'doc',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
	'application/vnd.oasis.opendocument.text': 'odt'
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'UPIMG');
	},
	filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

	module.exports = multer({storage : storage}).single('UPIMG');