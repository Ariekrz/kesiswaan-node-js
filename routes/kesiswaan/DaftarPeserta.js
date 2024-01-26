var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/*START /penggunaAPP/jenisPengguna.*/
router.get('/', function(req, res, next) {
    connection.query('SELECT tbl_pesertaekskul.idPesertaEskul, tbl_pesertadidik.noIdPesertaDidik, tbl_pesertadidik.namaPesertaDidik, tbl_pesertadidik.kelas, tbl_pesertadidik.jurusan, tbl_guru.noIdGuru, tbl_guru.namaGuru, info_ekskul.idInfoeskul, info_ekskul.nama_ekskul FROM tbl_pesertaekskul INNER JOIN tbl_pesertadidik ON tbl_pesertaekskul.noIdPesertaDidik = tbl_pesertadidik.noIdPesertaDidik INNER JOIN tbl_guru ON tbl_pesertaekskul.noIdGuru = tbl_guru.noIdGuru INNER JOIN info_ekskul ON tbl_pesertaekskul.idInfoeskul = info_ekskul.idInfoeskul', function(err, rows, fields) {
        if (err) {
            req.flash('error', err);
            res.render('DaftarPeserta/DaftarPeserta', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'rangerMerah',
                thSatu: 'ID PESERTA ESKUL',
                thDua: 'NAMA ESKUL',
                thTiga: 'GURU PEMBIMBING',
                thEmpat: 'NAMA SISWA',
                thLima: 'KELAS',
                thEnam: 'JURUSAN',
                thTujuh: 'AKSI',

                data: ''
            });
        } else {
            //render ke view posts index
            res.render('DaftarPeserta/DaftarPeserta', {
                namaBrand: 'Hubadci', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'rangerMerah',
                thSatu: 'ID PESERTA ESKUL',
                thDua: 'NAMA ESKUL',
                thTiga: 'GURU PEMBIMBING',
                thEmpat: 'NAMA SISWA',
                thLima: 'KELAS',
                thEnam: 'JURUSAN',
                thTujuh: 'AKSI',
                data: rows
            });
        }
    });
});


/*START /jenisPengguna/tambahJenisPengguna*/
router.post('/simpanDaftarPeserta', function(req, res, next){
  let idPesertaEskul = req.body.idPesertaEskul;
  let idInfoeskul = req.body.idInfoeskul;
  let noIdGuru = req.body.noIdGuru;
  let noIdPesertaDidik = req.body.noIdPesertaDidik;

    let errors = false;
    if(idPesertaEskul.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan keperluan");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }
   
  
    if(idInfoeskul.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan keperluan");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }
  
    if(noIdGuru.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan nama penanggung jawab");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }

    if(noIdPesertaDidik.length === 0) {
      errors = true;
  
      // set flash message
      req.flash('error', "Silahkan Masukkan nama siswa");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }
    // if no error
    if(!errors){
        let formData ={
    
          idInfoeskul:idInfoeskul,
          noIdGuru:noIdGuru,
          noIdPesertaDidik:noIdPesertaDidik
        
        }
    connection.query('INSERT INTO tbl_pesertaekskul SET ?', formData, function(err, result){
      if (err) {
        req.flash('error', err);
         
        // render to add.ejs
        res.redirect('/DaftarPeserta');
      } else {                
        req.flash('success', 'Data Berhasil Disimpan!');
        res.redirect('/DaftarPeserta');
      }
    });
  }
});



/*START /jenisPengguna/editJenisPengguna*/
router.post('/updateDaftarPeserta', function(req, res, next){
  let idPesertaEskul = req.body.idPesertaEskul;
  let idInfoeskul = req.body.idInfoeskul;
  let noIdGuru = req.body.noIdGuru;
  let noIdPesertaDidik = req.body.noIdPesertaDidik;
    let errors = false;

    if(idPesertaEskul.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan keperluan");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }
  
   
  
    if(idInfoeskul.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan keperluan");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }
  
    if(noIdGuru.length === 0) {
      errors = true;

      // set flash message
      req.flash('error', "Silahkan Masukkan nama penanggung jawab");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }

    if(noIdPesertaDidik.length === 0) {
      errors = true;
  
      // set flash message
      req.flash('error', "Silahkan Masukkan nama siswa");
      // render to add.ejs with flash message
      res.redirect('/DaftarPeserta');
    }
    // if no error
    if(!errors){
        let formData ={
          idPesertaEskul: idPesertaEskul,
          idInfoeskul:idInfoeskul,
          noIdGuru:noIdGuru,
          noIdPesertaDidik:noIdPesertaDidik
        
        }


        // update query
        connection.query('UPDATE tbl_pesertaekskul SET ? WHERE idPesertaEskul = ' + idPesertaEskul, formData, function(err, result) {
            if (err) {
                req.flash('error', err);
                 
                // render to add.ejs
                res.redirect('/DaftarPeserta');
              } else {                
                req.flash('success', 'Data Berhasil Disimpan!');
                res.redirect('/DaftarPeserta');
              }
            });
    }
});
/*END /jenisPengguna/editJenisPengguna*/



/*START /jenisPengguna/hapusJenisPengguna*/
router.get('/hapusDaftarPeserta/(:idPesertaEskul)', function(req, res, next) {

    let idPesertaEskul = req.params.idPesertaEskul;
     
    connection.query('DELETE FROM tbl_pesertaekskul WHERE idPesertaEskul = ' + idPesertaEskul, function(err, result) {
        //if(err) throw err
        if (err) {
            // set flash message
            req.flash('error', err)
            res.redirect('/DaftarPeserta');
          } else {
            // set flash message
            req.flash('success', 'Data Berhasil Dihapus!')
            // redirect to posts page
            res.redirect('/DaftarPeserta');
          }
    });
});
/*END /jenisPengguna/hapusJenisPengguna*/


module.exports = router;