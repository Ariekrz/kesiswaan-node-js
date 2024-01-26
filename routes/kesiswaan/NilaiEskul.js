var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/*START /penggunaAPP/jenisPengguna.*/
router.get('/', function(req, res, next) {
    connection.query('SELECT nilai_eskul.IdNilaieskul, nilai_eskul.keterangan, tbl_pesertadidik.noIdPesertaDidik, tbl_pesertadidik.namaPesertaDidik, info_ekskul.idInfoeskul, info_ekskul.nama_ekskul FROM nilai_eskul INNER JOIN tbl_pesertadidik ON nilai_eskul.noIdPesertaDidik = tbl_pesertadidik.noIdPesertaDidik INNER JOIN info_ekskul ON nilai_eskul.idInfoeskul = info_ekskul.idInfoeskul', function(err, rows, fields) {
        if (err) {
            req.flash('error', err);
            res.render('NilaiEskul/NilaiEskul', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'rangerMerah',
                thSatu: 'ID NILAI',
                thDua: 'NAMA SISWA',
                thTiga: 'NAMA ESKUL',
                thLima: 'KETERANGAN',
                thEnam: 'AKSI',
                data: ''
            });
        } else {
            //render ke view posts index
            res.render('NilaiEskul/NilaiEskul', {
              namaBrand: 'KESISWAAN', 
              namaSekolah: 'SMK Pusdikhubad Cimahi',
              namaPengguna: 'rangerMerah',
              thSatu: 'ID NILAI',
              thDua: 'NAMA SISWA',
              thTiga: 'NAMA ESKUL',
              thLima: 'KETERANGAN',
              thEnam: 'AKSI',
                data: rows
            });
        }
    });
});
/*END /penggunaAPP/jenisPengguna.*/


/*START /jenisPengguna/tambahJenisPengguna*/
router.post('/simpanNilai', function(req, res, next){
  let noIdPesertaDidik = req.body.noIdPesertaDidik;
  let idInfoeskul = req.body.idInfoeskul;
  let keterangan = req.body.keterangan;
  let errors = false;


  if(noIdPesertaDidik.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Nama Siswa");
    // render to add.ejs with flash message
    res.redirect('/NilaiEskul');
  }

  if(idInfoeskul.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan nama penaggung jawab");
    // render to add.ejs with flash message
    res.redirect('/NilaiEskul');
  }

 

  if(keterangan.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/NilaiEskul');
  }

  //if no errors
  if(!errors){
    let formData ={
     
      noIdPesertaDidik :noIdPesertaDidik,
      idInfoeskul : idInfoeskul,
      keterangan: keterangan
    }
    connection.query('INSERT INTO nilai_eskul SET ?', formData, function(err, result){
      if (err) {
        req.flash('error', err);
         
        // render to add.ejs
        res.redirect('/NilaiEskul');
      } else {                
        req.flash('success', 'Data Berhasil Disimpan!');
        res.redirect('/NilaiEskul');
      }
    });
  }
});



/*START /jenisPengguna/editJenisPengguna*/
router.post('/updateNilai', function(req, res, next) {
  let IdNilaieskul = req.body.IdNilaieskul;
  let noIdPesertaDidik = req.body.noIdPesertaDidik;
  let idInfoeskul = req.body.idInfoeskul
  let keterangan = req.body.keterangan;
  let errors = false;

  if(IdNilaieskul.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan No Id");
    // render to add.ejs with flash message
    res.redirect('/NilaiEskul');
  }

  if(noIdPesertaDidik.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Nama Siswa");
    // render to add.ejs with flash message
    res.redirect('/NilaiEskul');
  }

  if(idInfoeskul.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan nama penaggung jawab");
    // render to add.ejs with flash message
    res.redirect('/NilaiEskul');
  }


  if(keterangan.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/NilaiEskul');
  }

  //if no errors
  if(!errors){
    let formData ={
      IdNilaieskul:IdNilaieskul,
      noIdPesertaDidik:noIdPesertaDidik,
      idInfoeskul: idInfoeskul,
      keterangan: keterangan
    }

        // update query
        connection.query('UPDATE nilai_eskul SET ? WHERE IdNilaieskul = ' + IdNilaieskul, formData, function(err, result) {
            if (err) {
                req.flash('error', err);
                 
                // render to add.ejs
                res.redirect('/NilaiEskul');
              } else {                
                req.flash('success', 'Data Berhasil Disimpan!');
                res.redirect('/NilaiEskul');
              }
            });
    }
});
/*END /jenisPengguna/editJenisPengguna*/

/*START /jenisPengguna/hapusJenisPengguna*/
router.get('/hapusNilai/(:IdNilaieskul)', function(req, res, next) {

  let IdNilaieskul = req.params.IdNilaieskul;
   
  connection.query('DELETE FROM nilai_eskul WHERE IdNilaieskul = ' + IdNilaieskul, function(err, result) {
      //if(err) throw err
      if (err) {
          // set flash message
          req.flash('error', err)
          res.redirect('/NilaiEskul');
        } else {
          // set flash message
          req.flash('success', 'Data Berhasil Dihapus!')
          // redirect to posts page
          res.redirect('/NilaiEskul');
        }
  });
});
module.exports = router;