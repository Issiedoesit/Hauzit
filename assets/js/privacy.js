let jsonPath = './../../data/privacy.json'


$.getJSON(jsonPath, function(data){
    // console.log(data);
    getSubPolicy(data)
})







function getSubPolicy(data){
    let subSectionsList = []
    let sectionsList = []
    // let subPolicyList = ''
    data.forEach(element => {
        if(element.subSections){
            subSectionsList.push(element.subSections)
        }
    });
    subSectionsList.forEach((section)=>{
        section.forEach((sub)=>{
            console.log(sub);
            
        });
    })
    // console.log(subSectionsList);
}


function getPolicy(data){

}


function showPolicy(data){

}