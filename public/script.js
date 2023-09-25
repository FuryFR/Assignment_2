document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('fetchDataBtn');
    const fetchDataBtn2 = document.getElementById('fetchDataBtn2');
    const resultDiv = document.getElementById('result');
  
    fetchDataBtn.addEventListener('click', () => {
      fetchData('value1');
    });
  
    fetchDataBtn2.addEventListener('click', () => {
      fetchData('value2');
    });
  
    function fetchData(param) {
      fetch(`/api/data?param=${param}`)
        .then((response) => response.json())
        .then((data) => {
          // Display the response in the resultDiv
          resultDiv.textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });
   
