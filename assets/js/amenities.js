let jsonPath = './../../data/amenities.json'



$.getJSON(jsonPath, function(data){
    // console.log(data);
    displayAmenities(data)
})


function getAmenities(amenities){
    let amenity = ''

        for (let i = 0; i < amenities.length; i++) {
            amenity += 
           ` 
           <label for="${amenities[i].id}" class="col-span-1 flex flex-row items-center accent-brandBlue gap-2 font-biotifBook">
                <input type="checkbox" name="${amenities[i].amenity}" id="${amenities[i].id}">
                <p>${amenities[i].amenity}</p>
            </label>
            `
        }

    return amenity

}



function displayAmenities(data){
    let amenities_main = ''


    data.forEach(element => {
        let amenities = element.amenities
        
        amenities_main +=  `
            <div id="${element.id}" class="space-y-5">
                <h3 class="text-sm font-biotifBold">${element.name}</h3>
                
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    ${getAmenities(amenities)}
                </div>
            </div>
            `
    });

    $('#amenities_wrap').html(amenities_main)
}