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
			pow: 224,
			def: 1740,
			components: ["platoonHQ", "mortarSection", "assaultSection", "mgSection"],
			drops: "lightMachineGun"
		}
	},
	rifleCompanyHQ:{
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#rifleCompanyHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#rifleCompanyHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#rifleCompanyHQ-enemyDisplay'),
			row: $('#rifleCompanyHQ-IsEnemyRow')
		},
		stat: {
			pow: 224,
			def: 1740,
			components: ["captain", "lieutenant", "staffSergeant", "staffSergeant", "corporal", "soldier"],
			drops: "rifle"
		}
	},
	rifleCompany: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#rifleCompany-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#rifleCompany-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#rifleCompany-enemyDisplay'),
			row: $('#rifleCompany-IsEnemyRow')
		},
		stat: {
			pow: 548,
			def: 5320,
			components: ["rifleCompanyHQ", "weaponsPlatoon", "riflePlatoon", "riflePlatoon", "riflePlatoon"],
			drops: "rifle"
		}
	},
	heavyMortarSquad: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#heavyMortarSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarSquad-enemyDisplay'),
			row: $('#heavyMortarSquad-IsEnemyRow')
		},
		stat: {
			pow: 20,
			def: 130,
			components: ["corporal", "soldier", "soldier", "soldier", "soldier", "soldier"],
			drops: "mortar80mm"
		}
	},
	heavyMortarSectionHQ: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#heavyMortarSectionHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarSectionHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarSectionHQ-enemyDisplay'),
			row: $('#heavyMortarSectionHQ-IsEnemyRow')
		},
		stat: {
			pow: 8,
			def: 110,
			components: ["sergeant", "corporal", "soldier", "soldier"],
			drops: "rifle"
		}
	},
	heavyMortarSection: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#heavyMortarSection-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarSection-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarSection-enemyDisplay'),
			row: $('#heavyMortarSection-IsEnemyRow')
		},
		stat: {
			pow: 88,
			def: 630,
			components: ["heavyMortarSectionHQ", "heavyMortarSquad", "heavyMortarSquad", "heavyMortarSquad", "heavyMortarSquad"],
			drops: "mortar80mm"
		}
	},
	heavyMortarPlatoonHQ: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#heavyMortarPlatoonHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarPlatoonHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarPlatoonHQ-enemyDisplay'),
			row: $('#heavyMortarPlatoonHQ-IsEnemyRow')
		},
		stat: {
			pow: 10,
			def: 190,
			components: ["lieutenant", "staffSergeant", "sergeant", "soldier", "soldier"],
			drops: "rifle"
		}
	},
	heavyMortarPlatoon: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#heavyMortarPlatoon-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarPlatoon-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#heavyMortarPlatoon-enemyDisplay'),
			row: $('#heavyMortarPlatoon-IsEnemyRow')
		},
		stat: {
			pow: 186,
			def: 1450,
			components: ["heavyMortarPlatoonHQ", "heavyMortarSection", "heavyMortarSection"],
			drops: "rifle"
		}
	},
	antiArmourTeam: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#antiArmourTeam-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourTeam-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourTeam-enemyDisplay'),
			row: $('#antiArmourTeam-IsEnemyRow')
		},
		stat: {
			pow: 16,
			def: 90,
			components: ["corporal", "soldier", "soldier"],
			drops: "rocketLauncher"
		}
	},
	antiArmourSquad: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#antiArmourSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourSquad-enemyDisplay'),
			row: $('#antiArmourSquad-IsEnemyRow')
		},
		stat: {
			pow: 34,
			def: 220,
			components: ["sergeant", "antiArmourTeam", "antiArmourTeam"],
			drops: "rocketLauncher"
		}
	},
	antiArmourSection: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#antiArmourSection-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourSection-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourSection-enemyDisplay'),
			row: $('#antiArmourSection-IsEnemyRow')
		},
		stat: {
			pow: 34,
			def: 220,
			components: ["staffSergeant", "antiArmourSquad", "antiArmourSquad"],
			drops: "rocketLauncher"
		}
	},
	antiArmourPlatoonHQ: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#antiArmourPlatoonHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourPlatoonHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourPlatoonHQ-enemyDisplay'),
			row: $('#antiArmourPlatoonHQ-IsEnemyRow')
		},
		stat: {
			pow: 6,
			def: 120,
			components: ["lieutenant", "sergeant", "soldier"],
			drops: "rifle"
		}
	},
	towSquad: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#towSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#towSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#towSquad-enemyDisplay'),
			row: $('#towSquad-IsEnemyRow')
		},
		stat: {
			pow: 30,
			def: 180,
			components: ["sergeant", "corporal", "corporal", "soldier", "soldier", "soldier", "soldier"],
			drops: "towLauncher"
		}
	},
	towSection: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#towSection-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#towSection-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#towSection-enemyDisplay'),
			row: $('#towSection-IsEnemyRow')
		},
		stat: {
			pow: 122,
			def: 770,
			components: ["staffSergeant", "towSquad", "towSquad", "towSquad", "towSquad"],
			drops: "towLauncher"
		}
	},
	antiArmourPlatoon: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#antiArmourPlatoon-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourPlatoon-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#antiArmourPlatoon-enemyDisplay'),
			row: $('#antiArmourPlatoon-IsEnemyRow')
		},
		stat: {
			pow: 198,
			def: 1380,
			components: ["antiArmourPlatoonHQ", "antiArmourSection", "towSection"],
			drops: "towLauncher"
		}
	},
	hmgSquad: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#hmgSquad-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgSquad-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgSquad-enemyDisplay'),
			row: $('#hmgSquad-IsEnemyRow')
		},
		stat: {
			pow: 16,
			def: 110,
			components: ["sergeant", "corporal", "soldier", "soldier"],
			drops: "heavyMachineGun"
		}
	},
	hmgSection: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#hmgSection-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgSection-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgSection-enemyDisplay'),
			row: $('#hmgSection-IsEnemyRow')
		},
		stat: {
			pow: 34,
			def: 270,
			components: ["staffSergeant", "hmgSquad", "hmgSquad"],
			drops: "heavyMachineGun"
		}
	},
	hmgPlatoonHQ: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#hmgPlatoonHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgPlatoonHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgPlatoonHQ-enemyDisplay'),
			row: $('#hmgPlatoonHQ-IsEnemyRow')
		},
		stat: {
			pow: 8,
			def: 140,
			components: ["lieutenant", "sergeant", "soldier", "soldier"],
			drops: "rifle"
		}
	},
	hmgPlatoon: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#hmgPlatoon-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgPlatoon-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#hmgPlatoon-enemyDisplay'),
			row: $('#hmgPlatoon-IsEnemyRow')
		},
		stat: {
			pow: 110,
			def: 950,
			components: ["hmgPlatoonHQ", "hmgSection", "hmgSection", "hmgSection"],
			drops: "heavyMachineGun"
		}
	},
	weaponsCompanyHQ: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#weaponsCompanyHQ-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#weaponsCompanyHQ-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#weaponsCompanyHQ-enemyDisplay'),
			row: $('#weaponsCompanyHQ-IsEnemyRow')
		},
		stat: {
			pow: 14,
			def: 310,
			components: ["major", "captain", "staffSergeant", "sergeant", "corporal", "soldier", "soldier"],
			drops: "rifle"
		}
	},
	weaponsCompany: {
		home: {
			total: 0,
			current: 0,
			currentDisplay: $('#weaponsCompany-SidePanelDisplay')
		},
		muster: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#weaponsCompany-musterDisplay')
		},
		enemy: {
			total: 0,
			current: 0,
			temp: 0,
			currentDisplay: $('#weaponsCompany-enemyDisplay'),
			row: $('#weaponsCompany-IsEnemyRow')
		},
		stat: {
			pow: 508,
			def: 4090,
			components: ["weaponsCompanyHQ", "heavyMortarPlatoon", "antiArmourPlatoon", "hmgPlatoon"],
			drops: "rifle"
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