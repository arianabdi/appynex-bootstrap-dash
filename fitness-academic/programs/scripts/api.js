let baseUrl = `http://localhost:30112/api`;
const access_token = localStorage.getItem("token");
let headers = {headers: {Authorization: `bearer ${access_token}`}}


function fetchData({page, limit, totalPages, filter}){

    setIsLoading(true);
    axios.get(`http://localhost:30112/api/programs?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`, {...headers})
    .then(response => {
        data = response.data.data.programs; // Assuming data is an array of objects
        _renderItem(data); // Populate the table with the fetched data
    
        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);
        
        setIsLoading(false)

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
