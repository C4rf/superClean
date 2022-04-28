
function validate() {

  let rut = document.getElementById('rut').value;
  if ((rut.length == 0 || rut.length !== 9) || isNaN(rut)) {
    alert("El rut indicado es incorrecto");
    document.titulo-formulario.rut.focus();
    return false;
  }


  let nombre = document.getElementById('nombre').value;
  let regxNom = new RegExp('^[A-Z]+$', 'i')
  let valNom = regxNom.test(nombre)
  if (nombre.length == 0 || nombre.length >50 || !valNom) {
    alert('El nombre indicado es incorrecto');
    document.titulo-formulario.nombre.focus();
    return false;
  }
  let apellido = document.getElementById('apellido').value;
  let regxApell = new RegExp('^[A-Z]+$', 'i')
  let valApell = regxApell.test(apellido)
  if (apellido.length == 0 || apellido.length > 50 || !valApell) {
    alert('El apellido indicado es incorrecto');
    document.titulo-formulario.apellido.focus();
    return false;
  }
  let direccion = document.getElementById('direccion').value;
  let regxDirec = new RegExp('^[A-Z0-9 ]+$', 'i')
  let valDirec = regxDirec.test(direccion)
  if (direccion.length == 0 || direccion.length > 100 || !valDirec) {
    alert('La dirección indicada es incorrecta');
    document.titulo-formulario.direccion.focus();
    return false;
  }

 
    let opcion3 = 5000;
    let opcion4 = 8000;
  
  
    let opcion2 = document.getElementById('motor');
    let opcion1 = document.getElementById('exterior');
    let opcion5 = document.getElementById('nombre').value;
  
    if (opcion1.checked && opcion2.checked == true) {

      alert("Estimado(a) : " + opcion5+ ", " + " el valor de ambos servicios (IVA incluido) es de : " + " $ " + Number(opcion3 + opcion4) * 1.19);
      return false;
    } else if (opcion1.checked == true) {
  
      alert("Estimado(a) : " + opcion5 + ", " + " el valor del servicio de " + opcion1.value + " (IVA incluido) es de : " + " $ " + opcion3 * 1.19);
      return false;
    } else if (opcion2.checked == true) {
      alert("Estimado(a) : " + opcion5 + ", " + " el valor del servicio de " + opcion2.value + " (IVA incluido) es de : " + " $ " + opcion4 * 1.19);
      return false;
    } else {
      alert("Estimado(a) : " + opcion5 + ", " + " no ha seleccionado opciones. Seleccione una de ellas o ambas.");
      return false;
    }
    
}
