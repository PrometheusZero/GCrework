/*
THOUGHTS ON THIS:
I COULD PROBABLY DO WITH 3 OBJECTS
1. RESOURCES: THINGS THAT ARE PRODUCED (FROM MATERIALS TO MEN AND SQUADS)
2. PRIMARIES: THINGS WHICH PRODUCE THINGS FROM NOTHING (FROM MINES TO CONSCRIPTION)
3. TRANSDUCERS: THINGS WHICH PRODUCE THINGS FROM OTHER THINGS (FROM FACTORIES TO FORMATION BUILDERS)

ORGANISATION - COULD COPY USMC
FIRETEAM - 1 CPL, 2 RIFLEMEN, 1 AUTOGUNNER
RIFLE SQUAD - 1 SGT, 3 FIRETEAMS
RIFLE PLATOON - 3 RIFLE SQUADS, PLATOON HQ (1 LT, 1 SSGT, 1 SGT, 1 PT)
WEAPONS PLATOON - LIKE RIFLE PLATOON BUT SWAP RIFLE SQUADS FOR:
	60MM MORTAR SECTION - 1 SSGT, 3 MORTAR SQUADS (1 CPL, 1 MORTAR, 3 PT)
	ASSAULT SECTION - 1 SGT, 3 ASS. SQUADS (1 CPL, 2 TEAMS) (1 MISSILE LAUNCHER, 2 PT)
	MG SECTION - 1 SSGT, 3 MG SQUADS (1 SGT, 2 TEAMS) (1 CPL, 1 MG, 3 PT)
RIFLE COMPANY - 3 RIFLE PLATOONS, 1 WEAPONS COMPANY, COMPANY HQ (1 CPT, 1 LT, 1SGT, GSGT, CPL, PT)

WEAPONS COMPANY - COMPANY HQ (1 MAJ, 1 CPT, 1SGT, MSGT, CPL, 2 PT)
	80MM MORTAR PLATOON
		PLATOON HQ (PL CMDR, PL SGT, AMMO TECH, 2 MEN)
		2 MORTAR SECTIONS
			SECTION HQ (SEC LEADER, 2 MEN, 2 FORWARD OBSERVERS)
			4 MORTAR SQUAD (SQUAD LEADER, GUNNER, ASS.GUNNER, 3 MEN)
	ANTI-ARMOUR PLATOON
		PLATOON HQ (PL CMDR, PL SGT, MAN)
		ANTI-ARMOUR SECTION
			SECTION LEADER
			2 AA SQUADS
				2 AA TEAMS (4 MEN, 2 MISSILE LAUNCHERS)
		TOW SECTION
			SECTION LEADER
			4 TOW SQUAD (SAQAUD LEADER, 2 GUNNERS, 2 ASS.GUNNERS, 2 TOW LAUNCHERS)
	HEAVY MG PLATOON
		PLATOON HQ (PL CMDR, PL SGT, 2 MEN)
		3 HMG SECTIONS
			2 HMG SQUADS (SQUAD LEADER, GUNNER, ASS.GUNNER. MAN, 1 HMG)
	
HQ AND SERVICE COMPANY
	BATTALION HQ (LT COL, MAJ, SMAJ, EXEC STAFF SECTIONS (S-1, S-2, S-3, S-4, S-6), CHAPLAIN SECTION)
	COMPANY HQ (1 CPT, 1 LT, 1 SSGT, 1SGT, 1PT)
	SCOUT SNIPER PLATOON
		PLATOON HQ (1 LT, 1 SGT, 1 PT)
		8-10 SNIPER TEAMS (1 SNIPER/CPL, 1 SPOTTER/PT)
	COMMS PLATOON
		PLATOON HQ (1 LT, 1SSGT)
		DATA SECTION - ?
		WIRE SECTION - ?
		RADIO SECTION - ?
		MAINTENANCE SECTION - ?
	SERVICE PLATOON
		SUPPLY, ARMOUR, MOTOR TRANSPORT, TOW MAINTENANCE, DINING FACILITIES LEAD BY BATT. SUPPLY OFFICER
	MEDICAL PLATOON
		2 MEDICAL SECTION (1 SURGEON/LT, 3 CORPSMEN) OTHER (1 PHYSICIAN/SSGT, 3 CORPSMEN).
	
INFANTRY BATTALION - HQ AND SERVICE COMPANY, 3 RIFLE COMPANY, 1 WEAPON COMPANY

INFANTRY REGIMENT - 3 BATTALIONS, REGIMENTAL HQ COMPNAY (COL, LT COL)

DIVISION - 3 INFANTRY REGIMENTS, ARTILLARY REGIMENT, SEVERAL SEPERATE BATT (IE RECON, ASSAULT AMPHIBIAN, TANK, LIGHT ARMOUR RECON, COMBAT ENGINEER) AND A HQ BATT



RANKS

PRIVATE					PT
PRIVATE FIRST CLASS		P1C
LANCE CORPORAL			LC
CORPORAL				CPL
SERGEANT				SGT
STAFF SERGEANT			SSGT
GUNNERY SERGEANT		GSGT
MASTER SERGEANT			MSGT
FIRST SERGEANT			1SGT
MASTER GUNNERY SERGEANT	MGS
SERGEANT MAJOR			SMAJ

SECOND LIEUTENANT		2LT
FIRST LIEUTENANT		1LT
CAPTAIN					CPT
MAJOR					MAJ
LIEUTENANT COLONEL		LT COL
COLONEL					COL
BRIGADIER GENERAL		BGEN
MAJOR GENERAL			MGEN
LIEUTENANT GENERAL		LGEN
GENERAL					GEN

*/

$(document).ready(function(){
	$('#warTable').hide();
	for(var test in combatant){
		let testObj = combatant[test];
		testObj.home.current += 100;
	}
});

const war = {
	flag:false,
	continuation: false,
	attacking: "",
	loot: []
};

const updateDisplay = function(){
	
	for(let prop in resources){
		let subObj = resources[prop];
		subObj.currentDisplay.text(subObj.current);
	}
	
	for(let prop in combatant){
		let subObj = combatant[prop];
		subObj.home.currentDisplay.text(subObj.home.current);
		subObj.muster.currentDisplay.text(subObj.muster.current);
		subObj.enemy.currentDisplay.text(subObj.enemy.current);
		if(subObj.enemy.current > 0){
			subObj.enemy.row.show();
		}else{
			subObj.enemy.row.hide();
		}
	}
	
	for(let prop in primaries){
		let subObj = primaries[prop];
		subObj.currentDisplay.text(subObj.current);
	}
	
	if(war.flag === true){
		$('#warTable').show();
	}else{
		$('#warTable').hide();
	}
	
};

const locations = {
	thorp: {
		soldier: calculateForce(5),
		rewardLevel: 1
	},
	hamlet: {
	//	soldier: calculateForce(20),
		fireTeam: calculateForce(2),
		rewardLevel: 2
	},
	village: {
		soldier: calculateForce(50),
		fireTeam: calculateForce(15),
		rifleSquad: calculateForce(5),
		rewardLevel: 4
	}
};

function calculateForce(power){
	return power + Math.ceil(Math.random() * power) + Math.ceil(Math.random() * power * resources.space.total);
}

function processKill(killedObj, side, wounds){	//should only be passed a subObject within combatant
	
//	console.log("processKill called. Args are: obj" + killedObj.stat.pow + "/" + killedObj.stat.def + " side:" + side + " wounds:" + wounds);	//
	
	if(!(killedObj.stat.components.length > 0)){
		//object is individual
		if(side == "enemy"){
			if(wounds > killedObj.enemy.current){
				wounds = killedObj.enemy.current;
			}
			killedObj.enemy.temp -= wounds;
			for(let i=0;i<wounds;i++){
				let dropChance = Math.random();
				if(dropChance < 0.25){
//					console.log("Gen loot " + killedObj.stat.drops);	//
					war.loot.push(killedObj.stat.drops);
				}
			}
		}else{
			if(wounds > killedObj.muster.current){
				wounds = killedObj.muster.current;
			}
			killedObj.muster.temp -= wounds;
		}
	}else{	
		//object is a units
		//process top object death!
		if(side == "enemy"){
			killedObj.enemy.temp -= 1;
			let dropChance = Math.random();
			if(dropChance < 0.25){
//				console.log("Gen loot " + killedObj.stat.drops);	//
				war.loot.push(killedObj.stat.drops);
			}
		}else{
			killedObj.muster.temp -= wounds;
		}
		//propergate wounds through components
		let hitArray = [];
		for(let i=0;i<killedObj.stat.components.length;i++){
			hitArray.push(0);
		}
		//hitArray should now be [0,0,0.....0]
//		console.log("checking blank hitArray: " + hitArray);	//
		for(let i=0;i<wounds;i++){
			let hit = Math.floor(Math.random()*killedObj.stat.components.length);
			hitArray[hit] += 1;
		}
		//this should assign wounds randomly across hitArray
		//should be able to map to components array
		//hitArray = [0,0,1,0]
		//..components = ["sarge", "fireteam", "fireteam", "fireteam"]
		//this shows a fireteam is hit, 2 others and sarge are fine!
		console.log("checking filled hitArray: " + hitArray);	//
		for(let i=0;i<hitArray.length;i++){
			if(hitArray[i] == 0){
				//component not hit! Add one to enemy/muster!
				let searchComponent = killedObj.stat.components[i];
//				console.log("hitArray index " + i + " not hit referring to " + killedObj.stat.components[i]);	//
				for(var looking in combatant){
					let lookObj = combatant[looking];
					if(looking == searchComponent){
						if(side == "enemy"){
							lookObj.enemy.temp++;
						}else{
							lookObj.muster.temp++;
						}
					}
				}
			}else{
				//component hit, process kill via this function
				let searchComponent = killedObj.stat.components[i];
				for(var looking in combatant){
					let lookObj = combatant[looking];
					if(looking == searchComponent){
						console.log("recalling processKill on " + looking + " " + hitArray[i] + " times");	//
						if(side == "enemy"){
							processKill(lookObj, "enemy", hitArray[i]);
						}else{
							processKill(lookObj, "mine", hitArray[i]);
						}
					}
				}
			}
		}
	}
}

var clock = setInterval(function(){
	
	//LOOP THOUGH PRIMARIES, INCREASE RESOURCES AS APPROPRIATE
	for(var prop in primaries){
		let priObj = primaries[prop];
		priObj.tCount++;
		
		if(priObj.tCount === priObj.time){
			priObj.tCount = 0;
			for(let i=0;i<priObj.current;i++){
				let diceroll = Math.random();
				if(diceroll > 0.95){	//could 0.95 be replaced with primary reference so differenet primaries can have different rare chances?
					//produce rare item
					for(var prop2 in resources){
						let resObj1 = resources[prop2];
						if(prop2 == priObj.produces[1].type){
							resObj1.total += priObj.produces[1].qty;
							resObj1.current += priObj.produces[1].qty;
				//			console.log("Adding rare " + priObj.produces[1].qty + " to " + prop2 + " in res");	//
							break;
						}
					}
					for(var prop2 in combatant){
						let resObj1 = combatant[prop2];
						if(prop2 == priObj.produces[1].type){
							resObj1.home.total += priObj.produces[1].qty;
							resObj1.home.current += priObj.produces[1].qty;
				//			console.log("Adding rare " + priObj.produces[1].qty + " to " + prop2 + " in comb");	//
							break;
						}
					}
				}else{
					//produce common item
					for(var prop3 in resources){
						let resObj2 = resources[prop3];
						if(prop3 == priObj.produces[0].type){
							resObj2.total += priObj.produces[0].qty;
							resObj2.current += priObj.produces[0].qty;
				//			console.log("Adding " + priObj.produces[0].qty + " to " + prop3 + " in res");	//
							break;
						}
					}
					for(var prop3 in combatant){
						let resObj2 = combatant[prop3];
						if(prop3 == priObj.produces[0].type){
							resObj2.home.total += priObj.produces[0].qty;
							resObj2.home.current += priObj.produces[0].qty;
				//			console.log("Adding " + priObj.produces[0].qty + " to " + prop3 + " in comb");	//
							break;
						}
					}
				}
			}
		}
	}
	
	//LOOP THROUGH TRANSDUCERS, CHECK IF CAN PROCESS, THEN PROCESS IF CAN.
	for(var stat in transducers){
		let tranObj = transducers[stat];
		tranObj.tCount++;
		
	
		if(tranObj.tCount === tranObj.time){
			//If time to generate, restart counter and check for resource availability
			tranObj.tCount = 0;
			for(let i=0;i<tranObj.current;i++){
				var tranNeeds = [];
				for(let i=0;i<tranObj.consumes.length;i++){
					for(var search in resources){
						let searchObj = resources[search];
						if(tranObj.consumes[i].type == search){
							if(tranObj.consumes[i].qty <= searchObj.current){
								tranNeeds.push(searchObj);
								break;
							}
						}
					}
					for(var search in combatant){
						let searchObj = combatant[search];
						if(tranObj.consumes[i].type == search){
							if(tranObj.consumes[i].qty <= searchObj.home.current){
								tranNeeds.push(searchObj);
								break;
							}
						}
					}
				}
				console.log("tranNeeds is " + tranNeeds);
				if(tranObj.consumes.length == tranNeeds.length){
					//got everything, loop and take
					for(let i=0;i<tranObj.consumes.length;i++){						
						for(var take in resources){
							let takeObj = resources[take];
							if(tranObj.consumes[i].type == take){
								takeObj.current -= tranObj.consumes[i].qty;
				//				console.log("Taking " + tranObj.consumes[i].qty + " from " + take + " in res");	//
							}
						}
						for(var take in combatant){
							let takeObj = combatant[take];
							if(tranObj.consumes[i].type == take){
								takeObj.home.current -= tranObj.consumes[i].qty;
				//				console.log("Taking " + tranObj.consumes[i].qty + " from " + take + " in comb");	//
							}
						}
					}
					//got everything, loop and put
					for(let i=0;i<tranObj.produces.length;i++){
						for(var put in resources){
							let putObj = resources[put];
							if(tranObj.produces[i].type == put){
								putObj.current += tranObj.produces[i].qty;
				//				console.log("Adding " + tranObj.produces[i].qty + " to " + put + " in res");	//
							}
						}
						for(var put in combatant){
							let putObj = combatant[put];
							if(tranObj.produces[i].type == put){
								putObj.home.current += tranObj.produces[i].qty;
				//				console.log("Adding " + tranObj.produces[i].qty + " to " + put + " in comb");	//
							}
						}
					}
				}
			}	
		}
	}
	
	if(war.flag === true){
		var myForce = 0;
		for(var troops in combatant){
			let troopObj = combatant[troops];
			myForce += troopObj.muster.current;
			console.log("I have " + troopObj.muster.current + " " + troops);
		}
		console.log("myForce is " + myForce);	//
		if(myForce < 1){
			//false start
			war.flag = false;
			war.attacking = "";
		}else{
			//real battle
			if(war.continuation === false){
				//new attack, generate enemies
				war.continuation = true;
				for(var loc in locations){
					let locObj = locations[loc];
					if(loc == war.attacking){
						for(enemy in locObj){
							let enemyMethod = locObj[enemy];
							for(troop in combatant){
								if(enemy == troop){
									combatant[troop].enemy.current += enemyMethod;	//should be a function?
								}
							}
						}
					}
				}
				
			}
			var enemyForce = 0;
			for(var troops in combatant){
				let troopObj = combatant[troops];
				enemyForce += troopObj.enemy.current;
				console.log("Enemy has " + troopObj.enemy.current + " " + troops);
			}
			console.log("enemyForce is " + enemyForce);
			//player hits game
			for(var attacker in combatant){
				let atkObj = combatant[attacker];
				for(let i=0;i<atkObj.muster.current;i++){
					for(var defender in combatant){
						let aim = Math.random();
						let defObj = combatant[defender];
						console.log("my " + attacker + i + " aims for " + aim + " against " + defender + " odds of " + (defObj.enemy.current / enemyForce));
						if(aim < (defObj.enemy.current / enemyForce)){
							//hit!
							if(atkObj.stat.pow < defObj.stat.def){
								let wound = Math.random()*defObj.stat.def;
								console.log("my " + attacker + " " + i + " rolls a " + wound + " against " + atkObj.stat.pow);	//
								if(wound < atkObj.stat.pow){
									console.log("my " + attacker + " " + i + " kills a " + defender);	//
									processKill(defObj,"enemy",1);
									enemyForce = 0;
									for(var troops in combatant){
										let troopObj = combatant[troops];
										enemyForce += troopObj.enemy.current;
										console.log("Enemy has " + troopObj.enemy.current + " " + troops);
									}
									console.log("enemyForce is " + enemyForce);
								}
							}else{
								let smash = Math.ceil(atkObj.stat.pow / defObj.stat.def);
								let smashResult = Math.round((smash / 2) + Math.random()*smash);
								console.log("my " + attacker + " " + i + " smashes " + smashResult + " " + defender);	//
								processKill(defObj, "enemy", smashResult);
								enemyForce = 0;
								for(var troops in combatant){
									let troopObj = combatant[troops];
									enemyForce += troopObj.enemy.current;
									console.log("Enemy has " + troopObj.enemy.current + " " + troops);
								}
								console.log("enemyForce is " + enemyForce);
							}
						}
					}
				}
			}
			//game hits player
			for(var resist in combatant){
				let resiObj = combatant[resist];
				for(let i=0;i<resiObj.enemy.current;i++){
					for(var valient in combatant){
						let aim = Math.random();
						let valObj = combatant[valient];
						console.log("enemy " + resist + i + " aims for " + aim + " against " + valient + " odds of " + (valObj.muster.current / myForce));
						if(aim < (valObj.muster.current / myForce)){
							//hit
							if(resiObj.stat.pow < valObj.stat.def){
								let wound = Math.random()*valObj.stat.def;
								console.log("enemy " + resist + " " + i + " rolls a " + wound + " against " + resiObj.stat.pow);	//
								if(wound < resiObj.stat.pow){
									console.log("enemy " + resist + " " + i + " kills a " + valient);	//
									processKill(valObj, "mine", 1);
									myForce = 0;
									for(var troops in combatant){
										let troopObj = combatant[troops];
										myForce += troopObj.muster.current;
										console.log("I have " + troopObj.muster.current + " " + troops);
									}
									console.log("myForce is " + myForce);
								}
							}else{
								let smash = Math.ceil(resiObj.stat.pow / valObj.stat.def);
								let smashResult = Math.round((smash / 2) + Math.random()*smash);
								console.log("enemy " + resist + " " + i + " smashes " + smashResult + " " + valient);	//
								processKill(valObj, "mine", smashResult);
								myForce = 0;
								for(var troops in combatant){
									let troopObj = combatant[troops];
									myForce += troopObj.muster.current;
									console.log("I have " + troopObj.muster.current + " " + troops);
								}
								console.log("myForce is " + myForce);
							}
						}
					}
				}
			}
			myForce = 0;
			enemyForce = 0;
			for(var casualties in combatant){
				let trpObj = combatant[casualties];
				
				trpObj.muster.current += trpObj.muster.temp;
				if(trpObj.muster.current < 0){trpObj.muster.current = 0;}
				trpObj.muster.temp = 0;
				myForce += trpObj.muster.current;
				
				trpObj.enemy.current += trpObj.enemy.temp;
				if(trpObj.enemy.current < 0){trpObj.enemy.current = 0;}
				trpObj.enemy.temp = 0;
				enemyForce += trpObj.enemy.current;
			}
			
			if(myForce <= 0){
				//you lose
				console.log("You lose");
				//turn war off
				war.flag = false;
				war.continuation = false;
				war.attacking = "";
				//bin all generated drops
				war.loot = [];
				//remove all generated enemy troops
				for(var reset in combatant){
					let resetObj = combatant[reset];
					resetObj.enemy.current = 0;
				}
			}else if(enemyForce <= 0){
				
				//you win!
				console.log("You Win");
				
				//promote surviving units
				let placeOfWar = {};
				for(var place in locations){
					if(place == war.attacking){
						placeOfWar = locations[place];
					}
				}
				for(let a=0;a<placeOfWar.rewardLevel;a++){	//cheekily add space rewards here!
					let spaceReward = Math.random();
					console.log("space chance: " + spaceReward);
					if(spaceReward < 0.1){
						war.loot.push("space");
						console.log("added to loot");
					}
				}
				for(var promotion in combatant){
					let proObj = combatant[promotion];
					let promoArray = ["soldier", "corporal", "sergeant"];
					if(proObj.stat.components.length == 0 && promotion != "conscript"){ //can only be promoted if individual, not unit || OR A CONSCRIPT!!
						for(let i=0;i<proObj.muster.current;i++){	//each mustered have chance of promotion
							console.log(promotion + i + " of " + proObj.muster.current + " up for promotion");
							let canBePromo = false;
							for(let j=0;j<placeOfWar.rewardLevel;j++){	//chance of promo per reward level
								let promoChance = Math.random();
								if(promoChance < 0.1){	//10% change of promo, could be variable based on rank....
									canBePromo = true;
								}
							}
							if(canBePromo == true){	//if any promotions to be given
								console.log(promotion + i + " of " + proObj.muster.current + " has been promoted");
								proObj.muster.current--;
								i--;				//since muster.current is now one less, kick i back one to compensate
								for(let k=0;k<promoArray.length;k++){
									if(promotion == promoArray[k]){
										for(var newRank in combatant){
											let newObj = combatant[newRank];
											if(newRank == promoArray[k+1]){
												newObj.home.current++;	//dont send back to muster, or may get ranked again!
											}
										}
									}
								}
							}
						}
					}
				}
				
				//return muster to home
				for(var returning in combatant){
					let retObj = combatant[returning];
					let sendAmount = retObj.muster.current;
					retObj.muster.current -= sendAmount;
					retObj.home.current += sendAmount;
				}
				
				//give drops to player
				for(let i=0;i<war.loot.length;i++){
					for(var booty in resources){
						let bootyObj = resources[booty];
						if(war.loot[i] == booty){
							console.log("looted a " + booty);
							bootyObj.current++;
							bootyObj.total++;
						}
					}
				}
				//turn war off
				war.loot = [];
				war.flag = false;
				war.continuation = false;
				war.attacking = "";
			}
			//otherwise, the war continues next tick...
			console.log("End of round");

		}
	}

	updateDisplay();
},1000);