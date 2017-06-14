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
			def: 10,
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
			pow: 2,
			def: 10,
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
			pow: 3,
			def: 20,
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
			pow: 4,
			def: 30,
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
			pow: 9,
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
			pow: 31,
			def: 180,
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