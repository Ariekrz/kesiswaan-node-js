var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/*START /penggunaAPP/jenisPengguna.*/

/*START /user/user*/
router.get('/', function(req, res, next){
    connection.query('SELECT info_ekskul.idInfoeskul, info_ekskul.nama_ekskul, info_ekskul.preview_eskul, info_ekskul.informasi_eskul, tbl_guru.noIdGuru, tbl_guru.namaGuru FROM info_ekskul INNER JOIN tbl_guru ON info_ekskul.noIdGuru = tbl_guru.noIdGuru WHERE info_ekskul.idInfoeskul % 2 = 1;', function(err, rows_ganjil){
        if (err) {
        req.flash('error', err);
        // Handle the error, you might want to redirect or render an error page
      } 
      connection.query('SELECT info_ekskul.idInfoeskul, info_ekskul.nama_ekskul, info_ekskul.preview_eskul, info_ekskul.informasi_eskul, tbl_guru.noIdGuru, tbl_guru.namaGuru FROM info_ekskul INNER JOIN tbl_guru ON info_ekskul.noIdGuru = tbl_guru.noIdGuru WHERE info_ekskul.idInfoeskul % 2 = 0;', function(err, rows_genap){
        if (err) {
          req.flash('error', err);
          // Handle the error, you might want to redirect or render an error page
        } 
     
        
          res.render('halamansiswa/halamansiswa', {        
            
            
            data_ganjil: rows_ganjil,
            data_genap: rows_genap
           
  
                });
              });
            });
          });
    
module.exports = router;
