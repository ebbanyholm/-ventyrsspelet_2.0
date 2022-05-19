// Taggarna output-text och output-container återfinns i HTML-filen
let outputText = document.getElementById("text-container");
let stats_text = document.getElementById("stats-text-container");
let dörr1c = document.getElementById("dörr-1-container");
let dörr2c = document.getElementById("dörr-2-container");
let dörr3c = document.getElementById("dörr-3-container");
let dörr1 = document.getElementById("dörr-1");
let dörr2 = document.getElementById("dörr-2");
let dörr3 = document.getElementById("dörr-3");
let alt1c = document.getElementById("alt-1-container");
let alt2c = document.getElementById("alt-2-container");
let alt3c = document.getElementById("alt-3-container");
let alt1 = document.getElementById("alt-1");
let alt2 = document.getElementById("alt-2");
let inventoryContainer = document.getElementById("inventory-container");
let continueKc = document.getElementById("continue-container");
let continueK = document.getElementById("continueK");
let continueF = document.getElementById("continueF");
let continueM = document.getElementById("continueM");
let monsterlåda = document.getElementById("monster-container");
let blålådan = document.getElementById("output-container");
let bakgrund = document.getElementById("super-container");

carImage.innerHTML = `<img src="./images/${currentImage}" />`;
monsterlåda.textContent = "ヽ(。_°)ノ";

let player = {
	namn: "Link",
	liv: 100,
	level: 1,
	styrka: 10,
};

let max_liv = 100;

dörr1.textContent = "1";
dörr2.textContent = "2";
dörr3.textContent = "3";
stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}/${max_liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
outputText.textContent =
	"Du har tre dörrar framför dig. Vilken vill du gå ni i? Klicka på en dörr för att öppna den.";

outputText.style.backgroundColor = "none";

class Items {
	constructor(typ, styrka, liv) {
		this.typ = typ;
		this.styrka = styrka;
		this.liv = liv;
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
			console.log(
				`Det finns ${items.typ} med styrka ${items.styrka} och bonusliv ${items.liv}`
			);
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

class inventory {
	constructor() {
		this.ficka = [];
	}

	Få(saker) {
		this.ficka.push(saker);
		//lägg till
	}

	Ta() {
		let funnet_loot = this.ficka.pop();
		return funnet_loot;
		//ta bort
	}

	Visa() {
		this.ficka.forEach((items) => {
			console.log(`Det finns ${items.typ} med styrka ${items.styrka}`);
		});
	}
	//visa saker
}

let Marken = new Existerande();
//marken är lootet
let Ryggsäck = new inventory();

//skapar items --> looten
let items = new Items("svärd", 1, 50);
Marken.LTS(items);
items = new Items("sten", 5, 30);
Marken.LTS(items);
items = new Items("Stekpanna", 10, 25);
Marken.LTS(items);
items = new Items("Banan", 20, 10);
Marken.LTS(items);
items = new Items("Salt", 100, -90);
Marken.LTS(items);
items = new Items("Avokado", 0, 100);
Marken.LTS(items);

Marken.visaExisterande();

let saker = new Items("Dammkorn", 0, 0);
Ryggsäck.Få(saker);

dörr1.addEventListener("click", slumpa_händelse);
dörr2.addEventListener("click", slumpa_händelse);
dörr3.addEventListener("click", slumpa_händelse);

function uppdatering_stats() {
	stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}/${max_liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
}

function dörrar_av() {
	dörr1.disabled = true;
	dörr2.disabled = true;
	dörr3.disabled = true;
	dörr1c.style.color = "black";
	dörr2c.style.color = "black";
	dörr3c.style.color = "black";
}
function dörrar_på() {
	dörr1.disabled = false;
	dörr2.disabled = false;
	dörr3.disabled = false;
	dörr1c.style.color = "gray";
	dörr2c.style.color = "gray";
	dörr3c.style.color = "gray";
}
function töm_alt_text() {
	alt1.textContent = "";
	alt2.textContent = "";
}
function alt_av() {
	alt1.disabled = true;
	alt2.disabled = true;
	alt1c.style.color = "black";
	alt2c.style.color = "black";
	töm_alt_text();
}
function alt_på() {
	alt1.disabled = false;
	alt2.disabled = false;
	alt1c.style.color = "gray";
	alt2c.style.color = "gray";
}
function continue_av() {
	continueK.disabled = true;
	continueF.disabled = true;
	continueM.disabled = true;
	continueK.style.backgroundColor = "rgb(41, 41, 41)";
	continueF.style.backgroundColor = "rgb(41, 41, 41)";
	continueM.style.backgroundColor = "rgb(41, 41, 41)";
	continueF.textContent = " ";
	continueK.textContent = " ";
	continueM.textContent = " ";
}

function continueF_på() {
	continueF.disabled = false;
	continueK.disabled = true;
	continueM.disabled = true;
	continueF.textContent = "→";
	continueF.style.backgroundColor = "rgb(1, 50, 32)";
}
function continueK_på() {
	continueK.disabled = false;
	continueM.disabled = true;
	continueF.disabled = true;
	continueK.textContent = "→";
	continueK.style.backgroundColor = "rgb(1, 50, 2)";
}
function continueM_på() {
	continueM.disabled = false;
	continueK.disabled = true;
	continueF.disabled = true;
	continueM.textContent = "→";
	continueM.style.backgroundColor = "rgb(1, 50, 32)";
}
function redo_text() {
	outputText.textContent = "Du är nu redo för ditt nästa val";
	continue_av();
	dörrar_på();
	alt_av();
}
/*function från_start() {
	dörrar_på;
	continueK_av;
	alt_av;
	dörr1.addEventListener("click", slumpa_händelse);
	dörr2.addEventListener("click", slumpa_händelse);
	dörr3.addEventListener("click", slumpa_händelse);
}*/

function du_dog() {
	function du_dog_text() {
		outputText.textContent = "du dog";
		alt_av;
		continue_av;
		dörrar_av;
		blålådan.style.background = "black";
		alt1.style.background = "black";
		alt2.style.background = "black";
		dörr1.style.background = "black";
		dörr2.style.background = "black";
		dörr3.style.background = "black";
		bakgrund.style.background = "black";
		outputText.style.fontSize = 22;
	}
	continueK.addEventListener("click", du_dog_text);
}
function välj_dörr() {
	dörrar_på();
	alt_av();
	continue_av();
	outputText.textContent =
		"Du har tre dörrar framför dig. Vilken vill du gå ni i? Klicka på en dörr för att öppna den.";
}

let m_hp = 0;
let m_styrka = 0;
//--------------------------------------------------- M O N S T E R ----------------------------------------------------

function monster() {
	outputText.textContent =
		"Du står öga mot öga med ett monster..Vad vill du göra";
	inventoryContainer.textContent = `m_hp: ${m_hp}`;
	dörrar_av();
	continue_av();
	alt_på();
	alt1.addEventListener("click", slå_till);
	alt2.addEventListener("click", spring_iväg);
	alt1.textContent = "slå till";
	alt2.textContent = "spring!!";

	/*if (m_hp <= 0) {
		outputText.textContent("Du dödade monstret och gick där med upp en level.");
		player.level += 1;
	}
	if (player.liv <= 0) {
		outputText.textContent("Game Over. Du dog");
	}*/

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

	function frånMbörjan() {
		continueM_på();
		alt_av();
		dörrar_av();
		continueK.addEventListener("click", monster);
	}

	function slå_till() {
		continueM_på();
		alt_av();
		dörrar_av();
		let strid = Math.floor(Math.random() * (4 - 1) + 1);

		if (strid == 1 || strid == 2) {
			outputText.textContent =
				"Du tar i och svingar ett stort slag mot monstret. Monstret kan inte undvika det och tar skada";
			m_hp - player.styrka;
			if (m_hp <= 0) {
				function dödat_monster() {
					outputText.textContent = "Du dödade monstret och gick upp en level.";
					player.level += 1;
					continueM_på();
					continueM.addEventListener("click", redo_text);
				}
				dödat_monster();
			}
		} else {
			outputText.textContent =
				"Du tar och försöker skada monstret med din styrka. Du är för långsam och monstret har bra reflexer. Du missade monstret";
		}

		///////////////////////////////////////////
		continueM.addEventListener("click", m_slag);
		function m_slag() {
			outputText.textContent =
				"Du är utmattad. Monstert tar i från tårna med ett STORT slag"; //
			continueM_på();

			function visa_resultat() {
				function m_slag_resultat() {
					continueM_på();
					dörrar_av();
					alt_av();

					let m_resultat = Math.floor(Math.random() * (5 - 1) + 1);
					if (m_resultat <= 2) {
						outputText.textContent = "Monstret missade dig";
						frånMbörjan();
					} else if (m_resultat > 2) {
						outputText.textContent = "Monstret träffade dig";
						function förlora_liv() {
							//////////
							alt_av();
							dörrar_av();
							continue_av();
							outputText.textContent = `Du förlorade ${m_styrka} liv.`;
							player.liv -= m_styrka;
							stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;
							if (player.liv > 0) {
								frånMbörjan();
							} else {
								du_dog();
							}
						}

						continueM.addEventListener("click", förlora_liv);
					}
				}
				continueM_på();
				dörrar_av();
				alt_av();
				continueM.addEventListener("click", m_slag_resultat);
			}
			visa_resultat();
		}
	}
	function spring_iväg() {
		alt_av();
		continue_av();
		spring = Math.floor(Math.random() * 3 + 1);
		//alert(spring);
		if (player.styrka <= m_styrka) {
			if (spring > 1) {
				outputText.textContent = "du missluckades med att springa iväg";
				frånMbörjan();
			} else if (spring == 1) {
				outputText.textContent = "du sprang iväg";
				continueM_på();
				continueM.addEventListener("click", redo_text);
				//du sprang iväg - nästa dörr
			}
		}
		if (player.styrka > m_styrka) {
			if (spring == 3) {
				outputText.textContent = "du missluckades med att springa iväg";
				frånMbörjan();
			} else if (spring < 3) {
				outputText.textContent = "du sparng iväg";
				continueM_på();
				continueM.addEventListener("click", redo_text);

				//du sprang iväg - ny dörr
			}
		}
	}
}

//---------------------------------------------- K I S T A ------------------------------------------------

let Mitt_Item = 0;
let Merliv = 0;
function kista() {
	dörrar_av();
	alt_av();
	outputText.textContent = "Yeeey!! En kista!!";

	let R = Math.floor(Math.random() * 3 + 1);

	function spara() {
		alert("sparad");
		alt_av();

		let aaa = Ryggsäck.Ta();
		Marken.LTS(aaa);
		Marken.visaExisterande();
		player.styrka -= aaa.styrka;
		max_liv -= aaa.liv;

		Ryggsäck.Få(Mitt_Item);
		outputText.textContent = `Du fick ${Mitt_Item.typ}`;
		Ryggsäck.Visa();
		player.styrka += Mitt_Item.styrka;
		max_liv += Mitt_Item.liv;

		if (Mitt_Item.typ == "Salt") {
			player.liv = max_liv;
		}
		if (aaa.typ == "Salt") {
			player.liv += 50;
		}

		uppdatering_stats();
		inventoryContainer.textContent = `Just nu har du ${Ryggsäck.ficka[0].typ} med styrkan ${Ryggsäck.ficka[0].styrka} och med bonusliv ${Ryggsäck.ficka[0].liv}`;

		redo_text();
	}

	function släng() {
		alert("slängd");
		outputText.textContent = `Du döda ditt nya item och slände iväg det`;
		redo_text();
	}

	function frågan() {
		alt_på();
		alt1.textContent = "Ja";
		alt2.textContent = "Nej";
		alt1.addEventListener("click", spara);
		alt2.addEventListener("click", släng);
		console.log("fråga");
		continue_av();
	}

	function hittade() {
		continue_av();
		Marken.blanda();
		Mitt_Item = Marken.TaSaker();
		outputText.textContent = `Du har hittat ${Mitt_Item.typ} med styrkan ${Mitt_Item.styrka} och bonusliv ${Mitt_Item.liv}. Vill du spara den?`;
		inventoryContainer.textContent = `Just nu har du ${Ryggsäck.ficka[0].typ} med styrkan ${Ryggsäck.ficka[0].styrka} och med bonusliv ${Ryggsäck.ficka[0].liv}`;

		console.log("");
		console.log(Mitt_Item);
		frågan();
	}

	function visa_föremål() {
		continueK_på();
		continueK.addEventListener("click", hittade);
		console.log("kista");
	}

	function fortsätt() {
		continue_av();
		dörrar_på();
		redo_text();
	}

	function skriv_ut() {
		continue_av();
		player.liv += Merliv;
		outputText.textContent = `Du fick ${Merliv} mer i liv`;

		if (player.liv > max_liv) {
			player.liv = max_liv;
		}
		uppdatering_stats();
		continueK_på();
		continueK.addEventListener("click", fortsätt);
	}

	if (R == 1) {
		Merliv = Math.floor(Math.random() * (50 - 1) + 1);
		continueK_på();
		continueK.addEventListener("click", skriv_ut);
	} else {
		console.log("Grej");
		visa_föremål();
	}
}

//---------------------------------------------- F Ä L L A ----------------------------------------------------------------------------------------------------------

function fälla() {
	alt_av();
	dörrar_av();
	continueF_på();
	let sortsfälla = Math.floor(Math.random() * 8);
	player.liv -= 0;
	if (sortsfälla == 0 || sortsfälla == 1) {
		function fällaliv1() {
			continue_av();
			player.liv -= 3;
			uppdatering_stats();
			if (player.liv <= 0) {
				outputText.textContent("Game Over. Du dog");
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		fast = true;
		outputText.textContent =
			"Du såg inte att golvet saknades i vissa delar, du råkar kliva i ett av hålen och stukar foten. Du förlorar 3 liv.";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueF.addEventListener("click", fällaliv1);
	}

	if (sortsfälla == 2 || sortsfälla == 3) {
		function fällaliv2() {
			continue_av();
			player.liv -= 6;
			uppdatering_stats();
			if (player.liv <= 0) {
				outputText.textContent("Game Over. Du dog");
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		fast = true;
		outputText.textContent =
			"Du märkte inte att det var en glasvägg framför dig, du går in i den och bryter näsan. Du förlorar 6 liv.";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueF.addEventListener("click", fällaliv2);
	}

	if (sortsfälla == 4 || sortsfälla == 5) {
		function fällaliv3() {
			continue_av();
			player.liv -= 9;
			uppdatering_stats();
			if (player.liv <= 0) {
				outputText.textContent("Game Over. Du dog");
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		fast = true;
		outputText.textContent =
			"Plötsligt kommer du till en avsats, du tappar balansen och faller ner. Du förlorar 9 liv.";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueF.addEventListener("click", fällaliv3);
	}

	if (sortsfälla == 6) {
		function fällaliv4() {
			continue_av();
			player.liv -= 12;
			uppdatering_stats();
			if (player.liv <= 0) {
				outputText.textContent("Game Over. Du dog");
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		fast = true;
		outputText.textContent =
			"Du går igenom en dörr och märker en svart katt framför dig, du väljer att klappa katten och märker inte fällan du utlöser som skjuter en pil i din axel. Du förlorade 12 liv.";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueF.addEventListener("click", fällaliv4);
	}

	if (sortsfälla == 7) {
		function fällaliv5() {
			continue_av();
			player.liv -= 15;
			uppdatering_stats();
			if (player.liv <= 0) {
				outputText.textContent("Game Over. Du dog");
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		fast = true;
		outputText.textContent =
			"Det är en märklig del på golvet som är gjord av trä, du försöker gå över den men trillar igenom det ruttna träet på en vass sten. Du förlorade 15 liv.";
		alt1.textContent = " ";
		alt2.textContent = " ";
		continueF.addEventListener("click", fällaliv5);
	}
}

dörrar_på;
continue_av;
alt_av;
function slumpa_händelse() {
	let slumpad_händelse = Math.floor(Math.random() * 3);

	if (slumpad_händelse == 0) {
		monster();
	}
	if (slumpad_händelse == 1) {
		fälla();
	}
	if (slumpad_händelse == 2) {
		kista();
	}
}

// namnet = prompt("vad heter du?");
// player.namn = namnet;
// alert(`Du heter ${player.namn}`);

// Lägger till en EventListener till outputContainer
