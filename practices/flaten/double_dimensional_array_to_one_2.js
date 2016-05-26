'use strict';

function double_to_one(collection) {
	var arr = [];
	var returnArr = [];
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
		if(returnArr.indexOf(arr[i]) == -1){
			returnArr.push(arr[i]);
		}
	}
	return returnArr;
}

module.exports = double_to_one;
