var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/**
 * INDEX POSTS
 */
router.get('/', function (req, res, next) {
  //query
  connection.query('SELECT * FROM akun_loginsementara', function (err, rows) {
      if (err) {
          req.flash('error', err);
          res.render('login/buatAkun', {
              data: ''
          });
      } else {
          //render ke view posts index
          res.render('login/buatAkun', {
              data: rows // <-- data posts
          });
      }
  });
});


/*START /jenisPengguna/tambahJenisPengguna*/
router.post('/tambahAkun', function(req, res, next){
  let username = req.body.username;
  let email = req.body.username;
  let password = req.body.password;
  let errors = false;



  if(username.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Nama Siswa");
    // render to add.ejs with flash message
    res.redirect('/login');
  }

  if(email.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan nama penaggung jawab");
    // render to add.ejs with flash message
    res.redirect('/login');
  }

 

  if(password.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Silahkan Masukkan Keperluan");
    // render to add.ejs with flash message
    res.redirect('/login');
  }

  //if no errors
  if(!errors){
    let formData ={
     
      username : username,
      email : email,
      password : password
    }
    connection.query('INSERT INTO akun_loginsementara SET ?', formData, function(err, result){
      if (err) {
        req.flash('error', err);
         
        // render to add.ejs
        res.redirect('/login');
      } else {                
        req.flash('success', 'Data Berhasil Disimpan!');
        res.redirect('/login');
      }
    });
  }
});

module.exports = router;
