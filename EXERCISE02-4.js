let marks={
    Mathematics:85,
	Science:78,
	English:92
}

let total=0;

for (let subject in marks){
	console.log(subject,":",marks[subject]);
	total +=marks[subject];
}	
console.log("Total:",total);    	