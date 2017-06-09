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
	ANTI-ARMOUR PLATOON
	HEAVY MG PLATOON
	
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

const resources = {
	//GLOBAL
	space: {
		total: 10,
		current: 10,
		currentDisplay: $('#space-Total')
	},
	//PEOPLE
	conscript: {
		total: 0,
		current: 0,
		currentDisplay: $('#conscript-Total')
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
	},
	//COMBATANTS
	soldier: {
		total: 0,
		current: 0,
		currentDisplay: $('#soldier-Total')
	},
	autogunner: {
		total: 0,
		current: 0,
		currentDisplay: $('#autogunner-Total')
	},
	corporal: {
		total: 0,
		current: 0,
		currentDisplay: $('#corporal-Total')
	},
	sergeant: {
		total: 0,
		current: 0,
		currentDisplay: $('#sergeant-Total')
	},
	fireTeam: {
		total: 0,
		current: 0,
		currentDisplay: $('#fireTeam-Total')
	},
	rifleSquad: {
		total: 0,
		current: 0,
		currentDisplay: $('#rifleSquad-Total')
	}
}

const muster = {
	soldier: {
		total: 0,
		current: 0,
		currentDisplay: $('#soldier-Total')
	},
	autogunner: {
		total: 0,
		current: 0,
		currentDisplay:
	},
	corporal: {
		total: 0,
		current: 0,
		currentDisplay: $('#corporal-Total')
	},
	sergeant: {
		total: 0,
		current: 0,
		currentDisplay: $('#sergeant-Total')
	},
	fireTeam: {
		total: 0,
		current: 0,
		currentDisplay: $('#fireTeam-Total')
	},
	rifleSquad: {
		total: 0,
		current: 0,
		currentDisplay: $('#rifleSquad-Total')
	},
}

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
	autoBarracks: {
		total: 0,
		current: 0,
		time: 1,
		tCount: 0,
		produces: [{type:"autogunner",qty:1}],
		consumes: [{type:"conscript",qty:1},{type:"automaticRifle",qty:1}],
		cost: [{type:"space",qty:1}]
	}
	drillsergeant: {
		total: 0,
		current: 0,
		time:10,
		tCount: 0,
		produces: [{type:"fireTeam",qty:1}],
		consumes: [{type:"corporal",qty:1},{type:"soldier",qty:2},{type:"autogunner",qty:1}],
		cost:[{type:"sergeant",qty:1}]
	}
}

const eventListeners = {
	//PERSONNEL
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
	})
}

const updateDisplay = function(){
	
	//could this take a prop of resources/primaries/etc?
	
	for(var prop in resources){
		//prop.currentDisplay.innerHTML(prop.current);
		let subObj = resources[prop];
		subObj.currentDisplay.text(subObj.current);
		subObj.gainDisplay.text(subObj.gain);
	}
	
	for(var prop in primaries){
		let subObj = primaries[prop];
		subObj.currentDisplay.text(subObj.current);
	}
	
}


var clock = setInterval(function(){
	
	for(var prop in primaries){
		let priObj = primaries[prop];
		priObj.tCount++;
		
		if(priObj.tCount === priObj.time){
			priObj.tCount = 0;
			for(let i=0;i<priObj.current;i++){
				let diceroll = Math.random();
				if(diceroll > 0.95){
					//work with priObj.produces[1]
					for(var prop2 in resources){
						let resObj1 = resources[prop2];
						if(prop2 == priObj.produces[1].type){
							resObj1.total += priObj.produces[1].qty;
							resObj1.current += priObj.produces[1].qty;
							console.log("Adding rare " + priObj.produces[1].qty + " to " + prop2);	//
							break;
						}
					}
				}else{
					//work with priObj.produces[0]
					for(var prop3 in resources){
						let resObj2 = resources[prop3];
						if(prop3 == priObj.produces[0].type){
							resObj2.total += priObj.produces[0].qty;
							resObj2.current += priObj.produces[0].qty;
							console.log("Adding " + priObj.produces[0].qty + " to " + prop3);	//
							break;
						}
					}
				}
			}
		}
	}
	
	for(var stat in transducers){
		let tranObj = transducers[stat];
		tranObj.tCount++;
		
	
		if(tranObj.tCount === tranObj.time){
			//If time to generate, restart counter and check for resource availability
			tranObj.tCount = 0;
			for(let i=0;i<tranObj.current;i++){
				var tranPass = [];
				for(let i=0;i<tranObj.consumes.length;i++){
					for(var search in resources){
						let searchObj = resources[search];
						if(tranObj.consumes[i].type == search){
							if(tranObj.consumes[i].qty > searchObj.current){
								tranPass.push(false);
							}else{
								tranPass.push(true);
							}
						}
					}
				}
				if(!tranPass.includes(false)){
					//got everything, loop and take
					for(let i=0;i<tranObj.consumes.length;i++){
						for(var take in resources){
							let takeObj = resources[take];
							if(tranObj.consumes[i].type == take){
								takeObj.current -= tranObj.consumes[i].qty;
								console.log("Taking " + tranObj.consumes[i].qty + " from " + take);	//
							}
						}
					}
					//got everything, loop and put
					for(let i=0;i<tranObj.produces.length;i++){
						for(var put in resources){
							let putObj = resources[put];
							if(tranObj.produces[i].type == put){
								putObj.current += tranObj.produces[i].qty;
								console.log("Adding " + tranObj.produces[i].qty + " to " + put);	//
							}
						}
					}
				}
			}	
		}
	}


	updateDisplay();
},1000);

























