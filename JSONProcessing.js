// nomor 1
function processData(allData) {
    var processedData = {"h":[],"d":[]};
    // mengambil key JSON untuk disimpan di dalam "h"
    for (var data in allData[0]) {
        processedData["h"].push(data);
    }
    // loop untuk mengambil data dari masing JSON Object untuk disimpan di dalam "d"
    for (var element in allData) {
        var temp = [];
        for (var data in allData[element]) {
            temp.push(allData[element][data]);
        };
        processedData["d"].push(temp);
    }
    return processedData;
}


var dataInput = [{"username":"ali","hair_color":"brown","height":1.2},{"username" :"marc","hair_color":"blue","height":1.4},{"username":"joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height": 1.8}]
console.log(processData(dataInput))