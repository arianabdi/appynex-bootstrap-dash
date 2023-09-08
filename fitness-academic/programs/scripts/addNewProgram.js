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

function removeItemFromDiet(index) {
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
  <div class="card card-body mg-b-10 diet-item"> 
    <div class="row">
      <div class="col-sm">
        <a data-bs-toggle="collapse" 
          href="#diet-${index}" 
          role="button" 
          aria-expanded="false" 
          aria-controls="diet-${index}"
        >
          <div class="col-sm " id="diet-title-${index}"> ${index}. ${dietFormData[index] ? dietFormData[index]['title'] : '-'} </div>
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
              <select class="form-select yekan-bakh type" data-index="${index}" data-label="type" id="select-diet-type">
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
  feather.replace();

  
}

function translateText(text){
  switch(text){
    case 'full_name':
      return 'نام و نام خانوادگی';
      break;
    case 'age':
      return 'سن';
      break;
    case 'height':
      return 'قد';
      break;
    case 'weight':
      return 'وزن';
      break; 
    case 'gender':
      return 'جنسیت';
      break;   
    case 'chest_size':
      return 'number';
      break;
    case 'waist_size':
      return 'سایز دور کمر (گودی کمر )';
      break;
    case 'abdominal_cir_size':
      return 'سایز دور شکم';
      break;
    case 'hip_cir_size':
      return 'سایز دور باسن';
      break;
    case 'thigh_cir_size':
      return 'سایز دور ران';
      break;
    case 'arm_cir_size':
      return 'سایز دور بازو';
      break;
    case 'wrist_cir_size':
      return 'سایز دور مچ دست';
      break;
    case 'is_homework_request':
      return 'درخواست شما برنامه تمرینی قابل اجرا در باشگاه یا منزل هست؟';
      break;
    case 'available_equipment_at_home':
      return 'در صورت درخواست برنامه در منزل،  وسایل ورزشی موجود در منزل هم بفرمایید.';
      break;
    case 'any_sport_background':
      return ' سابقه ورزشی ؟';
      break;
    case 'any_bodybuilding_background':
      return 'سابقه تمرینی بدنسازی و کار با دستگاه های بدنسازی. ..چند ماه ؟...  چندسال؟';
      break;
    case 'purpose_of_receiving_bodybuilding_program':
      return 'هدف اصلی شما از مراجعه و دریافت برنامه بدنسازی چیست؟';
      break;
    case 'orthopedic_problems':
      return 'مشکلات ارتوپدی ( درد در کمر،  زانو،  دست،  انحراف ستون فقرات و پاها....)';
      break;
    case 'surgery_history':
      return 'سابقه جراحی';
      break;
    case 'illness_history':
      return 'سابقه بیماری';
      break;
    case 'birth_history':
      return 'سابقه زایمان';
      break;
    case 'job':
      return 'شغل ( جواب ضروری بدلیل سنجش میزان فعالیت روزانه)';
      break;
    case 'daily_rest':
      return 'میزان استراحت روزانه ( جواب ضروری...)';
      break;
    case 'consumable_medicine':
      return 'داروی مصرفی';
      break;
    case 'use_drink':
      return 'آیا مشروبات الکلی و دخانيات استفاده میفرمایید؟ در صورت مثبت بودن جواب ، به چه میزان مصرف دارید؟';
      break;
    case 'use_supplements':
      return 'مکملهایی که تاکنون استفاده کردید و همچنین مکملهایی که در حال حاضر دارید هم بفرمایید؟';
      break;
    case 'hours_of_training':
      return 'ساعات دقیق تمرین ( عصر یا صبح )';
      break;
    case 'days_of_training':
      return 'روزهایی که تمرین میکنید و قرار هست تمرین کنید ( چند روز در هفته)  ، را بفرمایید؟';
      break;
    case 'friends_who_are_under_our_program':
      return 'نام دوستان و آشنایانی که زیرنظر بنده هستند،  و برنامه تمرینی گرفتند هم نام ببرید.';
      break;
    case 'reference':
      return 'معرف و طریقه آشنایی شما، با سیستم برنامه نویسی بنده هم بفرمایید.';
      break;
    default:
      return text;
  }
}

function addUserSpeceficationItem(key, value){
  var newItemHTML = `
  <div class="row">
    <div class="col-sm order-2 font-yekan-bakh">${translateText(key)}</div>
    <div class="col-sm order-3 d-flex justify-content-end font-yekan-bakh">${value}</div>
  </div>
  <hr>
  `

  
  // Convert the HTML structure to a DOM element
  var newItemElement = document.createElement('div');
  newItemElement.innerHTML = newItemHTML;

  // Add the new item to the form
  document.getElementById('specificationContainer').appendChild(newItemElement);
}


var form = document.getElementById("exerciseForm");
var dietForm = document.getElementById("dietForm");

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


dietForm.addEventListener("change", function(event) {
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

// repsInputs.addEventListener('input', function () {
//   var index = repsInputs.getAttribute('data-index');
//   formData[index].repeat = repsInputs.value;
// });

// Function to print the form data as a JSON object
function printData() {
  console.log('exercisesFormData', JSON.stringify(exercisesFormData, null, 2));
  
  console.log('dietFormData', JSON.stringify(dietFormData, null, 2));
}


async function loadProgram(){
  // Get the URL parameters
  var urlParams = new URLSearchParams(window.location.search);

  // Get the value of the "programId" parameter
  var programId = urlParams.get("programId");
  var token = localStorage.getItem("token");
  console.log('token', token, 'programId', programId);

  await axios.get(`http://localhost:30112/api/programs/${programId}`, {headers: {Authorization: `Bearer ${token}`}})
  .then(response => {
      console.log('response', response);
      var specifications = response.data.data;
      delete specifications._id;
      delete specifications.__v;
      delete specifications.diet;
      delete specifications.exercises;
      delete specifications.description;
      Object.keys(specifications).map(item=>{
        addUserSpeceficationItem(item, specifications[item])
      })

  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
}

loadProgram();

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



$("#exerciseContainer").on("click", ".remove-btn", function() {

  // Get the parent element of the clicked close button (i.e., the element to be closed)
  var dataIndex = $(this).data("index");
  removeItemFromExercise(dataIndex);

  // You can now work with 'elementToClose'

});

