// Initialize an empty JSON array to store the form data
var exercisesFormData = [];



// Function to add a new item to the form
function addItemToExercise(index) {
    var newItem = {
      "sets": "",
      "reps": "",
      "rest": "",
      "weight": "",
      "categoryId": "",
      "exerciseId": ""
    };
  
    // Create a new item HTML structure
    var newItemHTML = `
    
    <div class="card card-body mg-b-10 exercise-item" data-index="${index}"> 
    <div class="row">
      <div class="col-sm">
        <a data-bs-toggle="collapse" 
          href="#exercise${index}" 
          role="button" 
          aria-expanded="false" 
          aria-controls="collapseExample"
        >
          <div class="col-sm yekan-bakh indexer">${index}</div>
        </a>
      </div>
      <div class="col-sm d-flex justify-content-end">
        <a>
          <i data-feather="x" class="sz-20 mg-l-20 remove-btn" data-index="${index}"></i>
        </a>
      </div>
      
    </div>
    <div class="collapse mg-t-5 pd-t-20" id="exercise${index}">
      
      <div class="row mg-b-10">
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">تعداد ست</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control yekan-bakh sets" data-index="${index}" data-label="sets" placeholder="تعداد ست">
            </div>
          </div>
        </div>
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">تعداد تکرار</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control yekan-bakh reps" data-index="${index}" data-label="reps" placeholder="تعداد تکرار">
            </div>
          </div>
        </div>
      </div>

      <div class="row mg-b-10">
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">استراحت بین ست</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <input type="text" class="form-control yekan-bakh rest" data-index="${index}" data-label="rest" placeholder="استراحت بین ست">
            </div>
            </div>
        </div>
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">وزن </div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <input type="text" class="form-control yekan-bakh weight" data-index="${index}" data-label="weight" placeholder="وزن">
            </div>
            </div>
        </div>
        </div>

        <div class="row mg-b-10">
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">دسته بندی تمرین</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <select class="form-select yekan-bakh categoryId" data-index="${index}" data-label="categoryId" id="select-limit">
                    <option class="yekan-bakh" value="meal">وعده غذایی</option>
                    <option class="yekan-bakh" value="supplement"selected>مکمل</option>
                    <option class="yekan-bakh" value="limitation">محدودیت</option>
                </select>
            </div>
            </div>
        </div>
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">عنوان تمرین</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <select class="form-select yekan-bakh exerciseId" data-index="${index}" data-label="exerciseId" id="select-limit">
                    <option class="yekan-bakh" value="meal">وعده غذایی</option>
                    <option class="yekan-bakh" value="supplement"selected>مکمل</option>
                    <option class="yekan-bakh" value="limitation">محدودیت</option>
                </select>
            </div>
            </div>
        </div>
        </div>

        <div class="row mg-b-10">
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">توضیحات</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <textarea  id="description" class="form-control yekan-bakh description" data-index="${index}" data-label="description" rows="4" placeholder="توضیحات"></textarea>
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
    document.getElementById('exerciseContainer').appendChild(newItemElement);
  
    // Push the new item to the formData array
    exercisesFormData.push(newItem);
    feather.replace();
  
    
  }

function removeItemFromExercise(index) {
  // Remove the item from the list (e.g., using jQuery)
  $(`#exerciseContainer .exercise-item[data-index="${index}"]`).remove();

  // Update the data-index attributes for the remaining items
  $('#exerciseContainer .exercise-item').each(function(i, item) {
    $(item).attr('data-index', i);
    $(item).find('.categoryId, .exerciseId, .sets, .reps, .rest, .weight, .description').each(function(j, subItem) {
      $(subItem).attr('data-index', i); // Use the same index as the parent .exercise-item
    });
    $(item).find('.indexer').each(function(j, subItem) {
      $(subItem).text(i); // Use the same index as the parent .exercise-item
    });
  });
  
  exercisesFormData.splice(index, 1);
}



var form = document.getElementById("exerciseForm");


// Add a change event listener to the form element
form.addEventListener("change", function(event) {
    let value = event.target.value;
    let index = event.target.dataset.index;
    let label = event.target.dataset.label;

    exercisesFormData[index][label] = value;

    if(label === "title"){
      //change its title
      var title = document.getElementById(`exercise-title-${index}`);
      title.textContent = dietFormData[index][label];
    }
});


// Event listener for the "Add Item" button
document.getElementById('addItemToExerciseContainer').addEventListener('click', ()=>{
    console.log('addItemToExerciseContainer')
    addItemToExercise(exercisesFormData.length)
});


$("#exerciseContainer").on("click", ".remove-btn", function() {
  // Get the parent element of the clicked close button (i.e., the element to be closed)
  var dataIndex = $(this).data("index");
  removeItemFromExercise(dataIndex);
});

