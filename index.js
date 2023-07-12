import checkComplete from "./components/checkComplete.js"
import iconEliminarTask from "./components/iconEliminarTask.js"

const btn = document.querySelector('[data-form-btn]')

const crearTask = (e) => {
    e.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const value = input.value
    const list = document.querySelector('[data-list]')
    
    const task = document.createElement('li')
    task.classList.add('card')
    input.value = ''
    const divTaskContent = document.createElement('div')
    

    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerText = value
    divTaskContent.appendChild(checkComplete())
    // divTaskContent.appendChild(iconEliminarTask())
    // task.innerHTML = content
    task.appendChild(divTaskContent)
    task.appendChild(iconEliminarTask())
    divTaskContent.appendChild(titleTask)
    list.appendChild(task)
   
    
}
btn.addEventListener('click',  crearTask)



   

