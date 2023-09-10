const tableStructure = [
    {
        title: "شناسه",
        slug: '_id',
    },
    {
        title: "نوع برنامه",
        slug: 'packageName',
    },
    {
        title: "نام کاربر",
        slug: 'full_name',
    },
    {
        title: "وضعیت برنامه",
        slug: 'status',
        useTranslate: true
    },
    {
        title: "تاریخ ایجاد",
        slug: 'createdAt',
        useJalaliFormat: true
    },
]
let data = [];

function toJalali(gregorianDate){
    return moment(gregorianDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
}


function _renderItem(data) {
    const tableBody = document.getElementById('tableBody');

    // Clear existing rows
    tableBody.innerHTML = '';
    // Iterate through the data and create rows


    if(data.length === 0 ){
        tableBody.innerHTML = `
            <style>
                .no-data-message {
                    text-align: center;
                    font-size: 18px;
                    color: #888;
                    margin-top: 20px;
                }
            </style>
            <div class="no-data-message">
                No data found.
            </div>
        `
    }else{
        data.forEach(item => {
            const row = document.createElement('tr');

            tableStructure.map(el => {
                if(el.useJalaliFormat=== true){
                    row.innerHTML += `<td>${toJalali(item[el.slug])}</td>`; // if you need jalali format 
                }else if(el.useTranslate === true){
                    row.innerHTML += `<td>${translate(item[el.slug])}</td>`; // if you need to translate a value add them into "../translate/translate.js"
                }else{
                    row.innerHTML += `<td>${item[el.slug]}</td>`;
                }
            })
            tableBody.appendChild(row);
        });

    }
}






document.addEventListener("DOMContentLoaded", () => {
    const userTableBody = document.getElementById("userTableBody");
    // fetchData() is located at "./scripts/api.js"
    fetchData( {
        page: page, 
        limit: limit.value, 
        totalPages: totalPages,
    })
});

document.getElementById('downloadCsvButton').addEventListener('click', ()=>{
    // convertToCSV() and downloadCSV() is located at "../scripts/exportCsv.js"
    const csvData = convertToCSV(data);
    const fileName = 'data.csv';
    downloadCSV(csvData, fileName);
});