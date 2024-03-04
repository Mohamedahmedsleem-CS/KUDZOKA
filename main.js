

function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  // sidebar.style.display = 'flex';
  sidebar.style.transform='scaleX(1)';
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar")
  // sidebar.style.display = 'none';
  sidebar.style.transform='scaleX(0)';
}