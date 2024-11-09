import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TrackPlayer from 'react-native-track-player';
import AlmaCristo from '../../../assets/icons/almacristo.svg';
import Confessor from '../../../assets/icons/confessor.svg';
import Coroa from '../../../assets/icons/coroa.svg';
import Cruz from '../../../assets/icons/cruz.svg';
import EspiritoSanto from '../../../assets/icons/espirito-santo.svg';
import Fatima from '../../../assets/icons/fatima.svg';
import Igreja from '../../../assets/icons/igreja.svg';
import Maria from '../../../assets/icons/maria.svg';
import Pai from '../../../assets/icons/pai.svg';
import VemEspirito from '../../../assets/icons/vemespirito.svg';
import {EnumMysterium} from '../../enums/mysterium.enum';
import {EnumPrayer} from '../../enums/prayer.enum';
import {Prayer} from '../../types/prayer.type';

export const prayers: Prayer[] = [
  {
    audioPath: require('../../../assets/prayers/sinaldacruz.mp3'),
    id: 1,
    image: Cruz,
    name: 'Sinal da Cruz',
    latinName: 'Signum Crucis',
    type: EnumPrayer.SIGNUM_CRUCIS,
    prayer:
      'Pelo sinal da santa cruz,\nlivrai-nos, Deus nosso Senhor,\ndos nossos inimigos.\n\n Em nome do Pai,\ne do Filho\ne do Espírito Santo.\nAmém',
    latinPrayer:
      'Per signum crucis,\nde inimicis nostris\nlibera-nos Deus noster.\n\nIn nonime Patris\net Fílii\net Spiritui Sancto.\nAmen',
  },
  {
    audioPath: require('../../../assets/prayers/gloria.mp3'),
    id: 2,
    image: EspiritoSanto,
    name: 'Glória ao Pai',
    latinName: 'Glória Patri',
    type: EnumPrayer.GLORIA_PATRI,
    prayer:
      'Glória ao Pai \ne ao Filho \ne ao Espírito Santo.\nComo era, no princípio,\nagora e sempre. \n\nAmém',
    latinPrayer:
      'Glória Patri \net Fílio \net Spirítui Sancto. \nSicut erat in princípio,\net nunc et semper \net in sæcula sæculórum.\n\nAmen',
  },
  {
    audioPath: require('../../../assets/prayers/painosso.mp3'),
    id: 3,
    image: Pai,
    name: 'Pai Nosso',
    latinName: 'Pater Noster',
    type: EnumPrayer.PATER_NOSTER,
    prayer:
      'Pai Nosso que estais nos Céus, \nsantificado seja o vosso Nome, \nvenha a nós o vosso Reino, \nseja feita a vossa vontade \n assim na terra como no Céu. \nO pão nosso de cada dia nos dai hoje, \nperdoai-nos as nossas ofensas \nassim como nós perdoamos a quem nos tem ofendido, \ne não nos deixeis cair em tentação, \nmas livrai-nos do Mal. \n\nAmém',
    latinPrayer:
      'Pater Noster, qui es in cælis \nSanctificétur nomen tuum,\nAdvéniat regnum tuum, \nFiat voluntas tua,\nsicut in cælo, et in terra. \nPanem nostrum quotidiánum da nobis hódie, \net dimítte nobis débita nostra, \nsicut et nos dimíttimus debitóribus nostris. \nEt ne nos indúcas in tentatiónem. \nSed líbera nos a malo. \n\nAmen',
  },
  {
    audioPath: require('../../../assets/prayers/credo.mp3'),
    id: 4,
    image: Igreja,
    name: 'Credo',
    latinName: 'Credo',
    type: EnumPrayer.CREDO,
    prayer:
      'Creio em Deus Pai todo-poderoso,\ncriador do céu e da terra;\ne em Jesus Cristo, seu único Filho, Nosso Senhor;\nque foi concebido pelo poder do Espírito Santo;\nnasceu na Virgem Maria,\npadeceu sob Pôncio Pilatos,\nfoi crucificado morto e sepultado;\ndesceu à mansão dos mortos; \nressuscitou ao terceiro dia;\nsubiu aos céus,\nestá sentado à direita de Deus Pai todo-poderoso,\ndonde há de vir a julgar os vivos e os mortos;\ncreio no Espírito Santo,\nna santa Igreja Católica,\nna comunhão dos santos,\nna remissão dos pecados,\nna ressurreição da carne,\nna vida eterna.\n\nAmém',
    latinPrayer:
      'Credo in Deum, Patrem omnipoténtem,\nCreatórem cæli et terræ.\nEt in Iesum Christum, Filium eius únicum, Dóminùm nostrum;\nqui concéptus est de Spíritu Sancto,\nnatus ex María Virgine,\npassus sub Pontio Piláto,\ncrucifíxus, mórtuus, et sepúltus;\ndescéndit ad ínferos;\ntértia die resurréxit a mórtuis;\nascéndit ad cælos;\nsedet ad déxteram Dei Patris omnipoténtis;\ninde ventúrus est judicare vivos et mórtuos.\nCredo in Spiritum Sanctum,\nsanctam Ecclésiam Cathólicam,\nSanctórum communionem,\nremissiónem peccatórum,\ncarnis resurrectiónem,\nvitam ætérnam.\n\nAmen',
  },
  {
    audioPath: require('../../../assets/prayers/avemaria.mp3'),
    id: 5,
    image: Maria,
    name: 'Ave Maria',
    latinName: 'Ave Maria',
    type: EnumPrayer.AVE_MARIA,
    prayer:
      'Ave Maria,\ncheia de graça,\no Senhor é convosco,\nbendita sois vós entre as mulheres\ne bendito é o fruto do vosso ventre, Jesus.\nSanta Maria, Mãe de Deus,\nrogai por nós pecadores,\nagora e na hora da nossa morte.\n\nAmém',
    latinPrayer:
      'Ave, María,\ngrátia plena,\nDóminus tecum,\nbenedícta tu in muliéribus,\net benedictus fructus ventris tui Iesus.\nSancta María, Mater Dei,\nora pro nobis peccatóribus,\nnunc et in hora mortis nostræ.\n\nAmen',
  },
  {
    audioPath: require('../../../assets/prayers/salverainha.mp3'),
    id: 6,
    image: Coroa,
    name: 'Salve Rainha',
    latinName: 'Salve Regina',
    type: EnumPrayer.SALVE_REGINA,
    prayer:
      'Salve, Rainha, Mãe de misericórdia,\nvida, doçura e esperança nossa, salve!\nA vós bradamos, os degredados filhos de Eva;\na vós suspiramos, gemendo e chorando neste vale de lágrimas.\nEia, pois advogada nossa,\nesses vossos olhos misericordiosos a nós volvei;\ne depois deste desterro\nnos mostrai Jesus, bendito fruto do vosso ventre,\nó clemente, ó piedosa, ó doce sempre Virgem Maria.\n\n Rogai por nós, santa Mãe de Deus.\n R: Para que sejamos dignos das promessas de Cristo.',
    latinPrayer:
      'Salve, Regina, Mater misericordiæ,\nvita, dulcédo et spes nostra, salve.\nAd te clamamus, éxsules filii Evæ.\nAd te suspirámus geméntes et flentes in hac lacrimárum valle.\nEia ergo, advocáta nostra,\nillos tuos misericórdes óculos ad nos convérte.\nEt Iesum benedíctum fructum Ventris tui,\nnobis, post hoc exsílium, osténde.\nO clemens, o pia, o dulcis Virgo María!\n\n Ora pro nobis, sancta Dei Génitrix.\nR: Ut digni efficiámur promissiónibus Christi.',
  },
  {
    audioPath: require('../../../assets/prayers/animachristi.mp3'),
    id: 7,
    image: AlmaCristo,
    name: 'Alma de Cristo',
    latinName: 'Anima Christi',
    type: EnumPrayer.ANIMA_CHRISTI,
    prayer:
      'Alma de Cristo, santificai-me.\nCorpo de Cristo, salvai-me.\nSangue de Cristo, inebriai-me.\nÁgua do lado de Cristo, lavai-me.\nPaixão de Cristo, confortai-me.\nÓ bom Jesus, escutai-me.\nDentro de Vossas chagas escondei-me.\nNão permitais que me separe de Vós.\nDo exército do maligno defendei-me.\nNa hora da Morte chamai-me.\nE chamai-me para ir a Vós,\npara que com Vossos santos Vos louve.\npelo séculos dos séculos. \n\nÁmen.',
    latinPrayer:
      'Anima Christi, sanctifica me.\nCorpus Christi, salva me.\nSanguis Christi, inebria me.\nAqua lateris Christi, lava me.\nPassio Christi, conforta me.\nO bone Iesu, exaudi me.\nIntra tua vulnera absconde me.\nNe permittas me separari a te.\n Ab hoste maligno defende me.\nIn hora mortis meæ voca me. \nEt iube me venire ad te, \nut cum Sanctis tuis laudem te\nin sæcula sæculorum. \n\nAmen.',
  },
  {
    audioPath: require('../../../assets/prayers/confiteor.mp3'),
    id: 8,
    image: Confessor,
    name: 'Confesso',
    latinName: 'Confiteor',
    type: EnumPrayer.CONFITEOR,
    prayer:
      'Confesso a Deus Todo-poderoso,\n à bem-aventurada sempre Virgem Maria, \nao bem-aventurado Miguel Arcanjo, \nao bem-aventurado João Batista, \naos santos Apóstolos Pedro e Paulo,\ne a todos os santos, \nque pequei muitas vezes por pensamentos, palavras e ações, \npor minha culpa, minha culpa, minha máxima culpa.\nPor isso, peço à bem-aventurada sempre Virgem Maria,\nao bem-aventurado Miguel Arcanjo,\n ao bem-aventurado João Batista, \naos santos Apóstolos Pedro e Paulo, \ne a todos os santos, \nque oreis por mim a Deus, Nosso Senhor. \n\n Amém.',
    latinPrayer:
      'Confiteor Deo omnipotenti,\n beatæ Mariæ semper Virgini, \n beato Michæli Archangelo,  \n beato Ioanni Baptistæ, \n sanctis Apostolis Petro et Paulo, \n et omnibus Sanctis,  \nquia peccavi nimis cogitatione, verbo et opere: \nmea culpa, mea culpa, mea maxima culpa. \nIdeo precor beatam Mariam semper Virginem,\n beatum Michælem Archangelum,\n beatum Ioannem Baptistam, \nsanctos Apostolos Petrum et Paulum, \net omnes Sanctos, \norare pro me ad Dominum Deum nostrum. \n\n Amen.',
  },
  {
    audioPath: require('../../../assets/prayers/venicreator.mp3'),
    id: 9,
    image: VemEspirito,
    name: 'Vinde Criador',
    latinName: 'Veni Creator',
    type: EnumPrayer.VENI_CREATOR,
    prayer:
      'Vinde, Espírito Criador,\nvisitai as almas dos Vossos, \nenchei de graça celestial, \nos corações que criastes. \nSois o Divino Consolador, \no dom do Deus Altíssimo, \nfonte viva, o fogo, a caridade, \na unção dos espirituais. \nCom os Vossos sete dons, \nsois o dedo da direita de Deus, \nSolene promessa do Pai, \nInspirando nossas palavras. \nAcendei a luz nos sentidos; \ninsuflai o amor nos corações, \namparai na constante virtude \na nossa carne enfraquecida. \nAfastai para longe o inimigo, \nTrazei-nos prontamente a paz; \nAssim guiados por Vós \nEvitaremos todo o mal. \nPor Vós explicar-se-á o Pai, \nE conheceremos o Filho; \nDai-nos crer sempre em Vós \nEspírito do Pai e do Filho. \nGlória ao Pai, Senhor, \nAo Filho que ressuscitou \nAssim como ao Consolador. \n Por todos os séculos. Amém. \n\n Amém.',
    latinPrayer:
      'Veni, Creator Spíritus,\nmentes tuórum visita, \nimple supérna grátia, \n quæ tu creásti péctora. \nQui díceris Paráclitus, \naltíssimi donum Dei, \nfons vivus, ignis, cáritas, \net spiritális únctio. \nTu septifórmis múnere, \ndígitus paternæ déxteræ, \n tu rite promíssum Patris, \nsermóne ditans gúttura. \nAccénde lumen sénsibus; \ninfunde amórem córdibus, \ninfírma nostri córporis \nvirtúte firmans pérpeti. \nHostem repéllas lóngius, \npacémque dones prótinus; \nductóre sic te prævio \nvitemus omne noxium. \nPer te sciámus da Patrem, \nnoscamus atque Filium; \nteque utriúsque Spíritum \ncredamus omni témpore. \nDeo Patri sit glória, \net Fillio, qui a mórtuis \nsurréxit, ac Paráclito, \nin sæculórum sæcula. \n\nAmen \n',
  },
  {
    audioPath: require('../../../assets/prayers/fatima.mp3'),
    id: 10,
    image: Fatima,
    name: 'Oração de Fátima',
    latinName: 'Oratio Fatimae',
    type: EnumPrayer.ORATIO_FATIMA,
    prayer:
      'Ó meu bom Jesus,\nperdoai-nos, livrai-nos do fogo do inferno,\nlevai as almas todas para o céu\ne socorrei principalmente as que mais precisarem.',
    latinPrayer:
      'O mi Iesu,\ndimitte nobis debita nostra,\nsalva nos ab igne inferni,\nperduc in cælum omnes animas,\npræsertim eas quæ maxime indigent misericordia tua.',
  },
  {
    audioPath: require('../../../assets/prayers/gloriaprimeiromisterio.mp3'),
    id: 11,
    name: 'Primeiro Mistério',
    latinName: 'Resurrectionis Mysterium',
    type: EnumPrayer.FIRST_MYSTERIUM,
    mysteriumType: EnumMysterium.GLORIOSA,
    prayer:
      'No primeiro mistério contemplemos a Ressurreição de Cristo Nosso Senhor.',
    latinPrayer: 'Resurrectionis mysterium: Iesus a mortuis resurgit.',
  },
  {
    audioPath: require('../../../assets/prayers/gloriasegundomisterio.mp3'),
    id: 12,
    name: 'Segundo Mistério',
    latinName: 'Ascensionis mysterium',
    type: EnumPrayer.SECOND_MYSTERIUM,
    mysteriumType: EnumMysterium.GLORIOSA,
    prayer:
      'No segundo mistério contemplemos a Ascensão de Nosso Senhor ao Céu.',
    latinPrayer:
      'Ascensionis mysterium: Iesus cælos ad Patris gloriam ascendit.',
  },
  {
    audioPath: require('../../../assets/prayers/gloriaterceiromisterio.mp3'),
    id: 13,
    name: 'Terceiro Mistério',
    latinName: 'Missionis Spiritus Sancti mysterium',
    type: EnumPrayer.THIRD_MYSTERIUM,
    mysteriumType: EnumMysterium.GLORIOSA,
    prayer:
      'No Terceiro Mistério contemplamos a descida do Espírito Santo sobre Nossa Senhora e os Apóstolos no Cenáculo.',
    latinPrayer:
      'Missionis Spiritus Sancti mysterium: Spiritus Paraclitus supra discipulos descendit.',
  },
  {
    audioPath: require('../../../assets/prayers/gloriaquartomisterio.mp3'),
    id: 14,
    name: 'Quarto Mistério',
    latinName: 'Assumptionis Beatæ Mariæ Virginis mysterium',
    type: EnumPrayer.FORTH_MYSTERIUM,
    mysteriumType: EnumMysterium.GLORIOSA,
    prayer:
      'No quarto mistério contemplemos a Assunção de Nossa Senhora ao Céu.',
    latinPrayer:
      'Assumptionis Beatæ Mariæ Virginis mysterium: Assumpta est Maria in cælum.',
  },
  {
    audioPath: require('../../../assets/prayers/gloriaquintomisterio.mp3'),
    id: 15,
    name: 'Quinto Mistério',
    latinName: 'Glorificationis Beatæ Mariæ Virginis mysterium',
    type: EnumPrayer.FIFTH_MYSTERIUM,
    mysteriumType: EnumMysterium.GLORIOSA,
    prayer:
      'No Quinto Mistério contemplamos a gloriosa coroação de Maria Santíssima como Rainha do Céu e da Terra.',
    latinPrayer:
      'Glorificationis Beatæ Mariæ Virginis mysterium: Maria Virgo in cælis regina coronatur.',
  },
  {
    audioPath: require('../../../assets/prayers/gozosoprimeiromisterio.mp3'),
    id: 16,
    name: 'Primeiro Mistério',
    latinName: 'Incarnationis mysterium',
    type: EnumPrayer.FIRST_MYSTERIUM,
    mysteriumType: EnumMysterium.GAUDIOSA,
    prayer:
      'No primeiro mistério contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.',
    latinPrayer:
      'Incarnationis mysterium: Angelus Gabriel nuntiavit Mariæ, Maria concepit de Spiritu Sancto, et verbum caro factum est.',
  },
  {
    audioPath: require('../../../assets/prayers/gozososegundomisterio.mp3'),
    id: 17,
    name: 'Segundo Mistério',
    latinName: 'Visitationis mysterium',
    type: EnumPrayer.SECOND_MYSTERIUM,
    mysteriumType: EnumMysterium.GAUDIOSA,
    prayer:
      'No segundo mistério contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.',
    latinPrayer:
      'Visitationis mysterium: Maria Virgo Elisabeth visitat et magnificat Dominum.',
  },
  {
    audioPath: require('../../../assets/prayers/gozosoterceiromisterio.mp3'),
    id: 18,
    name: 'Terceiro Mistério',
    latinName: 'Nativitatis mysterium',
    type: EnumPrayer.THIRD_MYSTERIUM,
    mysteriumType: EnumMysterium.GAUDIOSA,
    prayer:
      'No terceiro mistério contemplemos o Nascimento do Menino Jesus em Belém.',
    latinPrayer: 'Nativitatis mysterium: Iesus in Bethlehem nascitur.',
  },
  {
    audioPath: require('../../../assets/prayers/gozosoquartomisterio.mp3'),
    id: 19,
    name: 'Quarto Mistério',
    latinName: 'Præsentationis mysterium',
    type: EnumPrayer.FORTH_MYSTERIUM,
    mysteriumType: EnumMysterium.GAUDIOSA,
    prayer:
      'No Quarto Mistério contemplamos a Apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora.',
    latinPrayer: 'Præsentationis mysterium: Iesus in templo præsentatur.',
  },
  {
    audioPath: require('../../../assets/prayers/gozosoquintomisterio.mp3'),
    id: 20,
    name: 'Quinto Mistério',
    latinName: 'Inventionis mysterium',
    type: EnumPrayer.FIFTH_MYSTERIUM,
    mysteriumType: EnumMysterium.GAUDIOSA,
    prayer:
      'No quinto mistério contemplemos a Perda e o Encontro do Menino Jesus no templo.',
    latinPrayer:
      'Inventionis mysterium: Puer Iesus de iis, qui patres ipsius sunt, sollicitus.',
  },
  {
    audioPath: require('../../../assets/prayers/luzprimeiromisterio.mp3'),
    id: 21,
    name: 'Primeiro Mistério',
    latinName: 'Baptismatis mysterium',
    type: EnumPrayer.FIRST_MYSTERIUM,
    mysteriumType: EnumMysterium.LUMINOSA,
    prayer:
      'No primeiro mistério contemplemos o Batismo de Jesus no rio Jordão.',
    latinPrayer:
      'Baptismatis mysterium: Iordane in flumine Iesus a Ioanne baptizatur et Spiritus super eum descendit.',
  },
  {
    audioPath: require('../../../assets/prayers/luzsegundomisterio.mp3'),
    id: 22,
    name: 'Segundo Mistério',
    latinName: 'Nuptiarum in Cana mysterium',
    type: EnumPrayer.SECOND_MYSTERIUM,
    mysteriumType: EnumMysterium.LUMINOSA,
    prayer:
      'No segundo mistério contemplemos a Auto-revelação de Jesus nas Bodas de Caná.',
    latinPrayer:
      'Nuptiarum in Cana mysterium: Iesus aquam in vinum commutat propter Mariæ intercessionem.',
  },
  {
    audioPath: require('../../../assets/prayers/luzterceiromisterio.mp3'),
    id: 23,
    name: 'Terceiro Mistério',
    latinName: 'Proclamationis regni Dei mysterium',
    type: EnumPrayer.THIRD_MYSTERIUM,
    mysteriumType: EnumMysterium.LUMINOSA,
    prayer: 'No terceiro mistério contemplemos o Anúncio do Reino de Deus.',
    latinPrayer:
      'Proclamationis regni Dei mysterium: Iesus adventum regni Dei nuntiat et ad conversionem hortatur.',
  },
  {
    audioPath: require('../../../assets/prayers/luzquartomisterio.mp3'),
    id: 24,
    name: 'Quarto Mistério',
    latinName: 'Transfigurationis mysterium',
    type: EnumPrayer.FORTH_MYSTERIUM,
    mysteriumType: EnumMysterium.LUMINOSA,
    prayer: 'No quarto mistério contemplemos a Transfiguração de Jesus.',
    latinPrayer:
      'Transfigurationis mysterium: Iesus in monte Tabor transfiguratur.',
  },
  {
    audioPath: require('../../../assets/prayers/luzquintomisterio.mp3'),
    id: 25,
    name: 'Quinto Mistério',
    latinName: 'Eucharistiæ mysterium',
    type: EnumPrayer.FIFTH_MYSTERIUM,
    mysteriumType: EnumMysterium.LUMINOSA,
    prayer: 'No quinto mistério contemplemos a Instituição da Eucaristia.',
    latinPrayer:
      'Eucharistiæ mysterium: Iesus in cenaculo Eucharistiam instituit, corpus ac sanguinem suum nobis donans.',
  },
  {
    audioPath: require('../../../assets/prayers/dorprimeiromisterio.mp3'),
    id: 26,
    name: 'Primeiro Mistério',
    latinName: 'Agoniæ mysterium',
    type: EnumPrayer.FIRST_MYSTERIUM,
    mysteriumType: EnumMysterium.DOLOROSA,
    prayer:
      'No primeiro mistério contemplemos a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto.',
    latinPrayer: 'Agoniæ mysterium: Iesus in horto Gethsemani orat.',
  },
  {
    audioPath: require('../../../assets/prayers/dorsegundomisterio.mp3'),
    id: 27,
    name: 'Segundo Mistério',
    latinName: 'Flagellationis mysterium',
    type: EnumPrayer.SECOND_MYSTERIUM,
    mysteriumType: EnumMysterium.DOLOROSA,
    prayer:
      'No segundo mistério contemplemos a Flagelação de Jesus Cristo atado à coluna.',
    latinPrayer: 'Flagellationis mysterium: Iesus flagellis cæditur.',
  },
  {
    audioPath: require('../../../assets/prayers/dorterceiromisterio.mp3'),
    id: 28,
    name: 'Terceiro Mistério',
    latinName: 'Ecce homo mysterium',
    type: EnumPrayer.THIRD_MYSTERIUM,
    mysteriumType: EnumMysterium.DOLOROSA,
    prayer:
      'No terceiro mistério contemplemos a Coroação de espinho de Nosso Senhor.',
    latinPrayer: 'Ecce homo mysterium: Iesus spinis coronatur..',
  },
  {
    audioPath: require('../../../assets/prayers/dorquartomisterio.mp3'),
    id: 29,
    name: 'Quarto Mistério',
    latinName: 'Viæ crucis mysterium',
    type: EnumPrayer.FORTH_MYSTERIUM,
    mysteriumType: EnumMysterium.DOLOROSA,
    prayer:
      'No quarto mistério contemplemos Jesus Cristo carregando a Cruz para o Calvário.',
    latinPrayer:
      'Viæ crucis mysterium: Iesus cruce oneratus Calvariæ locum adit.',
  },
  {
    audioPath: require('../../../assets/prayers/dorquintomisterio.mp3'),
    id: 30,
    name: 'Quinto Mistério',
    latinName: 'Mortis mysterium',
    type: EnumPrayer.FIFTH_MYSTERIUM,
    mysteriumType: EnumMysterium.DOLOROSA,
    prayer:
      'No quinto mistério contemplemos a Crucificação e morte de Nosso Senhor Jesus Cristo.',
    latinPrayer:
      'Mortis mysterium: Iesus in cruce moritur, stabat iuxta crucem Iesu mater eius.',
  },
];

const initialValues = {
  isPrayerPlaying: false,
};

export const prayersSlice = createSlice({
  name: 'rosary',
  initialState: initialValues,
  reducers: {
    pausePrayer: state => {
      TrackPlayer.pause();
      state.isPrayerPlaying = false;
    },
    playPrayer: state => {
      TrackPlayer.play();
      state.isPrayerPlaying = true;
    },
    resetPrayer: (state, action: PayloadAction<number>) => {
      TrackPlayer.pause();
      TrackPlayer.skip(action.payload - 1);

      Object.assign(state, initialValues);
    },
  },
});

export const {pausePrayer, playPrayer, resetPrayer} = prayersSlice.actions;
export default prayersSlice.reducer;
