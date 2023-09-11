function fetchData({page, limit, totalPages, filter}){
    // Fetch data using Axios


    axios.get(`http://localhost:30112/api/exercise?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`)
    .then(response => {
        data = response.data.data.exercises; // Assuming data is an array of objects
        console.log('resp',response.data.data )
        _renderItem(data); // Populate the table with the fetched data
       

        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function newItem(body){

    axios.post(`http://localhost:30112/api/exercise`, body)
    .then(response => {
        
        console.log('newItem', response)
        // Check if the request was successful
      if (response.status === 200) {
        // Redirect to the "exercise list" page upon success
        window.location.href = '../exercise/table.html'; // Replace with your actual URL
      } else {
        alert('Failed to create the exercise.'); // Handle other status codes if needed
      }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function deleteItem({exerciseId}){
    axios.delete(`http://localhost:30112/api/exercise/${exerciseId}`)
    .then(response => {
        console.log('deleteItem', response)
        if(response.status === 200){
            fetchData({
                page: page,
                limit: limit.value,
                totalPages: totalPages,
                filter: filter
              });
              
            closeModal()
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


function closeModal() {
    const modal = document.getElementById('modal18');

    // Check if the modal element exists before attempting to close it
    if (modal) {
      $(modal).modal('hide');
    }
  }