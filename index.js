
function saveData(){
  var data;
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => console.log('SUCCESS', JSON.stringify(response)))
  .catch(error => console.error('ERROR:', error));
}

function showPass() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 