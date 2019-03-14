function printData(){
  var data;
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => console.log('Success', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}