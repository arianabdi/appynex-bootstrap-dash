// Initialize an empty JSON array to store the form data

var dietFormData = [];



  


// Function to add a new item to the form
function addItemToDiet(index) {
  var newItem = {
    "title": "",
    "type": "",
    "suggestions": [
      "",
    ],
  };

  // Create a new item HTML structure
  var newItemHTML = `
  <div class="card card-body mg-b-10 diet-item"  data-index="${index}"> 
    <div class="row">
      <div class="col-sm">
        <a data-bs-toggle="collapse" 
          href="#diet-${index}" 
          role="button" 
          aria-expanded="false" 
          aria-controls="diet-${index}"
        >
          <div class="col-sm " id="diet-title-${index}"> ${index}. ${dietFormData[index] ? dietFormData[index]['title'] : 'تعریف نشده'} </div>
        </a>
      </div>
      <div class="col-sm d-flex justify-content-end">
        <a  >
          <i data-feather="x" class="sz-20 mg-l-20 remove-btn" data-index="${index}"></i>
        </a>
      </div>
      
    </div>
    <div class="collapse mg-t-5 pd-t-20" id="diet-${index}">
    
      <div class="row mg-b-10">
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">عنوان</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control title" data-index="${index}" data-label="title" placeholder="عنوان">
            </div>
          </div>
        </div>
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">نوع</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <select class="form-select yekan-bakh type" data-index="${index}" data-label="type">
                <option class="yekan-bakh" value="meal">وعده غذایی</option>
                <option class="yekan-bakh" value="supplement">مکمل</option>
                <option class="yekan-bakh" value="limitation">محدودیت</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="row mg-b-10">
        <div class="col-sm order-2">

          <div class="row mg-t-20">
            <div class="col-sm-8 order-2 yekan-bakh mg-t-5">موارد پیشنهادی</div>
            <div class="col-sm order-3 d-flex justify-content-end">
              <a class="col-sm btn btn-outline-light yekan-bakh btn-sm">
                <i data-feather="plus"></i> افزودن پیشنهاد جدید
              </a> 
            </div>
          </div>

          <div id="suggestions-container">
            <div class="row">
              <div class="col-sm-12 order-2 yekan-bakh">1</div>
              <div class="col-sm-12 order-3 d-flex justify-content-end">
                <input type="text" class="form-control yekan-bakh" data-index="1" data-label="suggestions" placeholder="Input box">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  `;





  // Convert the HTML structure to a DOM element
  var newItemElement = document.createElement('div');
  newItemElement.innerHTML = newItemHTML;

  // Add the new item to the form
  document.getElementById('dietContainer').appendChild(newItemElement);

  // Push the new item to the formData array
  dietFormData.push(newItem);
  feather.replace();

  
}


function addNewDietSuggestion(index){
    var newDietSuggestionItem = `
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">${index}</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control yekan-bakh" placeholder="پیشنهاد">
            </div>
          </div>
    `
  }


function removeItemFromDiet(index) {
    // Remove the item from the list (e.g., using jQuery)
    $(`#dietContainer .diet-item[data-index="${index}"]`).remove();
  
    // Update the data-index attributes for the remaining items
    $('#dietContainer .diet-item').each(function(i, item) {
      $(item).attr('data-index', i);
      $(item).find('.title, .type, .suggestions').each(function(j, subItem) {
        $(subItem).attr('data-index', i); // Use the same index as the parent .exercise-item
      });
      $(item).find('.indexer').each(function(j, subItem) {
        $(subItem).text(i); // Use the same index as the parent .exercise-item
      });
    });
    
    dietFormData.splice(index, 1);
  }




var form = document.getElementById("dietForm");


form.addEventListener("change", function(event) {
  let value = event.target.value;
  let index = event.target.dataset.index;
  let label = event.target.dataset.label;

  dietFormData[index][label] = value;


  if(label === "title"){
    //change its title
    var title = document.getElementById(`diet-title-${index}`);
    title.textContent = dietFormData[index][label];
  }

});



document.getElementById('addItemToDietContainer').addEventListener('click', ()=>{
    console.log('addItemToDietContainer')
    addItemToDiet(dietFormData.length)
});




$("#dietContainer").on("click", ".remove-btn", function() {
  // Get the parent element of the clicked close button (i.e., the element to be closed)
  var dataIndex = $(this).data("index");
  removeItemFromDiet(dataIndex);
});
