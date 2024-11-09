import {createSlice} from '@reduxjs/toolkit';
import Tridentina from '../../../assets/icons/tridentina.svg';
import {Mass} from '../../types/mass.type';

export const masses: Mass[] = [
  {
    id: 1,
    name: 'São Pio V',
    image: Tridentina,
    description: 'Rito Tridentino/Extraordinário',
    pages: [
      {
        id: 1,
        title: 'Rito de Entrada',
        content:
          '<p>S/. In nómine Patris † et Filii et Spíritus Sancti. Amen. \n</p> <p>S/. Introíbo ad altáre Dei.\n</p><p style="font-weight: bold">T/. Ad Deum qui lætifícat iuventútem meam.\n</p>',
      },
      {
        id: 2,
        title: 'Salmo 42, 1-5',
        content:
          '<p>S/. Iúdica me, Deusu, et discérne causam meam de gente non sancta: ab hómine iniquo, et dolósso érue me.\n</p>' +
          '<p style="font-weight: bold">T/. Quia tu es, Deus, fortitúdo mea: quare me repulísti, et quare tristis incédo, dum afflígitt me inimícus?\n</p>' +
          '<p>S/. Emíttet lucem tuam et veritátem tuam: ipsa me deduxérunt, et adduxérunt in montem sanctum tuum, et in tabernácula tua.\n</p>' +
          '<p style="font-weight: bold">T/. Et introíbo ad altáre Dei: ad Deum qui lætificat iu ventútem meam.\n</p>' +
          '<p>S/. Confitébor tibi in cíthara, Deus, Deus meus; quare tristis es, ánima mea, ett quare contúrbas me?\n</p>' +
          '<p style="font-weight: bold">T/. Spera in Deo, quóniam adhuc confitébor illi: salutáre vultus mei, et Deus meus.\n</p>' +
          '<p>S/. Glória Patri et Filio et Spiritui Sancto\n</p>' +
          '<p style="font-weight: bold">T/. Sicut erat in princípio et nunc et semper, et in saécula sæculórum. Amen.\n</p>' +
          '<p>S/. Introíbo ad altáre Dei.\n</p>' +
          '<p style="font-weight: bold">T/. Ad Deum qui lætificat iuventútem meam.\n</p>' +
          '<p>S/. Adiutórium nostrum † in nómine Dómini\n</p>' +
          '<p style="font-weight: bold">T/. Qui fecit cælum et terram.\n</p>',
      },
      {
        id: 3,
        title: 'Confiteor do Celebrante',
        content:
          '<p>S/. Confíteor Deo Omnipoténti,/ Beáte Mariæ semper Virgini,/ Beato Michaéli Archángelo,/ Beáto Ioánni Baptistæ,/ Sanctis Apostólis Petro et Paulo,/ ómnibus Sanctis et vobis frates,/ ' +
          'quia peccávi nimis cogitatióne, verbo et ópere:/</p> \n<p style="color: #FF6961">(batendo três vezes no peito)\n</p><p>mea culpa, mea culpa, mea máxima culpa;/ ideo precor beátam Maríam ' +
          'semper Vírginem,/ Beátum Michaélem Archángelum,/ Beátum Ioánnem Baptístam,/ Sanctos Apóstotlos Petrum et Paulum,/ omnes Sanctos, et vos fratres,/ oráre pro me ad Dóminum Deum nostrum. </p>' +
          '<p style="font-weight: bold">T/. Misereátur tui Omnípotens Deus, et, dimíssis, peccátis tuis, perdúcat te ad vitam ætérnam.\n</p>' +
          '<p>S/. Amen.\n</p>',
      },
      {
        id: 4,
        title: 'Confiteor dos fiéis',
        content:
          '<p style="font-weight: bold">T/. Confíteor Deo Omnipoténti,/ Beáte Mariæ semper Virgini,/ Beato Michaéli Archángelo,/ Beáto Ioánni Baptistæ,/ Sanctis Apostólis Petro et Paulo,/ ómnibus Sanctis et tibi, pater,/ ' +
          'quia peccávi nimis cogitatióne, verbo et ópere:/</p> \n<p style="color: #FF6961">(batendo três vezes no peito)\n</p><p style="font-weight: bold">mea culpa, mea culpa, mea máxima culpa;/ ideo precor beátam Maríam ' +
          'semper Vírginem,/ Beátum Michaélem Archángelum,/ Beátum Ioánnem Baptístam,/ Sanctos Apóstotlos Petrum et Paulum,/ omnes Sanctos, et te, pater,/ oráre pro me ad Dóminum Deum nostrum. </p>' +
          '<p>S/. Misereátur vestri Omnípotens Deus, et, dimíssis, peccátis vestris, perdúcat vos ad vitam ætérnam.\n</p>' +
          '<p style="font-weight: bold">T/. Amen.\n</p>' +
          '<p>S/. Indulgéntiam, absolutiónem et remissiónem peccatórum nostrorum tribuat nobis Omnípotens et Miséricors Dóminus.\n</p>' +
          '<p style="font-weight: bold">T/. Amen.\n</p>' +
          '<p style="color: #FF6961">(O celebrante, inclinado-se, diz:)\n</p></br></br>' +
          '<p>S/. Deus, tu convérsus vivificábis nos.\n</p>' +
          '<p style="font-weight: bold">T/. Et plebs tua lætábitur in te.\n</p>' +
          '<p>S/. Osténde nobis, Dómine, misericórdiam tuam.\n</p>' +
          '<p style="font-weight: bold">T/. Et salutáre tuum da nobis.\n</p>' +
          '<p>S/. Dómine, exáudi oratiónem meam.\n</p>' +
          '<p style="font-weight: bold">T/. Et clamor meus ad te véniat.\n</p>' +
          '<p>S/. Dóminus vobíscum.\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo.\n</p></br></br>' +
          '<p>S/. Orémus.\n</p></br></br>' +
          '<p style="color: #FF6961">Os fiéis se levantam e permanecem de pé. O sacerdote sobe ao altar.\n</p>',
      },
      {
        id: 5,
        title: 'Kyrie Eleison',
        content:
          '<p style="color: #FF6961">Kyrie eleison, palavras gregas que significam: Senhor tende misericórdia.\n</p>' +
          '<p>S/. Kyrie, eléison\n</p>' +
          '<p style="font-weight: bold">T/. Kyrie, eléison</p>' +
          '<p>S/. Kyrie, eléison\n</p>' +
          '<p style="font-weight: bold">T/. Christe, eléison\n</p>' +
          '<p>S/. Criste, eléison\n</p>' +
          '<p style="font-weight: bold">T/. Christe, eléison\n</p>' +
          '<p>S/. Kyrie, eléison\n</p>' +
          '<p style="font-weight: bold">T/. Kyrie, eléison\n</p>' +
          '<p>S/. Kyrie, eléison\n</p>',
      },
      {
        id: 6,
        title: 'Glória',
        content:
          '<p>Glória in excélsis Deo.\n</p><p style="font-weight: bold">Et in terra pax hominibus bonæ voluntátis. Laudámus te. Benedícimus te. Adorámus te. Glorificámus te. </span>' +
          'Grátias ágimus tibi propter magnam glóriam tuam. Dómine Deus, Rex cæléstis, Deus Pater Omnípotens. Dómine Fili Unigénite, Iesu Christe. Domine Deus, Agnus Dei, Filius Patris. Qui tollis ' +
          'peccátat mundi, miserére nobis. Qui tollis peccáta mundi, súscipe deprecatiónem nostram. Qui sedes ad déxteram Patris, miserére nobis. Quóniam Te solus Sanctus. Tu solus Dóminus. Tu solus Altíssimus, ' +
          'Iesu Christe, cum Sancto Spiritu † in glória Dei Patris. Amen.</p>' +
          '<p>S/. Dóminus vobíscum.\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo.\n</p>' +
          '<p>S/. Orémus.\n</p>',
      },
      {
        id: 7,
        title: 'Epístola',
        content:
          '<p style="color: #FF6961">O texto da Epístola é próprio de cada Santa Missa.\n</p>' +
          '<p>S/. Léctio Espístolæ\n</p></br></br>' +
          '<p style="color: #FF6961">Ao terminar a Epístola, responde-se:\n</p>' +
          '<p style="font-weight: bold">T/. Deo grátias.\n</p>',
      },
      {
        id: 8,
        title: 'Gradual e Aleluia',
        content:
          '<p>S/. Dóminus vobíscum\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo\n</p></br>' +
          '<p style="color: #FF6961">Faz-se com o sacerdote o sinal da Cruz, sobre a fronte, sobre a boca e sobre o peito, para mostrar que o Santo Evangelho deve ser a regra de nossos pensamentos, de nossas palavras e de nosso coração\n</p></br>' +
          '<p>S/. Sequentia (vel Inítium) sancti † Evangélii secundum N.\n</p>' +
          '<p style="font-weight: bold">T/. Glória Tibi, Dómine.\n</p></br>' +
          '<p style="color: #FF6961">Ao final do Evangelho, responde-se:\n</p>' +
          '<p style="font-weight: bold">T/. Laus tibi, Christe.\n</p>',
      },
      {
        id: 9,
        title: 'Credo',
        content:
          '<p style="font-weight: bold">Credo in unum Deum. Patrem Omnipotentem, factórem cæli et terræ, visibílium ómnium et invisibílium. Et in unum Dóminum, Iesum Christum, Filium Dei Unigénitum. ' +
          'Et ex Patre natum, ante ómnia sæcula. Deum de Deo, Lumen de Lúmine, Deum verum de Deo vero. Génitum, non factum, consubstatiálem Patri; per Quem ómnia facta sunt. Qui propter nos hómines ' +
          'et propter nostram salútem descéndit de cælis.\n</p> <p style="color: #FF6961">(ajoelha-se)\n</p><p style="font-weight: bold">ET INCARNÁTUS EST DE SPÍRITU SANCTO EX MARÍA VÍRGINE; ET HOMO FACTUS EST. ' +
          'Crucifíxus étiam pro nobis; sub Póntio Piláto passus, et sepúltus est. Et resurréxit tértia die, secúndum Scriptúras. Et ascéndit in cælum: sedet ad déxteram Patris. ' +
          'Et iterum ventúrus est cum glória iudicáre vivos et mórtuos; cuius Regni non erit finis. Et in Spíritum Sanctum, Dóminum et vivificántem, qui ex Patre Filióque procédit. ' +
          'Qui cum Patre et Fílio simul adorátur et conglorificátur; qui locútus est per Propétas. Et Unam, Sanctam, Cathólicam et Apostólicam Ecclésiam. Confiteor unum Baptísma in remissiónem peccatórum. ' +
          'Et exspecto resurrectiónem mortuórum. Et vitam ventúri sæculi. Amen\n</p>' +
          '<p>S/. Dóminus vobíscum\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo\n</p>',
      },
      {
        id: 10,
        title: 'Ofertório',
        content:
          '<p style="color: #FF6961">Antes de iniciar a celebração do mistério com o ofericmento do Pão e do Vinho, que vão ser transformados no Corpo e no Sangue de Jesus Cristo.\n</p></br>' +
          '<p style="color: #FF6961">O Sacerdote beija o altar, volta-se para os fiéis e os convida a unirem-se a ele, em oração fervorosa.\n</p></br>' +
          '<p>S/. Orate frates, ut meum ac vestrum sacrificium acceptabile fiat apud Deum Patrem omnipotentem.\n</p>' +
          '<p style="font-weight: bold">T/. Suscipiat Dominus sacrifium de manibus tuis, ad laudem et gloriam nominis sui, ad utilitatem quoque nostram totiusque Ecclesiæ suæ sanctæ.\n</p>' +
          '<p>S/. Amen.\n</p>',
      },
      {
        id: 11,
        title: 'Secreta',
        content:
          '<p>S/. Per ómnia sæcula sæculórum.\n</p>' +
          '<p style="font-weight: bold">T/. Amem\n</p>',
      },
      {
        id: 12,
        title: 'Oração Eucaristica',
        content:
          '<p style="color: #FF6961">Em pé.\n</p></br>' +
          '<p>S/. Dóminus vobíscum.\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo.\n</p>' +
          '<p>S/. Sursum corda.\n</p>' +
          '<p style="font-weight: bold">T/. Habémus ad Dóminum\n</p>' +
          '<p>S/. Grátias agámus Dómino Deo nostro.\n</p>' +
          '<p style="font-weight: bold">T/. Dignum et iustum est.\n</p>' +
          '<p>S/. Vere dignum et justum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: Qui cum Unigénito Fílio tuo et Spíritu Sancto, ' +
          'unus es Deus, unus es Dóminus, non in uníus singularitáte persónæ, sed in uníus Trinitáte substántiæ. Quod enim de tua glória, revelánte te, crédimus, hoc de Fílio tuo, hoc de Spíritu Sancto, ' +
          'sine differéntia discretiónis sentímus; ut in confessióne veræ sempiternaéque Deitátis, et  in persónis propríetas et in esséntia únitats et in maiestáte adorétur æquálitas. Quam laudant Angeli ' +
          'atque Archangeli, Chérubim quoque ac Séraphim, qui non ces sant clamare cotídie, una voce dicéntes:\n</p>',
      },
      {
        id: 13,
        title: 'Sanctus',
        content:
          '<p style="color: #FF6961">Em pé.\n</p></br>' +
          '<p style="font-weight: bold">Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth. Pleni sunt cæli et terra glória tua. Hosánna in excélsis. Benedictus qui venit † in nómine Dómini. Hosánna in excélsis.\n</p></br>' +
          '<p style="color: #FF6961">De joelhos.\n</p></br>',
      },
      {
        id: 14,
        title: 'Cânon Romano',
        content:
          '<p>Te ígnitur, clementíssime Pater, per Iesum Christum Filium tuum Dóminum nostrum, súpplices rogámus, ac pétimus uti accépta hábeas, et benedícas hæc dona, hæc múnera, hæc sancta sacrifícia ' +
          'illibáta in primis, quæ tibi offérimus pro Ecclésia tua sancta cathólica: quam pacificáre, custodíre, adunáre et régere dignéris toto orbe terrárum: una cum fámulo tuo Papa nostro N., et ' +
          'Antístite nostro N., et ómnibus orthodóxis, atque cathólicæ, et apostólicæ fidei cultóribus. \n</p></br>' +
          '<p>Meménto, Dómine, famulórum, famularúmque tuáram .et . et ómnium circumstántium, quórum tibi fides cógnita est, et nota devótio, pro quibus tibi offérimus: hoc sacrifícium ' +
          'láudis, pro se, suísque ómnibus: pro redemptióne animárum suárum, pro spe salútis, et incolumitátis suæ: tibíque reddunt vota sua ætérno Deo, vivo et vero.\n</p></br>' +
          '<p>Communicántes, et memóriam venerántes, in primís gloriósæ semper Virginis Mariæ, Genetrícis Dei et Dómini nostri Iesu Christi: sed et beáti Ióseph, eiúsdem Virginis Sponsi, et beatórum ' +
          'Apostolórum ac Mártyrum tuórum Petri et Pauli, Andréæ, Iacóbi, Ioánnis, Thomæ, Iacóbi, Philippi, Bartholomaéi, Matthaéi, Simónis et Thaddaéi: Lini, Cleti, Cleméntis, Xysti, Cornélii, Cypriány, ' +
          'Lauréntii, Chrysógoni, Iioánnis et Pauli, Cosmæ et Damiáni: et ómnium Sanctórum tuórum, quórum méritis, precibúsque concédas, ut in ómnibus protectiónis tuæ muniámur auxílio. ' +
          'Per eúmdem Chritum Dóminum nostrum. Amen\n</p></br>',
      },
      {
        id: 15,
        title: 'Hanc Ígitur',
        content:
          '<p style="color: #FF6961">O Sacerdote extende as mãos sobre a hóstia e o cálice, para revordar, segundo um rito da antigua Lei, que Nossso Senhor Jesus Cristo, Vítima inocente, ' +
          'carregou o peso dos nossos pecados. (O acólito toca a compainha)\n</p></br>' +
          '<p>Hanc ígitur oblatiónem servitútis nostræ, sed et cunc tæ famíliæ tuæ, quaésumus, Dómine, ut placátus accípias: diésque nostros in tua pace dispónas, atque ab ætérna damnatióne nos éripi, et in ' +
          'electórum tuórum iúbeas grege numerári.\n</p></br>' +
          '<p>Per Christum Dóminum nostrum. Amen.\n</p>' +
          '<p>Quam oblatitónem tu, Deus, in ómnibus, quaésumus, benedictam †, adscríptam †, ratam †, rationábilem, acceptabilémque fácere dignéris (sígnat sémel super hóstiam) ut nobis † Corpus et Sanguis † ' +
          'fiat dilectíssimi Filii tui Dómini nostri Iesu Christi. \n</p>',
      },
      {
        id: 16,
        title: 'Consagração',
        content:
          '<p>Qui pridie quam paterétur accépit panem in sanctas ac venerábiles manus suas et elevátis óculis in coélum, ad te Deum Patrem sunum omnipoténtem, tibi grátias ágens, benedíxit fregit, ' +
          'deditque discípulis suis, dicens: \n</p>' +
          '<p>Accípite, et manducáte ex hoc ómnes: \n</p></br>' +
          '<p style="font-weigth: bold">HOC EST ENIM CORPUS MEUM\n</p></br>' +
          '<p>Símili modo póstquam cenátum est accípiens et hunc præclárum cálicem in sanctas ac venerábiles manus suas: ittemt, tibi grátias ágens benedíxit †, dedítque discípulis suis, ' +
          'dicens: Accípite et bibíte ex eo ómnes: \n</p></br>' +
          '<p style="font-weigth: bold">HIC EST ENIM CALIX SÁNGUINIS MEI, NOVI ET AETÉRNI TESTAMÉNTI: MYSTÉRIUM FÍDEI: QUI PRO VOBIS ET PRO MULTIS EFFUNDÉTUR IN REMISSIÓNEM PECCATÓRUM\n</p></br>' +
          '<p>Hæc quotiescúmque fecértis,  in mei mem´riam faciétis.\n</p>' +
          '<p>Unde et mémores, Dómine, nos servi tui, sed et plebs tua sancta, eiúsdem Christi Fílii tui, Dómini nostri, tam beátæ passiónis, nec non et ab ínferis ressurectiónis, ' +
          'sed et in coélos gloriósæ ascensiónis: offérimus præcláræ maiestáti tuæ, de tuis donis, ac datis hóstiam † puram, hóstiam † sanctam, hóstiam † immaculátam, et cálicem † salútis perpétuæ.\n</p>' +
          '<p>Supra quæ propítio ac seréno vultu respírece dignéris: et accépta habére, sícuti accépta habére dignátus es múnera púeri tuti iusti Abel, et sacrificium Patriárchæ nostri Abrahæ: ' +
          'sanctum sacrifícium, immaculátam hóstiam.\n</p>' +
          '<p>Súpplices te rogámus, omnípotens Deus, iube hæc perférri per manus sancti Angeli tui in sublíme altáre tuum, in conspéctu divínæ maiestátis tuæ: ut quoquot ex hac altáris participatióne' +
          'sacrosánctum Fílii tui † Corpus, et † Sanguinem sumpsérimus, ómni benedictióne cælesti et grátia repleámur. Per eúmdem Christum Dóminum nostrum. Amen.\n</p>' +
          '<p>Meménto étiam, Dómine, famulórum famularúmque tuárum N. et N. qui nos præcessérunt cum signo fídei, et dórmiunt in somno pacis. ' +
          'Ipsis, Dómine, et ómnibus in Christo quiescéntibus, locum refrigérii, lucis et pacis, ut indúlgeas, deprecámur. Per eúmdem Christum Dóminum nostrum. Amen.\n</p>' +
          '<p>Nobis quoque peccatóribus fámulis tuis, de multitúdine miseratiónum tuárum sperántibus, partem áliquam, et societátem donáre dignéris, cum tuis sanctis Apóstolis et ' +
          'Martyribus: cum Ioánne, Stéphano, Matthía, Barnaba, Ignátio, Alexándro, Marcellíno, Petro, Felicitáte, Perpétua, Agatha, Lúcia, Agnéte, Cæcília, Anastásia, et ómnibus Sanctis ' +
          'tuis: intra quorum nos consórtium non æstimátor mériti, sed véniæ, quæsumus, largítor admítte. Per Christum Dóminum nostrum. Amem.\n</p>' +
          '<p>Per quem hæc ómnia Dómine, semper bona creas, † sanctíficas, † vivificas, † benedícis, et præstas nobis. \n</p>',
      },
      {
        id: 17,
        title: 'Doxologia Final',
        content:
          '<p>S/. PER † IPSUM, ET CUM † IPSO, ET IN † IPSO, EST TIBI DEO PATRI † OMNIPOTÉNTI, IN UNITÁTE SPÍRITUS † SANCTI, OMNIS HONOR ET GLÓRIA. PER ÓMNIA SÆCULA SÆCULÓRUM.\n</p>' +
          '<p style="font-weight: bold">T/. Amen\n</p>',
      },
      {
        id: 18,
        title: 'Pater Noster',
        content:
          '<p>S/. Orémus.Præceptis salutáribus móniti, et divína institutióne formáti, audemus dícere:\n</p>' +
          '<p>Pater noster, qui es in cælis: / Sanctificétur nomen tuum: / Advéniat regnum tuum: / Fiat volúntas tua, sicut in cælo, et in terra. / Panem nostrum quotidiánum da nobis hódie: / Et dimítte ' +
          'nobis débita nostra, / sicut et nos dimíttimus tem debitóribus nostris. / Et ne nos inducas in tentatiónem, \n</p>' +
          '<p style="font-weight: bold">T/. Sed líbera nos a malo.\n</p>' +
          '<p>S./ Líbera nos, quæsumus, Dómine, ab ómnibus malis, prætéritis, præséntibus, et futúris: et intercedénte beáta et gloriósa semper Vírgine Dei Genitríce María, cum beátis Apóstolis ' +
          'tuis Petro et Paulo, atque Andréa, et ómnibus Sanctis, da propítius pacem in diébus nostris: ut ope misericórdiæ tuæ adiutí, et a peccáto simus semper líberi, et ab omni ' +
          'perturbatióne secúri. Per eúmdem Dóminum nostrum Jesum Christum, Fílium tuum. Qui tecum vivit et regnat in unitáte Spíritus Sanctis Deus, Per ómnia sǽcula sæculórum.\n</p>' +
          '<p style="font-weight: bold">T/.  Amen.\n</p>',
      },
      {
        id: 19,
        title: 'Agnus Dei',
        content:
          '<p>S./ Pax † Dómini † sit simper † vobiscum.\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo.\n</p>' +
          '<p style="font-weight: bold">T/. Agnus Dei, qui tollis peccata mundi: Miserére nobis.\n</p>' +
          '<p style="font-weight: bold">T/. Agnus Dei, qui tollis peccata mundi: Miserére nobis.\n</p>' +
          '<p style="font-weight: bold">T/. Agnus Dei, qui tollis peccata mundi: Dona nobis pacem.\n</p>',
      },
      {
        id: 20,
        title: 'Comunhão do Sacerdote',
        content:
          '<p style="color: #FF6961">O Sacerdote bate no peito três vezes e, aplicando à sua alma as palavras do centurião do Evangelho, diz:\n</p></br>' +
          '<p>S/.Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur anima mea. <strong>3 vezes</strong>\n</p></br>' +
          '<p style="color: #FF6961">Depois o Sacerdote comunga, tomando a Sagrada Hóstia e o Preciosíssimo Sangue.\n</p></br>',
      },
      {
        id: 21,
        title: 'Comunhão dos fiéis',
        content:
          '<p style="color: #FF6961">De joelhos. Antes de comungarem, os fiéis rezam o Confiteor. O Sacerdote toma a sagrada hóstia e presenta-a aos fiéis dizendo: \n</p></br>' +
          '<p>S/. Ecce Agnus Dei, ecce qui tollit peccata mundi.\n</p>' +
          '<p style="font-weight: bold">T/. Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur anima mea.\n</p>' +
          '<p style="color: #FF6961">O Sacerdote dá a Comunhão a cada fiel, dizendo: \n</p></br>' +
          '<p>S/. Corpus Dómini nostri Iesu Christi † custódiat ánimam tuam in vitam ætérnam. Amen. \n</p>',
      },
      {
        id: 22,
        title: 'Pós Comunhão',
        content:
          '<p style="color: #FF6961">De pé.\n</p></br>' +
          '<p>S/. Dóminus vobíscum.\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo.\n</p>' +
          '<p>S/. Orémus.\n</p></br>' +
          '<p style="color: #FF6961">O Sacerdotet passa ao centro, beija o altara e, voltando ao povo, diz:\n</p></br>' +
          '<p>S/. Dóminus vobíscum.\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo.\n</p>' +
          '<p>S/. Ite, Missa est.\n</p>' +
          '<p style="font-weight: bold">T/. Deo grátias.\n</p></br>' +
          '<p style="color: #FF6961">O Sacerdote beija o altar e voltando-se ao povo, abençoa-o:\n</p>' +
          '<p style="color: #FF6961">De Joelhos\n</p></br>' +
          '<p>S/. Benedicat vos omnípotens Deus: Pater, et Filius, † et Spíritus Sanctus.\n</p>' +
          '<p style="font-weight: bold">T/. Amen.\n</p>',
      },
      {
        id: 23,
        title: 'Último Evangelho',
        content:
          '<p>S/. Dóminus vobíscum.\n</p>' +
          '<p style="font-weight: bold">T/. Et cum spíritu tuo.\n</p>' +
          '<p>S/. Initium † sancti Evangelii secundum Ioannem.\n</p>' +
          '<p style="font-weight: bold">T/. Gloria tibi, Domine.\n</p>' +
          '<p>In principio erat Verbum et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in principio apud Deum. Omnia per ipsum facta sunt, ' +
          'et sine ipso factum est nihil quod factum est; in ipso vita erat, et vita erat lux hominum; et lux in tenebris lucet, et tenebræ eam non comprehenderunt. ' +
          'Fuit homo missus a Deo cui nomen erat Joannes. Hic venit in testimonium, ut testimonium perhiberet de lumine, ut omnes crederent per illum. Non erat ille lux, ' +
          'sed ut testimonium perhiberet de lumine. Erat lux vera quæ illuminat omnem hominem venientem in hunc mundum. In mundo erat, et mundus per ipsum factus est et ' +
          'mundus eum non cognovit. In propria venit, et sui eum non receperunt. Quotquot autem receperunt eum, dedit eis potestatem filios Dei fieri; his qui credunt in ' +
          'nomine ejus, qui non ex sanguinibus, neque ex voluntate carnis, neque ex voluntate viri, sed ex Deo nati sunt. (ajoelha-se) Et Verbum caro factum est, et ' +
          'habitavit in nobis: et vidimus gloriam ejus, gloriam quasi Unigeniti a Patre, plenum gratiæ et veritatis.\n</p>',
      },
    ],
  },
];

const initialValues = {
  currentIndex: 0,
  currentPage: masses[0].pages[0],
  lastPage: false,
};

export const rosariesSlice = createSlice({
  name: 'mass',
  initialState: initialValues,
  reducers: {
    nextPage: state => {
      state.currentIndex++;
      state.currentPage = masses[0].pages[state.currentIndex];

      if (state.currentIndex === masses[0].pages.length - 1) {
        state.lastPage = true;
      }
    },
    previousPage: state => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      }
      state.lastPage = false;
      state.currentPage = masses[0].pages[state.currentIndex];
    },
    resetMass: state => {
      Object.assign(state, initialValues);
    },
  },
});

export const {previousPage, nextPage, resetMass} = rosariesSlice.actions;
export default rosariesSlice.reducer;
