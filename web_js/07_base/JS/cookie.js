function setCookie (cname = '',cvalue, exdays = 0) {
      let d = new Date ()
      d,setTime(d.getTime() + (exdays*24*60*60*1000))
      let expires ="expires= "+d.toUTCString()
      document.cookie = cname + "=" +cvalue + ";" + expires
}

function getCookie (cname) {
      let name = cname + "="
      let ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
            const c = ca[i]
            while (c.charAT (0)== ' ')c = c.substring(1)
            if (c.indexOf(name) != -1) return
                  c.substring(name.length),c.length)                          
      } return ""

}
