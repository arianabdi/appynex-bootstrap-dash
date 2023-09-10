

let filterParams =  '';
let filterItems = [
    {
        title: "نوع برنامه",
        slug: 'type',
        type: "select",
        options: [
            {label: 'حرفه ای', value: '64ef8b54e632619c304525a6'},
            {label: 'مبتدی', value: '64ef8b61e632619c304525a9'},
        ],
        value: "1",
        selected: false
    },
    {
        title: "وضعیت برنامه",
        slug: 'status',
        type: "select",
        options: [
            // UNPAID = 'unpaid', // پرداخت نشده
            // FILL_INFO = 'fill_info', // تکمیل اطلاعات
            // PENDING = 'pending', // در حال آماده سازی
            // ACTIVE = 'active', // فعال
            // EXPIRED = 'expired'  //منقضی شده
            
            {label: 'در انتظار پرداخت', value: 'unpaid'},
            {label: 'تکمیل فرم', value: 'fill_info'},
            {label: 'در حال آماده سازی', value: 'pending'},
            {label: 'فعال', value: 'active'},
            {label: 'منقضی شده', value: 'expired'},
        ],
        value: "11",
        selected: true
    },
    {
        title: "نام کاربر",
        slug: 'full_name',
        type: "text",
        value: "333",
        selected: false
    },
]








function ConvertFilterObjectToUrlParam(obj){
    const queryParams = [];
    filterItems.forEach(item => {
        if (item.value) {
            queryParams.push(`${item.slug}=${item.value}`);
        }
    });
    return queryParams.join('&');
}



function FilterQueryInputSelector(type, options){
    console.log('options', options);
    switch(type){
        case 'text':
            return `<input type="text" class="form-control" placeholder="">` ;
            break;

        case 'date':
            return `<input type="text" class="form-control" placeholder="">` ;
            break;
            
        case 'select':
            let items = '';
            options.forEach(option => {
                console.log('option', option);
                items += `<option class="yekan-bakh" value="${option.value}">${option.label}</option>\n`
            });
            return `
            <select class="form-select yekan-bakh exerciseId w-100" data-index="" data-label="exerciseId" id="select-limit">
                ${items}
            </select>
            ` ;
            break;


    }
}




function FilterQueryItem(title, type, options, value, selected){
    const container = document.createElement('div');
    
    container.innerHTML = `
        <div class="row custom-row ${selected ? 'checked' : ''}">
            <div class="col-md-1">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" ${selected ? 'checked' : ''} id="checkbox1">
                </div>
            </div>
            <div class="col-md-4">
                <label class="form-check-label yekan-bakh" for="checkbox1">${title}</label>
            </div>
            <div class="col-md-7">
                ${FilterQueryInputSelector(type, options)}
            </div>
        </div>
    `

return container;
}



const modalContainer = document.getElementById('modal-container');


function loadFilterModal(){
    console.log('loadFilterModal')
    
    filterItems.forEach(item => {
        console.log('each', item);
        const component = FilterQueryItem(item.title, item.type, item.options, '', item.selected);
        modalContainer.appendChild(component);
    });
}

loadFilterModal()






// Function to print the form data as a JSON object
function applyFilter() {
    console.log('applyFilter', ConvertFilterObjectToUrlParam(filterItems))
  }
  
  
  
  // Event listener for the "Print Data" button
  document.getElementById('filter-button').addEventListener('click', applyFilter);





// JavaScript to toggle row background color on checkbox change
document.querySelectorAll('.form-check-input').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const row = this.closest('.custom-row');
        if (this.checked) {
            row.classList.add('checked');
        } else {
            row.classList.remove('checked');
        }
    });
});



