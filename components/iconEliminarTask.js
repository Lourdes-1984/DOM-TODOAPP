const iconEliminarTask = () => {
  const iconEliminar = document.createElement("i");
  iconEliminar.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  iconEliminar.addEventListener("click", eliminarTask);

  return iconEliminar;
};
const eliminarTask = (e) => {
  const liPadre = e.target.parentElement;
  liPadre.remove();
};
export default iconEliminarTask;
