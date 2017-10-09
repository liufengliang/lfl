var arr=[1,2,2,3,3,4,4,5,6];
for(var i=0;i<arr.length;i++){
	if(i==arr[i]){
		var brr=arr.splice(i,1);
	}
}
document.write(arr);