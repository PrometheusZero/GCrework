const resources = {
	//GLOBAL
	space: {
		total: 0,
		current: 0,
		currentDisplay: $('#space-SidePanelDisplay')
	},
	//EQUPMENT
	rifle: {
		total: 0,
		current: 0,
		currentDisplay: $('#rifle-SidePanelDisplay')
	},
	automaticRifle: {
		total: 0,
		current: 0,
		currentDisplay: $('#automaticRifle-SidePanelDisplay')
	},
	mortar60mm: {
		total: 0,
		current: 0,
		currentDisplay: $('#mortar60mm-SidePanelDisplay')
	},
	mortar80mm: {
		total: 0,
		current: 0,
		currentDisplay: $('#mortar80mm-SidePanelDisplay')
	},
	rocketLauncher: {
		total: 0,
		current: 0,
		currentDisplay: $('#rocketLauncher-SidePanelDisplay')
	},
	towLauncher: {
		total: 0,
		current: 0,
		currentDisplay: $('#towLauncher-SidePanelDisplay')
	},
	lightMachineGun: {
		total: 0,
		current: 0,
		currentDisplay: $('#lightMachineGun-SidePanelDisplay')
	},
	heavyMachineGun: {
		total: 0,
		current: 0,
		currentDisplay: $('#heavyMachineGun-SidePanelDisplay')
	}
};
	
const combatant = {
	//COMBATANTS
	conscript: {
		home:{
			total: 0,
			current: 0,
			currentDisplay: $('#conscript-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#conscript-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#conscript-enemyDisplay'),
			row: $('#conscript-IsEnemyRow')
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
			currentDisplay: $('#soldier-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#soldier-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#soldier-enemyDisplay'),
			row: $('#soldier-IsEnemyRow')
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
			currentDisplay: $('#corporal-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#corporal-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#corporal-enemyDisplay'),
			row: $('#corporal-IsEnemyRow')
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
			currentDisplay: $('#sergeant-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#sergeant-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#sergeant-enemyDisplay'),
			row: $('#sergeant-IsEnemyRow')
		},
		stat: {
			pow: 4,
			def: 30,
			components: [],
			drops: "rifle"
		}
	},
	staffSergeant: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#staffSergeant-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#staffSergeant-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#staffSergeant-enemyDisplay'),
			row: $('#staffSergeant-IsEnemyRow')
		},
		stat: {
			pow: 4,
			def: 30,
			components: [],
			drops: "rifle"
		}
	},
	lieutenant: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#lieutenant-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#lieutenant-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#lieutenant-enemyDisplay'),
			row: $('#lieutenant-IsEnemyRow')
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
			currentDisplay: $('#fireTeam-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#fireTeam-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#fireTeam-enemyDisplay'),
			row: $('#fireTeam-IsEnemyRow')
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
			currentDisplay: $('#rifleSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#rifleSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#rifleSquad-enemyDisplay'),
			row: $('#rifleSquad-IsEnemyRow')
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
		currentDisplay: $('recruitOffice-SidePanelDisplay'),
		time: 1,
		tCount: 0,
		produces: [{type:"conscript",qty:1},{type:"conscript",qty:2}],
		cost: [{type:"space",qty:1}]
	},
	//EQUPMENT
	rifleFactory: {
		total: 0,
		current: 0,
		currentDisplay: $('rifleFactory-SidePanelDisplay'),
		time: 1,
		tCount: 0,
		produces: [{type:"rifle",qty:1,},{type:"automaticRifle",qty:1}],
		cost: [{type:"space",qty:1}]
	},
	mortarFactory: {
		total: 0,
		current: 0,
		currentDisplay: $('mortarFactory-SidePanelDisplay'),
		time: 1,
		tCount: 0,
		produces: [{type:"mortar60mm",qty:1,},{type:"mortar80mm",qty:1}],
		cost: [{type:"space",qty:1}]
	},
	rocketFactory: {
		total: 0,
		current: 0,
		currentDisplay: $('rocketFactory-SidePanelDisplay'),
		time: 1,
		tCount: 0,
		produces: [{type:"rocketLauncher",qty:1,},{type:"towLauncher",qty:1}],
		cost: [{type:"space",qty:1}]
	},
	machineGunFactory: {
		total: 0,
		current: 0,
		currentDisplay: $('machineGunFactory-SidePanelDisplay'),
		time: 1,
		tCount: 0,
		produces: [{type:"lightMachineGun",qty:1,},{type:"heavyMachineGun",qty:1}],
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