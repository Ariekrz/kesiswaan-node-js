var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/*START /penggunaAPP/jenisPengguna.*/
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM tbl_pengguna', function(err, rows, fields) {
        if (err) {
            req.flash('error', err);
            res.render('profile/profile', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'Dom Kang',
             
                data: ''
            });
        } else {
            //render ke view posts index
            res.render('profile/profile', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'Dom Kang',
                data: rows
            });
        }
    });
});




/*START /jenisPengguna/editJenisPengguna*/
router.post('/updateProfile', function(req, res, next) {
  let noIdPengguna = req.body.noIdPengguna;
  let namaPengguna = req.body.namaPengguna;
  let userName = req.body.userName
  let passWord = req.body.passWord;
  let errors = false;

  if(noIdPengguna.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan No Id");
    // render to add.ejs with flash message
    res.redirect('/setting');
  }

  if(namaPengguna.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Nama Siswa");
    // render to add.ejs with flash message
    res.redirect('/setting');
  }

  if(userName.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan nama penaggung jawab");
    // render to add.ejs with flash message
    res.redirect('/setting');
  }

  if(passWord.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/setting');
  }


  //if no errors
  if(!errors){
    let formData ={
      noIdPengguna:noIdPengguna,
      namaPengguna:namaPengguna,
      userName: userName,
      passWord : passWord
    }

        // update query
        connection.query('UPDATE tbl_pengguba SET ? WHERE noIdPengguna = ' + noIdPengguna, formData, function(err, result) {
            if (err) {
                req.flash('error', err);
                 
                // render to add.ejs
                res.redirect('/setting');
              } else {                
                req.flash('success', 'Data Berhasil Disimpan!');
                res.redirect('/setting  ');
              }
            });
    }
});
/*END /jenisPengguna/editJenisPengguna*/


module.exports = router;