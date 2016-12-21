//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//write your code here .....
function each(coll, func) {
     if (Array.isArray(coll)) {
         for (var i = 0; i < coll.length; i++) {
                func(coll[i], i);
         }
     } else {
         for (var key in coll) {
                func(coll[key], key);
         }
     }
}
	function player(name){
		var info={};
		info={
			name:name,
			addInfo:addInfo,
			increaseLevel:increaseLevel,
			isAvailable:isAvailable
		}
		return info;
	}
	function addInfo(age,position,level,availability){
	this.age=age;
	this.position=position;
	this.level=level;
	this.availability=availability;

	}

	function increaseLevel(inc){
		this.level+=inc;
		return this.level;
	}
	function isAvailable(){
		return this.availability;
	}

	player1=player("waleed");
	player2=player("ahmed");
	player3=player("mohammed");
	player4=player("hamzah");
	player1.addInfo(18,"lw",33,true);
	player2.addInfo(18,"rw",26,true);
	player3.addInfo(18,"cb",20,true);
	player4.addInfo(18,"lm",40,true);
	var arrayOfPlayers=[player1,player2,player3,player4];
	function decrease(){
	var dec = arrayOfPlayers.map(function(x){
	   if(x.level>30){
	   	x.level--;
	   }
	   return x;
	});

	}
	function sortPalyerBy (array,key){
		var arr=[];
		var newarr=[];
		each(array,function (x,i){
		arr.push(x[key]);								
		})
		arr.sort();
		each(arr,function(x,i){
			if(arrayOfPlayers[i][key]===x){
			newarr.push(arrayOfPlayers[i])		
			}
		})
		return newarr;
			}