let about_template = 
`
    <div href="" class="shadow-md h-96 bg-white hover:scale-90 transition-transform duration-500 ease-out text-center space-y-5 col-span-1 mx-auto w-ninetyPercent sm:w-auto">
    <div class="bg-brandWhite2 skeleton-template max-w-60 sm:max-w-none h-52 sm:h-72 sm:w-72">
    </div class="w-full">
        <div class="w-full flex flex-col gap-3 items-center">
            <div class="h-4 px-20 w-sixtyPercent bg-brandWhite2 skeleton-template py-2"></div>
            <div class="h-4 px-10 w-fortyPercent bg-brandWhite2 skeleton-template py-2"></div>
        </div>
    </div>
`

function addTemplate(section, template, repeat){
    let templateList = ''
    for (let i = 0; i < repeat; i++) {
        templateList += template
        
    }
    $('.' + section).html(templateList)
}

addTemplate('show-about-template', about_template, 4)
