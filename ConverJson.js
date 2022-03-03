function getValue(object) {
    if (!object || typeof object !== 'object') return [];
		if ('dimensions' in object) return [object.dimensions];
    return Object.values(object).reduce((r, v) => [...r, ...getValue(v)], []);
}

let inputData = {
  "dimensions": [{
    "id": "dimension_re",
    "values": ["East", "East", "West", "SouthWest", "South","NorthEast"]
  }, {
    "id": "dimension_cnt",
    "values": ["London", "Italy", "Germany", "US", "Russia","India"]
  },{
    "id": "measure_sales",
    "values": [100, 156, 432, 462, 25,100]
  }, {
    "id": "measure_qty",
    "values": [85, 34, 153, 434, 52, 43]
  }, {
    "id": "measure_profit",
    "values": [123, 45, 421, 465, 451, 56]
  }],
  "metadata": [{
    "id": "measure_sales",
    "label": "Sales",
    "type":"number"
  }, {
    "id": "measure_qty",
    "label": "Quantity",
     "type":"number"
  },{
    "id": "measure_profit",
    "label": "Profit",
     "type":"number"
  },{
    "id": "dimension_re",
    "label": "Region",
    "type":"string"
  },{
    "id": "dimension_cnt",
    "label": "Country",
    "type":"string"
  }]
}

var objMatch = {}

for(let i = 0; i < inputData.metadata.length; i++){
		for(let key in inputData.metadata[i]){				
			objMatch[inputData.metadata[i].id] = inputData.metadata[i].label			
		}
}

var ar = getValue(inputData)

var mapObj = {}

var val=0
var inc=0

var mainObj = []

while(val<=inputData.dimensions.length){
var localObj = {}
for(let i = 0; i < inputData.dimensions.length; i++ ){
        var arr = inputData.dimensions[i].values
        for(let j=0;j<arr.length;j++){
                let temp = objMatch[ar[0][i].id]
                localObj[temp] = arr[inc] 
        }
}
mainObj.push(localObj)
val++
inc++
}

console.log(mainObj)
