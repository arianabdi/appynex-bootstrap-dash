
var isLoading = true;

// Function to print the form data as a JSON object
function printData() {
  console.log('exercisesFormData', JSON.stringify(exercisesFormData, null, 2));
  console.log('dietFormData', JSON.stringify(dietFormData, null, 2));
}



// Event listener for the "Print Data" button
document.getElementById('printDataBtn').addEventListener('click', printData);

