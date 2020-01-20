var devine;
var now = new Date();
var tableauMot = new Array();
var mots = new Array();
var tailleMot;
var coupsManques = 0;
var lettresTrouvees = 0;
var fini = false;

mots[0] = "PRAGMATIQUE";
mots[1] = "MELLIFLUE";
mots[2] = "DIAPHANE";
mots[3] = "HOMERIQUE";
mots[4] = "PETRICHOR";
mots[5] = "THEBAIDE";
mots[6] = "IMMARCESCIBLE";
mots[7] = "OFFUSCATION";
mots[8] = "METEORISME";
mots[9] = "DISRUPTIF";
mots[10] = "EURYTHMIE";
mots[11] = "SEIDE";
mots[12] = "DYSTOPIE";
mots[13] = "PROCRASTINATION";
mots[14] = "BRANQUIGNOL";
mots[15] = "PHILATELISTE";
mots[16] = "TROLL";
mots[17] = "PAROXYSME";
mots[18] = "ALACRITE";
mots[19] = "STREAKER";
mots[20] = "ADAMANTIN";
mots[21] = "IRISEZ";
mots[22] = "LIAMES";
mots[23] = "VAQUAI";
mots[24] = "RIOTER";
mots[25] = "BOURRA";
mots[26] = "LESERA";
mots[27] = "FRUSTE";
mots[28] = "ZINZIN";
mots[29] = "PACQUE";
mots[30] = "PLAIDA";
mots[31] = "DERIVA";
mots[32] = "CAQUET";
mots[33] = "ASSONE";
mots[34] = "FERIEE";
mots[35] = "GROGGY";
mots[36] = "MAINTS";
mots[37] = "TERREZ";
mots[38] = "PAUMER";
mots[39] = "EPURAS";
mots[40] = "MASSUE";
mots[41] = "REVOLU";
mots[42] = "BRELES";
mots[43] = "ECUMES";
mots[44] = "GRAVES";
mots[45] = "BITURE";
mots[46] = "PECHES";
mots[47] = "VALINE";
mots[48] = "TIEDES";
mots[49] = "RAMPAI";
mots[49] = "POMMES";
mots[50] = "SUERA";
mots[51] = "ASSIED";
mots[52] = "FROLER";
mots[53] = "MODERE";
mots[54] = "GALBES";
mots[55] = "GROGNE";
mots[56] = "RETINE";
mots[57] = "PULSEZ";
mots[58] = "DEMINE";
mots[59] = "POTAGE";
mots[60] = "TRUFFE";
mots[61] = "GACHES";
mots[62] = "SOBRE";
mots[63] = "RAQUEE";
mots[64] = "AGENCE";
mots[65] = "EXPIEZ";
mots[66] = "VENTES";
mots[67] = "CASTRER";
mots[68] = "DUPLEX";
mots[69] = "DEVORE";
mots[70] = "IBERES";
mots[71] = "CIMENT";
mots[72] = "RECEDA";
mots[73] = "PATTES";
mots[74] = "PRIMEE";
mots[75] = "BERNAI";
mots[76] = "FREMIS";
mots[77] = "URGENT";
mots[78] = "FARCIR";
mots[79] = "COQUET";
mots[80] = "CENTRE";
mots[81] = "ETOLES";
mots[82] = "EMPOTA";
mots[83] = "PACHAS";
mots[84] = "MELONS";
mots[85] = "DESTIN";
mots[86] = "LOVERA";
mots[87] = "FUGUASSE";
mots[88] = "RESTER";
mots[89] = "ALEZAN";
mots[90] = "ALINEA";
mots[91] = "LAVIEZ";
mots[92] = "PRETRES";
mots[93] = "DETALER";
mots[94] = "FUSEES";
mots[95] = "COCHER";
mots[96] = "NANTIE";
mots[97] = "ENROBE";
mots[98] = "LUXURE";
mots[99] = "MORSES";
mots[100] = "TECKEL";

// le choix du mot est en fonction du temps en secondes ca tourne a chaque fois
devine = mots[now.getSeconds() % mots.length];
tailleMot = devine.length;

function changeCouleur(element, couleur) {
    element.style.backgroundColor = couleur;
};

function proposer(element) {
    if (element.style.backgroundColor == "#a6bdd6" || fini) return;
    var lettre = element.innerHTML;
    changeCouleur(element, "#a6bdd6");
    var trouve = false;

    for (var i = 0; i < tailleMot; i++) {
        if (tableauMot[i].innerHTML == lettre) {
            tableauMot[i].style.visibility = 'visible';
            trouve = true;
            lettresTrouvees++;
        };
    };

    // Si on trouve toujOurs pas il faut relancer jusau'a 9 fois et changer l'image jpg pour que le bonhomme apparaisse
    if (!trouve) {
        coupsManques++;
        document.images['pendu'].src = "assets/images/pendu_" + coupsManques + ".jpg";
        if (coupsManques == 9) {
            alert("Désolé tu as perdu ;)");
            for (var i = 0; i < tailleMot; i++) tableauMot[i].style.visibility = 'visible';
            fini = true;
        };
    };
    if (lettresTrouvees == tailleMot) {
        alert("Bravo, tu as gagné ... Pour cette fois !");
        fini = true;
    };
};