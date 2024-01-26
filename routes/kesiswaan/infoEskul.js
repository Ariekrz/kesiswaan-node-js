var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/*START /penggunaAPP/jenisPengguna.*/
router.get('/', function(req, res, next) {
    connection.query('SELECT info_ekskul.idInfoeskul, info_ekskul.nama_ekskul, info_ekskul.preview_eskul, info_ekskul.informasi_eskul, tbl_guru.noIdGuru, tbl_guru.namaGuru FROM info_ekskul INNER JOIN tbl_guru ON info_ekskul.noIdGuru = tbl_guru.noIdGuru', function(err, rows, fields) {
        if (err) {
            req.flash('error', err);
            res.render('infoEskul/infoEskul', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'rangerMerah',
                thSatu: 'ID INFO',
                thDua: ' NAMA GURU',
                thTiga: 'NAMA EKSKUL',
                thEmpat: 'PREVIEW EKSKUL',         
                thLima: 'INFORMASI EKSKUL',
                gambar: 'LOGO EKSKUL',
                thEnam:'AKSI',
             
                data: ''
            });
        } else {
            //render ke view posts index
            res.render('infoEskul/infoEskul', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'rangerMerah',
                thSatu: 'ID INFO',
                thDua: ' NAMA GURU',
                thTiga: 'NAMA EKSKUL',
                thEmpat: 'PREVIEW EKSKUL',         
                thLima: 'INFORMASI EKSKUL',
                gambar: 'LOGO EKSKUL',
                thEnam:'AKSI',
                 data: rows
            });
        }
    });
});


/*START /jenisPengguna/tambahJenisPengguna*/
router.post('/simpanInfo', function(req, res, next){
    let idInfoeskul = req.body.idInfoeskul;
    let noIdGuru = req.body.noIdGuru;
    let nama_ekskul = req.body.nama_ekskul;
    let preview_eskul = req.body.preview_eskul;
    let informasi_eskul = req.body.informasi_eskul;
    let errors = false;
  
    if(idInfoeskul.length === 0) {
      errors = true;
  
      // set flash message
      req.flash('error', "Silahkan Masukkan No Id");
      // render to add.ejs with flash message
      res.redirect('/infoEskul');
    }
    if(noIdGuru.length === 0) {
      errors = true;
  
      // set flash message
      req.flash('error', "Silahkan Masukkan No Id");
      // render to add.ejs with flash message
      res.redirect('/infoEskul');
    }
    
  
    if(nama_ekskul.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan nama penaggung jawab");
      // render to add.ejs with flash message
      res.redirect('/infoEskul');
    }
  
    if(preview_eskul.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan Keperluan");
      // render to add.ejs with flash message
      res.redirect('/infoEskul');
    }
  
    if(informasi_eskul.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan Keperluan");
      // render to add.ejs with flash message
      res.redirect('/infoEskul');
    }

    
    //if no errors
    if(!errors){
      let formData ={
        idInfoeskul:idInfoeskul,
        noIdGuru:noIdGuru,
        nama_ekskul: nama_ekskul,
        preview_eskul: preview_eskul,
        informasi_eskul: informasi_eskul
      }
      connection.query('INSERT INTO info_ekskul SET ?', formData, function(err, result){
        if (err) {
          req.flash('error', err);
           
          // render to add.ejs
          res.redirect('/infoEskul');
        } else {                
          req.flash('success', 'Data Berhasil Disimpan!');
          res.redirect('/infoEskul');
        }
      });
    }
});



/*START /jenisPengguna/editJenisPengguna*/
router.post('/updateInfo', function(req, res, next) {
  let idInfoeskul = req.body.idInfoeskul;
  let noIdGuru = req.body.noIdGuru;
  let nama_ekskul = req.body.nama_ekskul;
  let preview_eskul = req.body.preview_eskul;
  let informasi_eskul = req.body.informasi_eskul;
  let errors = false;

  if(idInfoeskul.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan No Id");
    // render to add.ejs with flash message
    res.redirect('/infoEskul');
  }
  if(noIdGuru.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan No Id");
    // render to add.ejs with flash message
    res.redirect('/infoEskul');
  }
  

  if(nama_ekskul.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan nama penaggung jawab");
    // render to add.ejs with flash message
    res.redirect('/infoEskul');
  }

  if(preview_eskul.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/infoEskul');
  }

  if(informasi_eskul.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/infoEskul');
  }

  
  //if no errors
  if(!errors){
    let formData ={
      idInfoeskul:idInfoeskul,
      noIdGuru:noIdGuru,
      nama_ekskul: nama_ekskul,
      preview_eskul: preview_eskul,
      informasi_eskul: informasi_eskul
    }
             // update query
          connection.query('UPDATE info_ekskul SET ? WHERE idInfoeskul = ' + idInfoeskul, formData, function(err, result) {
              if (err) {
                  req.flash('error', err);
                   
                  // render to add.ejs
                  res.redirect('/infoEskul');
                } else {                
                  req.flash('success', 'Data Berhasil Disimpan!');
                  res.redirect('/infoEskul');
                }
              });
      }
  });
  /*END /jenisPengguna/editJenisPengguna*/

/*START /jenisPengguna/hapusJenisPengguna*/
router.get('/hapusInfo/(:idInfoeskul)', function(req, res, next) {

    let idInfoeskul = req.params.idInfoeskul;
     
    connection.query('DELETE FROM info_ekskul WHERE idInfoeskul = ' + idInfoeskul, function(err, result) {
        //if(err) throw err
        if (err) {
            // set flash message
            req.flash('error', err)
            res.redirect('/infoEskul');
          } else {
            // set flash message
            req.flash('success', 'Data Berhasil Dihapus!')
            // redirect to posts page
            res.redirect('/infoEskul');
          }
    });
});
/*END /jenisPengguna/hapusJenisPengguna*/
/*
// Import modul yang diperlukan
const express = require("express");
const multer = require("multer");
const path = require("path");

// Inisialisasi Express
const app = express();
const port = 3000;

// Menentukan lokasi penyimpanan file yang diunggah
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Direktori penyimpanan file
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    cb(null, Date.now() + extname); // Nama file yang diunggah akan menjadi timestamp saat ini
  },
});

// Membuat middleware multer
const upload = multer({ storage: storage });

// Rute untuk menampilkan formulir unggahan file
app.get("/upload", (req, res) => {
  res.send(`
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <input type="submit" value="Upload" />
    </form>
  `);
});

// Rute untuk menangani unggahan file
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Jika file berhasil diunggah, Anda dapat mengakses informasi tentang file di req.file
  const fileName = req.file.filename;
  const filePath = req.file.path;

  res.send(`File ${fileName} berhasil diunggah ke ${filePath}`);
});

// Rute untuk menampilkan file yang diunggah
app.get("/uploads/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "uploads", fileName);

  res.sendFile(filePath);
});

// Menjalankan server pada port 3000
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});*/

module.exports = router;