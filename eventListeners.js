const eventListeners = {
	//PERSONNEL
	generateConscript: $('#conscript-generateBtn').click(function(){
		combatant.conscript.home.total++;
		combatant.conscript.home.current++;
		
		updateDisplay();
	}),
	generateSoldier: $('#soldier-generateBtn').click(function(){
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
	generateFireTeam: $('#fireTeam-generateBtn').click(function(){
		if(combatant.corporal.home.current >= 1 && resources.automaticRifle.current >= 1 && combatant.soldier.home.current >= 2){
			combatant.corporal.home.current--;
			resources.automaticRifle.current--;
			combatant.soldier.home.current-=3;
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
			if(combatant.soldier.home.current < 2){
				gameLog("Need at least 2 Soldiers", "warning");
			}
		}
	}),
	//BUILDINGS - PRIMARIES
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
		
	}),
	//BUILDINGS - TRANSDUCERS
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
	//MUSTER
	musterConscript: $('#conscript-muster-one').click(function(){
		if(combatant.conscript.home.current >= 1){
			combatant.conscript.home.current--;
			combatant.conscript.muster.current++;
			combatant.conscript.muster.total++;
			
			updateDisplay();
		}
	}),
	musterConscriptHalf: $('#conscript-muster-half').click(function(){
		let half = Math.floor(combatant.conscript.home.current / 2);
			combatant.conscript.home.current -= half;
			combatant.conscript.muster.current += half;
			combatant.conscript.muster.total += half;
			
			updateDisplay();
	}),
	musterConscriptFull: $('#conscript-muster-full').click(function(){
		let full = Math.floor(combatant.conscript.home.current);
			combatant.conscript.home.current -= full;
			combatant.conscript.muster.current += full;
			combatant.conscript.muster.total += full;
			
			updateDisplay();
	}),
	musterSoldier: $('#soldier-muster-one').click(function(){
		if(combatant.soldier.home.current >= 1){
			combatant.soldier.home.current--;
			combatant.soldier.muster.current++;
			combatant.soldier.muster.total++;
			
			updateDisplay();
		}
	}),
	musterSoldierHalf: $('#soldier-muster-half').click(function(){
		let half = Math.floor(combatant.soldier.home.current / 2);
			combatant.soldier.home.current -= half;
			combatant.soldier.muster.current += half;
			combatant.soldier.muster.total += half;
			
			updateDisplay();
	}),
	musterSoldierFull: $('#soldier-muster-full').click(function(){
		let full = Math.floor(combatant.soldier.home.current);
			combatant.soldier.home.current -= full;
			combatant.soldier.muster.current += full;
			combatant.soldier.muster.total += full;
			
			updateDisplay();
	}),
	musterCorporal: $('#corporal-muster-one').click(function(){
		if(combatant.corporal.home.current >= 1){
			combatant.corporal.home.current--;
			combatant.corporal.muster.current++;
			combatant.corporal.muster.total++;
			
			updateDisplay();
		}
	}),
	musterCorporalHalf: $('#corporal-muster-half').click(function(){
		let half = Math.floor(combatant.corporal.home.current / 2);
			combatant.corporal.home.current -= half;
			combatant.corporal.muster.current += half;
			combatant.corporal.muster.total += half;
			
			updateDisplay();
	}),
	musterCorporalFull: $('#corporal-muster-full').click(function(){
		let full = Math.floor(combatant.corporal.home.current);
			combatant.corporal.home.current -= full;
			combatant.corporal.muster.current += full;
			combatant.corporal.muster.total += full;
			
			updateDisplay();
	}),
	musterSergeant: $('#sergeant-muster-one').click(function(){
		if(combatant.sergeant.home.current >= 1){
			combatant.sergeant.home.current--;
			combatant.sergeant.muster.current++;
			combatant.sergeant.muster.total++;
			
			updateDisplay();
		}
	}),
	musterSergeantHalf: $('#sergeant-muster-half').click(function(){
		let half = Math.floor(combatant.sergeant.home.current / 2);
			combatant.sergeant.home.current -= half;
			combatant.sergeant.muster.current += half;
			combatant.sergeant.muster.total += half;
			
			updateDisplay();
	}),
	musterSergeantFull: $('#sergeant-muster-full').click(function(){
		let full = Math.floor(combatant.sergeant.home.current);
			combatant.sergeant.home.current -= full;
			combatant.sergeant.muster.current += full;
			combatant.sergeant.muster.total += full;
			
			updateDisplay();
	}),
	musterFireTeam: $('#fireTeam-muster-one').click(function(){
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
};