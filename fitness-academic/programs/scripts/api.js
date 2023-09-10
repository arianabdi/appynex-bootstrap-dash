function fetchData({page, limit, totalPages, filter}){
    // Fetch data using Axios


    console.log(`http://localhost:30112/api/programs?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`);
    axios.get(`http://localhost:30112/api/programs?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`)
    .then(response => {
        data = response.data.data.programs; // Assuming data is an array of objects
        _renderItem(data); // Populate the table with the fetched data
       

        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
