let baseUrl = `http://localhost:30112/api`;
const token = localStorage.getItem("token");
let headers = {"Authorization": `bearer ${token}`, contentType: "multipart/form-data "}


function fetchData({page, limit, totalPages, filter}){
    // Fetch data using Axios


    axios.get(`${baseUrl}/exercise?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`)
    .then(response => {
        data = response.data.data.exercises; // Assuming data is an array of objects
        console.log('resp',response.data.data )
        _renderItem(data); // Populate the table with the fetched data
       

        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);

    })
    .catch(error => {
        showToast({title: 'ارور', message:`اشکال در دریافت اطلاعات:‌ ${error}`});
        console.error('Error fetching data:', error);
    });
}

function newItem(body){


  console.log('newItem', body);
    axios.post(
      `${baseUrl}/exercise`, 
      body,
      {
        headers: headers,
      },
      
    ).then(response => {
        console.log('response', response)
        // Check if the request was successful
      if (response.status === 200) {
        // Redirect to the "exercise list" page upon success
        // window.location.href = '../exercise/table.html'; // Replace with your actual URL
      } else {
        // alert('Failed to create the exercise.'); // Handle other status codes if needed
        showToast({
          title: 'ارور', 
          message:`کد ${response.status}:  ${response.message}`
        });

      }
    })
    .catch(error => {
        showToast({title: 'ارور', message:`ایجاد تمرین جدید با مشکل مواجه شد:${error}`});
        console.error('Error fetching data:', error);
    });
}

function deleteItem({exerciseId}){
    axios.delete(`${baseUrl}/package/${exerciseId}`)
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