var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

/*START /penggunaAPP/jenisPengguna.*/
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM tbl_pengguna', function(err, rows, fields) {
        if (err) {
            req.flash('error', err);
            res.render('profile/setting', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'Dom Kang',
             
                data: ''
            });
        } else {
            //render ke view posts index
            res.render('profile/setting', {
                namaBrand: 'KESISWAAN', 
                namaSekolah: 'SMK Pusdikhubad Cimahi',
                namaPengguna: 'Dom Kang',
                data: rows
            });
        }
    });
});
module.exports = router;