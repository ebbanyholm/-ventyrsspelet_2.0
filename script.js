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
let canvasen = document.getElementById("canvas-container");

continueK.textContent = "→";
let player = {
	namn: "Link",
	liv: 100,
	level: 1,
	styrka: 10,
};

function visa_monster() {
	canvasen.innerHTML = `<img src="./images/monster_1.jpg" />`;
	canvasen.innerHTML += `<p>monster_1.jpg</p>`;
}
visa_monster();

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
items = new Items("L", 10);
Marken.LTS(items);
items = new Items("Banan", 20);
Marken.LTS(items);

Marken.visaExisterande();

dörr1.addEventListener("click", slumpa_händelse);
dörr2.addEventListener("click", slumpa_händelse);
dörr3.addEventListener("click", slumpa_händelse);

function dörrar_av() {
	alt1.disabled = true;
	alt2.disabled = true;
}
function dörrar_på() {
	alt1.disabled = false;
	alt2.disabled = false;
}
function töm_alt_text() {
	alt1.textContent = "";
	alt2.textContent = "";
}
function alt_av() {
	alt1.disabled = true;
	alt2.disabled = true;
	töm_alt_text();
}
function alt_på() {
	alt1.disabled = false;
	alt2.disabled = false;
}
function continueK_av() {
	continueK.disabled = true;
}
function continueK_på() {
	continueK.disabled = false;
}
function välj_dörr() {
	dörrar_på();
	alt_av();
	continueK_av();
	outputText.textContent =
		"Du har tre dörrar framför dig. Vilken vill du gå ni i? Klicka på en dörr för att öppna den.";
}

let m_hp = 0;
let m_styrka = 0;
//-----------------------------

function monster() {
	dörrar_av();
	alt_på();
	continueK_av();
	outputText.textContent =
		"Du står öga mot öga med ett monster..Vad vill du göra";
	alt1.textContent = "slå till";
	alt2.textContent = "spring!!";

	if (player.level < 5) {
		m_styrka = Math.floor(Math.random() * (15 - 1) + 1);
		m_hp = Math.floor(Math.random() * (15 - 1) + 1);
	} else if (player.level >= 5 && player.level < 10) {
		m_styrka = Math.floor(Math.random() * (20 - 10) + 10);
		m_hp = Math.floor(Math.random() * (20 - 10) + 10);
	} else {
		m_styrka = Math.floor(Math.random() * (35 - 25) + 25);
		m_hp = Math.floor(Math.random() * (35 - 25) + 25);
	}
	if (m_hp <= 0) {
		outputText.textContent("Du dödade monstret och gick där med upp en level.");
		player.level += 1;
	}
	if (player.liv <= 0) {
		outputText.textContent("Game Over. Du dog");
	}
	function frånMbörjan() {
		continueK_på();
		continueK.addEventListener("click", monster);
	}
	function slå_till() {
		continueK_på();
		alert("slag");
		alt_av();
		let strid = 1; /*Math.random() * (3 - 1) + 1;*/
		inventoryContainer.textContent = `m_hp: ${m_hp}`;

		if (strid == 1 || strid == 2) {
			//alert("slag");
			outputText.textContent =
				"Du tar i och svingar ett stort slag mot monstret. Monstret kan inte undvika det och tar skada";
			m_hp -= player.styrka;
			inventoryContainer.textContent += `\n m_hp: ${m_hp}`;
			inventoryContainer.textContent += `\n player.styrka: ${player.styrka}`;
		} else {
			outputText.textContent =
				"Du tar och försöker skada monstret med din styrka. Du är för långsam och monstret har bra reflexer. Du missade monstret";
		}
		continueK.addEventListener("click", m_slag);
	}

	function spring_iväg() {
		alt_av();
		spring = Math.floor(Math.random() * 3 + 1);
		//alert(spring);
		if (player.styrka <= m_styrka) {
			if (spring > 1) {
				outputText.textContent = "du missluckades med att springa iväg";
				frånMbörjan();
			} else if (spring == 1) {
				outputText.textContent = "du sparng iväg";
				//du sprang iväg - nästa dörr
			}
		}
		if (player.styrka > m_styrka) {
			if (spring == 3) {
				outputText.textContent = "du missluckades med att springa iväg";
				frånMbörjan();
			} else if (spring < 3) {
				outputText.textContent = "du sparng iväg";
				//du sprang iväg - ny dörr
			}
		}
	}
	alt1.addEventListener("click", slå_till);
	alt2.addEventListener("click", spring_iväg);

	function m_slag() {
		alt_av();
		continueK_på();

		outputText.textContent =
			"Du är utmattad. Monstert tar i från tårna med ett STORT slag";

		function visa_resultat() {
			alt_av();
			function m_slag_resultat() {
				alt_av();
				let m_resultat = Math.floor(Math.random() * (5 - 1) + 1);
				if (m_resultat <= 2) {
					outputText.textContent = "Monstret missade dig";
					frånMbörjan();
					/*Monstret missade dig
						"input("Klicka 'enter' för att fortsätta")""
						ny dörr*/
				} else if (m_resultat > 2) {
					outputText.textContent = "Monstret träffade dig";
					frånMbörjan();
					function förlora_liv() {
						alt_av;
						outputText.textContent = `Du förlorade ${m_styrka} liv.`;
						player.liv -= m_styrka;
					}
					continueK.addEventListener("click", förlora_liv);

					player.liv -= m_styrka;
					/*
						input("Klicka 'enter' för att fortsätta")
						ny dörr*/
				}
			}
			continueK.addEventListener("click", m_slag_resultat);
		}

		visa_resultat();
	}
}
//-------------------------------------------------------------------------------------------------------------

var Mitt_Item = "heh";
function kista() {
	outputText.textContent = "Yeeey!! En kista!!";

	let RandomTM = 2; /*Math.floor(Math.random() * 2 + 1);*/

	function spara() {
		alert("sparad");

		/*let aaa = Ryggsäck.rrr();
		Marken.LTS(aaa);
		Marken.visaExisterande();
		player.styrka -= aaa.styrka;

		Ryggsäck.eee(Mitt_Item);
		outputText.textContent = `Du fick ${Mitt_Item.typ}`;
		Ryggsäck.ppp();
		player.styrka += Mitt_Item.styrka;
		stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
		*/
		alert("sparedghg");
		alt_av();
		välj_dörr();
	}
	function släng() {
		alert("slängd");
		outputText.textContent = `Du döda ditt nya item och slände iväg det`;
		alt_av();
		välj_dörr();
	}

	function visa_föremål() {
		Marken.blanda();
		Mitt_Item = Marken.TaSaker();
		function fråga() {
			function frågan() {
				outputText.textContent = `Vill du spara ${Mitt_Item.typ} med styrkan ${Mitt_Item.styrka}?`;
				alt1.textContent = "Ja";
				alt2.textContent = "Nej";
				alt1.addEventListener("click", spara);
				alt2.addEventListener("click", släng);
			}
			continueK.addEventListener("click", frågan);
			alt_på();
		}
		function hittade() {
			Marken.blanda();
			Mitt_Item = Marken.TaSaker();
			//outputText.textContent = `Du har hittat ${Mitt_Item.typ} med styrkan ${Mitt_Item.styrka}`;
			console.log("");
			console.log(Mitt_Item);
			fråga();
		}
		continueK.addEventListener("click", hittade);
	}

	visa_föremål();

	/*if (RandomTM == 1) {
		let Merliv = Math.floor(Math.random() * (20 - 1) + 1);
		player.liv += Merliv;
		inventoryContainer.textContent = `Du fick ${Merliv} mer i liv`;
		stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;

		dörrar_på();
	} else {
		dörrar_av();
		alt_av();
		Marken.blanda();
		Mitt_Item = Marken.TaSaker();
		outputText.textContent = `Du har hittat ${Mitt_Item.typ} med styrkan ${Mitt_Item.styrka}`;
		console.log("");
		console.log(Mitt_Item);

		if (Ryggsäck.fff.length == 0) {
			Ryggsäck.eee(Mitt_Item);
			inventoryContainer.textContent = `Du fick ${Mitt_Item.typ}`;
			Ryggsäck.ppp();
			player.styrka += Mitt_Item.styrka;
			stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
		} else {
			inventoryContainer.TextContent = `I inventoryt har du ${Ryggsäck.fff[0].typ} med styrka ${Ryggsäck.fff[0].styrka}`;
			alt1.textContent = "spara";
			alt2.textContent = "släng";
			alt_på();
			dörrar_av();
		}
	}*/
}

function fällaliv1() {
	player.liv -= 3;
	stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
	if (player.liv <= 0) {
		outputText.textContent("Game Over. Du dog");
	} else {
		outputText.textContent = "Du förlorade 3 liv";
		iFälla = false;
		fast == false;
	}
}

function fällaliv2() {
	player.liv -= 6;
	stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
	if (player.liv <= 0) {
		outputText.textContent("Game Over. Du dog");
	} else {
		outputText.textContent = "Du förlorade 6 liv";
		iFälla = false;
		fast == false;
	}
}

function fällaliv3() {
	player.liv -= 9;
	stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
	if (player.liv <= 0) {
		outputText.textContent("Game Over. Du dog");
	} else {
		outputText.textContent = "Du förlorade 9 liv";
		iFälla = false;
		fast == false;
	}
}

function fällaliv4() {
	player.liv -= 12;
	stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
	if (player.liv <= 0) {
		outputText.textContent("Game Over. Du dog");
	} else {
		outputText.textContent = "Du förlorade 12 liv";
		iFälla = false;
		fast == false;
	}
}

function fällaliv5() {
	player.liv -= 15;
	stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
	if (player.liv <= 0) {
		outputText.textContent("Game Over. Du dog");
	} else {
		outputText.textContent = "Du förlorade 15 liv";
		iFälla = false;
		fast == false;
	}
}

function fälla() {
	iFälla = true;
	fast == true;
	let sortsfälla = Math.floor(Math.random() * 8);
	if (sortsfälla == 0 || sortsfälla == 1) {
		fast = true;
		outputText.textContent =
			"Du såg inte att golvet saknades i vissa delar, du råkar kliva i ett av hålen och stukar foten";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueK.addEventListener("click", fällaliv1);
	}

	if (sortsfälla == 2 || sortsfälla == 3) {
		fast = true;
		outputText.textContent =
			"Du märkte inte att det var en glasvägg framför dig, du går in i den och bryter näsan";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueK.addEventListener("click", fällaliv2);
	}

	if (sortsfälla == 4 || sortsfälla == 5) {
		fast = true;
		outputText.textContent =
			"Plötsligt kommer du till en avsats, du tappar balansen och faller ner";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueK.addEventListener("click", fällaliv3);
	}

	if (sortsfälla == 6) {
		fast = true;
		outputText.textContent =
			"Du går igenom en dörr och märker en svart katt framför dig, du väljer att klappa katten och märker inte fällan du utlöser som skjuter en pil i din axel";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueK.addEventListener("click", fällaliv4);
	}

	if (sortsfälla == 7) {
		fast = true;
		outputText.textContent =
			"Det är en märklig del på golvet som är gjord av trä, du försöker gå över den men trillar igenom det ruttna träet på en vass sten";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueK.addEventListener("click", fällaliv5);
	}
}

function slumpa_händelse() {
	let slumpad_händelse = Math.floor(Math.random() * 3);

	if (slumpad_händelse == 0) {
		dörr1.disabled = true;
		dörr2.disabled = true;
		dörr3.disabled = true;
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

if (iMonster == true) {
	alt1.addEventListener("click", slå_till);
	alt2.addEventListener("click", spring_iväg);
} else if (iKista == true) {
	alt1.addEventListener("click", spara);
	alt2.addEventListener("click", släng);
} else if (iFälla == true) {
	alt1.addEventListener("click");
	alt2.addEventListener("click");
}
