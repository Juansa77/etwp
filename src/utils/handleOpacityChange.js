 const handleOpacityChange = (ref, scrolltotal) => {
  //* Apuntamos al elemento mediante Ref
  const element = ref.current;
  //* Establecemos la opacidad de inicio en 100
  let currentOpacity = 100;
  //* Verificar cuando el scroll aumenta en 1000 px
  if (scrolltotal >= 1000) {
    //* Dividimos scroll total entre mil para ver cuantas veces lo supera en 1000
    const timesIncreased = Math.floor(scrolltotal / 10000);
    console.log(timesIncreased)
    //* Reducimos la opacidad en 10 por cada vez que se supera 1000
    currentOpacity -= timesIncreased * 10;
  }

  //* Nos aseguramos que el rango de opacidad este en numero entero
console.log(currentOpacity)
  currentOpacity= Math.max(0, Math.min(1, currentOpacity))
  console.log("scroll en funcion", scrolltotal)
  //* Aplicamos la opacidad

  if(element){
    element.style.opacity=currentOpacity.toString()
    console.log(element)
    console.log(currentOpacity)
 
  }
};


export default handleOpacityChange