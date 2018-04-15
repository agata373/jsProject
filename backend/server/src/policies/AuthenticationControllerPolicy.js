const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Proszę o podanie adresu email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Hasło nie spełniło następujących warunków:
          <br>
          1. Hasło może się składać tylko z liter oraz cyfr.
          <br>
          2. Hasło musi zawierać co najmniej 8 znaków.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Błędne dane do regejstracji'
          })
      }
    } else {
      next()
    }
  }
}
