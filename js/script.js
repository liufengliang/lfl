var arr=[1,2,2,3,3,4,4,5,6];
var brr=[];
function get_num(nums) {
	for(var i=0;i<nums.length;i++){
		if(brr.indexOf(nums[i])==-1){
			brr.push(nums[i]);
			// brr.sort(function(a,b){
			// 	return a-b;
			// })
		}
	}
	return brr;
}
alert(get_num(arr));

