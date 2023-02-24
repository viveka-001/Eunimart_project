const userList = document.getElementById('user-list');
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function(event) {
  localStorage.clear();
  window.location.href = 'index.html';
});

fetch('https://reqres.in/api/users')
   .then(response => response.json())
   .then(data => {
     data.data.forEach(user => {
        const listItem = document.createElement('div');
        listItem.classList.add('single-div')
        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        const name = document.createElement('h3');
        name.textContent = `${user.first_name} ${user.last_name}`;
        listItem.appendChild(avatar);
        listItem.appendChild(name);
        listItem.addEventListener('click', function() {
        window.location.href = `detials.html?user=${user.id}`;
      });
      userList.appendChild(listItem);
     });
    });