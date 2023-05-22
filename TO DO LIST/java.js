document.getElementById('submitbtn').onclick = function() {
    newElement();
  };
  
  function newElement() {
    const inputValue = document.getElementById('input').value;
    if (inputValue === '') {
      alert("You must enter something");
      return;
    }
    const li = document.createElement('li');
    li.textContent = inputValue;
  
    const listing = document.getElementById('listing');
    listing.appendChild(li);
  
    document.getElementById('input').value = '';
  
    li.onclick = function() {
      li.style.display = 'none';
    };
  }

  