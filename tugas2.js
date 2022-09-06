const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];


function list(result) {
    console.log(result);
}

function searchName(keyword, numOutput, callback){
    // declare variabel
    let outputName=[], result=[];

    // push nama yang mengandung unsur keyword
    name.forEach((value, key) => {
        if (value.toLowerCase().search(keyword) !== -1) {
            outputName.push(value)
        }
    });

    for (let i = 0; i < numOutput; i++) {
        if (typeof outputName[i] === "string") {
            result.push(outputName[i])
        }
    }

    // mengirim parameter result ke fungsi di atas yang nanti akan dijadikan parameter di fungsi searchName
    callback(result);
    
}

searchName("ol", 3, list);
