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
		if(combatant.corporal.home.current >= 1 && resources.automaticRifle.current >= 1 && combatant.soldier.home.current >= 2){
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