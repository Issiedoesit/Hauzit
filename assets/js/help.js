let jsonPath = './../../data/help.json'



$.getJSON(jsonPath, function(data){
    console.log(data);
    showHelp(data)
})


function showHelp(data){
    let helpList = ''
    data.map((help)=>{
        console.log(help);
        helpList += 
        `
            <div class="col-span-1 shadow-md pb-5 max-w-sm mx-auto text-brandBlack1 bg-white flex flex-col justify-between">
            <img src="${help.img}" alt="${help.head}" class="h-52 w-full object-cover">
            <h3 class="text-lg py-4 px-6 text-center sm:text-xl md:text-2xl font-biotifSemiBold">
                ${help.head}
            </h3> 
            <p class="text-center px-6 font-biotifBook">
            ${help.text}
            </p>
            <div class="px-3 pt-2 pb-4 flex flex-col items-center text-center gap-5">
                <a href="${help.link}" class="py-4 text-brandRed text-sm md:text-base w-fit h-fit font-biotifSemiBold rounded-five">${help.linkText}</a>
            </div>
            </div>
        `
    })
    $('#help_wrap').html(helpList)
}