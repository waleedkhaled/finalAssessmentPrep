//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
function cohort2 (name,age,education,nationality){
	return {
		name:name,
		age:age,
		education:education,
		nationality:nationality
	}
}

friend1=cohort2("mohammed masaeid",26,"computer science","jordanian")
friend2=cohort2("hamzah",28,"cis","jordanian")
var friends=[friend1,friend2];

function showFriend(frinedData){
	return frinedData.name+" with the age of "+frinedData.age+" and with "+frinedData.education +" education" 
}

function avergeStudents(arrayOfFriends){
	var ages=0;
	for (i=0;i<arrayOfFriends.length;i++){
		ages+=arrayOfFriends[i].age;
	}
	var result=0;
	return result=ages/arrayOfFriends.length;

}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...

function rangeSquared(num1,num2){
	var arr=[];
	for (i=num1;i<=num2;i++){
		if (i%2===0){
			arr.push(i*i);
		}
	}
	if (Array.from(arguments).length===1&&arguments[0]%2===0){
		arr.push(arguments[0]*arguments[0])
	}
	return arr;
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function leader(arr){
	var big=0;
	var newArr=[];
	var result=[];
	for (i=0;i<arr.length;i++){
		newArr=arr.slice(i+1)
		if(arr[i]> Math.max.apply(null, newArr)){
			result.push(arr[i])
		}
	}
	return result;
}
