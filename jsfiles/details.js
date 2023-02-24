const userList = document.getElementById('user');
userList.addEventListener('click', function(event) {
  localStorage.clear();
  window.location.href = 'details.html';
});
const name = window.location.href;
const id = name.charAt(name.length-1)
console.log(id);


  fetch(`https://reqres.in/api/users/${id}`)
  .then(response => response.json())
  .then(data => {
      console.log(data)
          const listItem = document.createElement('div');
          const image_div = document.createElement('div');
          listItem.classList.add('single-div')
          const avatar = document.createElement('img');
          avatar.classList.add('image')
          avatar.src = data.data.avatar;
          const name = document.createElement('div');
          name.classList.add('name');
          name.innerHTML = `${data.data.first_name} ${data.data.last_name}`;
          const email = document.createElement('div');
          email.classList.add('email')
          email.innerHTML = ` ${data.data.email}`
          image_div.appendChild(avatar);
          listItem.appendChild(image_div)
          listItem.appendChild(name);
          listItem.appendChild(email)
          listItem.addEventListener('click', function() {
              window.location.href = `details.html?user=1${data.id}`;
     });
     userList.appendChild(listItem);
   });
