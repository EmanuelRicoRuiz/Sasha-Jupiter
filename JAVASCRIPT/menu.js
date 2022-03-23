
function myFunction() {
  console.log("abrió")
  document.getElementById("myDropdown").classList.toggle("show");
}





const sideBarcontent = async (idUsuario) => {
  let uid = idUsuario.uid
  let usuario = await getUsuario(uid);

  usuario = usuario.data();
  console.log(usuario.tipoUsuario)
  let permisos = await getPermisos(usuario.tipoUsuario);
  permisos = permisos.data();
  console.log(permisos)
  let sidebar = document.getElementById("menu");
  if (permisos.permisos[0]) {
    sidebar.innerHTML += `<li><a href="registrarProyecto.html">Registrar proyecto</a></li>`
  }
  if (permisos.permisos[1]) {
    sidebar.innerHTML += `<li><a href="registrarEspacio.html">Registrar espacio</a></li>`
  }
  if (permisos.permisos[2]) {
    sidebar.innerHTML += `<li><a href="registrarArticulo.html">Registrar artículo</a></li>`
  }
  if (permisos.permisos[3]) {
    sidebar.innerHTML += `<li><a href="registrarCategoria.html">Registrar categoría</a></li>`
  }
  if (permisos.permisos[4]) {
    sidebar.innerHTML += `<li><a href="registrarEvento.html">Registrar evento</a></li>`
    
  }
  if (permisos.permisos[5]) {
    sidebar.innerHTML += `<li><a href="registrarservicio.html">Registrar servicio</a></li>`
  }
  if (permisos.permisos[6]) {
    sidebar.innerHTML += `<li><a href="registrarEntidad.html">Registrar entidad</a></li>`  
  }
  if (permisos.permisos[7]) {
    sidebar.innerHTML += `<li><a href="entidadesAprobarTabla.html">Ver entidades en espera</a></li>`
  }
  if (permisos.permisos[8]) {
    sidebar.innerHTML += `<li><a href="entidadesA.html">Ver entidades Asociadas</a></li>`
  }
}


