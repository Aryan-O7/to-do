const USERS_KEY = 'todo_users'
const CURRENT_USER_KEY = 'todo_current_user_id'
const SESSION_USER_KEY = 'todo_session_user_id'

const tasksList = document.querySelector('#tasks-list')
const completedList = document.querySelector('#completed-list')
const categoryList = document.querySelector('#category-list')
const vitalList = document.querySelector('#vital-list')
const myTasksList = document.querySelector('#mytasks-list')
const myTaskDetailTitle = document.querySelector('#mytask-detail-title')
const myTaskDetailPriority = document.querySelector('#mytask-detail-priority')
const myTaskDetailStatus = document.querySelector('#mytask-detail-status')
const myTaskDetailCreated = document.querySelector('#mytask-detail-created')
const myTaskDetailImage = document.querySelector('#mytask-detail-image')
const myTaskDetailTasktitle = document.querySelector('#mytask-detail-tasktitle')
const myTaskDetailObjective = document.querySelector('#mytask-detail-objective')
const myTaskDetailDescription = document.querySelector('#mytask-detail-description')
const myTaskDetailNotes = document.querySelector('#mytask-detail-notes')
const myTaskDetailDeadline = document.querySelector('#mytask-detail-deadline')
const myTaskDeleteBtn = document.querySelector('#mytask-delete-btn')
const myTaskEditBtn = document.querySelector('#mytask-edit-btn')
const myTaskCompleteBtn = document.querySelector('#mytask-complete-btn')
const vitalDetailTitle = document.querySelector('#vital-detail-title')
const vitalDetailPriority = document.querySelector('#vital-detail-priority')
const vitalDetailStatus = document.querySelector('#vital-detail-status')
const vitalDetailCreated = document.querySelector('#vital-detail-created')
const vitalDetailImage = document.querySelector('#vital-detail-image')
const vitalDetailTasktitle = document.querySelector('#vital-detail-tasktitle')
const vitalDetailDescription = document.querySelector('#vital-detail-description')
const vitalDeleteBtn = document.querySelector('#vital-delete-btn')
const vitalEditBtn = document.querySelector('#vital-edit-btn')
const vitalCompleteBtn = document.querySelector('#vital-complete-btn')
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
const openAddTaskModalBtn = document.querySelector('#open-add-task-modal')
const addTaskModalSubmitBtn = document.querySelector('#add-task-modal-submit')
const modalTaskTitle = document.querySelector('#modal-task-title')
const modalTaskDate = document.querySelector('#modal-task-date')
const modalTaskDescription = document.querySelector('#modal-task-description')
const modalTaskImage = document.querySelector('#modal-task-image')
const modalTaskObjective = document.querySelector('#modal-task-objective')
const modalTaskNotes = document.querySelector('#modal-task-notes')
const modalTaskDeadlineDate = document.querySelector('#modal-task-deadline-date')
const modalTaskDeadlineTime = document.querySelector('#modal-task-deadline-time')
const uploadFileName = document.querySelector('#upload-file-name')

const openInviteModalBtn = document.querySelector('#open-invite-modal')
const sendInviteBtn = document.querySelector('#send-invite-btn')
const inviteEmailInput = document.querySelector('#invite-email')
const inviteMembersList = document.querySelector('#invite-members-list')
const projectLinkInput = document.querySelector('#project-link')
const copyProjectLinkBtn = document.querySelector('#copy-project-link-btn')
const openNotificationsBtn = document.querySelector('#open-notifications-btn')
const openCalendarBtn = document.querySelector('#open-calendar-btn')
const notificationsBadge = document.querySelector('#notifications-badge')
const notificationsList = document.querySelector('#notifications-list')
const notificationsTitle = document.querySelector('#notifications-title')
const markAllReadBtn = document.querySelector('#mark-all-read-btn')
const calendarMonthLabel = document.querySelector('#calendar-month-label')
const calendarGrid = document.querySelector('#calendar-grid')
const calendarSelectedLabel = document.querySelector('#calendar-selected-label')
const calendarSelectedSubtitle = document.querySelector('#calendar-selected-subtitle')
const calendarDayTaskCount = document.querySelector('#calendar-day-task-count')
const calendarUpcomingList = document.querySelector('#calendar-upcoming-list')
const calendarPrevBtn = document.querySelector('#calendar-prev-btn')
const calendarNextBtn = document.querySelector('#calendar-next-btn')

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
const detailRemoveBtn = document.querySelector('#detail-remove-btn')
const detailAlertBtn = document.querySelector('#detail-alert-btn')
const detailCompleteBtn = document.querySelector('#detail-complete-btn')
const detailPageBackBtn = document.querySelector('#detail-page-back-btn')

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
  taskdetail: document.querySelector('#view-taskdetail'),
}

let list = []
let currentFilter = 'all'
let currentSearch = ''
let currentView = 'dashboard'
let lastViewBeforeDetail = 'dashboard'
let selectedDetailTaskId = null
let selectedMyTaskId = null
let selectedVitalTaskId = null
let users = []
let currentUser = null
let authMode = 'signup'
let draggedTaskId = null
let inviteMembers = []
let notifications = []
let calendarState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  selectedDate: new Date(),
}
let activeHeaderPopover = null
let activeHeaderAnchor = null

const INVITE_PERMISSIONS = {
  view: 'Can view',
  edit: 'Can edit',
}

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

function getInviteStorageKey() {
  return currentUser ? `invites_${currentUser.id}` : 'invites_guest'
}

function defaultAvatar() {
  return 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=180&q=80'
}

function getNotificationStorageKey() {
  return currentUser ? `notifications_${currentUser.id}` : 'notifications_guest'
}

function normalizeNotification(item) {
  return {
    id: item.id || `n-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    title: (item.title || 'Workspace update').toString().trim(),
    message: (item.message || '').toString().trim(),
    type: item.type === 'error' ? 'error' : 'info',
    read: !!item.read,
    createdAt: item.createdAt || new Date().toISOString(),
    avatar: (item.avatar || '').toString().trim(),
  }
}

function saveNotifications() {
  if (!currentUser) return
  localStorage.setItem(getNotificationStorageKey(), JSON.stringify(notifications))
}

function updateNotificationsBadge() {
  if (!notificationsBadge) return
  const unread = notifications.filter(item => !item.read).length
  notificationsBadge.textContent = String(unread)
  notificationsBadge.classList.toggle('visible', unread > 0)
}

function seedNotificationsFromTasks() {
  if (!currentUser || notifications.length > 0) return

  const seeded = list
    .filter(task => task.dueDate || task.priority === 'high')
    .slice(0, 4)
    .map(task =>
      normalizeNotification({
        title: task.completed ? 'Completed task' : 'Task needs attention',
        message: `${task.text}${task.dueDate ? ` · due ${prettyDate(task.dueDate)}` : ''}`,
        type: task.completed ? 'info' : 'error',
        read: false,
        createdAt: task.createdAt || new Date().toISOString(),
      })
    )

  if (seeded.length === 0) {
    seeded.push(
      normalizeNotification({
        title: 'Workspace ready',
        message: 'Your dashboard is connected and ready for updates.',
        type: 'info',
        read: false,
      })
    )
  }

  notifications = seeded.slice(0, 10)
  saveNotifications()
}

function loadNotifications() {
  if (!currentUser) {
    notifications = []
    updateNotificationsBadge()
    return
  }

  const raw = JSON.parse(localStorage.getItem(getNotificationStorageKey())) || []
  notifications = Array.isArray(raw) ? raw.map(normalizeNotification) : []
  notifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  seedNotificationsFromTasks()
  updateNotificationsBadge()
}

function pushNotificationFeed(title, message, options = {}) {
  if (!currentUser) return

  notifications.unshift(
    normalizeNotification({
      title,
      message,
      type: options.type || 'info',
      read: false,
      avatar: options.avatar || '',
      createdAt: options.createdAt || new Date().toISOString(),
    })
  )

  notifications = notifications.slice(0, 30)
  saveNotifications()
  updateNotificationsBadge()
}

function markAllNotificationsRead() {
  notifications = notifications.map(item => ({ ...item, read: true }))
  saveNotifications()
  updateNotificationsBadge()
  renderNotificationsPanel()
}

function formatRelativeTime(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'just now'

  const diffMs = Date.now() - date.getTime()
  const diffMinutes = Math.max(1, Math.floor(diffMs / 60000))
  if (diffMinutes < 60) return `${diffMinutes}m ago`

  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return `${diffHours}h ago`

  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d ago`
}

function getTaskDateKey(task) {
  if (!task.dueDate) return ''
  const date = new Date(task.dueDate)
  if (Number.isNaN(date.getTime())) return ''
  return date.toISOString().slice(0, 10)
}

function getTasksForCalendarDate(date) {
  const key = date.toISOString().slice(0, 10)
  return list.filter(task => getTaskDateKey(task) === key)
}

function renderNotificationsPanel() {
  if (!notificationsList) return

  const total = notifications.length
  const unread = notifications.filter(item => !item.read).length
  if (notificationsTitle) {
    notificationsTitle.textContent = total === 0 ? 'No activity yet' : `${unread} unread updates`
  }

  notificationsList.innerHTML = ''

  if (total === 0) {
    notificationsList.innerHTML = `
      <li class="notifications-empty">
        <strong>No notifications yet</strong>
        <span>Activity from invites, tasks, and profile changes will appear here.</span>
      </li>
    `
    return
  }

  notifications.forEach(item => {
    const avatar = item.avatar
      ? `<img class="notification-avatar" src="${escapeHtml(item.avatar)}" alt="notification avatar" />`
      : `<div class="notification-avatar fallback">${escapeHtml(getInitials(currentUser?.name || 'NA'))}</div>`

    notificationsList.insertAdjacentHTML(
      'beforeend',
      `<li class="notification-item ${item.read ? 'read' : 'unread'}">
        ${avatar}
        <div class="notification-copy">
          <div class="notification-topline">
            <strong>${escapeHtml(item.title)}</strong>
            <span>${formatRelativeTime(item.createdAt)}</span>
          </div>
          <p>${escapeHtml(item.message)}</p>
        </div>
      </li>`
    )
  })
}

function renderCalendarPanel() {
  if (!calendarGrid) return

  const { year, month, selectedDate } = calendarState
  const monthName = new Date(year, month, 1).toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  })

  if (calendarMonthLabel) calendarMonthLabel.textContent = monthName

  const firstDay = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startOffset = firstDay.getDay()
  const selectedKey = selectedDate.toISOString().slice(0, 10)

  calendarGrid.innerHTML = ''

  for (let index = 0; index < startOffset; index += 1) {
    calendarGrid.insertAdjacentHTML('beforeend', '<button type="button" class="calendar-day empty" tabindex="-1"></button>')
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const currentDate = new Date(year, month, day)
    const currentKey = currentDate.toISOString().slice(0, 10)
    const tasksForDay = getTasksForCalendarDate(currentDate)
    const isToday = currentDate.toDateString() === new Date().toDateString()
    const isSelected = currentKey === selectedKey

    calendarGrid.insertAdjacentHTML(
      'beforeend',
      `<button
        type="button"
        class="calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${tasksForDay.length > 0 ? 'has-task' : ''}"
        data-date="${currentKey}"
      >
        <span class="calendar-day-number">${day}</span>
        ${tasksForDay.length > 0 ? `<span class="calendar-day-count">${tasksForDay.length}</span>` : ''}
      </button>`
    )
  }

  if (calendarSelectedLabel) {
    calendarSelectedLabel.textContent = selectedDate.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  }

  const selectedTasks = getTasksForCalendarDate(selectedDate)
  if (calendarSelectedSubtitle) {
    calendarSelectedSubtitle.textContent = selectedTasks.length
      ? `${selectedTasks.length} task${selectedTasks.length > 1 ? 's' : ''} due on this day`
      : 'No tasks scheduled for this day'
  }
  if (calendarDayTaskCount) {
    calendarDayTaskCount.textContent = String(selectedTasks.length)
  }

  if (calendarUpcomingList) {
    calendarUpcomingList.innerHTML = ''
    if (selectedTasks.length === 0) {
      calendarUpcomingList.innerHTML = '<li class="calendar-empty">Nothing planned for the selected day.</li>'
    } else {
      selectedTasks.slice(0, 5).forEach(task => {
        calendarUpcomingList.insertAdjacentHTML(
          'beforeend',
          `<li>
            <strong>${escapeHtml(task.text)}</strong>
            <span>${escapeHtml(task.priority)}</span>
          </li>`
        )
      })
    }
  }

  calendarGrid.querySelectorAll('.calendar-day[data-date]').forEach(button => {
    button.addEventListener('click', () => {
      const dateValue = button.dataset.date
      if (!dateValue) return
      calendarState.selectedDate = new Date(`${dateValue}T12:00:00`)
      calendarState.year = calendarState.selectedDate.getFullYear()
      calendarState.month = calendarState.selectedDate.getMonth()
      renderCalendarPanel()
    })
  })
}

function closeHeaderPopover() {
  if (!activeHeaderPopover) return

  activeHeaderPopover.classList.remove('open')
  activeHeaderPopover.style.display = 'none'
  activeHeaderPopover.style.left = ''
  activeHeaderPopover.style.top = ''
  activeHeaderPopover.style.width = ''
  activeHeaderPopover.style.visibility = ''
  activeHeaderPopover = null
  activeHeaderAnchor = null
  document.body.classList.remove('header-popover-open')
}

function positionHeaderPopover(panel, anchor, preferredWidth) {
  const margin = 12
  const anchorRect = anchor.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const maxWidth = Math.max(280, viewportWidth - margin * 2)
  const width = Math.min(preferredWidth, maxWidth)

  panel.style.width = `${width}px`
  panel.style.display = 'block'

  const panelRect = panel.getBoundingClientRect()
  let left = anchorRect.right - panelRect.width
  left = Math.max(margin, Math.min(left, viewportWidth - panelRect.width - margin))

  let top = anchorRect.bottom + 12
  if (top + panelRect.height > viewportHeight - margin) {
    top = Math.max(margin, anchorRect.top - panelRect.height - 12)
  }

  panel.style.left = `${left}px`
  panel.style.top = `${top}px`
  panel.style.visibility = 'visible'
}

function openHeaderPopover(panelId, anchor, preferredWidth) {
  const panel = document.getElementById(panelId)
  if (!panel) return

  if (activeHeaderPopover === panel && panel.classList.contains('open')) {
    closeHeaderPopover()
    return
  }

  closeHeaderPopover()

  panel.classList.add('open')
  panel.style.display = 'block'
  panel.style.visibility = 'hidden'
  panel.style.position = 'fixed'
  panel.style.zIndex = '80'

  requestAnimationFrame(() => {
    positionHeaderPopover(panel, anchor, preferredWidth)
    activeHeaderPopover = panel
    activeHeaderAnchor = anchor
    document.body.classList.add('header-popover-open')
  })
}

function openNotificationsPanel() {
  if (!currentUser) {
    showNotification('error', 'Please login first')
    return
  }

  renderNotificationsPanel()
  markAllNotificationsRead()
  openHeaderPopover('notifications-modal', openNotificationsBtn, 390)
}

function openCalendarPanel() {
  if (!currentUser) {
    showNotification('error', 'Please login first')
    return
  }

  const now = new Date()
  calendarState = {
    year: now.getFullYear(),
    month: now.getMonth(),
    selectedDate: now,
  }
  renderCalendarPanel()
  openHeaderPopover('calendar-modal', openCalendarBtn, 420)
}

function stepCalendarMonth(direction) {
  const nextDate = new Date(calendarState.year, calendarState.month + direction, 1)
  calendarState.year = nextDate.getFullYear()
  calendarState.month = nextDate.getMonth()
  const maxDay = new Date(calendarState.year, calendarState.month + 1, 0).getDate()
  const selectedDay = Math.min(calendarState.selectedDate.getDate(), maxDay)
  calendarState.selectedDate = new Date(calendarState.year, calendarState.month, selectedDay)
  renderCalendarPanel()
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
  loadInviteMembers()
  loadNotifications()
  renderTasks()
  renderInviteMembers()
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
    description: (task.description || '').toString(),
    image: (task.image || '').toString(),
    createdAt: task.createdAt || new Date().toISOString(),
    objective: (task.objective || '').toString(),
    additionalNotes: (task.additionalNotes || '').toString(),
    deadlineForSubmission: (task.deadlineForSubmission || '').toString(),
  }
}

function defaultInviteMembers() {
  return [
    {
      id: `m-${Date.now()}-1`,
      name: 'Upashna Gurung',
      email: 'uppaeygrg332@gmail.com',
      permission: 'edit',
      isOwner: false,
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80',
    },
    {
      id: `m-${Date.now()}-2`,
      name: 'Jeremy Lee',
      email: 'jerrylee1996@gmail.com',
      permission: 'edit',
      isOwner: false,
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80',
    },
    {
      id: `m-${Date.now()}-3`,
      name: 'Thomas Park',
      email: 'parktho123@gmail.com',
      permission: 'edit',
      isOwner: true,
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80',
    },
  ]
}

function normalizeInviteMember(member) {
  const hasOwnerLabel = String(member.role || '').toLowerCase() === 'owner'
  return {
    id: member.id || `m-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    name: (member.name || 'New Member').toString().trim(),
    email: (member.email || '').toString().trim().toLowerCase(),
    permission:
      member.permission === 'view' || member.role === INVITE_PERMISSIONS.view ? 'view' : 'edit',
    isOwner: !!member.isOwner || hasOwnerLabel,
    avatar: (member.avatar || '').toString().trim(),
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return 'NA'
  const first = parts[0].charAt(0)
  const second = parts.length > 1 ? parts[1].charAt(0) : ''
  return `${first}${second}`.toUpperCase()
}

function loadInviteMembers() {
  if (!currentUser) {
    inviteMembers = []
    return
  }

  const raw = JSON.parse(localStorage.getItem(getInviteStorageKey()))
  const base = Array.isArray(raw) && raw.length > 0 ? raw : defaultInviteMembers()
  inviteMembers = base.map(normalizeInviteMember).filter(member => member.email)
  if (!inviteMembers.some(member => member.isOwner)) {
    inviteMembers.unshift(normalizeInviteMember({
      name: currentUser?.name || 'Workspace Owner',
      email: currentUser?.email || 'owner@example.com',
      permission: 'edit',
      isOwner: true,
      avatar: currentUser?.avatar || '',
    }))
  }
  saveInviteMembers()
}

function saveInviteMembers() {
  if (!currentUser) return
  localStorage.setItem(getInviteStorageKey(), JSON.stringify(inviteMembers))
}

function createAvatarFromEmail(email) {
  const seed = encodeURIComponent(email.toLowerCase())
  return `https://api.dicebear.com/8.x/initials/svg?seed=${seed}&backgroundColor=ffd5d5,fde68a,c7d2fe`
}

function renderInviteMembers() {
  if (!inviteMembersList) return
  inviteMembersList.innerHTML = ''

  const orderedMembers = [...inviteMembers].sort((a, b) => {
    if (a.isOwner && !b.isOwner) return -1
    if (!a.isOwner && b.isOwner) return 1
    return 0
  })

  orderedMembers.forEach(member => {
    const avatarBlock = member.avatar
      ? `<img class="invite-avatar" src="${escapeHtml(member.avatar)}" alt="${escapeHtml(member.name)} avatar" />`
      : `<div class="invite-avatar-fallback">${escapeHtml(getInitials(member.name))}</div>`

    const controls = member.isOwner
      ? '<span class="invite-owner-pill">Owner</span>'
      : `<select class="invite-role-select" data-member-id="${escapeHtml(member.id)}">
          <option value="view" ${member.permission === 'view' ? 'selected' : ''}>Can view</option>
          <option value="edit" ${member.permission === 'edit' ? 'selected' : ''}>Can edit</option>
          <option value="remove">Remove member</option>
        </select>`

    inviteMembersList.insertAdjacentHTML(
      'beforeend',
      `<li>
        ${avatarBlock}
        <div class="invite-member-meta">
          <strong>${escapeHtml(member.name)}</strong>
          <small>${escapeHtml(member.email)}</small>
        </div>
        <div class="invite-member-controls">${controls}</div>
      </li>`
    )
  })

  inviteMembersList.querySelectorAll('.invite-role-select').forEach(select => {
    select.addEventListener('change', event => {
      const memberId = event.target.dataset.memberId
      const action = event.target.value
      const index = inviteMembers.findIndex(member => member.id === memberId)
      if (index === -1) return

      if (action === 'remove') {
        inviteMembers.splice(index, 1)
        saveInviteMembers()
        renderInviteMembers()
        showNotification('success', 'Member removed')
        return
      }

      inviteMembers[index].permission = action
      saveInviteMembers()
      showNotification('success', `Permission updated to ${INVITE_PERMISSIONS[action]}`)
    })
  })
}

function resetAddTaskModalFields() {
  modalTaskTitle.value = ''
  modalTaskDate.value = ''
  modalTaskDescription.value = ''
  modalTaskImage.value = ''
  if (modalTaskObjective) modalTaskObjective.value = ''
  if (modalTaskNotes) modalTaskNotes.value = ''
  if (modalTaskDeadlineDate) modalTaskDeadlineDate.value = ''
  if (modalTaskDeadlineTime) modalTaskDeadlineTime.value = ''
  if (uploadFileName) uploadFileName.textContent = 'Drag & drop files here or browse'
  const selected = document.querySelector('input[name="modal-priority"][value="moderate"]')
  if (selected) selected.checked = true
}

function openAddTaskModal() {
  if (!currentUser) {
    showNotification('error', 'Please login first')
    return
  }
  resetAddTaskModalFields()
  $('#add-task-modal.modal').modal('show')
}

function readImageFileAsDataURL(file) {
  return new Promise(resolve => {
    if (!file) {
      resolve('')
      return
    }
    const reader = new FileReader()
    reader.onload = event => resolve(String(event.target.result || ''))
    reader.onerror = () => resolve('')
    reader.readAsDataURL(file)
  })
}

async function submitAddTaskFromModal() {
  const text = modalTaskTitle.value.trim()
  if (text.length === 0) {
    showNotification('error', 'Task title is required')
    return
  }

  const selectedPriority = document.querySelector('input[name="modal-priority"]:checked')
  const priority = selectedPriority ? selectedPriority.value : 'moderate'
  const imageFile = modalTaskImage.files && modalTaskImage.files[0]
  const image = await readImageFileAsDataURL(imageFile)

  list.push({
    id: Date.now(),
    text,
    completed: false,
    priority,
    dueDate: modalTaskDate.value,
    category: addTaskCategory ? addTaskCategory.value : 'Work',
    description: modalTaskDescription.value.trim(),
    image,
    createdAt: new Date().toISOString(),
    objective: modalTaskObjective ? modalTaskObjective.value.trim() : '',
    additionalNotes: modalTaskNotes ? modalTaskNotes.value.trim() : '',
    deadlineForSubmission: '',
    deadlineDate: modalTaskDeadlineDate ? modalTaskDeadlineDate.value.trim() : '',
    deadlineTime: modalTaskDeadlineTime ? modalTaskDeadlineTime.value.trim() : '',
  })

  saveList()
  renderTasks()
  $('#add-task-modal.modal').modal('hide')
  showNotification('success', 'Task added from modal')
}

function openInviteModal() {
  if (!currentUser) {
    showNotification('error', 'Please login first')
    return
  }
  if (projectLinkInput) {
    projectLinkInput.value = `${window.location.origin}${window.location.pathname}?workspace=${currentUser.id}`
  }
  if (inviteEmailInput) inviteEmailInput.value = ''
  renderInviteMembers()
  $('#invite-modal.modal').modal('show')
}

function sendInvite() {
  const email = inviteEmailInput.value.trim().toLowerCase()
  if (!validateEmail(email)) {
    showNotification('error', 'Enter a valid email')
    return
  }

  const exists = inviteMembers.some(member => member.email.toLowerCase() === email)
  if (exists) {
    showNotification('error', 'Member already invited')
    return
  }

  const baseName = email.split('@')[0].replace(/[._-]/g, ' ')
  const prettyName = baseName
    .split(' ')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

  inviteMembers.unshift({
    id: `m-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    name: prettyName || 'New Member',
    email,
    permission: 'edit',
    isOwner: false,
    avatar: '',
  })

  saveInviteMembers()
  renderInviteMembers()
  inviteEmailInput.value = ''
  pushNotificationFeed('Invite sent', `Invitation sent to ${email}`, {
    type: 'info',
    avatar: '',
  })
  showNotification('success', 'Invite sent')
}

async function copyProjectLink() {
  const link = projectLinkInput.value
  if (!link) return
  try {
    await navigator.clipboard.writeText(link)
    pushNotificationFeed('Project link copied', 'Workspace link was copied to your clipboard', {
      type: 'info',
    })
    showNotification('success', 'Project link copied')
  } catch (_error) {
    showNotification('error', 'Could not copy link')
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

function prettyDateNumeric(dateValue) {
  if (!dateValue) return '--/--/----'
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) return '--/--/----'
  return date.toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

function getRelativeDeadlineDisplay(deadlineDate, deadlineTime) {
  if (!deadlineDate) return '-'
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const deadline = new Date(deadlineDate)
  const timeDiff = deadline.getTime() - today.getTime()
  const daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
  
  let relativeText = ''
  
  if (daysUntil === 0) {
    relativeText = 'End of Day'
  } else if (daysUntil === 1) {
    relativeText = '1 day to go'
  } else if (daysUntil > 1) {
    relativeText = `${daysUntil} days to go`
  } else if (daysUntil === -1) {
    relativeText = 'Due yesterday'
  } else if (daysUntil < 0) {
    relativeText = `${Math.abs(daysUntil)} days overdue`
  }
  
  // Format the full deadline string with date and time
  const dayStr = deadline.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
  const timeStr = deadlineTime ? deadlineTime : '23:59'
  
  return `${relativeText}, ${dayStr} ${timeStr}`
}

function taskStatusLabel(task) {
  if (task.completed) return 'Completed'
  if (task.dueDate) return 'In Progress'
  return 'Not Started'
}

function taskStatusClass(task) {
  if (task.completed) return 'completed'
  if (task.dueDate) return 'progress'
  return 'not-started'
}

function fallbackTaskImage(task) {
  if (task.category.toLowerCase() === 'work') {
    return 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=240&q=80'
  }
  if (task.category.toLowerCase() === 'design') {
    return 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=240&q=80'
  }
  return 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=240&q=80'
}

function updateToday() {
  const now = new Date()
  const dayEl = document.querySelector('#today-day')
  const dateEl = document.querySelector('#today-date')
  const todoDateLabel = document.querySelector('#todo-today-label')
  if (dayEl) dayEl.textContent = now.toLocaleDateString(undefined, { weekday: 'long' })
  if (todoDateLabel) {
    todoDateLabel.textContent = now.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
    })
  }
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

  ringCompleted.dataset.value = `${completedPct}%`
  ringProgress.dataset.value = `${inProgressPct}%`
  ringNotStarted.dataset.value = `${notStartedPct}%`

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
    const imageUrl = task.image || fallbackTaskImage(task)
    const description = task.description?.trim() || 'Task completed successfully.'
    completedList.insertAdjacentHTML(
      'beforeend',
      `<li class="dash-completed-card clickable-row" data-id="${task.id}">
        <div class="dash-task-top">
          <span class="dash-status-dot completed"></span>
          <h4>${escapeHtml(task.text)}</h4>
        </div>
        <div class="dash-task-body">
          <p>${escapeHtml(description)}</p>
          <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(task.text)}" />
        </div>
        <div class="dash-task-footer">
          <span>Status: <em class="status-completed">Completed</em></span>
          <span>Completed ${escapeHtml(prettyDateNumeric(task.createdAt))}</span>
        </div>
      </li>`
    )
  })

  completedList.querySelectorAll('.dash-completed-card').forEach(item => {
    item.addEventListener('click', () => openTaskDetailModal(+item.dataset.id))
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
  vitalList.innerHTML = ''

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

  if (urgent.length === 0) {
    vitalList.innerHTML = '<li class="empty-box">No urgent tasks right now.</li>'
    selectedVitalTaskId = null
    renderVitalTaskDetailPanel(null)
    
    const overdue = list.filter(task => {
      if (task.completed || !task.dueDate) return false
      return task.dueDate < todayIso
    }).length
    const dueToday = list.filter(task => !task.completed && task.dueDate === todayIso).length

    if (vitalCount) vitalCount.textContent = String(0)
    if (overdueCount) overdueCount.textContent = String(overdue)
    if (todayCount) todayCount.textContent = String(dueToday)
    return
  }

  const exists = urgent.some(task => task.id === selectedVitalTaskId)
  if (!exists) {
    selectedVitalTaskId = urgent[0].id
  }

  urgent.forEach(task => {
    const isSelected = task.id === selectedVitalTaskId
    vitalList.insertAdjacentHTML(
      'beforeend',
      `<li class="task-item ${isSelected ? 'selected' : ''}" data-id="${task.id}">
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
    item.addEventListener('click', () => {
      selectedVitalTaskId = +item.dataset.id
      const task = list.find(t => t.id === selectedVitalTaskId)
      renderVitalList()
      if (task) renderVitalTaskDetailPanel(task)
    })
  })

  // Render the detail panel for the selected task
  const selectedTask = list.find(t => t.id === selectedVitalTaskId)
  if (selectedTask) {
    renderVitalTaskDetailPanel(selectedTask)
  }

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
    selectedMyTaskId = null
    renderMyTaskDetailPanel(null)
    return
  }

  const exists = list.some(task => task.id === selectedMyTaskId)
  if (!exists) {
    selectedMyTaskId = list[0].id
  }

  list.forEach(task => {
    myTasksList.insertAdjacentHTML(
      'beforeend',
      `<li class="task-item clickable-row ${task.id === selectedMyTaskId ? 'selected' : ''}" data-id="${task.id}">
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
    item.addEventListener('click', () => {
      selectedMyTaskId = +item.dataset.id
      renderMyTasksList()
    })
  })

  const selectedTask = list.find(task => task.id === selectedMyTaskId) || null
  renderMyTaskDetailPanel(selectedTask)

  const total = list.length
  const done = list.filter(task => task.completed).length
  const open = total - done
  if (myTotalCount) myTotalCount.textContent = String(total)
  if (myOpenCount) myOpenCount.textContent = String(open)
  if (myDoneCount) myDoneCount.textContent = String(done)
}

function renderMyTaskDetailPanel(task) {
  if (!myTaskDetailTitle || !myTaskDetailDescription) return

  if (!task) {
    myTaskDetailTitle.textContent = 'Select a task'
    myTaskDetailPriority.textContent = '-'
    myTaskDetailPriority.className = 'priority-moderate'
    myTaskDetailStatus.textContent = '-'
    myTaskDetailStatus.className = 'status-not-started'
    myTaskDetailCreated.textContent = '-'
    myTaskDetailImage.src = ''
    myTaskDetailImage.style.display = 'none'
    myTaskDetailTasktitle.textContent = 'Click a task card on the left to preview details here.'
    myTaskDetailObjective.textContent = '-'
    myTaskDetailDescription.textContent = '-'
    myTaskDetailNotes.innerHTML = '-'
    myTaskDetailDeadline.textContent = '-'
    if (myTaskDeleteBtn) myTaskDeleteBtn.disabled = true
    if (myTaskEditBtn) myTaskEditBtn.disabled = true
    if (myTaskCompleteBtn) {
      myTaskCompleteBtn.disabled = true
      myTaskCompleteBtn.classList.remove('is-completed')
    }
    return
  }

  const statusClass = taskStatusClass(task)
  myTaskDetailTitle.textContent = task.text
  myTaskDetailPriority.textContent = task.priority
  myTaskDetailPriority.className = `priority-${task.priority}`
  myTaskDetailStatus.textContent = taskStatusLabel(task)
  myTaskDetailStatus.className = `status-${statusClass}`
  myTaskDetailCreated.textContent = prettyDateNumeric(task.createdAt)

  // Task Image section
  if (task.image && task.image.length > 0) {
    myTaskDetailImage.src = task.image
    myTaskDetailImage.style.display = 'block'
  } else {
    myTaskDetailImage.src = ''
    myTaskDetailImage.style.display = 'none'
  }

  // Task Title section
  myTaskDetailTasktitle.textContent = task.text || '-'

  // Objective section
  const objective = (task.objective || '').trim()
  myTaskDetailObjective.textContent = objective.length > 0 ? objective : '-'

  // Description section
  const description = (task.description || '').trim()
  myTaskDetailDescription.textContent = description.length > 0 ? description : '-'

  // Additional Notes section
  const notes = (task.additionalNotes || '').trim()
  if (notes.length > 0) {
    // Check if notes contain bullet points
    if (notes.includes('\n') || notes.includes('•')) {
      const noteLines = notes.split('\n').filter(line => line.trim().length > 0)
      const notesList = noteLines.map(line => {
        const text = line.replace(/^[•\-\*]\s*/,'').trim()
        return `<li>${escapeHtml(text)}</li>`
      }).join('')
      myTaskDetailNotes.innerHTML = notesList.length > 0 ? `<ul>${notesList}</ul>` : '-'
    } else {
      myTaskDetailNotes.innerHTML = escapeHtml(notes)
    }
  } else {
    myTaskDetailNotes.innerHTML = '-'
  }

  // Deadline section - use new relative deadline display
  const deadlineDate = (task.deadlineDate || '').trim()
  const deadlineTime = (task.deadlineTime || '').trim()
  
  if (deadlineDate) {
    myTaskDetailDeadline.textContent = getRelativeDeadlineDisplay(deadlineDate, deadlineTime)
  } else {
    myTaskDetailDeadline.textContent = '-'
  }

  if (myTaskDeleteBtn) myTaskDeleteBtn.disabled = false
  if (myTaskEditBtn) myTaskEditBtn.disabled = false
  
  // Complete button state and styling
  if (myTaskCompleteBtn) {
    myTaskCompleteBtn.disabled = false
    if (task.completed) {
      myTaskCompleteBtn.classList.add('is-completed')
      myTaskCompleteBtn.setAttribute('aria-label', 'Mark task as incomplete')
      myTaskCompleteBtn.setAttribute('title', 'Mark as incomplete')
      myTaskCompleteBtn.querySelector('i').className = 'check circle icon'
    } else {
      myTaskCompleteBtn.classList.remove('is-completed')
      myTaskCompleteBtn.setAttribute('aria-label', 'Mark task as complete')
      myTaskCompleteBtn.setAttribute('title', 'Mark as complete')
      myTaskCompleteBtn.querySelector('i').className = 'check icon'
    }
  }
}

function renderVitalTaskDetailPanel(task) {
  if (!vitalDetailTitle || !vitalDetailDescription) return

  if (!task) {
    vitalDetailTitle.textContent = 'Select a task'
    vitalDetailPriority.textContent = '-'
    vitalDetailPriority.className = 'priority-moderate'
    vitalDetailStatus.textContent = '-'
    vitalDetailStatus.className = 'status-not-started'
    vitalDetailCreated.textContent = '-'
    vitalDetailImage.src = ''
    vitalDetailImage.style.display = 'none'
    vitalDetailTasktitle.textContent = 'Click a task card on the left to preview details here.'
    vitalDetailDescription.textContent = '-'
    if (vitalDeleteBtn) vitalDeleteBtn.disabled = true
    if (vitalEditBtn) vitalEditBtn.disabled = true
    if (vitalCompleteBtn) {
      vitalCompleteBtn.disabled = true
      vitalCompleteBtn.classList.remove('is-completed')
    }
    return
  }

  const statusClass = taskStatusClass(task)
  vitalDetailTitle.textContent = task.text
  vitalDetailPriority.textContent = task.priority
  vitalDetailPriority.className = `priority-${task.priority}`
  vitalDetailStatus.textContent = taskStatusLabel(task)
  vitalDetailStatus.className = `status-${statusClass}`
  vitalDetailCreated.textContent = prettyDateNumeric(task.createdAt)

  // Task Image section
  if (task.image && task.image.length > 0) {
    vitalDetailImage.src = task.image
    vitalDetailImage.style.display = 'block'
  } else {
    vitalDetailImage.src = ''
    vitalDetailImage.style.display = 'none'
  }

  // Task Title section
  vitalDetailTasktitle.textContent = task.text || '-'

  // Description section
  const description = (task.description || '').trim()
  vitalDetailDescription.textContent = description.length > 0 ? description : '-'

  if (vitalDeleteBtn) vitalDeleteBtn.disabled = false
  if (vitalEditBtn) vitalEditBtn.disabled = false
  
  // Complete button state and styling
  if (vitalCompleteBtn) {
    vitalCompleteBtn.disabled = false
    if (task.completed) {
      vitalCompleteBtn.classList.add('is-completed')
      vitalCompleteBtn.setAttribute('aria-label', 'Mark task as incomplete')
      vitalCompleteBtn.setAttribute('title', 'Mark as incomplete')
      vitalCompleteBtn.querySelector('i').className = 'check circle icon'
    } else {
      vitalCompleteBtn.classList.remove('is-completed')
      vitalCompleteBtn.setAttribute('aria-label', 'Mark task as complete')
      vitalCompleteBtn.setAttribute('title', 'Mark as complete')
      vitalCompleteBtn.querySelector('i').className = 'check icon'
    }
  }
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
      const statusLabel = taskStatusLabel(task)
      const statusClass = taskStatusClass(task)
      const imageUrl = task.image || fallbackTaskImage(task)
      const description =
        task.description?.trim() ||
        'Plan this task with details so your team knows exactly what to do next.'

      tasksList.insertAdjacentHTML(
        'beforeend',
        `<li class="dash-task-card clickable-row" data-id="${task.id}">
          <div class="dash-task-top">
            <span class="dash-status-dot ${statusClass}"></span>
            <h4 class="${task.completed ? 'completed' : ''}">${escapeHtml(task.text)}</h4>
            <i class="ellipsis horizontal icon"></i>
          </div>
          <div class="dash-task-body">
            <p>${escapeHtml(description)}</p>
            <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(task.text)}" />
          </div>
          <div class="dash-task-footer">
            <span>Priority: <em class="priority-${escapeHtml(task.priority)}">${escapeHtml(task.priority)}</em></span>
            <span>Status: <em class="status-${statusClass}">${statusLabel}</em></span>
            <span>Created on: ${escapeHtml(prettyDateNumeric(task.createdAt))}</span>
          </div>
        </li>`
      )
    })
  }

  clearAllTasksBtn.disabled = list.length === 0
  clearCompletedBtn.disabled = !list.some(task => task.completed)

  tasksList.querySelectorAll('.dash-task-card').forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all task cards
      tasksList.querySelectorAll('.dash-task-card').forEach(card => card.classList.remove('active'))
      // Add active class to clicked card
      item.classList.add('active')
      // Remove active class after animation completes
      setTimeout(() => {
        item.classList.remove('active')
      }, 600)
      // Open task detail
      openTaskDetailModal(+item.dataset.id)
    })
  })

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
  pushNotificationFeed('Task added', text, { type: 'info' })
  showNotification('success', 'Task was successfully added')
  renderTasks()
}

function completeTask(id) {
  const task = list.find(item => item.id === id)
  if (!task) return

  task.completed = !task.completed
  saveList()
  pushNotificationFeed(
    task.completed ? 'Task completed' : 'Task reopened',
    task.text,
    { type: task.completed ? 'info' : 'error' }
  )
  renderTasks()
}

function removeTask(id) {
  const task = list.find(item => item.id === id)
  list = list.filter(item => item.id !== id)
  saveList()
  if (task) {
    pushNotificationFeed('Task deleted', task.text, { type: 'error' })
  }
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
  pushNotificationFeed('Task updated', task.text, { type: 'info' })
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
  pushNotificationFeed('All tasks cleared', 'The active workspace task list was emptied.', { type: 'error' })
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
  pushNotificationFeed('Completed tasks cleared', 'Finished tasks were removed from the list.', {
    type: 'info',
  })
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

  const statusClass = taskStatusClass(task)
  const statusLabel = taskStatusLabel(task)

  selectedDetailTaskId = task.id
  document.querySelector('#detail-title').textContent = task.text
  const detailStatusEl = document.querySelector('#detail-status')
  detailStatusEl.textContent = statusLabel
  detailStatusEl.className = `status-${statusClass}`
  document.querySelector('#detail-priority').textContent = task.priority
  document.querySelector('#detail-priority').className = `priority-${task.priority}`
  document.querySelector('#detail-created').textContent = prettyDateNumeric(task.createdAt)

  // Update complete button state
  if (detailCompleteBtn) {
    if (task.completed) {
      detailCompleteBtn.classList.add('is-completed')
      detailCompleteBtn.setAttribute('aria-label', 'Mark task as incomplete')
      detailCompleteBtn.setAttribute('title', 'Mark as incomplete')
      detailCompleteBtn.querySelector('i').className = 'check circle icon'
    } else {
      detailCompleteBtn.classList.remove('is-completed')
      detailCompleteBtn.setAttribute('aria-label', 'Mark task as complete')
      detailCompleteBtn.setAttribute('title', 'Mark as complete')
      detailCompleteBtn.querySelector('i').className = 'check icon'
    }
  }

  const detailImage = document.querySelector('#detail-image')
  if (detailImage) {
    detailImage.src = task.image || fallbackTaskImage(task)
    detailImage.alt = `${task.text} image`
  }

  const detailMiniCopy = document.querySelector('#detail-mini-copy')
  if (detailMiniCopy) {
    detailMiniCopy.textContent = `${task.category} ${task.dueDate ? `• Due: ${prettyDate(task.dueDate)}` : '• No due date'}`
  }

  const detailDescription = document.querySelector('#detail-description')
  if (detailDescription) {
    const cleanDescription = (task.description || '').trim()
    detailDescription.textContent =
      cleanDescription.length > 0
        ? cleanDescription
        : 'Add a detailed description to this task from Edit Task to show full notes here.'
  }

  lastViewBeforeDetail = currentView === 'taskdetail' ? 'dashboard' : currentView
  switchView('taskdetail')

  const detailPage = document.querySelector('.task-detail-page')
  if (detailPage) {
    detailPage.classList.remove('animating')
    void detailPage.offsetWidth
    detailPage.classList.add('animating')
  }
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
  closeHeaderPopover()
  localStorage.removeItem(CURRENT_USER_KEY)
  sessionStorage.removeItem(SESSION_USER_KEY)
  currentUser = null
  list = []
  inviteMembers = []
  notifications = []
  updateNotificationsBadge()
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
    showEditModal(selectedDetailTaskId)
  })

  if (detailRemoveBtn) {
    detailRemoveBtn.addEventListener('click', () => {
      if (!selectedDetailTaskId) return
      showRemoveModal(selectedDetailTaskId)
    })
  }

  if (detailAlertBtn) {
    detailAlertBtn.addEventListener('click', () => {
      if (!selectedDetailTaskId) return
      const task = list.find(item => item.id === selectedDetailTaskId)
      if (!task) return
      task.priority = 'high'
      saveList()
      renderTasks()
      openTaskDetailModal(task.id)
      showNotification('success', 'Task marked as high priority')
    })
  }

  if (detailPageBackBtn) {
    detailPageBackBtn.addEventListener('click', () => {
      const targetView = viewPanels[lastViewBeforeDetail] ? lastViewBeforeDetail : 'dashboard'
      switchView(targetView)
      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === targetView)
      })
    })
  }

  if (detailCompleteBtn) {
    detailCompleteBtn.addEventListener('click', () => {
      if (!selectedDetailTaskId) return
      const task = list.find(t => t.id === selectedDetailTaskId)
      if (!task) return
      task.completed = !task.completed
      saveList()
      renderTasks()
      openTaskDetailModal(task.id)
      showNotification('success', task.completed ? 'Task marked as complete' : 'Task marked as incomplete')
    })
  }

  if (myTaskEditBtn) {
    myTaskEditBtn.addEventListener('click', () => {
      if (!selectedMyTaskId) return
      showEditModal(selectedMyTaskId)
    })
  }

  if (myTaskDeleteBtn) {
    myTaskDeleteBtn.addEventListener('click', () => {
      if (!selectedMyTaskId) return
      showRemoveModal(selectedMyTaskId)
    })
  }

  if (myTaskCompleteBtn) {
    myTaskCompleteBtn.addEventListener('click', () => {
      if (!selectedMyTaskId) return
      const task = list.find(t => t.id === selectedMyTaskId)
      if (!task) return
      task.completed = !task.completed
      saveList()
      renderMyTasksList()
      showNotification('success', task.completed ? 'Task marked as complete' : 'Task marked as incomplete')
    })
  }

  if (vitalEditBtn) {
    vitalEditBtn.addEventListener('click', () => {
      if (!selectedVitalTaskId) return
      showEditModal(selectedVitalTaskId)
    })
  }

  if (vitalDeleteBtn) {
    vitalDeleteBtn.addEventListener('click', () => {
      if (!selectedVitalTaskId) return
      showRemoveModal(selectedVitalTaskId)
    })
  }

  if (vitalCompleteBtn) {
    vitalCompleteBtn.addEventListener('click', () => {
      if (!selectedVitalTaskId) return
      const task = list.find(t => t.id === selectedVitalTaskId)
      if (!task) return
      task.completed = !task.completed
      saveList()
      renderVitalList()
      showNotification('success', task.completed ? 'Task marked as complete' : 'Task marked as incomplete')
    })
  }
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

function setupWorkspaceModals() {
  if (openAddTaskModalBtn) {
    openAddTaskModalBtn.addEventListener('click', openAddTaskModal)
  }
  if (addTaskModalSubmitBtn) {
    addTaskModalSubmitBtn.addEventListener('click', submitAddTaskFromModal)
  }
  if (modalTaskImage) {
    modalTaskImage.addEventListener('change', () => {
      const file = modalTaskImage.files && modalTaskImage.files[0]
      if (uploadFileName) {
        uploadFileName.textContent = file ? `Selected: ${file.name}` : 'Drag & drop files here or browse'
      }
    })
  }
  if (openInviteModalBtn) {
    openInviteModalBtn.addEventListener('click', openInviteModal)
  }
  if (sendInviteBtn) {
    sendInviteBtn.addEventListener('click', sendInvite)
  }
  if (inviteEmailInput) {
    inviteEmailInput.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault()
        sendInvite()
      }
    })
  }
  if (copyProjectLinkBtn) {
    copyProjectLinkBtn.addEventListener('click', copyProjectLink)
  }
  if (openNotificationsBtn) {
    openNotificationsBtn.addEventListener('click', openNotificationsPanel)
  }
  if (openCalendarBtn) {
    openCalendarBtn.addEventListener('click', openCalendarPanel)
  }
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', markAllNotificationsRead)
  }
  if (calendarPrevBtn) {
    calendarPrevBtn.addEventListener('click', () => stepCalendarMonth(-1))
  }
  if (calendarNextBtn) {
    calendarNextBtn.addEventListener('click', () => stepCalendarMonth(1))
  }

  document.addEventListener('click', event => {
    const target = event.target
    if (
      target.closest('#open-notifications-btn') ||
      target.closest('#open-calendar-btn') ||
      target.closest('#notifications-modal') ||
      target.closest('#calendar-modal')
    ) {
      return
    }
    closeHeaderPopover()
  })

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeHeaderPopover()
    }
  })

  window.addEventListener('resize', () => {
    if (activeHeaderPopover && activeHeaderAnchor) {
      const width = activeHeaderPopover.id === 'calendar-modal' ? 420 : 390
      positionHeaderPopover(activeHeaderPopover, activeHeaderAnchor, width)
    }
  })
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
setupWorkspaceModals()

if (currentUser) {
  applyCurrentUserUI()
  loadList()
  loadInviteMembers()
  loadNotifications()
  renderInviteMembers()
  switchView('dashboard')
  renderTasks()
} else {
  switchView('dashboard')
  renderTasks()
  openAuthModal()
}
