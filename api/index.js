/**
 * Referensi code
 * https://medium.com/wripolinema/multer-solusi-upload-file-di-node-js-dan-express-71d86a7d90d9
 * Tutorial= https://www.youtube.com/watch?v=SqbrovwhZ_o
*/
import express from "express";

import multer from "multer";

const app = express();
const port = 8000;

const multerConfig = multer.diskStorage({
	destination: (req,file,callback) => {
		callback(null,"public/");
	},
	filename: (req,file,callback) => {
		const ext = file.mimetype.split("/")[1];
		callback(null, `images.${ext}`)
	},
})

const isImage = (req, file, callback) => {
	if (file.mimetype.startsWith('image')){
		callback(null, true);
	}
}
const upload = multer({ storage: multerConfig, fileFilter:isImage })

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

// api untuk upload
app.post("/upload", upload.single('photo'), (req,res) => {
	res.status(200).json({
		success : "Sukses bang"
	})
})

// api retrieve image
app.get("/retrieve-image/", (req, res) => {
	// asumsi: retrieve gambar dilakukan dengan cara menuliskan nama file pada form
    const filePath = "public/" + req.body["imageName"]
    res.sendFile(filePath);
});
