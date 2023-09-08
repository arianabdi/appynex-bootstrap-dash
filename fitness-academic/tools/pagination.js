let page = 1; // Replace with your initial page value
let totalItems = 1; // Initially set to 1
let totalPages = 1; // Initially set to 1





function handleSelectLimitChange(){
    const selectBox = document.getElementById('select-limit');
    const selectedValue = selectBox.value;
    
    // Do something with the selected value here
    console.log('Selected Value:', selectedValue);
    fetchData(page, selectBox.value, totalItems, totalPages)
  
}

let limit = document.getElementById('select-limit');


limit.addEventListener('change', handleSelectLimitChange);




// Function to render pagination
function generatePagination(currentPage, totalPages) {
    const paginationElement = document.getElementById('pagination');
    page = currentPage;

    paginationElement.innerHTML = ''; // Clear existing pagination links

    if (totalPages > 1) {
      const prevPage = document.createElement('li');
      prevPage.className = 'page-item';
      prevPage.id = 'prevPage';
      const prevLink = document.createElement('a');
      prevLink.className = 'page-link page-link-icon';

      prevLink.innerHTML = '<i data-feather="chevron-left"></i>';
    //   pageLink.addEventListener('click', () => {
    //     currentPage = currentPage -1;
    //     // Call your API function with the new currentPage value
    //     // Replace this line with your Axios code
    //     console.log(`Fetching data for page ${currentPage}`);
    //     fetchData(currentPage, limit, totalItems, totalPages)
    //   });
      prevPage.appendChild(prevLink);
      paginationElement.appendChild(prevPage);

      for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = 'page-item';
        const pageLink = document.createElement('a');
        pageLink.className = `page-link${i === currentPage ? ' active' : ''}`;
    
        pageLink.innerHTML = i;
        pageLink.addEventListener('click', () => {
          currentPage = i;
          // Call your API function with the new currentPage value
          // Replace this line with your Axios code
          console.log(`Fetching data for page ${currentPage}`);
          fetchData(currentPage, limit.value, totalItems, totalPages)
        });
        pageItem.appendChild(pageLink);
        paginationElement.appendChild(pageItem);
      }

      const nextPage = document.createElement('li');
      nextPage.className = 'page-item';
      nextPage.id = 'nextPage';
      const nextLink = document.createElement('a');
      nextLink.className = 'page-link page-link-icon';

      nextLink.innerHTML = '<i data-feather="chevron-right"></i>';
    //   pageLink.addEventListener('click', () => {
    //     currentPage = currentPage + 1;
    //     // Call your API function with the new currentPage value
    //     // Replace this line with your Axios code
    //     console.log(`Fetching data for page ${currentPage}`);
    //     fetchData(currentPage, limit, totalItems, totalPages)
    //   });
      nextPage.appendChild(nextLink);
      paginationElement.appendChild(nextPage);
    }
}


// Event listeners for pagination
document.getElementById('prevPage').addEventListener('click', () => {
    console.log('prevPage')
    if (page > 1) {
        page--;
        fetchData(page, limit.value, totalItems, totalPages)
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    console.log('nextPage')
    if (page < totalPages) {
        page++;
        fetchData(page, limit.value, totalItems, totalPages)
    }
});

