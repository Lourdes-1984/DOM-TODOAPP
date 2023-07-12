 
const checkComplete = () => {

    const i = document.createElement('i')
    i.classList.add('far')
    i.classList.add('fa-check-square')
    i.classList.add('icon')
    i.addEventListener('click', completeTask)
  
    return i
  }
  
  const completeTask = (e)  => {
    const elemento = e.target
    elemento.classList.toggle('fas')
    elemento.classList.toggle('completeIcon')
    elemento.classList.toggle('far')
  }

  export default checkComplete