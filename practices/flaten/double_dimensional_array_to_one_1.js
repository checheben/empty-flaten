'use strict';

function double_to_one(collection) {
	var arr = [];
	for(var i=0; i<collection.length; i++){
		if(typeof collection[i] == "Array"){
			for(var j=0; j<collection[j].length; j++){
				arr.push(collection[i][j]);
			}
		}else{
			arr.push(collection[i]);
		}
	}
	arr = arr.toString().split(',');
	for(i=0; i<arr.length; i++){
		arr[i] = parseInt(arr[i]);
	}
	return arr;
}

module.exports = double_to_one;
