const USERS_KEY = 'todo_users'
const CURRENT_USER_KEY = 'todo_current_user_id'
const SESSION_USER_KEY = 'todo_session_user_id'

const tasksList = document.querySelector('#tasks-list')
const completedList = document.querySelector('#completed-list')
const categoryList = document.querySelector('#category-list')
const vitalList = document.querySelector('#vital-list')
const myTasksList = document.querySelector('#mytasks-list')
const categoryBoardList = document.querySelector('#category-board-list')
const vitalCount = document.querySelector('#vital-count')
const overdueCount = document.querySelector('#overdue-count')
const todayCount = document.querySelector('#today-count')
const myTotalCount = document.querySelector('#my-total-count')
const myOpenCount = document.querySelector('#my-open-count')
const myDoneCount = document.querySelector('#my-done-count')
const addTaskForm = document.querySelector('form#add-task')
const addTaskInput = document.querySelector('#add-task-input')
const addTaskPriority = document.querySelector('#add-task-priority')
const addTaskDate = document.querySelector('#add-task-date')
const addTaskCategory = document.querySelector('#add-task-category')
const clearAllTasksBtn = document.querySelector('button#clear-all-tasks')
const clearCompletedBtn = document.querySelector('button#clear-completed-btn')
const taskCount = document.querySelector('#task-count')
const searchInput = document.querySelector('#search-input')

const ringCompleted = document.querySelector('#ring-completed')
const ringProgress = document.querySelector('#ring-progress')
const ringNotStarted = document.querySelector('#ring-not-started')
const metricCompleted = document.querySelector('#metric-completed')
const metricProgress = document.querySelector('#metric-progress')
const metricNotStarted = document.querySelector('#metric-not-started')

const profileAvatar = document.querySelector('#profile-avatar')
const profileName = document.querySelector('#profile-name')
const profileEmail = document.querySelector('#profile-email')
const welcomeTitle = document.querySelector('#welcome-title')

const menuToggle = document.querySelector('#menu-toggle')
const overlay = document.querySelector('#overlay')
const logoutBtn = document.querySelector('#logout-btn')

const authModalTitle = document.querySelector('#auth-modal-title')
const authName = document.querySelector('#auth-name')
const authEmail = document.querySelector('#auth-email')
const authPassword = document.querySelector('#auth-password')
const authConfirmPassword = document.querySelector('#auth-confirm-password')
const authAvatar = document.querySelector('#auth-avatar')
const authAvatarField = document.querySelector('#auth-avatar-field')
const authConfirmField = document.querySelector('#auth-confirm-field')
const authLoginRow = document.querySelector('#auth-login-row')
const authRememberMe = document.querySelector('#auth-remember-me')
const forgotPasswordBtn = document.querySelector('#forgot-password-btn')
const authToggleModeBtn = document.querySelector('#auth-toggle-mode')
const authSubmitBtn = document.querySelector('#auth-submit')

const forgotEmail = document.querySelector('#forgot-email')
const forgotNewPassword = document.querySelector('#forgot-new-password')
const forgotConfirmPassword = document.querySelector('#forgot-confirm-password')
const forgotBackBtn = document.querySelector('#forgot-back-btn')
const forgotSubmitBtn = document.querySelector('#forgot-submit-btn')
const detailEditBtn = document.querySelector('#detail-edit-btn')

const profileNameInput = document.querySelector('#profile-name-input')
const profileEmailInput = document.querySelector('#profile-email-input')
const profileAvatarInput = document.querySelector('#profile-avatar-input')
const profilePasswordInput = document.querySelector('#profile-password-input')
const profileSaveBtn = document.querySelector('#profile-save-btn')
const openProfileSettingsBtn = document.querySelector('#open-profile-settings')
const openProfileSettingsInlineBtn = document.querySelector('#open-profile-settings-inline')
const exportDataBtn = document.querySelector('#export-data-btn')
const importDataBtn = document.querySelector('#import-data-btn')
const importModeSelect = document.querySelector('#import-mode')
const importDataFile = document.querySelector('#import-data-file')

const viewPanels = {
  dashboard: document.querySelector('#view-dashboard'),
  vital: document.querySelector('#view-vital'),
  mytasks: document.querySelector('#view-mytasks'),
  categories: document.querySelector('#view-categories'),
  settings: document.querySelector('#view-settings'),
  help: document.querySelector('#view-help'),
}

let list = []
let currentFilter = 'all'
let currentSearch = ''
let currentView = 'dashboard'
let selectedDetailTaskId = null
let users = []
let currentUser = null
let authMode = 'signup'
let draggedTaskId = null

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getTaskStorageKey() {
  return currentUser ? `tasks_${currentUser.id}` : 'tasks_guest'
}

function defaultAvatar() {
  return 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=180&q=80'
}

function loadUsers() {
  const raw = JSON.parse(localStorage.getItem(USERS_KEY)) || []
  users = raw.filter(user => user && user.email && user.password)
}

function saveUsers() {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function setCurrentUser(user) {
  currentUser = user
  if (authRememberMe && authRememberMe.checked) {
    localStorage.setItem(CURRENT_USER_KEY, String(user.id))
    sessionStorage.removeItem(SESSION_USER_KEY)
  } else {
    sessionStorage.setItem(SESSION_USER_KEY, String(user.id))
    localStorage.removeItem(CURRENT_USER_KEY)
  }
  applyCurrentUserUI()
  loadList()
  renderTasks()
}

function restoreCurrentUser() {
  const id = sessionStorage.getItem(SESSION_USER_KEY) || localStorage.getItem(CURRENT_USER_KEY)
  if (!id) return
  const found = users.find(user => String(user.id) === String(id))
  if (found) {
    currentUser = found
  }
}

function applyCurrentUserUI() {
  if (!currentUser) return

  profileName.textContent = currentUser.name
  profileEmail.textContent = currentUser.email
  profileAvatar.src = currentUser.avatar || defaultAvatar()
  welcomeTitle.textContent = `Welcome back, ${currentUser.name.split(' ')[0]}`
}

function normalizeTask(task) {
  const text = (task.text || task.title || '').toString().trim()
  const priority = ['low', 'moderate', 'high'].includes(task.priority)
    ? task.priority
    : 'moderate'
  const category = (task.category || 'Work').toString().trim() || 'Work'
  const dueDate = task.dueDate || task.date || ''
  const id = Number(task.id) || Date.now() + Math.floor(Math.random() * 1000)

  return {
    id,
    text,
    completed: !!task.completed,
    priority,
    category,
    dueDate,
    createdAt: task.createdAt || new Date().toISOString(),
  }
}

function loadList() {
  if (!currentUser) {
    list = []
    return
  }

  const raw = JSON.parse(localStorage.getItem(getTaskStorageKey())) || []
  list = raw.map(normalizeTask).filter(item => item.text.length > 0)
  saveList()
}

function saveList() {
  if (!currentUser) return
  localStorage.setItem(getTaskStorageKey(), JSON.stringify(list))
}

function prettyDate(dateValue) {
  if (!dateValue) return 'No due date'
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) return 'No due date'
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function prettyDateTime(dateValue) {
  if (!dateValue) return '-'
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) return '-'
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function updateToday() {
  const now = new Date()
  const dayEl = document.querySelector('#today-day')
  const dateEl = document.querySelector('#today-date')
  if (dayEl) dayEl.textContent = now.toLocaleDateString(undefined, { weekday: 'long' })
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }
}

function getFilteredTasks() {
  return list.filter(task => {
    const byFilter =
      currentFilter === 'all'
        ? true
        : currentFilter === 'active'
          ? !task.completed
          : task.completed

    const keyword = currentSearch.trim().toLowerCase()
    const bySearch =
      keyword.length === 0 ||
      task.text.toLowerCase().includes(keyword) ||
      task.category.toLowerCase().includes(keyword)

    return byFilter && bySearch
  })
}

function updateMetrics() {
  const total = list.length
  const completed = list.filter(task => task.completed).length
  const inProgress = list.filter(task => !task.completed && !!task.dueDate).length
  const notStarted = list.filter(task => !task.completed && !task.dueDate).length
  const pct = value => (total === 0 ? 0 : Math.round((value / total) * 100))

  const completedPct = pct(completed)
  const inProgressPct = pct(inProgress)
  const notStartedPct = pct(notStarted)

  ringCompleted.style.setProperty('--value', completedPct)
  ringProgress.style.setProperty('--value', inProgressPct)
  ringNotStarted.style.setProperty('--value', notStartedPct)

  metricCompleted.textContent = `${completedPct}%`
  metricProgress.textContent = `${inProgressPct}%`
  metricNotStarted.textContent = `${notStartedPct}%`
}

function renderCompletedList() {
  const completed = [...list].filter(task => task.completed).reverse().slice(0, 4)
  completedList.innerHTML = ''

  if (completed.length === 0) {
    completedList.innerHTML = '<li>Nothing completed yet <span>0</span></li>'
    return
  }

  completed.forEach(task => {
    completedList.insertAdjacentHTML(
      'beforeend',
      `<li>${escapeHtml(task.text)} <span>${escapeHtml(task.category)}</span></li>`
    )
  })
}

function renderCategoryList() {
  const categoryMap = {}
  list.forEach(task => {
    categoryMap[task.category] = (categoryMap[task.category] || 0) + 1
  })

  const entries = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])
  categoryList.innerHTML = ''

  if (entries.length === 0) {
    categoryList.innerHTML = '<li>No categories yet <span>0</span></li>'
    return
  }

  entries.slice(0, 6).forEach(([name, count]) => {
    categoryList.insertAdjacentHTML(
      'beforeend',
      `<li>${escapeHtml(name)} <span>${count}</span></li>`
    )
  })
}

function renderVitalList() {
  if (!vitalList) return
  const now = new Date()
  const todayIso = new Date().toISOString().slice(0, 10)
  const urgent = list
    .filter(task => {
      if (task.completed) return false
      if (task.priority === 'high') return true
      if (!task.dueDate) return false
      const due = new Date(task.dueDate)
      if (Number.isNaN(due.getTime())) return false
      const dayDiff = Math.ceil((due - now) / (1000 * 60 * 60 * 24))
      return dayDiff <= 2
    })
    .reverse()

  vitalList.innerHTML = ''
  if (urgent.length === 0) {
    vitalList.innerHTML = '<li class="empty-box">No urgent tasks right now.</li>'
    return
  }

  urgent.forEach(task => {
    vitalList.insertAdjacentHTML(
      'beforeend',
      `<li class="task-item clickable-row" data-id="${task.id}">
        <div class="task-meta">
          <h4>${escapeHtml(task.text)}</h4>
          <div class="task-tags">
            <span class="tag priority-${escapeHtml(task.priority)}">${escapeHtml(task.priority)}</span>
            <span class="tag">${escapeHtml(task.category)}</span>
            <span class="tag">${escapeHtml(prettyDate(task.dueDate))}</span>
          </div>
        </div>
      </li>`
    )
  })

  vitalList.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('click', () => openTaskDetailModal(+item.dataset.id))
  })

  const overdue = list.filter(task => {
    if (task.completed || !task.dueDate) return false
    return task.dueDate < todayIso
  }).length
  const dueToday = list.filter(task => !task.completed && task.dueDate === todayIso).length

  if (vitalCount) vitalCount.textContent = String(urgent.length)
  if (overdueCount) overdueCount.textContent = String(overdue)
  if (todayCount) todayCount.textContent = String(dueToday)
}

function renderMyTasksList() {
  if (!myTasksList) return
  myTasksList.innerHTML = ''

  if (list.length === 0) {
    myTasksList.innerHTML = '<li class="empty-box">No tasks created yet.</li>'
    return
  }

  list.forEach(task => {
    myTasksList.insertAdjacentHTML(
      'beforeend',
      `<li class="task-item clickable-row" data-id="${task.id}">
        <button class="drag-handle" data-id="${task.id}" draggable="true" aria-label="Drag to reorder">
          <i class="bars icon"></i>
        </button>
        <div class="task-meta">
          <h4 class="${task.completed ? 'completed' : ''}">${escapeHtml(task.text)}</h4>
          <div class="task-tags">
            <span class="tag priority-${escapeHtml(task.priority)}">${escapeHtml(task.priority)}</span>
            <span class="tag">${task.completed ? 'Completed' : 'Open'}</span>
            <span class="tag">${escapeHtml(task.category)}</span>
          </div>
        </div>
      </li>`
    )
  })

  myTasksList.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('click', event => {
      if (event.target.closest('.drag-handle')) return
      openTaskDetailModal(+item.dataset.id)
    })
  })

  myTasksList.querySelectorAll('.drag-handle[draggable=true]').forEach(item => {
    item.addEventListener('dragstart', event => {
      draggedTaskId = +item.dataset.id
      item.closest('.task-item')?.classList.add('dragging')
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move'
      }
    })

    item.addEventListener('dragend', () => {
      item.closest('.task-item')?.classList.remove('dragging')
      myTasksList.querySelectorAll('.task-item').forEach(node => node.classList.remove('drop-target'))
    })
    item.addEventListener('click', event => event.stopPropagation())
  })

  myTasksList.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('dragover', event => {
      event.preventDefault()
      if (+item.dataset.id !== draggedTaskId) {
        item.classList.add('drop-target')
      }
    })

    item.addEventListener('dragleave', () => {
      item.classList.remove('drop-target')
    })

    item.addEventListener('drop', event => {
      event.preventDefault()
      item.classList.remove('drop-target')
      const targetId = +item.dataset.id
      if (!draggedTaskId || draggedTaskId === targetId) return

      const sourceIndex = list.findIndex(task => task.id === draggedTaskId)
      const targetIndex = list.findIndex(task => task.id === targetId)
      if (sourceIndex === -1 || targetIndex === -1) return

      const [moved] = list.splice(sourceIndex, 1)
      list.splice(targetIndex, 0, moved)
      saveList()
      renderTasks()
      showNotification('success', 'Task order updated')
    })
  })

  const total = list.length
  const done = list.filter(task => task.completed).length
  const open = total - done
  if (myTotalCount) myTotalCount.textContent = String(total)
  if (myOpenCount) myOpenCount.textContent = String(open)
  if (myDoneCount) myDoneCount.textContent = String(done)
}

function renderCategoryBoard() {
  if (!categoryBoardList) return
  const map = {}
  list.forEach(task => {
    if (!map[task.category]) {
      map[task.category] = { total: 0, done: 0 }
    }
    map[task.category].total += 1
    if (task.completed) map[task.category].done += 1
  })

  categoryBoardList.innerHTML = ''
  const entries = Object.entries(map)
  if (entries.length === 0) {
    categoryBoardList.innerHTML = '<li>No categories yet <span>0</span></li>'
    return
  }

  entries.forEach(([name, info]) => {
    categoryBoardList.insertAdjacentHTML(
      'beforeend',
      `<li data-category="${escapeHtml(name)}">${escapeHtml(name)} <span>${info.done}/${info.total} done</span></li>`
    )
  })

  categoryBoardList.querySelectorAll('li[data-category]').forEach(item => {
    item.addEventListener('click', () => {
      currentSearch = item.dataset.category || ''
      if (searchInput) searchInput.value = currentSearch
      currentFilter = 'all'
      document.querySelectorAll('.filter-buttons button').forEach(button => {
        button.classList.toggle('active', button.dataset.filter === 'all')
      })
      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === 'dashboard')
      })
      switchView('dashboard')
      renderTasks()
      showNotification('success', `Filtered by category: ${item.dataset.category}`)
    })
  })
}

function switchView(view) {
  currentView = viewPanels[view] ? view : 'dashboard'
  Object.keys(viewPanels).forEach(key => {
    if (!viewPanels[key]) return
    viewPanels[key].classList.toggle('active', key === currentView)
  })
}

function attachTaskHandlers() {
  document.querySelectorAll('#tasks-list input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', e => completeTask(+e.target.dataset.id))
  })

  document.querySelectorAll('#tasks-list i.edit').forEach(icon => {
    icon.addEventListener('click', e => showEditModal(+e.target.dataset.id))
  })

  document.querySelectorAll('#tasks-list i.trash').forEach(icon => {
    icon.addEventListener('click', e => showRemoveModal(+e.target.dataset.id))
  })
}

function renderTasks() {
  if (!currentUser) {
    tasksList.innerHTML = '<li class="empty-box">Please login or create an account.</li>'
    completedList.innerHTML = '<li>Login required <span>-</span></li>'
    categoryList.innerHTML = '<li>Login required <span>-</span></li>'
    updateMetrics()
    clearAllTasksBtn.disabled = true
    clearCompletedBtn.disabled = true
    if (taskCount) taskCount.textContent = '0 tasks'
    return
  }

  tasksList.innerHTML = ''
  const filtered = getFilteredTasks()

  if (taskCount) {
    taskCount.textContent = `${filtered.length} task${filtered.length !== 1 ? 's' : ''}`
  }

  if (filtered.length === 0) {
    tasksList.innerHTML =
      '<li class="empty-box">No tasks match this filter. Add or search a different task.</li>'
  } else {
    ;[...filtered].reverse().forEach(task => {
      tasksList.insertAdjacentHTML(
        'beforeend',
        `<li class="task-item" data-id="${task.id}">
          <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}" aria-label="Toggle completion" />
          <div class="task-meta">
            <h4 class="${task.completed ? 'completed' : ''}">${escapeHtml(task.text)}</h4>
            <div class="task-tags">
              <span class="tag priority-${escapeHtml(task.priority)}">${escapeHtml(task.priority)}</span>
              <span class="tag">${escapeHtml(task.category)}</span>
              <span class="tag">${escapeHtml(prettyDate(task.dueDate))}</span>
            </div>
          </div>
          <div class="task-actions">
            <i data-id="${task.id}" title="Edit" class="edit outline icon"></i>
            <i data-id="${task.id}" title="Delete" class="trash alternate outline icon"></i>
          </div>
        </li>`
      )
    })
  }

  clearAllTasksBtn.disabled = list.length === 0
  clearCompletedBtn.disabled = !list.some(task => task.completed)

  attachTaskHandlers()
  renderCompletedList()
  renderCategoryList()
  renderVitalList()
  renderMyTasksList()
  renderCategoryBoard()
  updateMetrics()
}

function addTask(event) {
  event.preventDefault()
  if (!currentUser) return

  const text = addTaskInput.value.trim()
  if (text.length === 0) {
    addTaskInput.value = ''
    return
  }

  list.push({
    id: Date.now(),
    text,
    completed: false,
    priority: addTaskPriority.value,
    dueDate: addTaskDate.value,
    category: addTaskCategory.value,
    createdAt: new Date().toISOString(),
  })

  saveList()
  addTaskInput.value = ''
  addTaskDate.value = ''
  showNotification('success', 'Task was successfully added')
  renderTasks()
}

function completeTask(id) {
  const task = list.find(item => item.id === id)
  if (!task) return

  task.completed = !task.completed
  saveList()
  renderTasks()
}

function removeTask(id) {
  list = list.filter(item => item.id !== id)
  saveList()
  showNotification('error', 'Task was successfully deleted')
  renderTasks()
  $('#remove-modal.modal').modal('hide')
}

function editTask(id) {
  const task = list.find(item => item.id === id)
  const textInput = document.querySelector('#task-text')
  const priorityInput = document.querySelector('#task-priority')
  const dateInput = document.querySelector('#task-date')
  const categoryInput = document.querySelector('#task-category')

  if (!task || textInput.value.trim().length === 0) return

  task.text = textInput.value.trim()
  task.priority = priorityInput.value
  task.dueDate = dateInput.value
  task.category = categoryInput.value

  saveList()
  showNotification('success', 'Task was successfully updated')
  renderTasks()
  $('#edit-modal.modal').modal('hide')
}

function clearAllTasks() {
  if (list.length === 0) {
    showNotification('error', 'There is no task to remove')
    return
  }

  list = []
  saveList()
  renderTasks()
  $('#clear-all-tasks-modal.modal').modal('hide')
  showNotification('success', 'All tasks were cleared')
}

function clearCompleteTasks() {
  const before = list.length
  list = list.filter(task => !task.completed)

  if (before === list.length) {
    showNotification('error', 'There is no completed task to remove')
    return
  }

  saveList()
  renderTasks()
  $('#clear-completed-tasks-modal.modal').modal('hide')
  showNotification('success', 'Completed tasks were cleared')
}

function showEditModal(id) {
  const task = list.find(item => item.id === id)
  if (!task) return

  document.querySelector('#task-id').value = id
  document.querySelector('#task-text').value = task.text
  document.querySelector('#task-priority').value = task.priority
  document.querySelector('#task-date').value = task.dueDate
  document.querySelector('#task-category').value = task.category

  const updateBtn = document.querySelector('#update-button')
  const clone = updateBtn.cloneNode(true)
  updateBtn.parentNode.replaceChild(clone, updateBtn)
  clone.addEventListener('click', () => editTask(id))

  $('#edit-modal.modal').modal('show')
}

function openTaskDetailModal(id) {
  const task = list.find(item => item.id === id)
  if (!task) return

  selectedDetailTaskId = task.id
  document.querySelector('#detail-title').textContent = task.text
  document.querySelector('#detail-status').textContent = task.completed ? 'Completed' : 'Open'
  document.querySelector('#detail-priority').textContent = task.priority
  document.querySelector('#detail-category').textContent = task.category
  document.querySelector('#detail-date').textContent = prettyDate(task.dueDate)
  document.querySelector('#detail-created').textContent = prettyDateTime(task.createdAt)

  $('#task-detail-modal.modal').modal('show')
}

function showRemoveModal(id) {
  const removeBtn = document.querySelector('#remove-task-button')
  const clone = removeBtn.cloneNode(true)
  removeBtn.parentNode.replaceChild(clone, removeBtn)
  clone.addEventListener('click', () => removeTask(id))

  $('#remove-modal.modal').modal('show')
}

function showClearAllTasksModal() {
  if (list.length === 0) {
    showNotification('error', 'There is no task to remove')
    return
  }
  $('#clear-all-tasks-modal.modal').modal('show')
}

function showClearCompletedTasksModal() {
  if (!list.some(task => task.completed)) {
    showNotification('error', 'There is no completed task to remove')
    return
  }
  $('#clear-completed-tasks-modal.modal').modal('show')
}

function showNotification(type, text) {
  new Noty({
    type,
    text: `<i class="check icon"></i> ${text}`,
    layout: 'bottomRight',
    timeout: 2200,
    progressBar: true,
    closeWith: ['click'],
    theme: 'metroui',
  }).show()
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-buttons button')
  filterButtons.forEach(button => {
    button.addEventListener('click', e => {
      currentFilter = e.currentTarget.dataset.filter
      filterButtons.forEach(item => item.classList.remove('active'))
      e.currentTarget.classList.add('active')
      renderTasks()
    })
  })
}

function setupSearch() {
  searchInput.addEventListener('input', e => {
    currentSearch = e.target.value
    renderTasks()
  })
}

function closeSidebar() {
  document.body.classList.remove('sidebar-open')
}

function openProfileModal() {
  if (!currentUser) return
  profileNameInput.value = currentUser.name
  profileEmailInput.value = currentUser.email
  profileAvatarInput.value = currentUser.avatar || ''
  profilePasswordInput.value = ''
  $('#profile-modal.modal').modal('show')
}

function saveProfile() {
  if (!currentUser) return

  const name = profileNameInput.value.trim()
  const email = profileEmailInput.value.trim().toLowerCase()
  const avatar = profileAvatarInput.value.trim()
  const password = profilePasswordInput.value

  if (name.length < 2 || email.length < 5) {
    showNotification('error', 'Please enter valid name and email')
    return
  }

  const emailUsed = users.find(
    user => user.id !== currentUser.id && user.email.toLowerCase() === email
  )
  if (emailUsed) {
    showNotification('error', 'Email is already used by another account')
    return
  }

  const index = users.findIndex(user => user.id === currentUser.id)
  if (index === -1) return

  users[index].name = name
  users[index].email = email
  users[index].avatar = avatar || defaultAvatar()
  if (password.trim().length > 0) {
    users[index].password = password
  }

  saveUsers()
  currentUser = users[index]
  applyCurrentUserUI()
  showNotification('success', 'Profile updated successfully')
  $('#profile-modal.modal').modal('hide')
}

function switchAuthMode(mode) {
  authMode = mode

  const signup = authMode === 'signup'
  authModalTitle.textContent = signup ? 'Create Account' : 'Login'
  authSubmitBtn.innerHTML = `${signup ? 'Create Account' : 'Login'}<i class="checkmark icon"></i>`
  authToggleModeBtn.textContent = signup
    ? 'Already have an account? Login'
    : "Don't have an account? Create one"
  authAvatarField.style.display = signup ? 'block' : 'none'
  authConfirmField.style.display = signup ? 'block' : 'none'
  authLoginRow.style.display = signup ? 'none' : 'flex'
  authName.closest('.field').style.display = signup ? 'block' : 'none'
}

function clearAuthFields() {
  authName.value = ''
  authEmail.value = ''
  authPassword.value = ''
  authConfirmPassword.value = ''
  authAvatar.value = ''
  authRememberMe.checked = true
}

function clearForgotFields() {
  forgotEmail.value = ''
  forgotNewPassword.value = ''
  forgotConfirmPassword.value = ''
}

function openAuthModal() {
  switchAuthMode(users.length > 0 ? 'login' : 'signup')
  clearAuthFields()

  $('#auth-modal.modal')
    .modal({
      closable: false,
      autofocus: false,
    })
    .modal('show')
}

function submitAuth() {
  const email = authEmail.value.trim().toLowerCase()
  const password = authPassword.value

  if (email.length < 5 || password.length < 4) {
    showNotification('error', 'Enter a valid email and password')
    return
  }

  if (authMode === 'signup') {
    const name = authName.value.trim()
    const confirmPassword = authConfirmPassword.value
    if (name.length < 2) {
      showNotification('error', 'Enter your full name')
      return
    }

    if (password !== confirmPassword) {
      showNotification('error', 'Passwords do not match')
      return
    }

    const exists = users.some(user => user.email.toLowerCase() === email)
    if (exists) {
      showNotification('error', 'Account already exists. Please login.')
      switchAuthMode('login')
      return
    }

    const user = {
      id: Date.now(),
      name,
      email,
      password,
      avatar: authAvatar.value.trim() || defaultAvatar(),
    }

    users.push(user)
    saveUsers()
    setCurrentUser(user)
    showNotification('success', 'Account created successfully')
    $('#auth-modal.modal').modal('hide')
    return
  }

  const user = users.find(
    item => item.email.toLowerCase() === email && item.password === password
  )
  if (!user) {
    showNotification('error', 'Invalid credentials')
    return
  }

  setCurrentUser(user)
  showNotification('success', `Welcome back, ${user.name.split(' ')[0]}`)
  $('#auth-modal.modal').modal('hide')
}

function logout() {
  localStorage.removeItem(CURRENT_USER_KEY)
  sessionStorage.removeItem(SESSION_USER_KEY)
  currentUser = null
  list = []
  renderTasks()
  openAuthModal()
}

function openForgotPasswordModal() {
  clearForgotFields()
  $('#auth-modal.modal').modal('hide')
  $('#forgot-password-modal.modal').modal('show')
}

function resetPasswordFromModal() {
  const email = forgotEmail.value.trim().toLowerCase()
  const nextPassword = forgotNewPassword.value
  const confirmPassword = forgotConfirmPassword.value

  if (email.length < 5 || nextPassword.trim().length < 4) {
    showNotification('error', 'Enter valid email and password')
    return
  }

  if (nextPassword !== confirmPassword) {
    showNotification('error', 'Passwords do not match')
    return
  }

  const target = users.find(user => user.email.toLowerCase() === email)
  if (!target) {
    showNotification('error', 'No account found for this email')
    return
  }

  target.password = nextPassword.trim()
  saveUsers()
  showNotification('success', 'Password updated. Please login.')
  $('#forgot-password-modal.modal').modal('hide')
  switchAuthMode('login')
  authEmail.value = email
  authPassword.value = ''
  authConfirmPassword.value = ''
  $('#auth-modal.modal').modal('show')
}

function setupPasswordToggles() {
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target
      const input = document.getElementById(targetId)
      if (!input) return

      const isHidden = input.type === 'password'
      input.type = isHidden ? 'text' : 'password'
      const icon = button.querySelector('i')
      if (icon) {
        icon.className = isHidden ? 'eye outline icon' : 'eye slash outline icon'
      }
    })
  })
}

function setupSidebar() {
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open')
  })

  overlay.addEventListener('click', closeSidebar)

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeSidebar()
    }
  })

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'))
      item.classList.add('active')
      switchView(item.dataset.view || 'dashboard')

      if (item.dataset.view === 'settings') {
        openProfileModal()
      }

      closeSidebar()
    })
  })

  logoutBtn.addEventListener('click', logout)
}

function setupAuthHandlers() {
  authToggleModeBtn.addEventListener('click', () => {
    switchAuthMode(authMode === 'signup' ? 'login' : 'signup')
  })
  authSubmitBtn.addEventListener('click', submitAuth)
  forgotPasswordBtn.addEventListener('click', openForgotPasswordModal)
  forgotBackBtn.addEventListener('click', () => {
    $('#forgot-password-modal.modal').modal('hide')
    switchAuthMode('login')
    $('#auth-modal.modal').modal('show')
  })
  forgotSubmitBtn.addEventListener('click', resetPasswordFromModal)
  profileSaveBtn.addEventListener('click', saveProfile)
  openProfileSettingsBtn.addEventListener('click', openProfileModal)
  if (openProfileSettingsInlineBtn) {
    openProfileSettingsInlineBtn.addEventListener('click', openProfileModal)
  }
}

function setupDetailHandlers() {
  detailEditBtn.addEventListener('click', () => {
    if (!selectedDetailTaskId) return
    $('#task-detail-modal.modal').modal('hide')
    showEditModal(selectedDetailTaskId)
  })
}

function exportUserData() {
  if (!currentUser) {
    showNotification('error', 'Please login first')
    return
  }

  const payload = {
    exportedAt: new Date().toISOString(),
    user: {
      name: currentUser.name,
      email: currentUser.email,
      avatar: currentUser.avatar || '',
    },
    tasks: list,
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const fileName = `${currentUser.name.replace(/\s+/g, '_').toLowerCase()}_todo_backup.json`

  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
  showNotification('success', 'Data exported successfully')
}

function ensureUniqueTaskIds(tasks, existingIds = new Set()) {
  const used = new Set(existingIds)
  return tasks.map(task => {
    const item = { ...task }
    while (used.has(item.id)) {
      item.id = Date.now() + Math.floor(Math.random() * 100000)
    }
    used.add(item.id)
    return item
  })
}

function importUserData(event) {
  if (!currentUser) {
    showNotification('error', 'Please login first')
    return
  }

  const file = event.target.files && event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = loadEvent => {
    try {
      const text = String(loadEvent.target.result || '')
      const parsed = JSON.parse(text)
      if (!parsed || !Array.isArray(parsed.tasks)) {
        showNotification('error', 'Invalid backup file format')
        return
      }

      const importedTasks = parsed.tasks.map(normalizeTask).filter(item => item.text.length > 0)
      const mode = importModeSelect ? importModeSelect.value : 'replace'

      if (mode === 'append') {
        const merged = [...list, ...importedTasks]
        list = ensureUniqueTaskIds(merged)
      } else {
        list = ensureUniqueTaskIds(importedTasks)
      }

      saveList()
      renderTasks()
      showNotification('success', `Data imported successfully (${mode} mode)`)
    } catch (_error) {
      showNotification('error', 'Could not read backup file')
    } finally {
      importDataFile.value = ''
    }
  }
  reader.readAsText(file)
}

function setupDataTools() {
  if (exportDataBtn) {
    exportDataBtn.addEventListener('click', exportUserData)
  }
  if (importDataBtn) {
    importDataBtn.addEventListener('click', () => importDataFile.click())
  }
  if (importDataFile) {
    importDataFile.addEventListener('change', importUserData)
  }
}

addTaskForm.addEventListener('submit', addTask)
window.addEventListener('load', () => addTaskInput.focus())

loadUsers()
restoreCurrentUser()
updateToday()
setupFilters()
setupSearch()
setupSidebar()
setupAuthHandlers()
setupPasswordToggles()
setupDetailHandlers()
setupDataTools()

if (currentUser) {
  applyCurrentUserUI()
  loadList()
  switchView('dashboard')
  renderTasks()
} else {
  switchView('dashboard')
  renderTasks()
  openAuthModal()
}
