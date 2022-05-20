// Taggarna output-text och output-container återfinns i HTML-filen
let outputText = document.getElementById("text-container");
let stats_text = document.getElementById("stats-text-container");
let dörr1c = document.getElementById("dörr-1-container");
let dörr2c = document.getElementById("dörr-2-container");
let dörr3c = document.getElementById("dörr-3-container");
let dörr1 = document.getElementById("dörr-1");
let dörr2 = document.getElementById("dörr-2");
let dörr3 = document.getElementById("dörr-3");
let sparac = document.getElementById("spara-container");
let slängc = document.getElementById("släng-container");

let släng = document.getElementById("släng");
let spara = document.getElementById("spara");

let slåc = document.getElementById("slå-container");
let springc = document.getElementById("spring-container");
let slå = document.getElementById("slå");
let springk = document.getElementById("spring");

let inventoryContainer = document.getElementById("inventory-container");
let continueKc = document.getElementById("continue-container");
let continueK = document.getElementById("continueK");
let continueF = document.getElementById("continueF");
let continueM = document.getElementById("continueM");
let monsterc = document.getElementById("monster-container");
let monsterlåda = document.getElementById("monster-låda");
let blålådan = document.getElementById("output-container");
let bakgrund = document.getElementById("super-container");

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
		console.log("lägg till saker Marken");
	}
	//lägger till alla skapade varor i loooooten

	TaSaker() {
		let funnet_loot = this.loot.pop();
		// ej samma sker twice
		console.log("ta saker Marken");
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
		console.log("få saker till ryggsäck");
		//lägg till
	}

	Ta() {
		let funnet_loot = this.ficka.pop();
		console.log("Ta från ryggsäck");
		return funnet_loot;
		//ta bort
	}

	Visa() {
		console.log("I ryggsäcken");
		this.ficka.forEach((items) => {
			console.log(
				`Det finns ${items.typ} med styrka ${items.styrka} och bonus ${items.liv}`
			);
		});
	}
	//visa saker
}

let Marken = new Existerande();
//marken är lootet
let Ryggsäck = new inventory();

//skapar items --> looten
let items = new Items("svärd", 5, 50);
Marken.LTS(items);
items = new Items("sten", 8, 30);
Marken.LTS(items);
items = new Items("Stekpanna", 10, 25);
Marken.LTS(items);
items = new Items("Banan", 20, 10);
Marken.LTS(items);
items = new Items("Salt", 100, -90);
Marken.LTS(items);
items = new Items("Avokado", 0, 100);
Marken.LTS(items);
items = new Items("Master sword", 100, 100);
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
	spara.textContent = "";
	släng.textContent = "";
	slå.textContent = "";
	springk.textContent = "";
}
function alt_av() {
	spara.disabled = true;
	släng.disabled = true;

	slå.disabled = true;
	springk.disabled = true;

	springk.style.backgroundColor = "rgb(36, 36, 36)";
	spara.style.backgroundColor = "rgb(36, 36, 36 )";
	släng.style.backgroundColor = "rgb(36, 36, 36)";
	slå.style.backgroundColor = "rgb(36, 36, 36)";
	töm_alt_text();
}
function alt_påK() {
	spara.disabled = false;
	släng.disabled = false;
	spara.style.backgroundColor = "rgb(29, 46, 45)";
	släng.style.backgroundColor = "rgb(57, 54, 18)";
	slå.style.backgroundColor = "rgba(36, 36, 36, 0.58)";
	springk.style.backgroundColor = "rgba(36, 36, 36, 0.58)";
	spara.textContent = "Spara";
	släng.textContent = "Släng";
}
function alt_påM() {
	slå.disabled = false;
	springk.disabled = false;
	spara.style.backgroundColor = "rgba(36, 36, 36, 0.58)";
	släng.style.backgroundColor = "rgba(36, 36, 36, 0.58)";
	slå.style.backgroundColor = "rgb(29, 11, 62)";
	springk.style.backgroundColor = "rgb(23, 51, 26)";
	slå.textContent = "Slå";
	springk.textContent = "Spring";
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
		dörr1.style.background = "black";
		dörr2.style.background = "black";
		dörr3.style.background = "black";
		bakgrund.style.background = "black";
		outputText.style.fontSize = 22;
	}
	continueK.addEventListener("click", du_dog_text);
}
function du_vann() {
	function du_vann_text() {
		outputText.textContent = "Du vann";
		alt_av;
		continue_av;
		dörrar_av;
		blålådan.style.background = "blue";
		dörr1.style.background = "blue";
		dörr2.style.background = "blue";
		dörr3.style.background = "blue";
		bakgrund.style.background = "blue";
		outputText.style.fontSize = 22;
	}
	continueK.addEventListener("click", du_vann_text);
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
function mMonster() {
	console.log("slump av monster liv och styrka");
	if (player.level < 5) {
		m_styrka = Math.floor(Math.random() * 10 + 1);
		m_liv = Math.floor(Math.random() * 15 + 1);
	} else if (player.level >= 5 && player.level < 10) {
		m_styrka = Math.floor(Math.random() * 10 + 10);
		m_liv = Math.floor(Math.random() * 10 + 10);
	} else {
		m_styrka = Math.floor(Math.random() * 10 + 25);
		m_liv = Math.floor(Math.random() * 10 + 25);
	}

	function frånMbörjan() {
		continueM_på();
		alt_av();
		dörrar_av();
		continueM.addEventListener("click", monster);
	}

	function monster() {
		console.log("monster funktion");
		//monsterlåda.innerHTML = '<img src="./images/monster1.png />';

		outputText.textContent =
			"Du står öga mot öga med ett monster..Vad vill du göra";
		dörrar_av();
		continue_av();
		alt_påM();
		slå.addEventListener("click", slå_till);
		springk.addEventListener("click", spring_iväg);

		/*if (m_hp <= 0) {
			outputText.textContent("Du dödade monstret och gick där med upp en level.");
			player.level += 1;
		}
		if (player.liv <= 0) {
			outputText.textContent("Game Over. Du dog");
		}*/

		inventoryContainer.textContent = `monstrets liv: ${m_liv}
		monstrets styrka: ${m_styrka}`;

		function slå_till() {
			console.log("slag");
			continueM_på();
			alt_av();
			dörrar_av();
			let strid = Math.floor(Math.random() * (4 - 1) + 1);

			if (strid == 1 || strid == 2) {
				console.log("monstret tar skada");
				outputText.textContent =
					"Du tar i och svingar ett stort slag mot monstret. Monstret kan inte undvika det och tar skada";
				m_liv -= player.styrka;
				if (m_liv <= 0) {
					console.log("dödat monster");
					dödat_monster();
					function dödat_monster() {
						player.level += 1;
						if (player.level >= 15) {
							du_vann();
						}
						outputText.textContent =
							"Du dödade monstret och gick upp en level.";
						uppdatering_stats();
						continueM_på();
						continueM.addEventListener("click", redo_text);
					}
				} else {
					console.log("skadat monster");
					continueM_på();
					continueM.addEventListener("click", m_slag);
				}
			} else {
				console.log("missar monstret");
				outputText.textContent =
					"Du tar och försöker skada monstret med din styrka. Du är för långsam och monstret har bra reflexer. Du missade monstret";
				continueM_på();
				continueM.addEventListener("click", m_slag);
			}

			function m_slag() {
				console.log("monstret laddar");
				outputText.textContent =
					"Du är utmattad. Monstret tar i från tårna med ett STORT slag"; //
				continueM_på();
				visa_resultat();
				function visa_resultat() {
					console.log("visa_resultat");
					continueM_på();
					dörrar_av();
					alt_av();
					continueM.addEventListener("click", m_slag_resultat);

					function m_slag_resultat() {
						console.log("monster resultat");
						continueM_på();
						dörrar_av();
						alt_av();
						resultat();
						function resultat() {
							console.log("slumpar monster slag resultat");
							let m_resultat = Math.floor(Math.random() * 2);
							if (m_resultat <= 1) {
								console.log("monstret missar");
								outputText.textContent = "Monstret missade dig";
								frånMbörjan();
							} else if (m_resultat > 1) {
								console.log("monstret träffar");
								outputText.textContent = "Monstret träffade dig";
								continueM.addEventListener("click", förlora_liv);

								function förlora_liv() {
									console.log("förlora liv efter monstret träffar");
									alt_av();
									dörrar_av();
									continue_av();
									outputText.textContent = `Du förlorade ${m_styrka} liv.`;
									player.liv -= m_styrka;
									uppdatering_stats();
									if (player.liv > 0) {
										frånMbörjan();
									} else {
										du_dog();
									}
								}
							}
						}
						resultat();
					}
				}
			}
		}
		function spring_iväg() {
			alt_av();
			continue_av();
			spring = Math.floor(Math.random() * (3 - 1) + 1);
			//alert(spring);
			if (player.styrka <= m_styrka) {
				if (spring > 1) {
					outputText.textContent = "Du misslyckades med att springa iväg.";
					frånMbörjan();
				} else if (spring == 1) {
					outputText.textContent = "Du sprang iväg.";
					dörrar_av();
					continueM_på();
					continueM.addEventListener("click", redo_text);
					//du sprang iväg - nästa dörr
				}
			}
			if (player.styrka > m_styrka) {
				if (spring == 3) {
					outputText.textContent = "Du misslyckades med att springa iväg.";
					frånMbörjan();
				} else if (spring < 3) {
					outputText.textContent = "Du sprang iväg.";
					dörrar_av();
					continueM_på();
					continueM.addEventListener("click", redo_text);

					//du sprang iväg - ny dörr
				}
			}
		}
	}
	monster();
}
//---------------------------------------------- K I S T A ------------------------------------------------

let Mitt_Item = 0;
let Merliv = 0;
function kista() {
	dörrar_av();
	alt_av();
	outputText.textContent = "Yeeey!! En kista!!";

	let R = Math.floor(Math.random() * 2 + 1);

	function spara1() {
		alt_av();
		console.log("spara");

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
			player.liv += 100;
		}
		if (Mitt_Item.typ == "Master sword") {
			player.liv = max_liv;
		}

		uppdatering_stats();
		inventoryContainer.textContent = `Just nu har du ${Ryggsäck.ficka[0].typ} med styrkan ${Ryggsäck.ficka[0].styrka} och med bonusliv ${Ryggsäck.ficka[0].liv}`;
		dörrar_av();
		redo_text();
	}

	function släng1() {
		alt_av();
		console.log("släng");
		outputText.textContent = `Du döda ditt nya item och slände iväg det`;
		Marken.LTS(Mitt_Item);
		continueK_på();
		continueK.addEventListener("click", sad);
	}

	function sad() {
		continue_av();
		redo_text();
	}

	function frågan() {
		alt_påK();
		spara.addEventListener("click", spara1);
		släng.addEventListener("click", släng1);
		console.log("fråga");
	}

	function hittade() {
		continue_av();
		outputText.textContent = `Du har hittat ${Mitt_Item.typ} med styrkan ${Mitt_Item.styrka} och bonusliv ${Mitt_Item.liv}. Vill du spara den?`;
		inventoryContainer.textContent = `Just nu har du ${Ryggsäck.ficka[0].typ} med styrkan ${Ryggsäck.ficka[0].styrka} och med bonusliv ${Ryggsäck.ficka[0].liv}`;

		console.log("");
		console.log(Mitt_Item);
		frågan();
	}

	function visa_föremål() {
		Marken.blanda();
		Mitt_Item = Marken.TaSaker();
		continueK_på();
		console.log("kista");
		continueK.addEventListener("click", hittade);
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

	function snälla() {
		continueK_på();
		continueK.addEventListener("click", skriv_ut);
	}

	if (R == 1) {
		console.log("Grej");
		visa_föremål();
	} else {
		Merliv = Math.floor(Math.random() * (100 - 1) + 1);
		snälla();
	}
}

//---------------------------------------------- F Ä L L A ----------------------------------------------------------------------------------------------------------

function fälla() {
	alt_av();
	dörrar_av();
	continueF_på();
	let sortsfälla = Math.floor(Math.random() * 8 + 1);
	player.liv -= 0;
	if (sortsfälla == 1 || sortsfälla == 2) {
		function fällaliv1() {
			continue_av();
			player.liv -= 3;
			player.liv -= 0;
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
		töm_alt_text();
		continueF.addEventListener("click", fällaliv1);
	}

	if (sortsfälla == 3 || sortsfälla == 4) {
		function fällaliv2() {
			continue_av();
			player.liv -= 6;
			player.liv -= 0;
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
		töm_alt_text();
		continueF.addEventListener("click", fällaliv2);
	}

	if (sortsfälla == 5 || sortsfälla == 6) {
		function fällaliv3() {
			continue_av();
			player.liv -= 9;
			player.liv -= 0;
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
		töm_alt_text();
		continueF.addEventListener("click", fällaliv3);
	}

	if (sortsfälla == 7) {
		function fällaliv4() {
			continue_av();
			player.liv -= 12;
			player.liv -= 0;
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
		töm_alt_text();
		continueF.addEventListener("click", fällaliv4);
	}

	if (sortsfälla == 8) {
		function fällaliv5() {
			continue_av();
			player.liv -= 15;
			player.liv -= 0;
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
		töm_alt_text();
		continueF.addEventListener("click", fällaliv5);
	}
}

//------------------------------------------------------------------------------------------

dörrar_på();
continue_av();
alt_av();
function slumpa_händelse() {
	let slumpad_händelse = Math.floor(Math.random() * 3);

	if (slumpad_händelse == 0) {
		mMonster();
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
