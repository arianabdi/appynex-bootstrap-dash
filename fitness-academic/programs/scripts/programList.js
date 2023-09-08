


function toJalali(gregorianDate){
    return moment(gregorianDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
}

function statusSelector(status){
    switch (status){
        case "fill_info":
            return "تکمیل فرم";
            break;
        case "unpaid":
            return "پرداخت نشده"; 
            break;
        case "active":
            return "فعال";   
            break;
        case "pending":
            return "در حال آماده سازی"; 
            break;    
    }
}


function _renderItem(data) {
    const tableBody = document.getElementById('tableBody');

    console.log('_renderItem called!')
    // Clear existing rows
    tableBody.innerHTML = '';
    // Iterate through the data and create rows
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${item._id}</th>
            <td>${item.packageName}</td>
            <td>${item.full_name}</td>
            <td>${statusSelector(item.status)}</td>
            <td>${toJalali(item.createdAt)}</td>
        `;
        tableBody.appendChild(row);
    });
}


function fetchData(page, limit, totalPages){
    // Fetch data using Axios
    console.log('path', `http://localhost:30112/api/programs?page=${page}&limit=${limit}`);
    axios.get(`http://localhost:30112/api/programs?page=${page}&limit=${limit}`)
    .then(response => {
        console.log('response', response);
        const data = response.data.data.programs; // Assuming data is an array of objects
        _renderItem(data); // Populate the table with the fetched data

        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);
        console.log('page', page, limit, totalItems, totalPages)

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const userTableBody = document.getElementById("userTableBody");
    
    fetchData(page, limit.value, totalItems, totalPages)
});