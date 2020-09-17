import { addBtnListeners } from './projects.js'

function setUpUI () {
  // set up layout
  // main wrapper
  const wrapper = document.getElementsByClassName('wrapper')[0]

  // --> HEADER
  const boxHeader = document.createElement('div')
  // add classes
  boxHeader.classList.add('box')
  boxHeader.classList.add('header')
  // title of project that appears in header when project is selected
  const boxHeaderTitle = document.createElement('h2')
  // add class
  boxHeaderTitle.classList.add('boxHeaderTitle')
  boxHeaderTitle.id = 'boxHeaderTitle'
  // defaults to TODO before a project is created
  boxHeaderTitle.innerHTML = 'TODO'

  // append header and children to wrapper
  wrapper.appendChild(boxHeader)
  boxHeader.appendChild(boxHeaderTitle)

  // --> SIDEBAR
  const boxSidebar = document.createElement('div')
  // add classes
  boxSidebar.classList.add('box')
  boxSidebar.classList.add('sidebar')
  // h2 project
  const sidebarProjectTitle = document.createElement('h2')
  // add class
  sidebarProjectTitle.classList.add('sidebarProjectTitle')
  // give innerhtml
  sidebarProjectTitle.innerHTML = 'Projects'
  // + project link
  const addNewProjectLink = document.createElement('button')
  addNewProjectLink.classList.add('addNewProjectLink')
  addNewProjectLink.innerHTML = '+ project'
  const projectList = document.createElement('div')
  projectList.classList.add('projectList')

  // append sidebar and children to wrapper
  wrapper.appendChild(boxSidebar)
  boxSidebar.appendChild(sidebarProjectTitle)
  boxSidebar.appendChild(addNewProjectLink)
  boxSidebar.appendChild(projectList)

  // --> CONTENT
  const boxContent = document.createElement('div')
  // add classes
  boxContent.classList.add('box')
  boxContent.classList.add('content')
  // task title
  const tasksTitleWrapper = document.createElement('div')
  tasksTitleWrapper.classList.add('tasksTitleWrapper')
  // + task link
  const addNewTaskLink = document.createElement('button')
  addNewTaskLink.classList.add('addNewTaskLink')
  addNewTaskLink.innerHTML = '+ task'
  // actual task list
  const taskWrapper = document.createElement('div')
  taskWrapper.classList.add('taskWrapper')
  // list items are h5 + <br/>

  // append content and children to wrapper
  wrapper.appendChild(boxContent)
  boxContent.appendChild(tasksTitleWrapper)
  boxContent.appendChild(addNewTaskLink)
  boxContent.appendChild(taskWrapper)

  addBtnListeners()
  setupFormUI()
  setupProjectFormUI()
}

function setupFormUI () {
  const backgroundForm = document.createElement('div')
  backgroundForm.classList.add('backgroundForm')

  const myFormWrapper = document.createElement('div')
  myFormWrapper.classList.add('myFormWrapper')

  const myForm = document.createElement('form')
  myForm.setAttribute('onsubmit', 'return false')

  myForm.classList.add('myForm')
  const formTitle = document.createElement('h1')
  formTitle.innerHTML = 'edit task'

  // task title
  const taskTitle = document.createElement('label')
  taskTitle.innerHTML = ' <br> task <br>'

  const taskInput = document.createElement('input')
  taskInput.type = 'text'
  taskInput.classList.add('taskInput')
  taskInput.placeholder = 'enter brief task description or title'
  taskInput.name = 'taskName'
  taskInput.required = true

  // task details
  const taskDetailsTitle = document.createElement('label')
  taskDetailsTitle.innerHTML = ' <br> details  <br>'

  const taskDetailsInput = document.createElement('input')
  taskDetailsInput.type = 'text'
  taskDetailsInput.classList.add('taskDetails')
  taskDetailsInput.placeholder = 'enter details of task'
  taskDetailsInput.name = 'taskDetails'
  taskDetailsInput.required = false

  // task due date
  const taskDueDateTitle = document.createElement('label')
  taskDueDateTitle.innerHTML = '<br> task due date <br>'

  const taskDueDate = document.createElement('input')
  taskDueDate.setAttribute('type', 'date')
  taskDueDate.classList.add('taskDueDate')

  // buttons
  const addNewTaskBtnForm = document.createElement('button')
  addNewTaskBtnForm.innerHTML = '+'
  addNewTaskBtnForm.type = 'submit'
  addNewTaskBtnForm.classList.add('addNewTaskBtnForm')

  const closeFormBtn = document.createElement('button')
  closeFormBtn.innerHTML = '×'
  closeFormBtn.classList.add('closeForm')
  closeFormBtn.addEventListener('click', closeForm)

  const wrapper = document.getElementsByClassName('wrapper')[0]
  wrapper.appendChild(backgroundForm)
  backgroundForm.appendChild(myFormWrapper)
  myFormWrapper.appendChild(myForm)
  myForm.appendChild(closeFormBtn)

  myForm.appendChild(formTitle)
  myForm.appendChild(taskTitle)
  myForm.appendChild(taskInput)
  myForm.appendChild(taskDetailsTitle)
  myForm.appendChild(taskDetailsInput)
  myForm.appendChild(taskDueDateTitle)
  myForm.appendChild(taskDueDate)
  myForm.appendChild(addNewTaskBtnForm)
}

function setupProjectFormUI () {
  const backgroundFormProj = document.createElement('div')
  backgroundFormProj.classList.add('backgroundFormProj')

  const myFormWrapperProj = document.createElement('div')
  myFormWrapperProj.classList.add('myFormWrapperProj')

  const myFormProj = document.createElement('form')
  myFormProj.setAttribute('onsubmit', 'return false')
  myFormProj.classList.add('myFormProj')

  const formTitleProj = document.createElement('h1')
  formTitleProj.innerHTML = 'new project'

  // proj name
  const projTitle = document.createElement('label')
  projTitle.innerHTML = ' <br> project <br>'

  const projInput = document.createElement('input')
  projInput.type = 'text'
  projInput.classList.add('projInput')
  projInput.placeholder = 'enter project name'
  projInput.name = 'projName'
  projInput.required = true

  const projColorLabel = document.createElement('label')
  projColorLabel.innerHTML = '<br>Color <br>'
  const projColor = document.createElement('input')
  projColor.classList.add('projColor')
  projColor.type = 'color'
  projColor.name = 'colorOfProj'
  projColor.value = '#ff0000'

  // buttons
  const addNewProjBtnForm = document.createElement('button')
  addNewProjBtnForm.innerHTML = '+'
  addNewProjBtnForm.type = 'submit'
  addNewProjBtnForm.classList.add('addNewProjBtnForm')

  const closeProjFormBtn = document.createElement('button')
  closeProjFormBtn.innerHTML = '×'
  closeProjFormBtn.classList.add('closeProjFormBtn')
  closeProjFormBtn.addEventListener('click', closeProjForm)

  const wrapper = document.getElementsByClassName('wrapper')[0]
  wrapper.appendChild(backgroundFormProj)
  backgroundFormProj.appendChild(myFormWrapperProj)
  myFormWrapperProj.appendChild(myFormProj)
  myFormProj.appendChild(closeProjFormBtn)

  myFormProj.appendChild(formTitleProj)
  myFormProj.appendChild(projTitle)
  myFormProj.appendChild(projInput)
  myFormProj.appendChild(projColorLabel)
  myFormProj.appendChild(projColor)
  myFormProj.appendChild(addNewProjBtnForm)
}

function openForm () {
  document.getElementsByClassName('backgroundForm')[0].style.display = 'block'
}

function closeForm () {
  document.getElementsByClassName('backgroundForm')[0].style.display = 'none'
}

function openProjForm () {
  document.getElementsByClassName('backgroundFormProj')[0].style.display = 'block'
}

function closeProjForm () {
  document.getElementsByClassName('backgroundFormProj')[0].style.display = 'none'
}

setUpUI()

export default { openForm, openProjForm }
