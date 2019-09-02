export function app() {
      console.log('Cargada app')
      const store = 'userName'
  
      // Nodos del DOM
      let btnGuardar = document.querySelector('#btn-guardar')
      let btnBorrar = document.querySelector('#btn-borrar')
      let inNombre = document.querySelector('#in-nombre')
      let spanSaludo = document.querySelector('#span-saludo')
  
      // Asociación de los manejadores de eventos
      btnGuardar.addEventListener('click', onClickGuardar)
      btnBorrar.addEventListener('click', onClickBorrar)
      inNombre.addEventListener('input', onInputNombre)
      inNombre.addEventListener('change', onChangeNombre)
      //spanSaludo.addEventListener('output', outPutSaludo)
  
      //Inicialización de valores
      let user = localStorage.getItem(store)    
       if (user) {
          inNombre.value = user
          spanSaludo.innerHTML = user
          inNombre.value = ''
      }
      
      // Funciones manejadoras de eventos
      function onClickGuardar() {
          localStorage.setItem(store, inNombre.value)
      }
  
      function onClickBorrar(ev) {
          inNombre.value = ''
          spanSaludo.innerHTML = inNombre.value
          localStorage.removeItem(store)
      }
  
      function onInputNombre(ev) {
          spanSaludo.innerHTML = ev.target.value
      }
  
      function onChangeNombre(ev) {
          console.log('Change', ev.target.value)
      }
  }
  