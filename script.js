function showNotice(){const m=document.getElementById('notice');if(m)m.classList.add('show')}
function hideNotice(){const m=document.getElementById('notice');if(m)m.classList.remove('show')}
function showRegister(){showNotice()}
function demoLogin(e){e.preventDefault();const u=document.getElementById('username').value;alert('Demo login berhasil diproses untuk: '+u);return false}
window.addEventListener('click',e=>{const m=document.getElementById('notice');if(m&&e.target===m)m.classList.remove('show')})