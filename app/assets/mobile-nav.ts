// Close mobile nav drawer when any link inside it is tapped
document.addEventListener('click', function (e: MouseEvent) {
  const target = e.target as Element
  const drawer = document.getElementById('mobile-drawer')
  const toggle = document.getElementById('mobile-menu-toggle') as HTMLInputElement | null
  if (drawer && toggle && drawer.contains(target) && target.closest('a')) {
    toggle.checked = false
  }
})
