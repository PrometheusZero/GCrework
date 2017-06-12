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
	COMPANY HQ (1 LT, 1 SSGT, 1SGT, 1PT)
	SCOUT SNIPER PLATOON
	COMMS PLATOON
	SERVICE PLATOON
	MEDICAL PLATOON
	
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
});

const war = {
	flag:false,
	continuation: false,
	attacking: "",
	loot: []
};

const resources = {
	//GLOBAL
	space: {
		total: 0,
		current: 0,
		currentDisplay: $('#space-Total')
	},
	//EQUPMENT
	rifle: {
		total: 0,
		current: 0,
		currentDisplay: $('#rifle-Total')
	},
	automaticRifle: {
		total: 0,
		current: 0,
		currentDisplay: $('#automaticRifle-Total')
	}
};
	
const combatant = {
	//COMBATANTS
	conscript: {
		home:{
			total: 0,
			current: 0,
			currentDisplay: $('#conscript-Total')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#musterConscriptDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#enemyConscript'),
			row: $('#conscriptRow')
		},
		stat: {
			pow: 1,
			def: 1,
			components: [],
			drops: ""
		}
	},
	soldier: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#soldier-Total')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#musterSoldierDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#enemySoldier'),
			row: $('#soldierRow')
		},
		stat: {
			pow: 5,
			def: 5,
			components: [],
			drops: "rifle"
		}
	},
	corporal: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#corporal-Total')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#musterCorporalDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#enemyCorporal'),
			row: $('#corporalRow')
		},
		stat: {
			pow: 5,
			def: 10,
			components: [],
			drops: "rifle"
		}
	},
	sergeant: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#sergeant-Total')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#musterSergeantDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#enemySergeant'),
			row: $('#sergeantRow')
		},
		stat: {
			pow: 5,
			def: 15,
			components: [],
			drops: "rifle"
		}
	},
	fireTeam: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#fireTeam-Total')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#musterFireTeamDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#enemyFireTeam'),
			row: $('#fireTeamRow')
		},
		stat: {
			pow: 50,
			def: 50,
			components: ["corporal", "soldier", "soldier", "soldier"],
			drops: "automaticRifle"
		}
	},
	rifleSquad: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#rifleSquad-Total')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#musterRifleSquadDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#enemyRifleSquad'),
			row: $('#rifleSquadRow')
		},
		stat: {
			pow: 250,
			def: 250,
			components: ["sergeant", "fireTeam", "fireTeam", "fireTeam"],
			drops: "automaticRifle"
		}
	}
};

const primaries = {
	//TROOPS
	recruitOffice: {
		total: 0,
		current: 0,
		currentDisplay: $('recruitOffice-Total'),
		time: 1,
		tCount: 0,
		produces: [{type:"conscript",qty:1},{type:"conscript",qty:2}],
		cost: [{type:"space",qty:1}]
	},
	//EQUPMENT
	rifleFactory: {
		total: 0,
		current: 0,
		currentDisplay: $('rifleFactory-Total'),
		time: 1,
		tCount: 0,
		produces: [{type:"rifle",qty:1,},{type:"automaticRifle",qty:1}],
		cost: [{type:"space",qty:1}]
	}
};
	
const transducers = {
	rifleBarracks: {
		total: 0,
		current: 0,
		time: 1,
		tCount: 0,
		produces: [{type:"soldier",qty:1}],
		consumes: [{type:"conscript",qty:1},{type:"rifle",qty:1}],
		cost: [{type:"space",qty:1}]
	},
	drillsergeant: {
		total: 0,
		current: 0,
		time:10,
		tCount: 0,
		produces: [{type:"fireTeam",qty:1}],
		consumes: [{type:"corporal",qty:1},{type:"soldier",qty:3},{type:"automaticRifle",qty:1}],
		cost:[{type:"sergeant",qty:1}]
	}
};

const eventListeners = {
	//PERSONNEL
	generateConscript: $('#generateConscript').click(function(){
		combatant.conscript.home.total++;
		combatant.conscript.home.current++;
		
		updateDisplay();
	}),
	generateSoldier: $('#generateSoldier').click(function(){
		if(combatant.conscript.home.current >= 1 && resources.rifle.current >= 1){
			combatant.conscript.home.current--;
			resources.rifle.current--;
			combatant.soldier.home.current++;
			combatant.soldier.home.total++;
			
			updateDisplay();
		}
	}),
	generateFireTeam: $('#generateFireTeam').click(function(){
		if(combatant.corporal.home.current >= 1 && combatant.autogunner.home.current >= 1 && combatant.soldier.home.current >= 2){
			combatant.corporal.home.current--;
			resources.automaticRifle.current--;
			combatant.soldier.home.current-=3;
			combatant.fireTeam.home.current++;
			combatant.fireTeam.home.total++;
			
			updateDisplay();
		}
	}),
	//BUILDINGS
	buyRecruitOffice: $('#buyRecruitOffice').click(function(){
		if(resources.space.current > 0){
			primaries.recruitOffice.total++;
			primaries.recruitOffice.current++;
			resources.space.current--;
			
			updateDisplay();
		}
	}),
	buyRifleFactory: $('#buyRifleFactory').click(function(){
		if(resources.space.current > 0){
			primaries.rifleFactory.total++;
			primaries.rifleFactory.current++;
			resources.space.current--;

			updateDisplay();
		}
	}),
	buyBarracks: $('#buyBarracks').click(function(){
		if(resources.space.current > 0){
			transducers.rifleBarracks.total++;
			transducers.rifleBarracks.current++;
			resources.space.current--;
			
			updateDisplay();
		}
	}),
	buyDrillSergeant: $('#buyDrillSergeant').click(function(){
		if(resources.sergeant.current > 0){
			transducers.drillsergeant.current++;
			transducers.drillsergeant.total++;
			resources.sergeant.current--;
			
			updateDisplay();
		}
	}),
	//MUSTER
	musterConscript: $('#musterConscript').click(function(){
		if(combatant.conscript.home.current >= 1){
			combatant.conscript.home.current--;
			combatant.conscript.muster.current++;
			combatant.conscript.muster.total++;
			
			updateDisplay();
		}
	}),
	musterConscriptHalf: $('#musterConscriptHalf').click(function(){
		let half = Math.floor(combatant.conscript.home.current / 2);
			combatant.conscript.home.current -= half;
			combatant.conscript.muster.current += half;
			combatant.conscript.muster.total += half;
			
			updateDisplay();
	}),
	musterConscriptFull: $('#musterConscriptFull').click(function(){
		let full = Math.floor(combatant.conscript.home.current);
			combatant.conscript.home.current -= full;
			combatant.conscript.muster.current += full;
			combatant.conscript.muster.total += full;
			
			updateDisplay();
	}),
	musterSoldier: $('#musterSoldier').click(function(){
		if(combatant.soldier.home.current >= 1){
			combatant.soldier.home.current--;
			combatant.soldier.muster.current++;
			combatant.soldier.muster.total++;
			
			updateDisplay();
		}
	}),
	musterFireTeam: $('#musterFireTeam').click(function(){
		if(combatant.fireTeam.home.current >= 1){
			combatant.fireTeam.home.current--;
			combatant.fireTeam.muster.current++;
			combatant.fireTeam.muster.total++;
			
			updateDisplay();
		}
	}),
	musterRifleSquad: $('#musterRifleSquad').click(function(){
		if(combatant.rifleSquad.home.current >= 1){
			combatant.rifleSquad.home.current--;
			combatant.rifleSquad.muster.current++;
			combatant.rifleSquad.muster.total++;
			
			updateDisplay();
		}
	}),
	warThorp: $('#war-thorp').click(function(){
		war.flag = true;
		war.attacking = "thorp";
	}),
	warHamlet: $('#war-hamlet').click(function(){
		war.flag = true;
		war.attacking = "hamlet";
	}),
	warVillage: $('#war-village').click(function(){
		war.flag = true;
		war.attacking = "village";
	})
};

const updateDisplay = function(){
	
	for(var prop in resources){
		let subObj = resources[prop];
		subObj.currentDisplay.text(subObj.current);
	}
	
	for(var prop in combatant){
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
	
	for(var prop in primaries){
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
		rewardLevel: 0
	},
	hamlet: {
		soldier: calculateForce(20),
		fireTeam: calculateForce(5),
		rifleSquad: calculateForce(1),
		rewardLevel: 4
	},
	village: {
		soldier: calculateForce(50),
		fireTeam: calculateForce(15),
		rifleSquad: calculateForce(5),
		rewardLevel: 10
	}
};

function calculateForce(power){
	return power + Math.ceil(Math.random() * power) + Math.ceil(Math.random() * power * resources.space.total);
}

function processKill(killedObj, side, wounds){	//should only be passed a subObject within combatant
	
	if(!killedObj.stat.components.length > 0){
		//object is individual
		if(side == "enemy"){
			killedObj.enemy.temp -= wounds;
			for(let i=0;i<wounds;i++){
				let dropChance = Math.random();
				if(dropChance < 0.25){
					console.log("Gen loot " + killedObj.stat.drops);
					war.loot.push(killedObj.stat.drops);
				}
			}
		}else{
			killedObj.muster.temp -= wounds;
		}
	}else{	
		//object is a units
		//process top object death!
		if(side == "enemy"){
			killedObj.enemy.temp -= 1;
			let dropChance = Math.random();
			if(dropChance < 0.25){
				console.log("Gen loot " + killedObj.stat.drops);
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
		for(let i=0;i<wounds;i++){
			let hit = Math.floor(Math.random()*killedObj.stat.components.length);
			hitArray[hit] += 1;
		}
		//this should assign wounds randomly across hitArray
		//should be able to map to components array
		//hitArray = [0,0,1,0]
		//..components = ["sarge", "fireteam", "fireteam", "fireteam"]
		//this shows a fireteam is hit, 2 others and sarge are fine!
		for(let i=0;i<hitArray.length;i++){
			if(hitArray[i] == 0){
				//component not hit! Add one to enemy/muster!
				let searchComponent = killedObj.stat.components[i];
				for(var looking in combatant){
					let lookObj = combatant[looking];
					if(looking == searchComponent){
						if(side == "enemy"){
							lookObj.enemy.current++;
						}else{
							lookObj.muster.current++;
						}
					}
				}
			}else{
				//component hit, process kill via this function
				let searchComponent = killedObj.stat.components[i];
				for(var looking in combatant){
					let lookObj = combatant[looking];
					if(looking == searchComponent){
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
		}
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
			}
			//player hits game
			for(var attacker in combatant){
				let atkObj = combatant[attacker];
				for(let i=0;i<atkObj.muster.current;i++){
					let aim = Math.random();
					for(var defender in combatant){
						let defObj = combatant[defender];
						if(aim < (defObj.enemy.current / enemyForce)){
							//hit!
							if(atkObj.stat.pow < defObj.stat.def){
								let wound = Math.random()*defObj.stat.def;
								if(wound < atkObj.stat.pow){
									console.log("my " + attacker + " " + i + " kills a " + defender);	//
									processKill(defObj,"enemy",1);
								}
							}else{
								let smash = Math.ceil(atkObj.stat.pow / defObj.stat.def);
								let smashResult = Math.round((smash / 2) + Math.random()*smash);
								console.log("my " + attacker + " " + i + " smashes " + smashResult + " " + defender);	//
								processKill(defObj, "enemy", smashResult);
							}
						}
					}
				}
			}
			//game hits player
			for(var resist in combatant){
				let resiObj = combatant[resist];
				for(let i=0;i<resiObj.enemy.current;i++){
					let aim = Math.random();
					for(var valient in combatant){
						let valObj = combatant[valient];
						if(aim < valObj.muster.current / myForce){
							//hit
							if(resiObj.stat.pow < valObj.stat.def){
								let wound = Math.random()*valObj.stat.def;
								if(wound < resiObj.stat.pow){
									console.log("enemy " + resist + " " + i + " kills a " + valient);	//
									processKill(valObj, "mine", 1);
								}
							}else{
								let smash = Math.ceil(resiObj.stat.pow / valObj.stat.def);
								let smashResult = Math.round((smash / 2) + Math.random()*smash);
								console.log("enemy " + resist + " " + i + " smashes " + smashResult + " " + valient);	//
								processKill(valObj, "mine", smashResult);
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
				myForce += trpObj.muster.current;
				trpObj.enemy.current += trpObj.enemy.temp;
				if(trpObj.enemy.current < 0){trpObj.enemy.current = 0;}
				enemyForce += trpObj.enemy.current;
			}
			
			if(myForce <= 0){
				//you lose
				console.log("You lose");
				war.flag = false;
				war.continuation = false;
				war.attacking = "";
				war.loot = [];
				for(var reset in combatant){
					let resetObj = combatant[reset];
					resetObj.enemy.current = 0;
				}
			}else if(enemyForce <= 0){
				//you win!
				console.log("You Win");
				//promote surviving units
				//return muster to home
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
				war.loot = [];
				war.flag = false;
				war.continuation = false;
				war.attacking = "";
			}
			//otherwise, the war continues next tick...
		}
	}


	updateDisplay();
},1000);

























