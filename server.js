var express = require('express')
var history = require('connect-history-api-fallback')
var path = require('path')
var serveStatic = require('serve-static')
var nodemailer = require('nodemailer');
const { email } = require('vuelidate/lib/validators');

var app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Use a fallback for non-root routes (required for Vue router)
//   NOTE: History fallback must be "used" before the static serving middleware!
app.use(history({
    // OPTIONAL: Includes more verbose logging
    verbose: true
}))


// EndPoint to download documents
app.get('/descargar/:id', function (req, res) {
  
  res.download(__dirname+'/src/assets/documents/'+req.params.id,
    req.params.id, function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('listo')
      }
    }
  )
})

// Serve static assets from the build files (images, etc)
app.use(serveStatic(path.join(__dirname, '/dist')))

var port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server started at port ${port}`)
})
