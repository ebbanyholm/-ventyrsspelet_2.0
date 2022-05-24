//Kopplar element från HTML-filen till java-filen
let outputText = document.getElementById("text-container");
let stats_text = document.getElementById("stats-text-container");
let dörr1c = document.getElementById("dörr-1-container");
let dörr2c = document.getElementById("dörr-2-container");
let dörr3c = document.getElementById("dörr-3-container");
let dörr1 = document.getElementById("dörr-1");
let dörr2 = document.getElementById("dörr-2");
let dörr3 = document.getElementById("dörr-3");
let alt1c = document.getElementById("alt1-container");
let alt2c = document.getElementById("alt2-container");

let alt1 = document.getElementById("alt1");
let alt2 = document.getElementById("alt2");

let inventoryContainer = document.getElementById("inventory-container");
let continueKc = document.getElementById("continue-container");
let continueK = document.getElementById("continueK");

let monsterc = document.getElementById("monster-container");
let monsterlåda = document.getElementById("monster-låda");
let blålådan = document.getElementById("output-container");
let bakgrund = document.getElementById("super-container");

//Skapar spelaren
let player = {
	namn: "Link",
	liv: 100,
	level: 1,
	styrka: 10,
};

//Sätter en maxgräns på antal liv man kan ha
let max_liv = 100;

//Skriver saker på dörrarna, information om spelaren och text
dörr1.textContent = "1";
dörr2.textContent = "2";
dörr3.textContent = "3";

stats_text.textContent = `Namn: ${player.namn}, Liv: ${player.liv}/${max_liv}, Styrka: ${player.styrka}, Lvl: ${player.level}`;

outputText.textContent =
	"Du har tre dörrar framför dig. Vilken vill du gå ni i? Klicka på en dörr för att öppna den.";

outputText.style.backgroundColor = "none";

//Skapar klassen "Items" med attributerna typ, styrka och liv
class Items {
	constructor(typ, styrka, liv) {
		this.typ = typ;
		this.styrka = styrka;
		this.liv = liv;
	}
}

//Skapar klassen "Existerande" som ska vara en stack för att hålla alla existerande items
class Existerande {
	constructor() {
		this.loot = [];
	}

	LTS(saker) {
		this.loot.push(saker);
		console.log("lägg till saker Marken");
	}

	TaSaker() {
		let funnet_loot = this.loot.pop();
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

//Skapar klassen "inventory" som är en stack som ska hålla den saken man har
class inventory {
	constructor() {
		this.ficka = [];
	}

	Få(saker) {
		this.ficka.push(saker);
		console.log("få saker till ryggsäck");
	}

	Ta() {
		let funnet_loot = this.ficka.pop();
		console.log("Ta från ryggsäck");
		return funnet_loot;
	}

	Visa() {
		console.log("I ryggsäcken");
		this.ficka.forEach((items) => {
			console.log(
				`Det finns ${items.typ} med styrka ${items.styrka} och bonus ${items.liv}`
			);
		});
	}
}

//Skapar Marken som är ny stack
let Marken = new Existerande();

//Sapar Ryggsäck som är en ny stack
let Ryggsäck = new inventory();

//Skapar alla items och lägger in dem i marken
let items = new Items("Svärd", 20, 15);
Marken.LTS(items);
items = new Items("Sten", 10, 20);
Marken.LTS(items);
items = new Items("Stekpanna", 10, 50);
Marken.LTS(items);
items = new Items("Banan", 25, 15);
Marken.LTS(items);
items = new Items("Salt", 100, -90);
Marken.LTS(items);
items = new Items("Avokado", 0, 100);
Marken.LTS(items);
items = new Items("Master sword", 50, 100);
Marken.LTS(items);
items = new Items("Råttan", 1, 1);
Marken.LTS(items);
items = new Items("Pistol", 73, 73);
Marken.LTS(items);
items = new Items("Filt", 15, 30);
Marken.LTS(items);
items = new Items("Den onödga 11:fte saken", 20, 20);
Marken.LTS(items);

Marken.visaExisterande();

//Skapar ett item och lägger in det i ryggsäcken
let saker = new Items("Dammkorn", 0, 0);
Ryggsäck.Få(saker);
inventoryContainer.textContent = `Just nu har du ${Ryggsäck.ficka[0].typ} med styrkan ${Ryggsäck.ficka[0].styrka} och med bonusliv ${Ryggsäck.ficka[0].liv}`;

//Gör att man kan klicka på knapparna och kopplar funktioner till dem
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

	alt1.style.backgroundColor = "rgb(36, 36, 36)";
	alt2.style.backgroundColor = "rgb(36, 36, 36 )";
	töm_alt_text();
}
function alt_påK() {
	alt1.disabled = false;
	alt2.disabled = false;
	alt1.style.backgroundColor = "rgb(34, 110, 105)";
	alt2.style.backgroundColor = "rgb(105, 95, 14)";
	alt1.textContent = "Spara";
	alt2.textContent = "Släng";
}
function continue_av() {
	continueK.disabled = true;
	continueK.style.backgroundColor = "rgb(41, 41, 41)";
	continueK.textContent = " ";
}
function continueK_på() {
	continueK.disabled = false;
	continueK.textContent = "→";
	continueK.style.backgroundColor = "rgb(6, 45, 112)";
}

function redo_text() {
	continueK.removeEventListener("click", redo_text);
	monsterc.innerHTML = `<img src="./images/tom.png" />`;
	outputText.textContent = "Du är nu redo för ditt nästa val";
	inventoryContainer.textContent = `Just nu har du ${Ryggsäck.ficka[0].typ} med styrkan ${Ryggsäck.ficka[0].styrka} och med bonusliv ${Ryggsäck.ficka[0].liv}`;

	continue_av();
	dörrar_på();
	alt_av();
}

function du_dog() {
	continueK_på();
	uppdatering_stats();
	function du_dog_text() {
		outputText.textContent = "du dog";
		dörr1.removeEventListener("click", slumpa_händelse);
		dörr2.removeEventListener("click", slumpa_händelse);
		dörr3.removeEventListener("click", slumpa_händelse);
		alt_av();
		continue_av();
		dörrar_av();
		blålådan.style.background = "black";
		dörr1.style.background = "black";
		dörr2.style.background = "black";
		dörr3.style.background = "black";
		bakgrund.style.background = "black";
		outputText.style.fontSize = 22;
		inventoryContainer.textContent = " ";
	}
	continueK.addEventListener("click", du_dog_text);
}
function du_vann() {
	monsterc.innerHTML = `<img src="./images/lila.png" />`;
	uppdatering_stats();
	outputText.style.fontSize = 30;
	dörr1.removeEventListener("click", slumpa_händelse);
	dörr2.removeEventListener("click", slumpa_händelse);
	dörr3.removeEventListener("click", slumpa_händelse);
	continueK.style.backgroundColor = "rgb( 41, 41, 41)";
	bakgrund.style.background = "rgb(82, 4, 94)";
	outputText.textContent = "Du vann.";
	inventoryContainer.textContent = " ";
	continue_av();
}

function välj_dörr() {
	dörrar_på();
	alt_av();
	continue_av();
	outputText.textContent =
		"Du har tre dörrar framför dig. Vilken vill du gå ni i? Klicka på en dörr för att öppna den.";
}

let m_liv = 0;
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
	let randomNumber = Math.floor(Math.random() * 8);
	function alt_påM() {
		alt1.disabled = false;
		alt2.disabled = false;
		alt1.textContent = "Slå";
		alt2.textContent = "Spring";
		if (randomNumber == 0) {
			alt1.style.backgroundColor = "rgb(70, 134, 18)";
			alt2.style.backgroundColor = "rgb(119, 25, 121)";
		} else if (randomNumber == 1) {
			alt1.style.backgroundColor = "rgb(2, 60, 139)";
			alt2.style.backgroundColor = "rgb(88, 8, 86)";
		} else if (randomNumber == 2) {
			alt1.style.backgroundColor = "rgb(122, 69, 205)";
			alt2.style.backgroundColor = "rgb(37, 134, 126)";
		} else if (randomNumber == 3) {
			alt1.style.backgroundColor = "rgb(190, 42, 42)";
			alt2.style.backgroundColor = "rgb(56, 96, 29)";
		} else if (randomNumber == 4) {
			alt1.style.backgroundColor = "rgb(14, 143, 157)";
			alt2.style.backgroundColor = "rgb(13, 69, 143)";
		} else if (randomNumber == 5) {
			alt1.style.backgroundColor = "rgb(7, 133, 56)";
			alt2.style.backgroundColor = "rgb(124, 17, 65)";
		} else if (randomNumber == 6) {
			alt1.style.backgroundColor = "rgb(196, 117, 38)";
			alt2.style.backgroundColor = "rgb(120, 21, 62)";
		} else if (randomNumber == 7) {
			alt1.style.backgroundColor = "rgb(204, 61, 130)";
			alt2.style.backgroundColor = "rgb(8, 106, 103)";
		}
	}

	monsterc.innerHTML = `<img src="./images/monster${randomNumber + 1}.png" />`;
	if (randomNumber == 0) {
		alt1.style.backgroundColor = "rgb(132, 38, 20)";
		alt2.style.backgroundColor = "rgb(132, 38, 20)";
	}

	function frånMbörjan() {
		continueK_på();
		alt_av();
		dörrar_av();
		continueK.addEventListener("click", monster);
	}

	function monster() {
		continueK.removeEventListener("click", monster);
		console.log("monster funktion");

		outputText.textContent =
			"Du står öga mot öga med ett monster..Vad vill du göra";
		dörrar_av();
		continue_av();
		alt_påM();
		alt1.addEventListener("click", slå_till);
		alt2.addEventListener("click", spring_iväg);

		function m_stats() {
			inventoryContainer.textContent = `monstrets liv: ${m_liv}   monstrets styrka: ${m_styrka}`;
		}
		m_stats();

		function slå_till() {
			alt1.removeEventListener("click", slå_till);
			alt2.removeEventListener("click", spring_iväg);
			console.log("slag");
			continueK_på();
			alt_av();
			dörrar_av();
			let strid = Math.floor(Math.random() * (4 - 1) + 1);

			if (strid == 1 || strid == 2) {
				console.log("monstret tar skada");
				outputText.textContent =
					"Du tar i och svingar ett stort slag mot monstret. Monstret kan inte undvika det och tar skada";
				m_liv -= player.styrka;
				m_stats();
				if (m_liv <= 0) {
					console.log("dödat monster");
					monsterc.innerHTML = `<img src="./images/tom.png" />`;
					dödat_monster();
					function dödat_monster() {
						player.level += 1;
						if (player.level >= 15) {
							du_vann();
						} else {
							outputText.textContent =
								"Du dödade monstret och gick upp en level.";
							uppdatering_stats();
							alt_av();
							continueK_på();
							continueK.addEventListener("click", redo_text);
						}
					}
				} else {
					console.log("skadat monster");
					continueK_på();
					continueK.addEventListener("click", m_slag);
				}
			} else {
				console.log("missar monstret");
				outputText.textContent =
					"Du tar och försöker skada monstret med din styrka. Du är för långsam och monstret har bra reflexer. Du missade monstret";
				continueK_på();
				continueK.addEventListener("click", m_slag);
			}

			function m_slag() {
				continueK.removeEventListener("click", m_slag);
				console.log("monstret laddar");
				outputText.textContent =
					"Du är utmattad. Monstret tar i från tårna med ett STORT slag"; //
				continueK_på();
				visa_resultat();
				function visa_resultat() {
					console.log("visa_resultat");
					continueK_på();
					dörrar_av();
					alt_av();
					continueK.addEventListener("click", m_slag_resultat);

					function m_slag_resultat() {
						continueK.removeEventListener("click", m_slag_resultat);
						console.log("monster resultat");
						continueK_på();
						dörrar_av();
						alt_av();
						resultat();
						function resultat() {
							console.log("slumpar monster slag resultat");
							let m_resultat = Math.floor(Math.random() * 2);
							if (m_resultat < 1) {
								console.log("monstret missar");
								outputText.textContent = "Monstret missade dig";
								frånMbörjan();
							} else if (m_resultat >= 1) {
								console.log("monstret träffar");
								outputText.textContent = "Monstret träffade dig";
								continueK.addEventListener("click", förlora_liv);

								function förlora_liv() {
									continueK.removeEventListener("click", förlora_liv);
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
					}
				}
			}
		}
		function spring_iväg() {
			alt1.removeEventListener("click", slå_till);
			alt2.removeEventListener("click", spring_iväg);
			alt_av();
			continue_av();
			lyckas_springaf = Math.floor(Math.random() * 2);

			if (player.styrka <= m_styrka) {
				if (lyckas_springaf >= 1) {
					outputText.textContent = "Du misslyckades med att springa iväg.";
					frånMbörjan();
				} else if (lyckas_springaf == 0) {
					outputText.textContent = "Du sprang iväg.";
					dörrar_av();
					continueK_på();
					continueK.addEventListener("click", redo_text);
				}
			}
			if (player.styrka > m_styrka) {
				if (lyckas_springaf == 2) {
					outputText.textContent = "Du misslyckades med att springa iväg.";
					frånMbörjan();
				} else if (lyckas_springaf <= 2) {
					outputText.textContent = "Du sprang iväg.";
					dörrar_av();
					continueK_på();
					continueK.addEventListener("click", redo_text);
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
	monsterc.innerHTML = `<img src="./images/kista_s.png" />`;
	dörrar_av();
	alt_av();
	outputText.textContent = "Yeeey!! En kista!!";

	let R = Math.floor(Math.random() * 2 + 1);

	function spara1() {
		alt1.removeEventListener("click", spara1);
		alt2.removeEventListener("click", släng1);

		alt_av();
		dörrar_av();
		console.log("spara");

		let slängt_item = Ryggsäck.Ta();
		Marken.LTS(slängt_item);
		Marken.visaExisterande();
		player.styrka -= slängt_item.styrka;
		max_liv -= slängt_item.liv;

		Ryggsäck.Få(Mitt_Item);
		outputText.textContent = `Du fick ${Mitt_Item.typ}`;
		Ryggsäck.Visa();
		player.styrka += Mitt_Item.styrka;
		max_liv += Mitt_Item.liv;

		if (slängt_item.typ == "Salt") {
			player.liv += 100;
		}
		if (Mitt_Item.typ == "Master sword") {
			player.liv = max_liv;
		}
		if (player.liv > max_liv) {
			player.liv = max_liv;
		}

		uppdatering_stats();
		dörrar_av();
		redo_text();
	}

	function släng1() {
		alt2.removeEventListener("click", släng1);
		alt1.removeEventListener("click", spara1);

		alt_av();
		dörrar_av();
		console.log("släng");
		outputText.textContent = `Du döda ditt nya item och slände iväg det`;
		Marken.LTS(Mitt_Item);
		continueK_på();
		continueK.addEventListener("click", för_att_fortsätta);
	}

	function för_att_fortsätta() {
		continueK.removeEventListener("click", för_att_fortsätta);
		dörrar_på();
		continue_av();
		redo_text();
	}

	function frågan() {
		alt_påK();
		alt1.addEventListener("click", spara1);
		alt2.addEventListener("click", släng1);
		console.log("fråga");
	}

	function hittade() {
		continueK.removeEventListener("click", hittade);
		monsterc.innerHTML = `<img src="./images/kista_ö.png" />`;
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
		continueK.removeEventListener("click", fortsätt);
		continue_av();
		dörrar_på();
		redo_text();
	}

	function skriv_ut() {
		continueK.removeEventListener("click", skriv_ut);
		monsterc.innerHTML = `<img src="./images/kista_ö.png" />`;
		continue_av();
		dörrar_av();
		player.liv += Merliv;
		outputText.textContent = `Du fick ${Merliv} mer i liv`;

		if (player.liv > max_liv) {
			player.liv = max_liv;
		}
		uppdatering_stats();
		continueK_på();
		continueK.addEventListener("click", fortsätt);
	}

	function för_att_skriva_ut() {
		continueK_på();
		continueK.addEventListener("click", skriv_ut);
	}

	if (R == 1) {
		console.log("Grej");
		visa_föremål();
	} else {
		Merliv = Math.floor(Math.random() * (50 - 1) + 20);
		för_att_skriva_ut();
	}
}

//---------------------------------------------- F Ä L L A ----------------------------------------------------------------------------------------------------------

function fälla() {
	alt_av();
	dörrar_av();
	continueK_på();
	let sortsfälla = Math.floor(Math.random() * 8 + 1);
	if (sortsfälla == 1 || sortsfälla == 2) {
		function fällaliv1() {
			continueK.removeEventListener("click", fällaliv1);
			continue_av();
			player.liv -= 3;
			uppdatering_stats();
			if (player.liv <= 0) {
				outputText.textContent = "Game Over. Du dog";
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		outputText.textContent =
			"Du såg inte att golvet saknades i vissa delar, du råkar kliva i ett av hålen och stukar foten. Du förlorar 3 liv.";
		töm_alt_text();
		continueK.addEventListener("click", fällaliv1);
	}

	if (sortsfälla == 3 || sortsfälla == 4) {
		function fällaliv2() {
			continueK.removeEventListener("click", fällaliv2);
			continue_av();
			player.liv -= 6;
			uppdatering_stats();
			if (player.liv <= 0) {
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		outputText.textContent =
			"Du märkte inte att det var en glasvägg framför dig, du går in i den och bryter näsan. Du förlorar 6 liv.";
		töm_alt_text();
		continueK.addEventListener("click", fällaliv2);
	}

	if (sortsfälla == 5 || sortsfälla == 6) {
		function fällaliv3() {
			continueK.removeEventListener("click", fällaliv3);
			continue_av();
			player.liv -= 9;
			uppdatering_stats();
			if (player.liv <= 0) {
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		outputText.textContent =
			"Plötsligt kommer du till en avsats, du tappar balansen och faller ner. Du förlorar 9 liv.";
		töm_alt_text();
		continueK.addEventListener("click", fällaliv3);
	}

	if (sortsfälla == 7) {
		function fällaliv4() {
			continueK.removeEventListener("click", fällaliv4);
			continue_av();
			player.liv -= 12;
			uppdatering_stats();
			if (player.liv <= 0) {
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		outputText.textContent =
			"Du går igenom en dörr och märker en svart katt framför dig, du väljer att klappa katten och märker inte fällan du utlöser som skjuter en pil i din axel. Du förlorade 12 liv.";
		töm_alt_text();
		continueK.addEventListener("click", fällaliv4);
	}

	if (sortsfälla == 8) {
		function fällaliv5() {
			continueK.removeEventListener("click", fällaliv5);
			continue_av();
			player.liv -= 15;
			uppdatering_stats();
			if (player.liv <= 0) {
				continue_av();
				du_dog();
			} else {
				continue_av();
				dörrar_av();
				redo_text();
			}
		}
		outputText.textContent =
			"Det är en märklig del på golvet som är gjord av trä, du försöker gå över den men trillar igenom det ruttna träet på en vass sten. Du förlorade 15 liv.";
		töm_alt_text();
		continueK.addEventListener("click", fällaliv5);
	}
}

//---------------------------------------------------------------------------------------------------------------

dörrar_på();
continue_av();
alt_av();
function slumpa_händelse() {
	monsterc.innerHTML = `<img src="./images/tom.png" />`;
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
