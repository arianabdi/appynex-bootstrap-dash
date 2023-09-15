let baseUrl = `http://localhost:30112/api`;
const access_token = localStorage.getItem("token");
let headers = {Authorization: `bearer ${access_token}`}


    function fetchData({page, limit, totalPages, filter}){

        setIsLoading(true);
        axios.get(`${baseUrl}/programs?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`, {headers: {...headers}})
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

    // async function getItem(userId){

    //     // setIsLoading(true);
    //     return (await axios.get(`${baseUrl}/user/${userId}`, {headers: {...headers}})).data.user
    
    // }


    async function getItem(){
        // Get the URL parameters
        var urlParams = new URLSearchParams(window.location.search);

        // Get the value of the "programId" parameter
        var programId = urlParams.get("programId");


        try {
            const response = await axios.get(`${baseUrl}/programs/${programId}`, {headers: {...headers}});
            console.log('response', response);
            let specifications = response.data.data.program;
            delete specifications._id;
            delete specifications.__v;
            delete specifications.diet;
            delete specifications.exercises;
            delete specifications.description;
            return specifications;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    }
  
