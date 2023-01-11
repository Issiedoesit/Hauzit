let about_template = 
`
    <div href="" class="h-96 bg-red-500 hover:scale-90 transition-transform duration-500 ease-out text-center space-y-5 col-span-1 mx-auto w-ninetyPercent sm:w-auto">
    <div class="bg-brandWhite2 max-w-60 sm:max-w-none h-52 sm:h-72 sm:w-72">
    </div>
        <div>
            <div class="font-biotifMedium text-lg text-brandBlue2">${data[i].name}</div>
            <div class="text-sm text-brandBlack1 font-biotifBook">${data[i].role}</div>
        </div>
    </div>
`

function addTemplate(section, template){
    $('#' + section).html(template)
}

addTemplate('aboutEmployeesSection', about_template)
