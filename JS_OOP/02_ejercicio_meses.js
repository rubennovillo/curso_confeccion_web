/**Objeto meses,
 * Propiedades :meses,
 * valores en otro idioma
 * bucle nombre del mes 
 */
const aMeses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
      'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  
  const aMesesRusos = [
      'янва́рь'	, 'февра́ль', 'март', 'апре́ль', 'май', 'ию́нь', 'ию́ль',
      'а́вгуст', 'сентя́брь', 'октя́брь', 'ноя́брь', 'дека́брь'  
  ]
  
  const aMesesIngles = [
      'january', 'february', 'march', 'april', 'may', 'june', 
      'july', 'august', 'september', 'october', 'november', 'december'
  ]


  function elegirArray(key) {
      let r
      switch (key) {
          case 'español':
          case 'es':
              r = aMeses
              break;
          case 'ruso':    
          case 'ru':
              r =  aMesesRusos
              break;
          case 'ingles': 
          case 'íngles':    
          case 'en':
              r = aMesesIngles
              break;
          default:
              throw new Error('Código de idioma incorrecto')
      }
      return r
  }
  
  function elegirIdioma(key) {
      let r
      switch (key) {
          case 'es':
              r = 'español'
              break;
          case 'ru':
              r =  'ruso'
              break;
          case 'en':
              r = 'inglés'
              break;
          default:
              r = key
      }
      return r
  }
  
  function prepararMeses (id1, id2) {
  
      let meses1 = elegirArray(id1)
      let meses2 = elegirArray(id2)
     
      if (meses1.length > meses2.length ) {
          throw new Error('Falta un mes del segundo idioma')
      } else if (meses1.length < meses2.length) {
          throw new Error('Falta un mes del primer idioma')
      }
  
      let oMeses = {}
      for (let i = 0; i < meses1.length; i++) {
          const item = meses1[i];
          oMeses[item] = meses2[i]   
      }
      return oMeses
  } 
  
  function mostrarParesMeses(id1, id2) {
      
      let oMeses = prepararMeses(id1, id2)
      let texto = ``
      let ids = [elegirIdioma(id1), elegirIdioma(id2)]
      for (const mes in oMeses) {
          const trad = oMeses[mes];    
          texto += `El mes ${mes} en ${ids[0]}, se dice ${trad} en ${ids[1]}\n`
      }
      console.log(texto)
  }
  
  try {
      // Eleige dos entre 'es', 'ru', 'en'
      mostrarParesMeses('es', 'en')
  } catch (e) {
      console.error('Lo sentimos')
      console.error(e.message)
  }
  console.log('Gracias por venir')