let opcion3 = 5000;
    let opcion4 = 8000;
  
  
    var opcion1 = document.getElementById("exterior");
    var opcion2 = document.getElementById("motor");
    var opcion5 = document.getElementById("nombre").value;
  
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