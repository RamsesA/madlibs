var sentence={};
var replacements={};
var index=0;
alert("Filler, Go Away")
alert ("End with Shift+6(^)");
//populate(index,sentence);
alert (populate(sindex,sarray));

function populate(sindex,sarray){
	do{
		sarray[sindex]=prompt("Next word?");
		sindex = sindex+1;
	}
	while (sarray[sindex-1]!="^")
	console.log(sarray);
	return sarray;
}