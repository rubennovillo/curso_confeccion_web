/**función isPalindromo
 * @description averiguar la frase es palindromo
 * @param {string} cadena
 * @returns {boolean}
 */
isPali = (cadena = '') => {
     let r = false
     cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
     console.log(cadenaSinEspacios)
     cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
     console.log(cadenaInversa)
     if (cadenaSinEspacios === cadenaInversa) {
         r = true
     }
     return r
 }
 
 isPaliShort = (cadena = '') => {
     sinEspacios = cadena.split(' ').join('').toLowerCase()
     return sinEspacios === 
         sinEspacios.split('').reverse().join('') ? true : false 
 }
 
 module.exports = {}
 module.exports.isPali = isPali
 module.exports.isPaliShort = isPaliShort