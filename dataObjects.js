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
			def: 20,
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
			def: 20,
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
			pow: 2,
			def: 30,
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
			pow: 2,
			def: 40,
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
			pow: 2,
			def: 50,
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
			pow: 2,
			def: 60,
			components: [],
			drops: "rifle"
		}
	},
	captain: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#captain-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#captain-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#captain-enemyDisplay'),
			row: $('#captain-IsEnemyRow')
		},
		stat: {
			pow: 2,
			def: 70,
			components: [],
			drops: "rifle"
		}
	},
	major: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#major-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#major-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#major-enemyDisplay'),
			row: $('#major-IsEnemyRow')
		},
		stat: {
			pow: 2,
			def: 80,
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
			pow: 10,
			def: 90,
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
			pow: 32,
			def: 310,
			components: ["sergeant", "fireTeam", "fireTeam", "fireTeam"],
			drops: "automaticRifle"
		}
	},
	platoonHQ: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#platoonHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#platoonHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#platoonHQ-enemyDisplay'),
			row: $('#platoonHQ-IsEnemyRow')
		},
		stat: {
			pow: 8,
			def: 170,
			components: ["lieutenant", "staffSergeant", "sergeant", "soldier"],
			drops: "automaticRifle"
		}
	},
	riflePlatoon: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#platoonHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#platoonHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#platoonHQ-enemyDisplay'),
			row: $('#platoonHQ-IsEnemyRow')
		},
		stat: {
			pow: 8,
			def: 170,
			components: ["platoonHQ", "rifleSquad", "rifleSquad", "rifleSquad"],
			drops: "automaticRifle"
		}
	},
	mortarTeam:{
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#mortarTeam-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mortarTeam-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mortarTeam-enemyDisplay'),
			row: $('#mortarTeam-IsEnemyRow')
		},
		stat: {
			pow: 8,
			def: 40,
			components: ["soldier", "soldier"],
			drops: "mortar60mm"
		}
	},
	mortarSquad:{
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#mortarSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mortarSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mortarSquad-enemyDisplay'),
			row: $('#mortarSquad-IsEnemyRow')
		},
		stat: {
			pow: 26,
			def: 150,
			components: ["corporal", "mortarTeam", "mortarTeam", "mortarTeam"],
			drops: "mortar60mm"
		}
	},
	mortarSection: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#mortarSection-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mortarSection-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mortarSection-enemyDisplay'),
			row: $('#mortarSection-IsEnemyRow')
		},
		stat: {
			pow: 80,
			def: 490,
			components: ["sergeant", "mortarSquad", "mortarSquad", "mortarSquad"],
			drops: "mortar60mm"
		}
	},
	assaultTeam {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#assaultTeam-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#assaultTeam-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#assaultTeam-enemyDisplay'),
			row: $('#assaultTeam-IsEnemyRow')
		},
		stat: {
			pow: 9,
			def: 50,
			components: ["soldier", "soldier"],
			drops: "rocketLauncher"
		}
	},
	assaultSquad: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#assaultSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#assaultSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#assaultSquad-enemyDisplay'),
			row: $('#assaultSquad-IsEnemyRow')
		},
		stat: {
			pow: 18,
			def: 110,
			components: ["corporal", "assaultTeam", "assaultTeam"],
			drops: "rocketLauncher"
		}
	},
	assaultSection: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#assaultSection-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#assaultSection-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#assaultSection-enemyDisplay'),
			row: $('#assaultSection-IsEnemyRow')
		},
		stat: {
			pow: 56,
			def: 370,
			components: ["sergeant", "assaultSquad", "assaultSquad", "assaultSquad"],
			drops: "rocketLauncher"
		}
	},
	mgTeam: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#mgTeam-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mgTeam-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mgTeam-enemyDisplay'),
			row: $('#mgTeam-IsEnemyRow')
		},
		stat: {
			pow: 12,
			def: 90,
			components: ["corporal", "soldier", "soldier", "soldier"],
			drops: "rocketLauncher"
		}
	},
	mgSquad: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#mgSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mgSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mgSquad-enemyDisplay'),
			row: $('#mgSquad-IsEnemyRow')
		},
		stat: {
			pow: 26,
			def: 220,
			components: ["sergeant", "mgTeam", "mgTeam"],
			drops: "lightMachineGun"
		}
	},
	mgSection: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#mgSection-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mgSection-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#mgSection-enemyDisplay'),
			row: $('#mgSection-IsEnemyRow')
		},
		stat: {
			pow: 80,
			def: 710,
			components: ["staffSergeant", "mgSquad", "mgSquad", "mgSquad"],
			drops: "lightMachineGun"
		}
	},
	weaponsPlatoon: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#weaponsPlatoon-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#weaponsPlatoon-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#weaponsPlatoon-enemyDisplay'),
			row: $('#weaponsPlatoon-IsEnemyRow')
		},
		stat: {
			pow: 80,
			def: 710,
			components: ["platoonHQ", "mortarSection", "assaultSection", "mgSection"],
			drops: "lightMachineGun"
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