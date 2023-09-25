document.addEventListener('DOMContentLoaded', () => {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const resultDiv = document.getElementById('result');

  button1.addEventListener('click', () => {
      fetchData('data1');
  });

  button2.addEventListener('click', () => {
      fetchData('data2');
  });

  function fetchData(argument) {
      fetch(`/api/endpoint?arg=${argument}`)
          .then((response) => response.json())
          .then((data) => {
              // Display the response in the resultDiv
              resultDiv.textContent = JSON.stringify(data);
          })
          .catch((error) => {
              console.error('Error:', error);
          });
  }
});
