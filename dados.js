let dados = [
    {
        codigo: "001",
        nome: "Bullbasaur",
        nome_japones: "Fushigidane",
        massa: "6,9kg",
        especie: "Pokémon Semente",
        tipo: "Planta / Veneno",
        descricao: "O bulbo em suas costas está cheio de nutrientes. Nele, Bullbasaur armazena suas energias. obulbo vai crecendo à medida que envelhece porque ele absorve os raios de sol.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
    },
    {
        codigo: "002",
        nome: "Ivysaur",
        nome_japones: "Fushigisou",
        massa: "13kg",
        especie: "Pokémon Semente",
        tipo: "Planta / Veneno",
        descricao: "A luz solar fará a flor em suas costas crescer. Conforme Ivysaur for crescendo, essa flor irá desabrochar. Ele irá soltar um doce aroma quando florescer.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png"
    },
    {
        codigo: "003",
        nome: "Venusaur",
        nome_japones: "Fushigibana",
        massa: "100kg",
        especie: "Pokémon Semente",
        tipo: "Planta / Veneno",
        descricao: "A luz solar que a flor de suas costas absorve produz energia para seu corpo. Por esta razão, ele fica mais forte do verão. O aroma deesa flor pode acalmar as emoções das pessoas.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png"
    },
    {
        codigo: "004",
        nome: "Charmander",
        nome_japones: "Hitokage",
        massa: "8,5kg",
        especie: "Pokémon Lagarto",
        tipo: "Fogo",
        descricao: "A chama que possui na ponta de seu rabo mostra a força de sua vida. Se ele estiver fraco, a chama irá diminuir. Quando está saudável, a chama brilhará intensamente.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
    },
    {
        codigo: "005",
        nome: "Charmeleon",
        nome_japones: "Lizard",
        massa: "19kg",
        especie: "Pokémon Chama",
        tipo: "Fogo",
        descricao: "Gosta muito de brigas, por isso busca constantemente por adversários. Ele ataca com suas garras afiadas e usando sua cauda como chicote de fogo. Pode soltar chamas azuis quando muito animado.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png"
    },
    {
        codigo: "006",
        nome: "Charizard",
        nome_japones: "Lizardon",
        massa: "90,5kg",
        especie: "Pokémon Chama",
        tipo: "Fogo / Voador",
        descricao: "Seu fogo é quente o suficiente para derreter rochas. Quando nervoso, a chama em sua cauda queimará intensamente. É orgulhoso e voa pelos céus em busca de adversários poderosos.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
    },
    {
        codigo: "007",
        nome: "Squirtle",
        nome_japones: "Zenigame",
        massa: "9kg",
        especie: "Pokémon Mini Tartaruga",
        tipo: "Água",
        descricao: "Quando nasce, seu casco é mole, mas logo endurece. Cutucando com o dedo fará os pedaços de seu casco saltar. Ele entra dentro do casco quando se sente ameaçado.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
    },
    {
        codigo: "008",
        nome: "Wartortle",
        nome_japones: "Kamer",
        massa: "22,5kg",
        especie: "Pokémon Tartaruga",
        tipo: "Água",
        descricao: "É muito inteligente, sabe controlar as orelhas e o rabo para manter o equilíbrio na água e nadar em altas velocidades. Seu rabo felpudo é símbolo de longevidade.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png"
    },
    {
        codigo: "009",
        nome: "Blastoise",
        nome_japones: "Kamex",
        massa: "85,5kg",
        especie: "Pokémon Crustáceo",
        tipo: "Água",
        descricao: "O casco em suas costas possuem canhões que jorram água pressurizada forte o suficiente para perfurar uma parede de concreto. Também usa o seu casco pesado para atacar.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png"
    },
    {
        codigo: "010",
        nome: "Metapod",
        nome_japones: "Trancel",
        massa: "9,9kg",
        especie: "Pokémon Verme",
        tipo: "Inseto",
        descricao: "Como forma de proteção, Caterpie libera um cheiro horrível através de suas antenas. Suas patas pegajosas são capazes de andar em qualquer tipo de superfície.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png"
    },
    {
        codigo: "011",
        nome: "Caterpie",
        nome_japones: "Catapie",
        massa: "9,9kg",
        especie: "Pokémon Casulo",
        tipo: "Inseto",
        descricao: "Este pokémon é totalmente vulnerável a ataques enquanto seu casulo é mole, correndo risco de expor seu corpo frágil e sensível. Por isso, fica endurecendo o seu casulo para se proteger.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png"
    },
    {
        codigo: "012",
        nome: "Butterfree",
        nome_japones: "Batterfree",
        massa: "32kg",
        especie: "Pokémon Borboleta",
        tipo: "Inseto / Voador",
        descricao: "Gosta de coletar mel das plantas. Suas asas batem tão rapidamente que acaba deixando um rastro de poeira tóxica pelo ar. As asas resistem a água, permitindo-o voar em fortes chuvas.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png"
    },
    {
        codigo: "013",
        nome: "Weedle",
        nome_japones: "Beedle",
        massa: "3,2kg",
        especie: "Pokémon Peludo",
        tipo: "Inseto / Veneno",
        descricao: "É frequentemente encontrado em florestas, comendo folhas. Em sua cabeça existe um ferrão afiado e venenoso. Qualquer um pode se machucar com ele se não tomar cuidado onde pisa.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png"
    },
    {
        codigo: "014",
        nome: "Kakuna",
        nome_japones: "Kokoon",
        massa: "10kg",
        especie: "Pokémon Casulo",
        tipo: "Inseto / Veneno",
        descricao: "Enquanto aguarda sua evolução, os Kakunas vivem agarrados em árvores para se esconder dos predadores. Embora ainda seja um casulo, consegue se mexer um pouco.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png"
    },
    {
        codigo: "015",
        nome: "Beedrill",
        nome_japones: "Spear",
        massa: "29,5kg",
        especie: "Pokémon Abelha Venenosa",
        tipo: "Inseto / Veneno",
        descricao: "Possui dois grandes ferrões nos braços e um em seu rabo. O ferrão de seu rabo é o mais venenos. Costumam voar em altas velocidades e atacar em enxame.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png"
    },
    {
        codigo: "016",
        nome: "Pidgey",
        nome_japones: "Poppo",
        massa: "1,8kg",
        especie: "Pokémon Mini Pássaro",
        tipo: "Normal / Voador",
        descricao: "Não gosta muito de lutar. Em vez disso, prefere bater as asas próximo ao chão para levantar uma poeira de areia e com isso afastar o inimigo. Possui um ótimo senso de direção.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png"
    },
    {
        codigo: "017",
        nome: "Pidgotto",
        nome_japones: "Pidgeon",
        massa: "30kg",
        especie: "Pokémon Pássaro",
        tipo: "Normal / Voador",
        descricao: "Ele é muito protetor de seu território, sempre irá atacar brutalmente qualquer intruso. Possui uma ótima visão e garras bastante desenvolvidas, essenciais para caçar suas presas.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png"
    },
    {
        codigo: "018",
        nome: "Pidgeot",
        nome_japones: "Pidgeott",
        massa: "39,5kg",
        especie: "Pokémon Pássaro",
        tipo: "Normal / Voador",
        descricao: "É capaz de voar numa rapidez incrível, sendo mais veloz que a velocidade do som. Com seus músculos bem desenvolvidos, consegue fazer fortes furacões ao bater suas asas.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png"
    },
    {
        codigo: "019",
        nome: "Rattata",
        nome_japones: "Koratta",
        massa: "3,5kg",
        especie: "Pokémon Rato",
        tipo: "Normal",
        descricao: "Morde qualquer coisa quando está atacando. Vive procurando objetos duros para roer. Consegue viver em qualquer lugar e reproduzir muito depressa.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png"
    },
    {
        codigo: "020",
        nome: "Raticate",
        nome_japones: "Ratta",
        massa: "18,5kg",
        especie: "Pokémon Rato",
        tipo: "Normal",
        descricao: "Para assustar os adversários, ele posiciona-se de pé e mostra as presas de sua boca. Suas presas são fortes, capazes até mesmo de roer uma parede de concreto.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png"
    },
    {
        codigo: "021",
        nome: "Spearow",
        nome_japones: "Onisuzume",
        massa: "2kg",
        especie: "Pokémon Mini Pássaro",
        tipo: "Normal / Voador",
        descricao: "Ele bate suas asas sobre a grama para encontrar insetos. Quando encontra, puxa-os do chão com o seu bico. Suas asas são curtas, por isso não pode voar por longas distâncias.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png"
    },
    {
        codigo: "022",
        nome: "Fearow",
        nome_japones: "Onidrill",
        massa: "38kg",
        especie: "Pokémon Bico",
        tipo: "Normal / Voador",
        descricao: "Fearow é famoso por seu pesçoco longo e bico comprido. Eles foram desenvolvidos especialmente para ajudá-lo a apanhar presas no solo ou na água. Consegue manter-se voando no céu por bastante tempo sem pousar.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png"
    },
    {
        codigo: "023",
        nome: "Ekans",
        nome_japones: "Arbo",
        massa: "6,9kg",
        especie: "Pokémon Serpente",
        tipo: "Veneno",
        descricao: "Rasteja silenciosamente pelo chão. Alimenta-se de ovos nos ninhos de pokémons pássaros. Ele sente o cheiro com sua língua. Suas mandíbulas são capazes de devorar seres bem maiores que ele.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png"
    },
    {
        codigo: "024",
        nome: "Arbok",
        nome_japones: "Arbok",
        massa: "65kg",
        especie: "Pokémon Cobra",
        tipo: "Veneno",
        descricao: "As marcas no pescoço de Arbok podem ser diferentes de região para região. Elas indicam o quão venenoso este pokémon é. Ele também pode sufocar suas vítimas enrolando-se em torno delas.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png"
    },
    {
        codigo: "025",
        nome: "Pikachu",
        nome_japones: "Pikachu",
        massa: "6kg",
        especie: "Pokémon Rato",
        tipo: "Elétrico",
        descricao: "Para ter uma melhor percepção de tudo o que está em sua volta, mantém o seu rabo levantado. Ele armazena energia elétrica dentro de suas bochechas vermelhas.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
    },
    {
        codigo: "026",
        nome: "Raichu",
        nome_japones: "Raichu",
        massa: "30kg",
        especie: "Pokémon Rato",
        tipo: "Elétrico",
        descricao: "Pode tornar-se agressivo caso acumule muita eletricidade no corpo. Pode dar choques de até dez mil volts. Ele mantém o seu longo rabo no solo para controlar seus raios elétricos.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png"
    },
    {
        codigo: "027",
        nome: "Sandshrew",
        nome_japones: "Sand",
        massa: "12kg",
        especie: "Pokémon Rato",
        tipo: "Terra",
        descricao: "Faz sua toca no subterrâneo, longe de água. Geralmente sai apenas para caçar. Se ele cair de uma grande altura, consegue se salvar enrolando o corpo e rolando como uma bola.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png"
    },
    {
        codigo: "028",
        nome: "Sandslash",
        nome_japones: "Sandpan",
        massa: "29,5kg",
        especie: "Pokémon Rato",
        tipo: "Terra",
        descricao: "É habilidoso para fazer arranhões com suas garras. Se elas quebrarem, irão crescer de novo em um dia. Suas costas possuem espinhos muito duros, usados como sua defesa.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png"
    },
    {
        codigo: "029",
        nome: "Nidoran ♀",
        nome_japones: "Nidoran ♀",
        massa: "29,5kg",
        especie: "Pokémon Agulha Venenosa",
        tipo: "Veneno",
        descricao: "As fêmeas de Nidoran possuem chifres menores. Embora pequena, deve se ter muito cuidado com os espinhos venenosos de seu corpo. Ela não gosta muito de lutar.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png"
    },
    {
        codigo: "030",
        nome: "Nidorina",
        nome_japones: "Nidorina",
        massa: "20kg",
        especie: "Pokémon Agulha Venenosa",
        tipo: "Veneno",
        descricao: "O chifre em sua cabeça desenvolve-se lentamente. Ela prefere golpear com ataque físicos, como mordidas e arranhões. É dócil, mas não hesita em atacar quando perturbada.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png"
    },
    {
        codigo: "031",
        nome: "Nidoqueen",
        nome_japones: "Nidoqueen",
        massa: "60kg",
        especie: "Pokémon Broca",
        tipo: "Veneno / Terra",
        descricao: "Duras escamas crescem no corpo robusto deste pokémon. Isso lhe permite realizar movimentos brutais. Ela defende a sua cria com sua própria vida.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png"
    },
    {
        codigo: "032",
        nome: "Nidoran ♂",
        nome_japones: "Nidoran ♂",
        massa: "9kg",
        especie: "Pokémon Agulha Venenosa",
        tipo: "Veneno",
        descricao: "Ele endurece suas orelhas para sentir o perigo. Com elas, consegue escutar o mais leve dos sons. Quanto maior for o seu chifre, mais venenoso ele será.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/032.png"
    },
    {
        codigo: "033",
        nome: "Nidorino",
        nome_japones: "Nidorino",
        massa: "19,5kg",
        especie: "Pokémon Agulha Venenosa",
        tipo: "Veneno",
        descricao: "Utiliza-se de sua cauda poderosa para bater e enrolar seus oponentes. Combates corpo a corpo são a sua especialidade. Seu chifre é capaz de perfurar diamantes.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/033.png"
    },
    {
        codigo: "034",
        nome: "Nidoking",
        nome_japones: "Nidoking",
        massa: "62kg",
        especie: "Pokémon Broca",
        tipo: "Veneno / Terra",
        descricao: "Possui um chifre mais duro que diamante. Caso ele sinta alguma presença hostil, todas as farpas de suas costas irão erguer-se de uma só vez. Suas picadas podem ser fatais.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/034.png"
    },
    {
        codigo: "035",
        nome: "Clefairy",
        nome_japones: "Pippi",
        massa: "7,5kg",
        especie: "Pokémon Fada",
        tipo: "Fada",
        descricao: "A luz lunar que pode absorver com suas asas aparentemente lhe dá a capacidade de voar. Raramente é encontrado, vive em locais específicos. Costumam sair de seus esconderijos em noites de lua cheia para dançar.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/035.png"
    },
    {
        codigo: "036",
        nome: "Clefable",
        nome_japones: "Pixy",
        massa: "40kg",
        especie: "Pokémon Fada",
        tipo: "Fada",
        descricao: "Um pokémon muito tímido, foge sempre que percebe estar sendo observado. Possui uma audição bem aguçada. Ele dá leves saltos para se locomover, permitindo-o passear sobre lagos em noites de luar.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/036.png"
    },
    {
        codigo: "037",
        nome: "Vulpix",
        nome_japones: "Rokon",
        massa: "9,9kg",
        especie: "Pokémon Raposa",
        tipo: "Fogo",
        descricao: "Quando nasce, possui apenas um rabo. Ele vai se dividindo conforme for envelhecendo. Astuto, para fugir do perigo, finge estar debilitado e engana o adversário.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png"
    },
    {
        codigo: "038",
        nome: "Ninetales",
        nome_japones: "Kyukon",
        massa: "19,9kg",
        especie: "Pokémon Raposa",
        tipo: "Fogo",
        descricao: "É extremamente vingativo. Dizem que cairá uma maldição de mil anos sobre aquele que puxar uma de suas caudas por brincadeira. Acredita-se que cada uma de suas nove caudas possui um poder místico especial.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png"
    },
    {
        codigo: "039",
        nome: "Jigglypuff",
        nome_japones: "Purin",
        massa: "5,5kg",
        especie: "Pokémon Balão",
        tipo: "Normal / Fada",
        descricao: "Seus grandes olhos são usados para encatar o inimigo. Depois, canta uma bela melodia que coloca o adversário para dormir. Ele pode inflar o corpo como um balão e sair flutuando.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png"
    },
    {
        codigo: "040",
        nome: "Wigglytuff",
        nome_japones: "Pukurin",
        massa: "12kg",
        especie: "Pokémon Balão",
        tipo: "Normal / Fada",
        descricao: "Sua pele é macia e seu corpo é bastante flexível. Quando está com raiva, consegue inalar o ar repetidas vezes, inflando seu corpo cada vez mais.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/040.png"
    },
    {
        codigo: "041",
        nome: "Zubat",
        nome_japones: "Zubat",
        massa: "7,5kg",
        especie: "Pokémon Morcego",
        tipo: "Veneno / Voador",
        descricao: "Sua audição é bem apurada. Para identificar aquilo que estiver em seu caminho, Zubat solta ondas ultra-sônicas. Isso lhe permite voar com segurança mesmo em locais escuros.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/041.png"
    },
    {
        codigo: "042",
        nome: "Golbat",
        nome_japones: "Golbat",
        massa: "55kg",
        especie: "Pokémon Morcego",
        tipo: "Veneno / Voador",
        descricao: "Com os dentes bastante afiados, morde suas vítimas para sugar o sangue. Ele não irá parar de drenar a energia da vítima até estar satisfeito. Se chupa muito sangue, fica pesado e voa desajeitadamente.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/042.png"
    },
    {
        codigo: "043",
        nome: "Oddish",
        nome_japones: "Nazonokusa",
        massa: "5,4kg",
        especie: "Pokémon Erva Daninha",
        tipo: "Planta / Veneno",
        descricao: "Durante o dia costuma ficar enterrado no chão, deixando apenas as suas folhas expostas. Ele irá berrar caso alguém tente arrancá-lo de lá. À noite sai para espalhar suas sementes.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/043.png"
    },
    {
        codigo: "044",
        nome: "Gloom",
        nome_japones: "Kusaihana",
        massa: "8,6kg",
        especie: "Pokémon Erva Daninha",
        tipo: "Planta / Veneno",
        descricao: "O fedor proveniente da flor de sua cabeça pode ser sentido à distância. Ele fede mais ainda quando se sente ameaçado. A baba que escorre de sua boca na verdade é um néctar.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/044.png"
    },
    {
        codigo: "045",
        nome: "Vileplume",
        nome_japones: "Rafureissa",
        massa: "18,6kg",
        especie: "Pokémon Flor",
        tipo: "Planta / Veneno",
        descricao: "Quanto maiores forem as suas pétalas, mais tóxico será o pólen contido nelas. Elas são tão pesadas que é difícil de aguentar. Ao sacudir as pétalas, o ar ao seu redor fica amarelo.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/045.png"
    },
    {
        codigo: "046",
        nome: "Paras",
        nome_japones: "Paras",
        massa: "5,4kg",
        especie: "Pokémon Cogumelo",
        tipo: "Inseto / Planta",
        descricao: "Cogumelos parasita crescem nas costas de Paras. Eles absorvem nutrientes deste hospedeiro. São altamente valorizados como remédios para prolongar a vida.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/046.png"
    },
    {
        codigo: "047",
        nome: "Parasect",
        nome_japones: "Parasect",
        massa: "29,5kg",
        especie: "Pokémon Cogumelo",
        tipo: "Inseto / Planta",
        descricao: "Parasect é controlado pelo cogumelo que cresceu em suas costas. Graças a ele, vive em locais úmidos e escuros. Ele solta esporos venenosos por onde passa.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/047.png"
    },
    {
        codigo: "048",
        nome: "Venonat",
        nome_japones: "Kongpang",
        massa: "29,5kg",
        especie: "Pokémon Inseto",
        tipo: "Inseto / Veneno",
        descricao: "Seus olhos grandes podem atuar como radares. Eles são compostos por diversos outros olhos menores. São ótimos para enxergar no escuro ou ver coisas minúsculas.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/048.png"
    },
    {
        codigo: "049",
        nome: "Venonat",
        nome_japones: "Kongpang",
        massa: "12,5kg",
        especie: "Pokémon Mariposa Venenosa",
        tipo: "Inseto / Veneno",
        descricao: "Quando ele ataca, bate suas grandes asas escuras violentamente para espalhar seu pó venenoso por todos os lados. Se suas asas tiverem uma coloração mais clara, seu pó é paralisante.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/049.png"
    },
    {
        codigo: "050",
        nome: "Diglett",
        nome_japones: "Digda",
        massa: "0,8kg",
        especie: "Pokémon Toupeira",
        tipo: "Terra",
        descricao: "Passa a maior parte do tempo enterrado no subsolo. Seu método de escavação pode deixar um campo perfeito para o cultivo. Ele se alimenta das raízes das árvores.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png"
    },
    {
        codigo: "051",
        nome: "Dugtrio",
        nome_japones: "Dugtrio",
        massa: "33,3kg",
        especie: "Pokémon Toupeira",
        tipo: "Terra",
        descricao: "Dugtrio são realmente trigêmeos que surgiram de um corpo. Como resultado, cada trigêmeo pensa exatamente como os outros dois trigêmeos. Eles trabalham cooperativamente para escavar sem parar. Ele desencadeia terremotos gigantes cavando a 96 km abaixo da terra.",
        foto: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/051.png"
    },
];
