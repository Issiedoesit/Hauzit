let jsonPath = '/data/employeeData.json'


$.getJSON(jsonPath, function(data) {
    // console.log(data)
    setTimeout(() => {
        employeeList(data) 
    }, 2000);
    loadDataPage(data);
})

function employeeList(data){
    let listOfEmp = ''
    for (let i = 0; i < data.length; i++) {
        listOfEmp += 
        `
            <a id="employee1" href="bio.html#${data[i].name.replace(' ', '')}" class="show-emp hover:scale-90 transition-transform duration-500 ease-out text-center space-y-5 col-span-1 mx-auto w-ninetyPercent sm:w-auto">
            <div class="bg-brandWhite2 max-w-60 sm:max-w-none h-52 sm:h-72 sm:w-72">
                <img src=${data[i].img} alt=${data[i].name} class="h-full object-cover"/>
            </div>
                <div>
                    <h1 class="font-biotifMedium text-lg text-brandBlue2">${data[i].name}</h1>
                    <p class="text-sm text-brandBlack1 font-biotifBook">${data[i].role}</p>
                </div>
            </a>
        `
    }
    $('#aboutEmployeesSection').html(listOfEmp)
}


function getListItems(items, item){
    let itemsList = ''
    for (let i = 0; i < items.length; i++) {
        itemsList += 
        `
        <li>${items[i][item]}</li>
        `
    }
    return itemsList;
}

function fetchEmployee(empName, data){
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.replace(' ', '') === empName){
            let currentEmployee = data[i]
            $('.employee-name').html(currentEmployee.name)
            $('.employee-role').html(currentEmployee.role)
            $('.employee-img').prop('src', currentEmployee.img)
            $('.employee-img').prop('alt', currentEmployee.name)
            $('#qualificationsList').html(getListItems(currentEmployee.qualifications, 'qualification'))
            $('#boardsList').html(getListItems(currentEmployee.boards, 'board'))
            $('#education').html(currentEmployee.education)
            $('#about').html(currentEmployee.about)
        }
    }
}


function loadDataPage(data){
    let currentPage = window.location.hash
    let employee = window.location.hash.split('#')[1]
    if(currentPage.includes(employee)){
        console.log(employee);
        fetchEmployee(employee, data)
    }
}





