


function InputSelector(type, options, slug, row){

    console.log('InputSelector', type, options, slug)
    
    switch(type){
        case 'text':
            return `<input type="text" class="form-control yekan-bakh" placeholder=""  data-index="1" data-label="${slug}">` ;
            break;

        case 'date':
            return `<input type="text" class="form-control yekan-bakh" placeholder=""  data-index="1" data-label="${slug}">` ;
            break;

        case 'textarea':
            return ` <textarea class="form-control yekan-bakh" rows="4" data-index="1" data-label="${slug}"  placeholder="توضیحات"></textarea>` ;
            break;
           

        case 'select':
            let items = '';
            options.forEach(option => {
                items += `<option class="yekan-bakh" value="${option.value}">${option.label}</option>\n`
            });
            return `
            <select class="form-select yekan-bakh w-100"   data-index="1" data-label="${slug}">
                ${items}
            </select>
            ` ;
            break;
    }
}

function row(items){

    // console.log('row', items);
    // items.forEach(item => {
    //     console.log('item', item);
    // })
    const container = document.createElement('div');
    container.classList.add(`row`)
  
    items.forEach((item, index) => {
        container.innerHTML += `
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">${item.title}</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                ${InputSelector(item.type, item.options, item.slug, index)}
            </div>
            </div>
        </div>`;

    })

    
    // container.innerHTML = `
    //     <div class="row custom-row ${selected ? 'checked' : ''}">
    //         <div class="col-md-1">
    //             <div class="form-check">
    //                 <input class="form-check-input" type="checkbox" ${selected ? 'checked' : ''} data-index="2" data-label="${slug}" id="checkbox1">
    //             </div>
    //         </div>
    //         <div class="col-md-4">
    //             <label class="form-check-label yekan-bakh" for="checkbox1">${title}</label>
    //         </div>
    //         <div class="col-md-7">
    //             ${InputSelector(type, options, slug)}
    //         </div>
    //     </div>
    // `

return container;
}


const modalContainer = document.getElementById('form-container');


function loadForm(){
    formItems.forEach(_row => {
        let component = row(_row);
        modalContainer.appendChild(component);
        
        const br = document.createElement('br');
        modalContainer.appendChild(br)
    });

    const button = document.createElement('div');
    button.innerHTML = `<button type="button" id="submit" class="btn btn-primary w-100 yekan-bakh">ایجاد تمرین جدید</button>`
    modalContainer.appendChild(button)
}

loadForm()


  
// Event listener for the "Print Data" button
// document.getElementById('filter-button').addEventListener('click', '');


// Detect all changes in this form
var form = document.getElementById("form");
form.addEventListener("change", function(event) {
    let value = event.target.value;
    let index = event.target.dataset.index;
    let label = event.target.dataset.label;



    console.log('chagne', label, value);
    formItems.map(rows => {
        rows.map(item => {
            if(item.slug === label){
                item.value = value;
            }
        })
    })

});


// Function to print the form data as a JSON object
function submitForm() {
  

    let object = {};
    formItems.map(rows => {
        rows.map(item => {

            object[item.slug] = item.value; 

            if(item.regex){
                if(!item.regex.test(item.value)){
                    alert(item.alert);
                    return;
                }
            }

            if(item.isRequired){
                if(item.value === ""){
                    alert(`Please fill ${item.slug} field!`)
                }
            }
        })
    })
    newItem(object);
  }
  
  
  
  // Event listener for the "Print Data" button
  document.getElementById('submit').addEventListener('click', submitForm);



