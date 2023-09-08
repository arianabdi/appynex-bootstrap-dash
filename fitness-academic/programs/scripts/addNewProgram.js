// Initialize an empty JSON array to store the form data
var exercisesFormData = [];
var dietFormData = [];


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
    <h6>${index}</h6>
    <div class="card card-body mg-b-10"> 
    <div class="row">
      <div class="col-sm">
        <a data-bs-toggle="collapse" 
          href="#exercise${index}" 
          role="button" 
          aria-expanded="false" 
          aria-controls="collapseExample"
        >
          <div class="col-sm yekan-bakh">1. عنوان تمرین جدید</div>
        </a>
      </div>
      <div class="col-sm d-flex justify-content-end">
        <a href="">
          <i data-feather="edit-2" class="sz-15 mg-l-20"></i>
        </a>
        <a  href="">
          <i data-feather="x" class="sz-20 mg-l-20"></i>
        </a>
      </div>
      
    </div>
    <div class="collapse mg-t-5 pd-t-20" id="exercise${index}">
      
      <div class="row mg-b-10">
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">تعداد ست</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control yekan-bakh" data-index="${index}" data-label="sets" placeholder="تعداد ست">
            </div>
          </div>
        </div>
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">تعداد تکرار</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control yekan-bakh " data-index="${index}" data-label="reps" placeholder="تعداد تکرار">
            </div>
          </div>
        </div>
      </div>

      <div class="row mg-b-10">
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">استراحت بین ست</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <input type="text" class="form-control yekan-bakh" data-index="${index}" data-label="rest" placeholder="استراحت بین ست">
            </div>
            </div>
        </div>
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">وزن </div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <input type="text" class="form-control yekan-bakh" data-index="${index}" data-label="weight" placeholder="وزن">
            </div>
            </div>
        </div>
        </div>

        <div class="row mg-b-10">
        <div class="col-sm order-2">
            <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">دسته بندی تمرین</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
                <select class="form-select yekan-bakh" data-index="${index}" data-label="categoryId" id="select-limit">
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
                <select class="form-select yekan-bakh" data-index="${index}" data-label="exerciseId" id="select-limit">
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
                <textarea  id="description" class="form-control yekan-bakh" rows="4" placeholder="توضیحات"></textarea>
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

// Function to add a new item to the form
function addItemToDiet(index) {
  var newItem = {
    "title": "",
    "type": "",
    "suggestions": [
      "",
      "",
    ],
  };

  // Create a new item HTML structure
  var newItemHTML = `
  <h6>${index}</h6>
  <div class="card card-body mg-b-10"> 
    <div class="row">
      <div class="col-sm">
        <a data-bs-toggle="collapse" 
          href="#diet-${index}" 
          role="button" 
          aria-expanded="false" 
          aria-controls="diet-${index}"
        >
          <div class="col-sm " id="element-title-${index}"> ${index}. ${dietFormData[index] ? dietFormData[index]['title'] : '-'} </div>
        </a>
      </div>
      <div class="col-sm d-flex justify-content-end">
        <a href="">
          <i data-feather="edit-2" class="sz-15 mg-l-20"></i>
        </a>
        <a  href="">
          <i data-feather="x" class="sz-20 mg-l-20"></i>
        </a>
      </div>
      
    </div>
    <div class="collapse mg-t-5 pd-t-20" id="diet-${index}">
    
      <div class="row mg-b-10">
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">عنوان</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control" data-index="${index}" data-label="title" placeholder="عنوان">
            </div>
          </div>
        </div>
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">نوع</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <select class="form-select yekan-bakh" data-index="${index}" data-label="type" id="select-diet-type">
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
          <div class="row mg-t-20">
            <div class="col-sm-8 order-2 yekan-bakh mg-t-5">موارد پیشنهادی</div>
            <div class="col-sm order-3 d-flex justify-content-end">
              <a class="col-sm btn btn-outline-light yekan-bakh btn-sm">
                <i data-feather="plus"></i> افزودن پیشنهاد جدید
              </a> 
            </div>
          </div>

          <div id="suggestions-container-${index}">

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


  
}


var form = document.getElementById("exerciseForm");
var dietForm = document.getElementById("dietForm");

// Add a change event listener to the form element
form.addEventListener("change", function(event) {
    let value = event.target.value;
    let index = event.target.dataset.index;
    let label = event.target.dataset.label;

    exercisesFormData[index][label] = value;
});


dietForm.addEventListener("change", function(event) {
  let value = event.target.value;
  let index = event.target.dataset.index;
  let label = event.target.dataset.label;

  dietFormData[index][label] = value;


  if(label === "title"){
    //change its title
    var title = document.getElementById(`element-title-${index}`);
    title.textContent = dietFormData[index][label];
  }

});

// repsInputs.addEventListener('input', function () {
//   var index = repsInputs.getAttribute('data-index');
//   formData[index].repeat = repsInputs.value;
// });

// Function to print the form data as a JSON object
function printData() {
  console.log('exercisesFormData', JSON.stringify(exercisesFormData, null, 2));
  
  console.log('dietFormData', JSON.stringify(dietFormData, null, 2));
}


// sets.addEventListener('input', function (event) {
//     var index = setInput.getAttribute('data-index');
  
    
//   });

// Event listener for the "Add Item" button
document.getElementById('addItemToExerciseContainer').addEventListener('click', ()=>{
    console.log('addItemToExerciseContainer')
    addItemToExercise(exercisesFormData.length)
});

document.getElementById('addItemToDietContainer').addEventListener('click', ()=>{
    console.log('addItemToDietContainer')
    addItemToDiet(dietFormData.length)
});

// Event listener for the "Print Data" button
document.getElementById('printDataBtn').addEventListener('click', printData);
