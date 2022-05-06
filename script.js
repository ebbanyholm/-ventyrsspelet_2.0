// Taggarna output-text och output-container återfinns i HTML-filen
let outputText = document.getElementById("text-container");
let stats_text = document.getElementById("stats-text-container");
let dörr1 = document.getElementById("dörr-1");
let dörr2 = document.getElementById("dörr-2");
let dörr3 = document.getElementById("dörr-3");
let alt1 = document.getElementById("alt-1");
let alt2 = document.getElementById("alt-2");
let inventoryContainer = document.getElementById("inventory-container");
let continueK = document.getElementById("continue");

continueK.textContent = "→";
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
outputText.style.backgroundColor = "none";

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
		outputText.textContent = `Du har funnit ${funnet_loot.typ} med styrka ${funnet_loot.styrka}`;
		return funnet_loot;
	}

	visaExisterande() {
		this.loot.forEach((items) => {
			console.log(`Det finns ${items.typ} med styrka ${items.styrka}`);
		});
	}

	blanda() {
		for (let i = this.loot.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i - 1) + 1);
			const temp = this.loot[i];
			this.loot[i] = this.loot[j];
			this.loot[j] = temp;
		}
	}
}

class ddd {
	constructor() {
		this.fff = [];
	}

	eee(saker) {
		this.fff.push(saker);
		//lägg till
	}

	rrr() {
		let funnet_loot = this.fff.pop();
		// ej samma sker twice
		outputText.textContent = `Du har funnit ${funnet_loot.typ} med styrka ${funnet_loot.styrka}`;
		return funnet_loot;
		//ta bort
	}

	ppp() {
		this.fff.forEach((items) => {
			console.log(`Det finns ${items.typ} med styrka ${items.styrka}`);
		});
	}
	//visa saker
}

let Marken = new Existerande();
//marken är lootet
let Ryggsäck = new ddd();

//skapar items --> looten
let items = new Items("svärd", 1);
Marken.LTS(items);
items = new Items("sten", 5);
Marken.LTS(items);
items = new Items("L", 10000);
Marken.LTS(items);
items = new Items("Banan", 200);
Marken.LTS(items);

Marken.visaExisterande();

let iMonster = false;
let iKista = false;
let iFälla = false;
let iFälla1 = false;
let iFälla2 = false;
let iFälla3 = false;
let iFälla4 = false;
let iFälla5 = false;
let fast = false;

let m_hp = 0;
let m_styrka = 0;
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
	alert("m slag");
	let m_slag_resultat = Math.random() * (2 - 1) + 1;
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
	fast = true;
	outputText.textContent =
		"Du står öga mot öga med ett monster..Vad vill du göra";
	alt1.textContent = "slå till";
	alt2.textContent = "spring!!";

	if (player.level < 5) {
		m_styrka = Math.random() * (15 - 1) + 1;
		m_hp = Math.random() * (15 - 1) + 1;
	} else if (
		player.level == 5 ||
		player.level == 6 ||
		player.level == 7 ||
		player.level == 8 ||
		player.level == 9
	) {
		m_styrka = Math.random() * (20 - 10) + 10;
		m_hp = Math.random() * (20 - 10) + 10;
	} else {
		m_styrka = Math.random() * (35 - 25) + 25;
		m_hp = randint(25, 35);
	}
	iMonster = true;
}

function slut() {
	alt1.textContent = " ";
	alt2.textContent = " ";
}

function spara() {
	alert("sparad");

	let aaa = Ryggsäck.rrr();
	Marken.LTS(aaa);
	Marken.visaExisterande();
	player.styrka -= aaa.styrka;

	Ryggsäck.eee(Mitt_Item);
	outputText.textContent = `Du fick ${Mitt_Item.typ}`;
	Ryggsäck.ppp();
	player.styrka += Mitt_item.styrka;

	iKista = false;
	slut();
}

function släng() {
	alert("slängd");
	outputText.textContent = `Du döda ditt nya item och slände iväg det`;
	iKista = false;
	slut();
}

function kista() {
	iKista = true;
	outputText.textContent = "Yeeey!! En kista!!";
	alt1.textContent = "spara";
	alt2.textContent = "släng";
	let RandomTM = Math.random() * 2 + 1;

	if (RandomTM == 1) {
		let Merliv = Math.random() * (100 - 1) + 1;
		player.liv += Merliv;
		inventoryContainer.textContent = `Du fick ${Merliv} mer i liv`;
		iKista = false;
		slut();
	} else {
		Marken.blanda();
		let Mitt_Item = Marken.TaSaker();
		outputText.textContent = `Du har hittat ${Mitt_Item.typ} med styrkan ${Mitt_Item.styrka}`;

		if (Ryggsäck.fff.length == 0) {
			Ryggsäck.eee(Mitt_Item);
			inventoryContainer.textContent = `Du fick ${Mitt_Item.typ}`;
			Ryggsäck.ppp();
			player.styrka += Mitt_Item.styrka;

			iKista = false;
			slut();
		} else {
			inventoryContainer.TextContent = `I inventoryt har du ${Ryggsäck.fff[0].typ} med styrka ${Ryggsäck.fff[0].styrka}`;
		}
	}
}

function fälla() {
	iFälla = true;
	let sortsfälla = Math.floor(Math.random() * 8);
	if (sortsfälla == 0 || sortsfälla == 1) {
		iFälla1 = true;
		outputText.textContent =
			"Du såg inte att golvet saknades i vissa delar, du råkar kliva i ett av hålen och stukar foten";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 3;
	}

	if (sortsfälla == 2 || sortsfälla == 3) {
		iFälla2 = true;
		outputText.textContent =
			"Du märkte inte att det var en glasvägg framför dig, du går in i den och bryter näsan";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 6;
	}

	if (sortsfälla == 4 || sortsfälla == 5) {
		iFälla3 = true;
		outputText.textContent =
			"Plötsligt kommer du till en avsats, du tappar balansen och faller ner";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 9;
	}

	if (sortsfälla == 6) {
		iFälla4 = true;
		outputText.textContent =
			"Du går igenom en dörr och märker en svart katt framför dig, du väljer att klappa katten och märker inte fällan du utlöser som skjuter en pil i din axel";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 12;
	}

	if (sortsfälla == 7) {
		iFälla5 = true;
		outputText.textContent =
			"Det är en märklig del på golvet som är gjord av trä, du försöker gå över den men trillar igenom det ruttna träet på en vass sten";
		alt1.textContent = " ";
		alt2.textContent = " ";
		player.liv -= 15;
	}
}

function fällaliv1() {
	outputText.textContent = "Du förlorade 3 liv";
	iFälla = false;
	iFälla1 = false;
}

function fällaliv2() {
	outputText.textContent = "Du förlorade 6 liv";
	iFälla = false;
	iFälla2 = false;
}

function fällaliv3() {
	outputText.textContent = "Du förlorade 9 liv";
	iFälla = false;
	iFälla3 = false;
}

function fällaliv4() {
	outputText.textContent = "Du förlorade 12 liv";
	iFälla = false;
	iFälla4 = false;
}

function fällaliv5() {
	outputText.textContent = "Du förlorade 15 liv";
	iFälla = false;
	iFälla5 = false;
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
if (fast == false) {
	dörr1.addEventListener("click", slumpa_händelse);
	dörr2.addEventListener("click", slumpa_händelse);
	dörr3.addEventListener("click", slumpa_händelse);
} else if (fast == true) {
	dörr1.addEventListener("click");
	dörr2.addEventListener("click");
	dörr3.addEventListener("click");
}

continueK.addEventListener("click");

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

continueK.addEventListener("click", () => {
	if (iKista == true) {
	} else if (iMonster == true) {
	} else if (iFälla1 == true) {
		fällaliv1();
	} else if (iFälla2 == true) {
		fällaliv2();
	} else if (iFälla3 == true) {
		fällaliv3();
	} else if (iFälla4 == true) {
		fällaliv4();
	} else if (iFälla5 == true) {
		fällaliv5();
	}
});
