var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/*START /penggunaAPP/jenisPengguna.*/
router.get('/', function(req, res, next) {
    connection.query('SELECT perijinan.idPerijinan, tbl_pesertadidik.noIdPesertaDidik, tbl_pesertadidik.namaPesertaDidik, tbl_guru.noIdGuru, tbl_guru.namaGuru, perijinan.tanggal_perijinan FROM `perijinan` INNER JOIN tbl_pesertadidik ON perijinan.noIdPesertaDidik = tbl_pesertadidik.noIdPesertaDidik INNER JOIN tbl_guru ON perijinan.noIdGuru = tbl_guru.noIdGuru', function(err, rows, fields) {
        if (err) {
            req.flash('error', err);
            res.render('perijinan/perijinan', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'rangerMerah',
                thSatu: 'NO ID PERIJINAN',
                thDua: 'NAMA SISWA',
                thTiga: 'GURU PENANGGUNG JAWAB',
                thEmpat: 'TANGGAL PERIJINAN',
                thLima: 'AKSI',
                data: ''
            });
        } else {
            //render ke view posts index
            res.render('perijinan/perijinan', {
              namaBrand: 'KESISWAAN', 
              namaSekolah: 'SMK Pusdikhubad Cimahi',
              namaPengguna: 'rangerMerah',
              thSatu: 'NO ID PERIJINAN',
              thDua: 'NAMA SISWA',
              thTiga: 'GURU PENANGGUNG JAWAB',
              thEmpat: 'TANGGAL PERIJINAN',
              thLima: 'AKSI',
                data: rows
            });
        }
    });
});
/*END /penggunaAPP/jenisPengguna.*/

/*START /jenisPengguna/tambahJenisPengguna*/
router.post('/simpanPerijinan', function(req, res, next){
  let idPerijinan = req.body.idPerijinan;
  let noIdPesertaDidik = req.body.noIdPesertaDidik;
  let noIdGuru = req.body.noIdGuru;
  let tanggal_perijinan = req.body.tanggal_perijinan;
  let errors = false;

  if(idPerijinan.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan No Id");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }

  if(noIdPesertaDidik.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Nama Siswa");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }

  if(noIdGuru.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan nama penaggung jawab");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }

  if(tanggal_perijinan.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }


  //if no errors
  if(!errors){
    let formData ={
      idPerijinan:idPerijinan,
      noIdPesertaDidik:noIdPesertaDidik,
      noIdGuru: noIdGuru,
      tanggal_perijinan: tanggal_perijinan
    }
    connection.query('INSERT INTO perijinan SET ?', formData, function(err, result){
      if (err) {
        req.flash('error', err);
         
        // render to add.ejs
        res.redirect('/perijinan');
      } else {                
        req.flash('success', 'Data Berhasil Disimpan!');
        res.redirect('/perijinan');
      }
    });
  }
});


/*START /jenisPengguna/tambahJenisPengguna*/
router.post('/updatePerijinan', function(req, res, next){
  let idPerijinan = req.body.idPerijinan;
  let noIdPesertaDidik = req.body.noIdPesertaDidik;
  let noIdGuru = req.body.noIdGuru;
  let tanggal_perijinan = req.body.tanggal_perijinan;
  let errors = false;

  if(idPerijinan.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan No Id");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }

  if(noIdPesertaDidik.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Nama Siswa");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }

  if(noIdGuru.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan nama penaggung jawab");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }

  if(tanggal_perijinan.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/perijinan');
  }


  //if no errors
  if(!errors){
    let formData ={
      idPerijinan:idPerijinan,
      noIdPesertaDidik:noIdPesertaDidik,
      noIdGuru: noIdGuru,
      tanggal_perijinan: tanggal_perijinan
    }

        // update query
        connection.query('UPDATE perijinan SET ? WHERE idPerijinan = ' + idPerijinan, formData, function(err, result) {
            if (err) {
                req.flash('error', err);
                 
                // render to add.ejs
                res.redirect('/perijinan');
              } else {                
                req.flash('success', 'Data Berhasil Disimpan!');
                res.redirect('/perijinan');
              }
            });
    }
});
/*END /jenisPengguna/editJenisPengguna*/

/*START /jenisPengguna/hapusJenisPengguna*/
router.get('/hapusPerijinan/(:idPerijinan)', function(req, res, next) {

    let idPerijinan = req.params.idPerijinan;
     
    connection.query('DELETE FROM perijinan WHERE idPerijinan = ' + idPerijinan, function(err, result) {
        //if(err) throw err
        if (err) {
            // set flash message
            req.flash('error', err)
            res.redirect('/perijinan');
          } else {
            // set flash message
            req.flash('success', 'Data Berhasil Dihapus!')
            // redirect to posts page
            res.redirect('/perijinan');
          }
    });
});
/*END /jenisPengguna/hapusJenisPengguna*/
module.exports = router;