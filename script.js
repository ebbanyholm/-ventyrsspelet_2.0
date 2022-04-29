// Taggarna output-text och output-container återfinns i HTML-filen
let outputText = document.getElementById("text-output-container");
let stats_text = document.getElementById("stats-text-container");
let dörr1 = document.getElementById("dörr-1");
let dörr2 = document.getElementById("dörr-2");
let dörr3 = document.getElementById("dörr-3");
let alt1 = document.getElementById("alt-1");
let alt2 = document.getElementById("alt-2");
let inventoryContainer = document.getElementById("inventory-container");

let player = {
	namn: "Link",
	liv: 100,
	level: 1,
	styrka: 10,
};

dörr1.textContent = "1";
dörr2.textContent = "2";
dörr3.textContent = "3";
stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
outputText.textContent =
	"Du har tre dörrar framför dig. Vilken vill du gå ni i? Klicka på en dörr för att öppna den.";

//problem under
//----------------------------------------------
// Man kan t ex ställa färgen på ett område
outputText.style.backgroundColor = "None";

function Nytt() {
	outputText.textContent = "Redo för nytt val";
}

class Items {
	constructor(typ, styrka) {
		this.typ = typ;
		this.styrka = styrka;
	}
}

class Existerande {
	constructor() {
		this.loot = [];
	}

	LTS(saker) {
		this.loot.push(saker);
	}
	//lägger till alla skapade varor i loooooten

	TaSaker() {
		let funnet_loot = this.loot.pop();
		// ej samma sker twice
		outputText = `Du har tagit ${funnet_loot.typ} med styrka ${funnet_loot.styrka}`;
		return funnet_loot;
	}

	visaExisterande() {
		this.loot.forEach((items) => {
			console.log(`Det finns ${items.typ} med styrka ${items.styrka}`);
		});
	}

	blanda() {
		for (let i = this.loot.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = this.loot[i];
			this.loot[i] = this.loot[j];
			this.loot[j] = temp;
		}
	}
}

let Marken = new Existerande();
//marken är lootet
let Ryggsäck = [];

//skapar items --> looten
let items = new Items("svärd", 1);
Marken.LTS(items);
items = new Items("sten", 5);
Marken.LTS(items);

Marken.visaExisterande();

let iMonster = false;
let iKista = false;

//-----------------------------
function slå_till() {
	let strid = 1; /*Math.random() * (3 - 1) + 1*/
	if (strid == 1 || strid == 2) {
		//alert("slag");
		outputText.textContent =
			"Du tar i och svingar ett stort slag mot monstret. Monstret kan inte undvika det och tar skada";
		m_hp -= player.styrka;
	} else {
		outputText.textContent =
			"Du tar och försöker skada monstret med din styrka. Du är för långsam och monstret har bra reflexer. Du missade monstret";
	}
	m_slag();
}

function spring_iväg() {
	spring = Math.random() * (3 - 1) + 1;

	if (player.styrka <= m_styrka) {
		if (spring > 1) {
			/*förskök igen*/
		}
		if (spring == 1) {
			//du sprang iväg - nästa dörr
		}
	}

	if (player.styrka > m_styrka) {
		if (spring > 2) {
			/*förskök igen*/
		}
		if (spring == 1 || spring == 2) {
			//något händer : du sprang iväg - ny dörr
		}
	}
	/*if (m_hp <= 0) break;
		//Monstret blev ledset och sprang iväg
		//Du lvlade upp!
		lvl += 1;
		// ny dörr	
		if (self.hp <= 0) break;*/
}
function m_slag() {
	m_slag_resultat = Math.random() * (2 - 1) + 1;
	/*
		Du är utmattad
		Monstret tar nu sin chans att slå dig
		Monstert tar i från tårna med ett STORT slag
		''')*/
	if (m_slag_resultat == 0 || m_slag_resultat == 2) {
		alert("m s m");
		outputText.textContent = "Monstret missade dig";
		/*Monstret missade dig
			"input("Klicka 'enter' för att fortsätta")""
			ny dörr*/
	} else if (m_slag_resultat == 2) {
		alert("m s t");
		outputText.textContent = "Monstret träffade dig";
		/*Monstret träffade dig
			Du förlorade {m_styrka} hälsopoäng
			*/
		player.liv -= m_styrka;
		/*
			input("Klicka 'enter' för att fortsätta")
			ny dörr*/
	}
}
function monster() {
	iMonster = true;
	outputText.textContent =
		"Du står öga mot öga med ett monster..Vad vill du göra";
	alt1.textContent = "slå till";
	alt2.textContent = "spring!!";

	if (lvl < 5) {
		m_styrka = Math.random() * (15 - 1) + 1;
		m_hp = Math.random() * (15 - 1) + 1;
	} else if (
		player.styrka == 5 ||
		player.styrka == 6 ||
		player.styrka == 7 ||
		player.styrka == 8 ||
		player.styrka == 9
	) {
		m_styrka = Math.random() * (20 - 10) + 10;
		m_hp = Math.random() * (20 - 10) + 10;
	} else {
		m_styrka = Math.random() * (35 - 25) + 25;
		m_hp = randint(25, 35);
	}
}

function spara() {
	alert("sparad");
	let Mitt_Item = Marken.TaSaker();
	Ryggsäck.push[Mitt_Item];
	outputText.textContent = `Du fick ${Mitt_Item}`;
	iKista = false;
}

function släng() {
	outputText.textContent = `Du döda ditt nya item och slände iväg det`;
	iKista = false;
}

function kista() {
	iKista = true;
	outputText.textContent = "Yeeey!! En kista!!";
	alt1.textContent = "spara";
	alt2.textContent = "släng";
	let RandomTM = Math.floor(Math.random() * 2);

	if (RandomTM == 1) {
		let Merliv = Math.floor(Math.random() * 100);
		player.liv += Merliv;
		outputText.textContent = `Du fick ${Merliv} mer i liv`;
		iKista = false;
	} else {
		if (Ryggsäck.length == 0) {
			let Mitt_Item = Marken.TaSaker();
			Ryggsäck.push[Mitt_Item];
			outputText.textContent = `Du fick ${Mitt_Item}`;
			iKista = false;
		} else {
			for (let i = 0; i < Ryggsäck.lenght; i++) {
				outputText.TextContent = `I inventoryt har du ${Ryggsäck[i].typ} med styrka ${Ryggsäck[i].styrka}`;
			}
		}
	}
}

function fälla() {
	iFälla = true;
	let sortsfälla = Math.floor(Math.random() * 7);
	if (sortsfälla == 0 || sortsfälla == 1) {
		outputText.textContent = "flavor text";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 3;
		inventoryContainer.textContent = "Du förlorade 3 liv";
	}

	if (sortsfälla == 2 || sortsfälla == 3) {
		outputText.textConent = "flavor text 2";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 6;
		inventoryContainer.textContent = "Du förlorade 6 liv";
	}

	if (sortsfälla == 4 || sortsfälla == 5) {
		outputText.textConent = "flavor text 3";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 9;
		inventoryContainer.textContent = "Du förlorade 9 liv";
	}

	if (sortsfälla == 6) {
		outputText.textConent = "flavor text 4";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 12;
		inventoryContainer.textContent = "Du förlorade 12 liv";
	}

	if (sortsfälla == 7) {
		outputText.textConent = "flavor text 5";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 15;
		inventoryContainer.textContent = "Du förlorade 15 liv";
	}
}

function slumpa_händelse() {
	let slumpad_händelse = Math.floor(Math.random() * 3);
	if (slumpad_händelse == 0) {
		alert("monster");
		monster();
	}
	if (slumpad_händelse == 1) {
		alert("fälla");
		fälla();
	}
	if (slumpad_händelse == 2) {
		alert("kista");
		kista();
	}
}

// namnet = prompt("vad heter du?");
// player.namn = namnet;
// alert(`Du heter ${player.namn}`);

// Lägger till en EventListener till outputContainer
dörr1.addEventListener("click", slumpa_händelse);
dörr2.addEventListener("click", slumpa_händelse);
dörr3.addEventListener("click", slumpa_händelse);

alt1.addEventListener("click", () => {
	if (iKista == true) {
		spara();
	} else if (iMonster == true) {
		slå_till();
	} else if (iFälla == true) {
	}
});

alt2.addEventListener("click", () => {
	if (iKista == true) {
		släng();
	} else if (iMonster == true) {
		spring_iväg();
	} else if (iFälla == true) {
	}
});
