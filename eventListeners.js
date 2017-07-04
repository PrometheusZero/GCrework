const eventListeners = {
	///////////////////
	// PERSONNEL TAB //
	///////////////////
	generate: {
		// CONSCRIPT LEVEL
		conscript: $('#conscript-generateBtn').click(function(){
			
			combatant.conscript.home.total++;
			combatant.conscript.home.current++;
		
			updateDisplay();
		}),
		// SOLDIER LEVEL
		soldier: $('#soldier-generateBtn').click(function(){
			if(combatant.conscript.home.current >= 1 && resources.rifle.current >= 1){
				
				combatant.conscript.home.current--;
				resources.rifle.current--;
				combatant.soldier.home.current++;
				combatant.soldier.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.conscript.home.current < 1){
					gameLog("Need a Conscript", "warning");
				}
				if(resources.rifle.current < 1){
					gameLog("Need a rifle", "warning");
				}
			}
		}),
		assaultTeam: $('#assaultTeam-generateBtn').click(function(){
			if(combatant.soldier.home.current >= 2 && resources.rocketLauncher.current >= 1){
				
				combatant.soldier.home.current =- 2;
				resources.rocketLauncher.current--;
				combatant.assaultTeam.home.current++;
				combatant.assaultTeam.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.soldier.home.current < 2){
					gameLog("Need 2 Soldiers", "warning");
				}
				if(resources.rocketLauncher.current < 1){
					gameLog("Need a Rocket Launcher", "warning");
				}
			}
		}),
		mortarTeam: $('#mortarTeam-generateBtn').click(function(){
			if(combatant.soldier.home.current >= 2 && resources.mortar60mm.current >= 1){
				
				combatant.soldier.home.current =- 2;
				resources.mortar60mm.current--;
				combatant.mortarTeam.home.current++;
				combatant.mortarTeam.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.soldier.home.current < 2){
					gameLog("Need 2 Soldiers", "warning");
				}
				if(resources.rocketLauncher.current < 1){
					gameLog("Need a 60mm Mortar", "warning");
				}
			}
		}),
		// CORPORAL LEVEL
		fireTeam: $('#fireTeam-generateBtn').click(function(){
			if(combatant.corporal.home.current >= 1 && resources.automaticRifle.current >= 1 && combatant.soldier.home.current >= 3){
			
				combatant.corporal.home.current -= 1;
				resources.automaticRifle.current -= 1;
				combatant.soldier.home.current -= 3;
				combatant.fireTeam.home.current++;
				combatant.fireTeam.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.corporal.home.current < 1){
					gameLog("Need a Corporal", "warning");
				}
				if(resources.automaticRifle.current < 1){
					gameLog("Need an Automatic Rifle", "warning");
				}
				if(combatant.soldier.home.current < 3){
					gameLog("Need at least 3 Soldiers", "warning");
				}
			}
		}),
		mortarSquad: $('#mortarSquad-generateBtn').click(function(){
			if(combatant.mortarTeam.home.current >= 3 && combatant.corporal.home.current >= 1){
				
				combatant.mortarTeam.home.current =- 3;
				combatant.corporal.home.current =- 1;
				combatant.mortarSquad.home.current++;
				combatant.mortarSquad.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.mortarTeam.home.current < 3){
					gameLog("Need 3 Mortar Teams", "warning");
				}
				if(combatant.corporal.home.current < 1){
					gameLog("Need a Corporal", "warning");
				}
			}
		}),
		assaultSquad: $('#assaultSquad-generateBtn').click(function(){
			if(combatant.assaultTeam.home.current >= 2 && combatant.corporal.home.current >= 1){
				
				combatant.assaultTeam.home.current =- 2;
				combatant.corporal.home.current =- 1;
				combatant.assaultSquad.home.current++;
				combatant.assaultSquad.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.assaultTeam.home.current < 3){
					gameLog("Need 2 Assault Teams", "warning");
				}
				if(combatant.corporal.home.current < 1){
					gameLog("Need a Corporal", "warning");
				}
			}
		}),
		mgTeam: $('#mgTeam-generateBtn').click(function(){
			if(combatant.corporal.home.current >= 1 && resources.lightMachineGun.current >= 1 && combatant.soldier.home.current >= 3){
				
				combatant.corporal.home.current -= 1;
				resources.lightMachineGun.current -= 1;
				combatant.soldier.home.current -= 3;
				combatant.mgTeam.home.current++;
				combatant.mgTeam.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.corporal.home.current < 1){
					gameLog("Need a Corporal", "warning");
				}
				if(resources.lightMachineGun.current < 1){
					gameLog("Need a Light Machinegun", "warning");
				}
				if(combatant.soldier.home.current < 3){
					gameLog("Need at least 3 Soldiers", "warning");
				}
			}
		}),
		heavyMortarSquad: $('#heavyMortarSquad-generateBtn').click(function(){
			if(combatant.corporal.home.current >= 1 && resources.mortar80mm.current >= 1 && combatant.soldier.home.current >= 5){
				
				combatant.corporal.home.current -= 1;
				resources.mortar80mm.current -= 1;
				combatant.soldier.home.current -= 5;
				combatant.heavyMortarSquad.home.current++;
				combatant.heavyMortarSquad.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.corporal.home.current < 1){
					gameLog("Need a Corporal", "warning");
				}
				if(resources.mortar80mm.current < 1){
					gameLog("Need a 80mm Mortar", "warning");
				}
				if(combatant.soldier.home.current < 5){
					gameLog("Need at least 5 Soldiers", "warning");
				}
			}
		}),
		antiArmourTeam: $('#antiArmourTeam-generateBtn').click(function(){
			if(combatant.corporal.home.current >= 1 && resources.rocketLauncher.current >= 2 && combatant.soldier.home.current >= 3){
				
				combatant.corporal.home.current -= 1;
				resources.rocketLauncher.current -= 2;
				combatant.soldier.home.current -= 3;
				combatant.antiArmourTeam.home.current++;
				combatant.antiArmourTeam.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.corporal.home.current < 1){
					gameLog("Need a Corporal", "warning");
				}
				if(resources.rocketLauncher.current < 2){
					gameLog("Needs two rocket launchers", "warning");
				}
				if(combatant.soldier.home.current < 3){
					gameLog("Need at least 3 Soldiers", "warning");
				}
			}
		}),
		// SERGEANTS LEVEL
		rifleSquad: $('#rifleSquad-generateBtn').click(function(){
			if(combatant.fireTeam.home.current >= 3 && combatant.sergeant.home.current >= 1){
				
				combatant.fireTeam.home.current =- 3;
				combatant.sergeant.home.current =- 1;
				combatant.rifleSquad.home.current++;
				combatant.rifleSquad.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.fireTeam.home.current < 3){
					gameLog("Need 3 Fire Teams", "warning");
				}
				if(combatant.sergeant.home.current < 1){
					gameLog("Need a Sergeant", "warning");
				}
			}
		}),
		mortarSection: $('#mortarSection-generateBtn').click(function(){
			if(combatant.mortarSquad.home.current >= 3 && combatant.sergeant.home.current >= 1){
				
				combatant.mortarSquad.home.current =- 3;
				combatant.sergeant.home.current =- 1;
				combatant.mortarSection.home.current++;
				combatant.mortarSection.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.mortarSquad.home.current < 3){
					gameLog("Need 3 Mortar Squads", "warning");
				}
				if(combatant.sergeant.home.current < 1){
					gameLog("Need a Sergeant", "warning");
				}
			}
		}),
		assaultSection: $('#assaultSection-generateBtn').click(function(){
			if(combatant.mortarSquad.home.current >= 3 && combatant.sergeant.home.current >= 1){
				
				combatant.assaultSquad.home.current =- 3;
				combatant.sergeant.home.current =- 1;
				combatant.assaultSection.home.current++;
				combatant.assaultSection.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.assaultSquad.home.current < 3){
					gameLog("Need 3 Assault Squads", "warning");
				}
				if(combatant.sergeant.home.current < 1){
					gameLog("Need a Sergeant", "warning");
				}
			}
		}),
		mgSquad: $('#mgSquad-generateBtn').click(function(){
			if(combatant.mgTeam.home.current >= 2 && combatant.sergeant.home.current >= 1){
				
				combatant.mgTeam.home.current =- 2;
				combatant.sergeant.home.current =- 1;
				combatant.mgSquad.home.current++;
				combatant.mgSquad.home.total++;
				
				updateDisplay();
			}else{
				if(combatant.mgTeam.home.current < 2){
					gameLog("Need 2 MG Teams", "warning");
				}
				if(combatant.sergeant.home.current < 1){
					gameLog("Need a Sergeant", "warning");
				}
			}
		}),
		
		
	},
	////////////////
	// MUSTER TAB //
	////////////////
	muster: {
		conscript-one: $('#conscript-muster-one').click(function(){
			if(combatant.conscript.home.current >= 1){
				combatant.conscript.home.current--;
				combatant.conscript.muster.current++;
				combatant.conscript.muster.total++;
				
				updateDisplay();
			}
		}),
		conscript-half: $('#conscript-muster-half').click(function(){
			let half = Math.floor(combatant.conscript.home.current / 2);
				combatant.conscript.home.current -= half;
				combatant.conscript.muster.current += half;
				combatant.conscript.muster.total += half;
				
				updateDisplay();
		}),
		conscript-full: $('#conscript-muster-full').click(function(){
			let full = Math.floor(combatant.conscript.home.current);
				combatant.conscript.home.current -= full;
				combatant.conscript.muster.current += full;
				combatant.conscript.muster.total += full;
				
				updateDisplay();
		}),
		soldier-one: $('#soldier-muster-one').click(function(){
			if(combatant.soldier.home.current >= 1){
				combatant.soldier.home.current--;
				combatant.soldier.muster.current++;
				combatant.soldier.muster.total++;
				
				updateDisplay();
			}
		}),
		soldier-half: $('#soldier-muster-half').click(function(){
			let half = Math.floor(combatant.soldier.home.current / 2);
				combatant.soldier.home.current -= half;
				combatant.soldier.muster.current += half;
				combatant.soldier.muster.total += half;
				
				updateDisplay();
		}),
		soldier-full: $('#soldier-muster-full').click(function(){
			let full = Math.floor(combatant.soldier.home.current);
				combatant.soldier.home.current -= full;
				combatant.soldier.muster.current += full;
				combatant.soldier.muster.total += full;
				
				updateDisplay();
		}),
		corporal-one: $('#corporal-muster-one').click(function(){
			if(combatant.corporal.home.current >= 1){
				combatant.corporal.home.current--;
				combatant.corporal.muster.current++;
				combatant.corporal.muster.total++;
				
				updateDisplay();
			}
		}),
		corporal-half: $('#corporal-muster-half').click(function(){
			let half = Math.floor(combatant.corporal.home.current / 2);
				combatant.corporal.home.current -= half;
				combatant.corporal.muster.current += half;
				combatant.corporal.muster.total += half;
				
				updateDisplay();
		}),
		corporal-full: $('#corporal-muster-full').click(function(){
			let full = Math.floor(combatant.corporal.home.current);
				combatant.corporal.home.current -= full;
				combatant.corporal.muster.current += full;
				combatant.corporal.muster.total += full;
				
				updateDisplay();
		}),
		sergeant-one: $('#sergeant-muster-one').click(function(){
			if(combatant.sergeant.home.current >= 1){
				combatant.sergeant.home.current--;
				combatant.sergeant.muster.current++;
				combatant.sergeant.muster.total++;
				
				updateDisplay();
			}
		}),
		sergeant-half: $('#sergeant-muster-half').click(function(){
			let half = Math.floor(combatant.sergeant.home.current / 2);
				combatant.sergeant.home.current -= half;
				combatant.sergeant.muster.current += half;
				combatant.sergeant.muster.total += half;
				
				updateDisplay();
		}),
		sergeant-full: $('#sergeant-muster-full').click(function(){
			let full = Math.floor(combatant.sergeant.home.current);
				combatant.sergeant.home.current -= full;
				combatant.sergeant.muster.current += full;
				combatant.sergeant.muster.total += full;
				
				updateDisplay();
		}),
		fireTeam-one: $('#fireTeam-muster-one').click(function(){
			if(combatant.fireTeam.home.current >= 1){
				combatant.fireTeam.home.current--;
				combatant.fireTeam.muster.current++;
				combatant.fireTeam.muster.total++;
				
				updateDisplay();
			}
		}),
		musterFireTeamHalf: $('#fireTeam-muster-half').click(function(){
			let half = Math.floor(combatant.fireTeam.home.current / 2);
				combatant.fireTeam.home.current -= half;
				combatant.fireTeam.muster.current += half;
				combatant.fireTeam.muster.total += half;
				
				updateDisplay();
		}),
		musterFireTeamFull: $('#fireTeam-muster-full').click(function(){
			let full = Math.floor(combatant.fireTeam.home.current);
				combatant.fireTeam.home.current -= full;
				combatant.fireTeam.muster.current += full;
				combatant.fireTeam.muster.total += full;
				
				updateDisplay();
		}),
		musterRifleSquad: $('#rifleSquad-muster-one').click(function(){
			if(combatant.rifleSquad.home.current >= 1){
				combatant.rifleSquad.home.current--;
				combatant.rifleSquad.muster.current++;
				combatant.rifleSquad.muster.total++;
				
				updateDisplay();
			}
		}),
		musterRifleSquadHalf: $('#rifleSquad-muster-half').click(function(){
			let half = Math.floor(combatant.rifleSquad.home.current / 2);
				combatant.rifleSquad.home.current -= half;
				combatant.rifleSquad.muster.current += half;
				combatant.rifleSquad.muster.total += half;
				
				updateDisplay();
		}),
		musterRifleSquadFull: $('#rifleSquad-muster-full').click(function(){
			let full = Math.floor(combatant.rifleSquad.home.current);
				combatant.rifleSquad.home.current -= full;
				combatant.rifleSquad.muster.current += full;
				combatant.rifleSquad.muster.total += full;
				
				updateDisplay();
		}),
	},
	///////////////////////////
	// BUILDINGS - PRIMARIES //
	///////////////////////////
	primaries: {
		buyRecruitOffice: $('#buyRecruitOffice').click(function(){
			if(resources.space.current > 0){
				primaries.recruitOffice.total++;
				primaries.recruitOffice.current++;
				resources.space.current--;
				
				updateDisplay();
			}else{
				gameLog("Not enough space", "warning");
			}
		}),
		buyRifleFactory: $('#buyRifleFactory').click(function(){
			if(resources.space.current > 0){
				primaries.rifleFactory.total++;
				primaries.rifleFactory.current++;
				resources.space.current--;

				updateDisplay();
			}else{
				gameLog("Not enough space", "warning");
			}
		}),
		buyMortarFactory: $('#buyMortarFactory').click(function(){
			if(resources.space.current > 0){
				primaries.mortarFactory.total++;
				primaries.mortarFactory.current++;
				resources.space.current--;

				updateDisplay();
			}else{
				gameLog("Not enough space", "warning");
			}
		}),
		buyRocketLauncherFactory: $('#buyRocketLauncherFactory').click(function(){
			if(resources.space.current > 0){
				primaries.rocketFactory.total++;
				primaries.rocketFactory.current++;
				resources.space.current--;

				updateDisplay();
			}else{
				gameLog("Not enough space", "warning");
			}
		}),
		buyMachinegunFactory: $('#buyMachinegunFactory').click(function(){
			if(resources.space.current > 0){
				primaries.machineGunFactory.total++;
				primaries.machineGunFactory.current++;
				resources.space.current--;

				updateDisplay();
			}else{
				gameLog("Not enough space", "warning");
			}
		}),
	},
	/////////////////////////////
	// BUILDINGS - TRANSDUCERS //
	/////////////////////////////
	transducers: {
		buyBarracks: $('#buyBarracks').click(function(){
			if(resources.space.current > 0){
				transducers.rifleBarracks.total++;
				transducers.rifleBarracks.current++;
				resources.space.current--;
				
				updateDisplay();
			}else{
				gameLog("Not enough space", "warning");
			}
		}),
		buyDrillSergeant: $('#buyDrillSergeant').click(function(){
			if(resources.space.current > 0){
				transducers.drillsergeant.current++;
				transducers.drillsergeant.total++;
				resources.space.current--;
				
				updateDisplay();
			}else{
				gameLog("Not enough space", "warning");
			}
		}),
	},
	///////////////
	// GO TO WAR //
	///////////////
	startWar: {
		warThorp: $('#war-thorp').click(function(){
			war.flag = true;
			war.attacking = "thorp";
			gameLog("WAR STARTED", "warning");
		}),
		warHamlet: $('#war-hamlet').click(function(){
			war.flag = true;
			war.attacking = "hamlet";
			gameLog("WAR STARTED", "warning");
		}),
		warVillage: $('#war-village').click(function(){
			war.flag = true;
			war.attacking = "village";
			gameLog("WAR STARTED", "warning");
		})
	}
};