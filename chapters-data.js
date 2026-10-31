const CHAPTERS = [
  {
    id: "origins",
    era: "c. 500 BCE – 400 CE",
    title: "Samhain’s Fires",
    summary: "Celtic communities marked summer’s end with fire, harvest, and thin thresholds — the folk deep background of the season.",
    story: `<p>In early Ireland and neighboring Celtic lands, <strong>Samhain</strong> closed the harvest and opened winter. Bonfires, livestock rites, and stories of a permeable boundary between living and dead shaped the emotional weather of late autumn.</p>
<p>This is the folk deep background — not a single “Halloween invented here” moment, but a seasonal hinge that later generations would remember, adapt, and argue about. Historians stress that the evidence is uneven: seasonal fire festivals were real; modern reconstructions of “exact rituals” are often later imagination.</p>
<p>What matters for the Christian story ahead is simple: <strong>the same weeks of the year</strong> would later hold prayer for the saints and the dead. Folk memory and Church calendar would share the darkening edge of the year.</p>`,
    christianCallout: "What comes next is not a simple ‘pagan holiday stolen by the Church.’ It is a long negotiation: Christian calendar, prayer for the dead, and local custom sharing the same darkening weeks.",
    plate: { class: "samhain", icons: "🔥 🌑 🍂", caption: "Seasonal hinge: fire, harvest’s end, threshold night" },
    center: [-7.5, 53.5],
    zoom: 2.8,
    pitch: 45,
    highlight: ["ireland-samhain", "scotland-samhain"],
    path: ["ireland-samhain", "scotland-samhain"],
    christianHeavy: false
  },
  {
    id: "christian",
    era: "600 – 1000 CE",
    title: "Allhallowtide Arrives",
    summary: "The Church set All Saints and All Souls — a Christian spine of holy memory. Halloween’s very name is Christian.",
    story: `<p>As Christianity spread across Europe, the Church gave late autumn a formal sacred structure. <strong>All Saints’ Day</strong> (1 November) honors the whole communion of saints — known and unknown. Later, <strong>All Souls’ Day</strong> (2 November) focused prayer on the faithful departed. Together they form <strong>Allhallowtide</strong>.</p>
<p>The night before All Saints became <strong>All Hallows’ Eve</strong> — the root of the word <strong>Halloween</strong>. That is not a marketing accident; it is a Christian vigil name. “Hallow” means holy: the evening before the feast of all holy ones.</p>
<p>In Rome and across the Latin West, the calendar taught believers to remember the dead before God — not as ghosts to fear only, but as souls held in prayer. Irish and other local churches already had strong traditions of remembering the holy dead; the universal feasts reinforced that impulse at a fixed point in the year.</p>
<p>So the Christian claim on the season is structural: <strong>a named feast, a vigil, and intercession for the dead</strong> sit at the center of the medieval autumn calendar — right where older folk thresholds had already made people think about mortality and memory.</p>`,
    christianCallout: "Allhallowtide is not a footnote. Halloween’s name itself — All Hallows’ Eve — is a Christian name. The season’s Christian spine is prayer for saints and souls.",
    plate: { class: "christian", icons: "✝ 🕯️ ⛪", caption: "All Saints · All Souls · vigils and prayer for the dead" },
    center: [12.5, 42],
    zoom: 2.2,
    pitch: 40,
    highlight: ["rome-saints", "ireland-christian"],
    path: ["rome-saints", "ireland-christian", "britain-souling"],
    christianHeavy: true
  },
  {
    id: "medieval",
    era: "1000 – 1500",
    title: "Sacred & Folk Entwined",
    summary: "Souling, church bells, Masses for the dead, and charity lived beside guising and lanterns.",
    story: `<p>In medieval Britain and Ireland the season was a <strong>braid</strong>, not a single pure tradition. Parish churches kept the feasts of All Saints and All Souls with Masses, bells, and prayer for the dead. Families remembered loved ones; the Church taught that charity and intercession mattered.</p>
<p><strong>Souling</strong> sent people — often the poor or children — door to door offering prayers for the dead in exchange for <strong>soul cakes</strong>. That is explicit Christian practice: almsgiving joined to prayer for souls. It is one of the clearest bridges between household custom and church teaching about the dead.</p>
<p>Alongside that sacred work, folk customs continued: guising (disguise), seasonal games, and later turnip lanterns. The night could hold both a prayer at the door and a playful mask in the lane. Historians such as Ronald Hutton describe this as coexistence and negotiation, not a simple replacement of one pure culture by another.</p>
<p>If you only tell the “scary folk night” story, you erase the parish. If you only tell a sterilized church story, you erase the street. Medieval Allhallowtide held both.</p>`,
    christianCallout: "Souling is clear Christian practice: prayer for souls, alms, and remembrance. The medieval season was sacred and folk at once — not one or the other.",
    plate: { class: "blend", icons: "⛪ 🍞 🎃", caption: "Soul cakes · parish prayer · guising in the same weeks" },
    center: [-2.5, 53],
    zoom: 2.6,
    pitch: 40,
    highlight: ["britain-souling", "britain-guising", "ireland-christian"],
    path: ["ireland-christian", "britain-souling", "britain-guising"],
    christianHeavy: true
  },
  {
    id: "lanterns",
    era: "1600s – 1800s",
    title: "Stingy Jack & the Lanterns",
    summary: "Turnip lanterns from Irish folklore became the glowing pumpkins we know — a folk story that traveled and transformed.",
    story: `<p>The jack-o’-lantern begins with an Irish folk tale of <strong>Stingy Jack</strong>, a man who tricked the Devil and was condemned to wander the earth with only a coal in a hollowed turnip to light his way. People carved frightening faces into turnips (and later potatoes or beets) and set them in windows or doorways to scare away Jack and other wandering spirits.</p>
<p>This was practical folk magic and seasonal play at once. When Irish and Scottish immigrants arrived in North America, they found a larger, softer native vegetable — the pumpkin — far easier to carve. By the late 19th century the pumpkin lantern had become the signature American symbol of the night.</p>
<p>The story shows adaptation rather than pure invention: an older European custom meeting New World abundance. It also sat alongside parish Allhallowtide; the lantern did not erase the feast days.</p>`,
    christianCallout: "The lantern is folk custom, not doctrine. It traveled with people who also kept All Saints and All Souls in their new parishes.",
    plate: { class: "samhain", icons: "🎃 🔥 🌑", caption: "From turnip to pumpkin: a folk lantern crosses the ocean" },
    center: [-8, 53],
    zoom: 2.4,
    pitch: 30,
    highlight: ["ireland-samhain", "boston-modern"],
    path: ["ireland-samhain", "boston-modern"],
    christianHeavy: false
  },
  {
    id: "witches",
    era: "Medieval – Early Modern",
    title: "Witches, Brooms & Fear",
    summary: "Medieval ideas about magic, herbs, and the Devil shaped the witch figure that still dominates Halloween imagery.",
    story: `<p>The classic Halloween witch — pointed hat, broomstick, black cat — draws on a long European history of fear and fascination with women accused of harmful magic. Medieval and early modern trials, often linked to social stress and religious conflict, turned local healers and outsiders into figures of danger.</p>
<p>Folk beliefs about flying ointments (sometimes containing hallucinogenic herbs), night gatherings, and animals as familiars mixed with theological ideas about the Devil. The broomstick itself may connect to older fertility or domestic symbols later reinterpreted as vehicles of flight.</p>
<p>By the time Halloween became a costume holiday, the witch was already a ready-made scary figure — portable, recognizable, and detached from the specific historical persecutions that created her. Modern costuming continues that long afterlife of the image.</p>`,
    christianCallout: "Witch imagery comes from Christian Europe’s own struggles with magic, heresy, and social order — not from ancient Celtic Samhain.",
    plate: { class: "blend", icons: "🧹 🐈‍⬛ 🌙", caption: "Medieval fear, early modern trials, modern costume" },
    center: [2, 48],
    zoom: 2.0,
    pitch: 25,
    highlight: ["britain-guising"],
    path: ["britain-guising", "ireland-christian"],
    christianHeavy: false
  },
  {
    id: "reform",
    era: "1500 – 1700",
    title: "Reformation Debates",
    summary: "Protestant critique met Catholic continuity — Allhallowtide stayed alive in parish life.",
    story: `<p>The Reformation changed how many Christians related to prayer for the dead. In Protestant regions, practices tied to purgatory and intercession for souls were often criticized as superstition or residual Catholicism. Some seasonal customs were discouraged or reinterpreted.</p>
<p>Yet the story is not “Halloween vanished.” <strong>Catholic communities kept All Saints and All Souls</strong> with full liturgical weight. In Ireland and among English Catholics, the feasts remained part of the sacred year. Folk customs also persisted — sometimes quietly, sometimes rebranded, sometimes simply continuing in villages.</p>
<p>What this era shows is that the Christian argument about the season was real and serious. People disagreed about doctrine — but they still lived inside a calendar that asked what we owe the dead and how we honor holiness. The modern habit of treating Halloween as only “pagan or party” skips this whole chapter of Christian debate.</p>
<p>By the time migrants carried autumn customs overseas, they carried both folk play and — in many families — a church memory of November’s holy days.</p>`,
    christianCallout: "Catholic Allhallowtide did not disappear. Reformation debates prove the season’s Christian stakes — prayer, doctrine, and memory — were still live questions.",
    plate: { class: "christian", icons: "📜 ✝ 🕯️", caption: "Doctrine contested · feasts retained · customs renegotiated" },
    center: [-2, 52.5],
    zoom: 2.4,
    pitch: 35,
    highlight: ["britain-souling", "ireland-christian"],
    path: ["britain-souling", "ireland-christian"],
    christianHeavy: true
  },
  {
    id: "america",
    era: "1800 – 1920s",
    title: "Across the Atlantic",
    summary: "Immigrants brought folk night and parish Allhallowtide. Pumpkins and early parties met All Saints and All Souls.",
    story: `<p>Irish and Scottish migration brought autumn customs to North America. The <strong>pumpkin</strong> replaced the turnip lantern. Community parties began to reshape the public night. Early American Halloween often mixed parlor games, fortune-telling, and neighborhood mischief.</p>
<p>At the same time, Catholic and other Christian communities continued <strong>All Saints’ and All Souls’</strong> observance. Immigrant parishes kept November’s feasts: Masses for the dead, cemetery visits, prayers for family who had died far from home. The “American Halloween” story is incomplete without those parish calendars.</p>
<p>By the early twentieth century the night was already changing character. Urban growth and shifting social norms turned some of the old mischief into more serious vandalism — setting the stage for later reforms.</p>`,
    christianCallout: "The Atlantic crossing layered new public customs on top of older sacred memory. Many immigrant families kept both the porch light and the parish Mass.",
    plate: { class: "modern", icons: "🎃 🍬 ✝", caption: "Immigrant folk night · parish Allhallowtide · early American parties" },
    center: [-74, 41],
    zoom: 2.2,
    pitch: 35,
    highlight: ["boston-modern", "nyc-modern"],
    path: ["ireland-samhain", "boston-modern", "nyc-modern"],
    christianHeavy: false
  },
  {
    id: "trickortreat",
    era: "1920s – 1950s",
    title: "Trick-or-Treat Takes Hold",
    summary: "Communities organized door-to-door treating to tame vandalism; postwar suburbs and candy made it universal.",
    story: `<p>By the 1920s and 1930s, Halloween mischief had grown destructive in many American and Canadian cities. Community leaders responded by promoting supervised parties and house-to-house treating as a safer alternative for children. The phrase “trick or treat” appears in print in Alberta in 1927 and spreads through the following decades.</p>
<p>After World War II, rationing ended and suburban neighborhoods with walkable streets made it easy for kids to go door to door. Individually wrapped candy proved more convenient than homemade treats. By the 1950s the practice was widespread.</p>
<p>Churches continued to respond in varied ways: some hosted alternatives, many simply kept All Saints and All Souls while neighborhoods ran costume nights. The public script of candy and costumes sat beside, rather than replacing, the older calendar of remembrance.</p>`,
    christianCallout: "Trick-or-treating is a modern social invention aimed at children. It does not erase the parish feasts that many families still observed the same week.",
    plate: { class: "modern", icons: "🍬 🎃 🏠", caption: "From mischief control to postwar suburban ritual" },
    center: [-75, 40],
    zoom: 2.4,
    pitch: 30,
    highlight: ["nyc-modern", "boston-modern"],
    path: ["boston-modern", "nyc-modern"],
    christianHeavy: false
  },
  {
    id: "commercial",
    era: "1950 – Present",
    title: "Candy, Costumes & Commerce",
    summary: "Retail, media, and mass production turned Halloween into a major commercial holiday worldwide.",
    story: `<p>Media and retail exported commercial Halloween worldwide: costumes, orange-and-black branding, themed entertainment, and horror films. In many places the holiday arrived as pop culture first, without local Samhain memory or parish Allhallowtide.</p>
<p>In the United States it became one of the largest retail seasons after Christmas. Costumes shifted from homemade to licensed characters. Candy companies built an entire ecosystem around the night. Global spread followed American media and brands.</p>
<p>Yet the Christian thread continues wherever churches keep the calendar. <strong>All Saints</strong> and <strong>All Souls</strong> remain living feasts. Christians still gather to name the dead, sing of the communion of saints, and hope in resurrection — the theological heart that commercial Halloween cannot supply.</p>`,
    christianCallout: "Commercial Halloween is loud and recent. The older Christian work of remembering the dead before God is still available every November.",
    plate: { class: "modern", icons: "🎃 🎬 🛒", caption: "Mass media, licensed costumes, global retail" },
    center: [-40, 25],
    zoom: 1.4,
    pitch: 20,
    highlight: ["nyc-modern", "japan-modern"],
    path: ["nyc-modern", "japan-modern"],
    christianHeavy: false
  },
  {
    id: "global",
    era: "Present",
    title: "Many October Nights",
    summary: "Global pop-Halloween spreads — while Christian remembrance and Día de los Muertos keep sacred memory alive.",
    story: `<p><strong>Día de los Muertos</strong> in Mexico and Mexican-American communities stands as a powerful related tradition: Indigenous remembrance practices braided with Catholic All Saints and All Souls. It is not “Mexican Halloween,” but it shares the season’s deep human work — remembering the dead with love, food, light, and prayer.</p>
<p>Elsewhere, churches and families continue Allhallowtide in many forms: cemetery visits, Masses for the dead, community prayers, and alternatives such as trunk-or-treat. The night can hold both costume play and sacred memory without one canceling the other.</p>
<p>To stress only “pagan roots” or only “candy capitalism” misses the Christian middle: <strong>remember the dead before God</strong>. That middle is still available every November — with or without a costume.</p>`,
    christianCallout: "The Christian middle still stands: All Saints, All Souls, and living traditions of remembrance. Halloween’s loudest ads are not the whole story of the season.",
    plate: { class: "blend", icons: "💀 🕯️ 🎃", caption: "Global costume night · living Christian & familial remembrance" },
    center: [-99, 19],
    zoom: 1.4,
    pitch: 25,
    highlight: ["mexico-dotd", "nyc-modern"],
    path: ["nyc-modern", "mexico-dotd"],
    christianHeavy: true
  }
];

const PLACES = [
  { id: "ireland-samhain", coords: [-6.2603, 53.3498], layer: "samhain", emoji: "🔥", title: "Ireland — Samhain Ground", body: "Early Irish seasonal practice around Samhain forms the folk deep background. Later Christian Allhallowtide would occupy the same weeks of the year.", source: "Hutton, Stations of the Sun" },
  { id: "scotland-samhain", coords: [-4.2026, 56.4907], layer: "samhain", emoji: "🔥", title: "Scotland — Fire & Guising", body: "Scottish fire customs and guising kept folk seasonal energy strong and traveled with migrants to America.", source: "Hutton; Rogers" },
  { id: "rome-saints", coords: [12.4964, 41.9028], layer: "christian", emoji: "✝", title: "Rome — All Saints’ Day", body: "The Roman calendar’s emphasis on a universal All Saints’ feast helped lock in Allhallowtide — institutional Christianity giving the season a sacred spine. All Hallows’ Eve is the vigil of that feast: a Christian name for a Christian night of preparation.", source: "Church histories" },
  { id: "ireland-christian", coords: [-7.8, 53.2], layer: "christian", emoji: "🕯️", title: "Ireland — All Hallows’ Eve", body: "The very name Halloween — All Hallows’ Eve — is Christian. In Ireland, parish Allhallowtide and older seasonal memory shared the same weeks: vigils, prayer for saints and souls, and local custom in one calendar window.", source: "Santino; Hutton" },
  { id: "britain-souling", coords: [-1.8904, 52.4862], layer: "christian", emoji: "⛪", title: "England — Souling", body: "Door-to-door prayer for the dead in exchange for soul cakes — explicit Christian intercession and charity. Souling joined almsgiving to remembrance of souls: a parish-shaped custom, not mere costume play.", source: "Hutton, 1996" },
  { id: "britain-guising", coords: [-2.2426, 53.4808], layer: "samhain", emoji: "🎃", title: "Britain — Guising & Lanterns", body: "Guising and turnip lanterns kept folk play in the season — a mixed night shared with souling and church observance.", source: "Rogers, 2002" },
  { id: "boston-modern", coords: [-71.0589, 42.3601], layer: "modern", emoji: "🎃", title: "New England — Immigrant Roots", body: "Irish and Scottish communities planted Halloween customs in the Northeast. Parish life and November Christian feasts arrived in the same migrations.", source: "Skal, 2002" },
  { id: "nyc-modern", coords: [-74.006, 40.7128], layer: "modern", emoji: "🍬", title: "United States — Costume & Parish", body: "Trick-or-treat grew fast — while churches continued All Saints/All Souls and later alternatives like trunk-or-treat.", source: "Skal; parish practice" },
  { id: "mexico-dotd", coords: [-99.1332, 19.4326], layer: "modern", emoji: "💀", title: "Mexico — Día de los Muertos", body: "A living tradition of family remembrance braided with Catholic All Saints and All Souls — related to, but not the same as, commercial Halloween.", source: "Brandes, 2006" },
  { id: "japan-modern", coords: [139.6503, 35.6762], layer: "modern", emoji: "🎃", title: "Japan & Global Pop-Halloween", body: "Commercial Halloween spread through media and retail even where folk or parish Allhallowtide roots were thin.", source: "Contemporary reporting" }
];
