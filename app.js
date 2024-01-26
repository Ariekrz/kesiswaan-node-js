var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var livereload = require('livereload');
var bodyParser = require('body-parser');
const csv = require('fast-csv');
const multer = require("multer");

var fs = require('fs')
var os = require('os')
var path = require('path')
var crypto = require('crypto')
var mkdirp = require('mkdirp')




var flash   = require('express-flash');
var session = require('express-session');

var indexRouter = require('./routes/index');

var infoEskulRouter = require('./routes/kesiswaan/infoEskul');
var detailRouter = require('./routes/kesiswaan/DaftarPeserta');
var NilaiEskulRouter = require('./routes/kesiswaan/NilaiEskul');
var CatatanKhususRouter = require('./routes/kesiswaan/CatatanKhusus');
var ProgramKerjaRouter = require('./routes/kesiswaan/ProgramKerja');
var perijinanRouter = require('./routes/kesiswaan/perijinan');
var profileRouter = require('./routes/kesiswaan/profile');
var settingRouter = require('./routes/kesiswaan/setting');
var halamansiswaRouter = require('./routes/kesiswaan/halamansiswa');
var loginRouter = require('./routes/kesiswaan/login');
var forgotRouter = require('./routes/kesiswaan/forgot');
var buatAkunRouter = require('./routes/kesiswaan/buatAkun');
var suratPerijinanRouter = require('./routes/kesiswaan/suratPerijinan');




var connectLiveReload = require('connect-livereload');

//Livereload code
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//End of livereload code



// set body parser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});
//End set body-Parser

var app = express();

//use flash
app.use(flash())

//use session
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 't@1k0ch3ng',
  name: 'secretName',
  cookie: {
      sameSite: true,
      maxAge: 60000
  },
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(connectLiveReload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash());
app.use(function(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.setHeader('Pragma', 'no-cache');
  next();
});
//Pengalamatan
app.use('/kesiswaan', indexRouter);
app.use('/infoEskul', infoEskulRouter);
app.use('/DaftarPeserta', detailRouter);
app.use('/perijinan', perijinanRouter);
app.use('/NilaiEskul', NilaiEskulRouter);
app.use('/CatatanKhusus', CatatanKhususRouter);
app.use('/ProgramKerja', ProgramKerjaRouter);
app.use('/profile', profileRouter);
app.use('/setting', settingRouter);
app.use('/halamansiswa', halamansiswaRouter);
app.use('/login', loginRouter);
app.use('/forgot', forgotRouter);
app.use('/buatAkun', buatAkunRouter);
app.use('/suratPerijinan', suratPerijinanRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Gunakan port server
app.listen(3000, ()=>{
  console.log('Server Berjalan di Port : '+5000);
});

module.exports = app;

/* var fs = require('fs')
var os = require('os')
var path = require('path')
var crypto = require('crypto')
var mkdirp = require('mkdirp')

function getFilename (req, file, cb) {
  crypto.randomBytes(16, function (err, raw) {
    cb(err, err ? undefined : raw.toString('hex'))
  })
}

function getDestination (req, file, cb) {
  cb(null, os.tmpdir())
}

function DiskStorage (opts) {
  this.getFilename = (opts.filename || getFilename)

  if (typeof opts.destination === 'string') {
    mkdirp.sync(opts.destination)
    this.getDestination = function ($0, $1, cb) { cb(null, opts.destination) }
  } else {
    this.getDestination = (opts.destination || getDestination)
  }
}

DiskStorage.prototype._handleFile = function _handleFile (req, file, cb) {
  var that = this

  that.getDestination(req, file, function (err, destination) {
    if (err) return cb(err)

    that.getFilename(req, file, function (err, filename) {
      if (err) return cb(err)

      var finalPath = path.join(destination, filename)
      var outStream = fs.createWriteStream(finalPath)

      file.stream.pipe(outStream)
      outStream.on('error', cb)
      outStream.on('finish', function () {
        cb(null, {
          destination: destination,
          filename: filename,
          path: finalPath,
          size: outStream.bytesWritten
        })
      })
    })
  })
}

DiskStorage.prototype._removeFile = function _removeFile (req, file, cb) {
  var path = file.path

  delete file.destination
  delete file.filename
  delete file.path

  fs.unlink(path, cb)
}

module.exports = function (opts) {
  return new DiskStorage(opts)
}*/