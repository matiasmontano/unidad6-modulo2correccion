var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('contacto', {
    isContacto: true
  });
});

module.exports = router;

router.post('/', async function (req, res, next) {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'matiasmontano@hotmail.com',
    subject: 'contacto desde la web Transportes X',
    html: nombre + "se contacto a traves y quiere mas info a este correo: " + email + ". <br> Ademas, hizo el siguiente comentario: " + mensaje + ". <br> Su tel es: " + telefono
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASS
    }
  })

  var info = await transport.sendMail(obj);
  res.render('contacto', {
    message: 'Mensaje enviado correctamente'
  })

});

