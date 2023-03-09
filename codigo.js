function aleatorio(min, max){
    return Math.floor(Math.random()*(3 - 1 + 1)+1);
  } 

  function eleccion(jugada) {
    let resultado = ""
      if (jugada == 1) {
        resultado = "🥌Piedra🥌"
    } else if (jugada == 2){
        resultado = "🧻Papel🧻"
    }else if(jugada == 3){
        resultado = "✂Tijera✂"
    } else{
        resultado = "Elige una opción valida"
    }
    return resultado
  }

  alert("Vamos a jugar Piedra - Papel o Tijera")
  alert("Si pierdes o ganas 3 veces, veras el resultado")
  alert("Jugaras contra el Computador")

	let jugador = 0
  let computador = 0
  let triunfos = 0
  let perdidas = 0
  while (triunfos < 3 && perdidas < 3) {
    
    computador = aleatorio(1,3)
    jugador = prompt("Elige 1 🥌Piedra🥌 , 2 🧻Papel🧻 , 3 ✂Tijera✂")
      
    alert("El computador eligió " + eleccion(computador))
    alert("Tu elegiste " + eleccion(jugador))

    if(computador == jugador){
      alert("Empate")
    } else if ( jugador == 1 && computador == 3){
      alert("Ganaste")
      triunfos = triunfos + 1
    } else if(jugador == 2 && computador == 1){
      alert("Ganaste")
      triunfos = triunfos + 1
    } else if(jugador == 3 && computador == 2){
      alert("Ganaste")
      triunfos = triunfos + 1
    }  else {
      alert("Perdiste")
      perdidas = perdidas + 1
    }
  }
  
  alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
  
  
  


