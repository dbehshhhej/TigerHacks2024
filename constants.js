// Base temps of crops
export const baseTemps = {
  corn: 50, // Base GDD 50°F
  soybean: 50, // Base GDD 50°F
  wheat: 40, // Base GDD 40°F
  alfalfa: 41, // Base GDD 41°F
  cotton: 60, // Base GDD 60°F
  tomato: 50, // Base GDD 50°F
  lettuce: 40, // Base GDD 40°F
  cucumber: 55, // Base GDD 55°F
  rice: 50, // Base GDD 50°F
  potato: 45, // Base GDD 45°F
};

// Emergence GDD of crops
export const emergenceGDD = {
  corn: 90, // Approx. 90 GDDs for corn to emerge
  soybean: 120, // Approx. 120 GDDs for soybean
  wheat: 180, // Approx. 180 GDDs for wheat
  alfalfa: 200, // Approx. 200 GDDs for alfalfa
  cotton: 200, // Approx. 200 GDDs for cotton
  tomato: 150, // Approx. 150 GDDs for tomato
  lettuce: 120, // Approx. 120 GDDs for lettuce
  cucumber: 150, // Approx. 150 GDDs for cucumber
  rice: 100, // Approx. 100 GDDs for rice
  potato: 120, // Approx. 120 GDDs for potato
};

export const pestData = [
  {
    pest: "American plum borer",
    lifeStage: "adult flight and egg laying",
    gddRange: { minGdd: 245, maxGdd: 440 },
    degreeDayMaps: [250, 300, 450],
    reference: "1",
  },
  {
    pest: "American plum borer",
    lifeStage: "2nd generation",
    gddRange: { minGdd: 1375, maxGdd: 1500 },
    degreeDayMaps: [1350, 1400, 1500],
    reference: "1",
  },
  {
    pest: "Arborvitae leafminer",
    lifeStage: "larvae in mines; 1st generation",
    gddRange: { minGdd: 245, maxGdd: 360 },
    degreeDayMaps: [250, 300, 350],
    reference: "1",
  },
  {
    pest: "Arborvitae leafminer",
    lifeStage: "2nd generation",
    gddRange: { minGdd: 533, maxGdd: 700 },
    degreeDayMaps: [500, 600, 700],
    reference: "1",
  },
  {
    pest: "Arborvitae leafminer",
    lifeStage: "3rd generation",
    gddRange: { minGdd: 1700, maxGdd: 2100 },
    degreeDayMaps: [1700, 1900, 2000],
    reference: "1",
  },
  {
    pest: "Balsam gall midge",
    lifeStage: "adults laying eggs",
    gddRange: { minGdd: 150, maxGdd: 300 },
    degreeDayMaps: [150, 200, 300],
    reference: "3",
  },
  {
    pest: "Balsam gall midge",
    lifeStage: "galls apparent",
    gddRange: { minGdd: 550, maxGdd: 700 },
    degreeDayMaps: [550, 650, 700],
    reference: "3",
  },
  {
    pest: "Balsam twig aphid",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 60, maxGdd: 100 },
    degreeDayMaps: [50, 100],
    reference: "4",
  },
  {
    pest: "Balsam twig aphid",
    lifeStage: "stem mothers present (control target)",
    gddRange: { minGdd: 100, maxGdd: 140 },
    degreeDayMaps: [100, 150],
    reference: "4",
  },
  {
    pest: "Banded ash clearwing borer",
    lifeStage: "adult emergence",
    gddRange: { minGdd: 1800, maxGdd: 2200 },
    degreeDayMaps: [1800, 1900, 2000],
    reference: "1,2",
  },
  {
    pest: "Beech scale",
    lifeStage: "eggs present",
    gddRange: { minGdd: 800, maxGdd: 800 },
    degreeDayMaps: [800],
    reference: "3",
  },
  {
    pest: "Beech scale",
    lifeStage: "egg hatch; 1st crawlers",
    gddRange: { minGdd: 1250, maxGdd: 1250 },
    degreeDayMaps: [1250],
    reference: "3",
  },
  {
    pest: "Birch leafminer",
    lifeStage: "1st adult emergence",
    gddRange: { minGdd: 175, maxGdd: 215 },
    degreeDayMaps: [150, 200],
    reference: "1",
  },
  {
    pest: "Birch leafminer",
    lifeStage: "Adults laying eggs",
    gddRange: { minGdd: 275, maxGdd: 375 },
    degreeDayMaps: [250, 300, 350],
    reference: "2",
  },
  {
    pest: "Birch leafminer",
    lifeStage: "larvae and pupae",
    gddRange: { minGdd: 375, maxGdd: 500 },
    degreeDayMaps: [350, 400, 500],
    reference: "2",
  },
  {
    pest: "Birch leafminer",
    lifeStage: "adults and egg laying; 2nd generation",
    gddRange: { minGdd: 600, maxGdd: 700 },
    degreeDayMaps: [600, 700],
    reference: "2",
  },
  {
    pest: "Black pineleaf scale",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 1068, maxGdd: 1068 },
    degreeDayMaps: [1050],
    reference: "1",
  },
  {
    pest: "Bronze birch borer",
    lifeStage: "adults; eggs; new grubs",
    gddRange: { minGdd: 400, maxGdd: 600 },
    degreeDayMaps: [400, 500, 600],
    reference: "1,2",
  },
  {
    pest: "Cankerworm",
    lifeStage: "young caterpillars",
    gddRange: { minGdd: 100, maxGdd: 200 },
    degreeDayMaps: [100, 200],
    reference: "1",
  },
  {
    pest: "Cooley spruce gall adelgid",
    lifeStage: "1st adults active - Spruce (control target)",
    gddRange: { minGdd: 25, maxGdd: 120 },
    degreeDayMaps: [50, 100],
    reference: "3",
  },
  {
    pest: "Cooley spruce gall adelgid",
    lifeStage: "1st galls visible - Spruce",
    gddRange: { minGdd: 200, maxGdd: 310 },
    degreeDayMaps: [200, 250, 300],
    reference: "3",
  },
  {
    pest: "Cooley spruce gall adelgid",
    lifeStage: "1st adults active - Douglas fir",
    gddRange: { minGdd: 90, maxGdd: 180 },
    degreeDayMaps: [100, 150],
    reference: "1",
  },
  {
    pest: "Cooley spruce gall adelgid",
    lifeStage: "1st nymphs - Douglas fir (control target)",
    gddRange: { minGdd: 90, maxGdd: 150 },
    degreeDayMaps: [100, 150],
    reference: "3",
  },
  {
    pest: "Cooley spruce gall adelgid",
    lifeStage: "2nd nymphs - Douglas fir (control target)",
    gddRange: { minGdd: 600, maxGdd: 1000 },
    degreeDayMaps: [600, 800, 1000],
    reference: "3",
  },
  {
    pest: "Cooley spruce gall adelgid",
    lifeStage: "2nd adults active (control target)",
    gddRange: { minGdd: 1500, maxGdd: 1600 },
    degreeDayMaps: [1500, 1550, 1600],
    reference: "3",
  },
  {
    pest: "Cottony maple scale",
    lifeStage: "adults & yellow crawlers on leaf veins",
    gddRange: { minGdd: 802, maxGdd: 1200 },
    degreeDayMaps: [800, 950, 1200],
    reference: "1,2",
  },
  {
    pest: "Dogwood borer",
    lifeStage: "adults, eggs, caterpillars",
    gddRange: { minGdd: 350, maxGdd: 850 },
    degreeDayMaps: [350, 550, 850],
    reference: "1,2",
  },
  {
    pest: "Eastern pine shoot borer",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 75, maxGdd: 200 },
    degreeDayMaps: [50, 100, 200],
    reference: "3",
  },
  {
    pest: "Eastern spruce gall adelgid",
    lifeStage: "1st adults active (control target)",
    gddRange: { minGdd: 25, maxGdd: 100 },
    degreeDayMaps: [50, 100],
    reference: "3",
  },
  {
    pest: "Eastern spruce gall adelgid",
    lifeStage: "egg hatch, galls begin forming",
    gddRange: { minGdd: 250, maxGdd: 310 },
    degreeDayMaps: [250, 300],
    reference: "1,3",
  },
  {
    pest: "Eastern spruce gall adelgid",
    lifeStage: "2nd adults active (control target)",
    gddRange: { minGdd: 1500, maxGdd: 1600 },
    degreeDayMaps: [1500, 1550, 1600],
    reference: "3",
  },
  {
    pest: "Eastern tent caterpillar",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 45, maxGdd: 100 },
    degreeDayMaps: [50, 100],
    reference: "1,2,3",
  },
  {
    pest: "Eastern tent caterpillar",
    lifeStage: "tents apparent",
    gddRange: { minGdd: 150, maxGdd: 150 },
    degreeDayMaps: [150],
    reference: "3",
  },
  {
    pest: "Eastern tent caterpillar",
    lifeStage: "pupation",
    gddRange: { minGdd: 450, maxGdd: 450 },
    degreeDayMaps: [450],
    reference: "3",
  },
  {
    pest: "Elm leaf beetle",
    lifeStage: "1st generation",
    gddRange: { minGdd: 400, maxGdd: 600 },
    degreeDayMaps: [400, 500, 600],
    reference: "1",
  },
  {
    pest: "Elm leaf beetle",
    lifeStage: "2nd generation",
    gddRange: { minGdd: 1300, maxGdd: 1300 },
    degreeDayMaps: [1300],
    reference: "1",
  },
  {
    pest: "Elm leafminer",
    lifeStage: "adult emergence",
    gddRange: { minGdd: 215, maxGdd: 240 },
    degreeDayMaps: [200, 250],
    reference: "1",
  },
  {
    pest: "Elm leafminer",
    lifeStage: "1st generation larvae",
    gddRange: { minGdd: 365, maxGdd: 530 },
    degreeDayMaps: [350, 450, 550],
    reference: "2",
  },
  {
    pest: "Emerald ash borer",
    lifeStage: "1st adult emergence",
    gddRange: { minGdd: 400, maxGdd: 500 },
    degreeDayMaps: [400, 500],
    reference: "3",
  },
  {
    pest: "Emerald ash borer",
    lifeStage: "peak adult activity",
    gddRange: { minGdd: 1000, maxGdd: 1200 },
    degreeDayMaps: [1000, 1100, 1200],
    reference: "*",
  },
  {
    pest: "Euonymus scale",
    lifeStage: "egg hatch - 1st generation",
    gddRange: { minGdd: 400, maxGdd: 575 },
    degreeDayMaps: [400, 500, 550],
    reference: "1",
  },
  {
    pest: "Euonymus scale",
    lifeStage: "egg hatch - 2nd generation",
    gddRange: { minGdd: 1900, maxGdd: 1050 },
    degreeDayMaps: [],
    reference: "1",
  },
  {
    pest: "European pine sawfly",
    lifeStage: "1st larvae",
    gddRange: { minGdd: 100, maxGdd: 195 },
    degreeDayMaps: [100, 150, 200],
    reference: "1,3",
  },
  {
    pest: "European pine shoot moth",
    lifeStage: "1st larvae",
    gddRange: { minGdd: 50, maxGdd: 220 },
    degreeDayMaps: [50, 100, 200],
    reference: "3",
  },
  {
    pest: "European pine shoot moth",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 900, maxGdd: 1000 },
    degreeDayMaps: [900, 950, 1000],
    reference: "3",
  },
  {
    pest: "European pine shoot moth",
    lifeStage: "adults active",
    gddRange: { minGdd: 700, maxGdd: 800 },
    degreeDayMaps: [700, 750, 800],
    reference: "3",
  },
  {
    pest: "Fall webworm",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 850, maxGdd: 900 },
    degreeDayMaps: [850, 900],
    reference: "1",
  },
  {
    pest: "Fall webworm",
    lifeStage: "caterpillars feeding",
    gddRange: { minGdd: 1200, maxGdd: 1800 },
    degreeDayMaps: [1200, 1500, 1800],
    reference: "2",
  },
  {
    pest: "Fall webworm",
    lifeStage: "tents become apparent",
    gddRange: { minGdd: 1850, maxGdd: 2050 },
    degreeDayMaps: [1850, 1900, 2000],
    reference: "3",
  },
  {
    pest: "Fletcher scale",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 850, maxGdd: 900 },
    degreeDayMaps: [850, 900],
    reference: "1",
  },
  {
    pest: "Forest tent caterpillar",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 125, maxGdd: 250 },
    degreeDayMaps: [100, 150, 250],
    reference: "3",
  },
  {
    pest: "Forest tent caterpillar",
    lifeStage: "pupation",
    gddRange: { minGdd: 450, maxGdd: 450 },
    degreeDayMaps: [450],
    reference: "3",
  },
  {
    pest: "Forest tent caterpillar",
    lifeStage: "tachinid parasitic flies abundant",
    gddRange: { minGdd: 450, maxGdd: 550 },
    degreeDayMaps: [450, 500, 550],
    reference: "3",
  },
  {
    pest: "Forest tent caterpillar",
    lifeStage:
      'sarcophagid parasitic flies abundant ("government fly" or "friendly fly")',
    gddRange: { minGdd: 750, maxGdd: 850 },
    degreeDayMaps: [750, 800, 850],
    reference: "*",
  },
  {
    pest: "Golden oak scale",
    lifeStage: "Egg hatch",
    gddRange: { minGdd: 680, maxGdd: 700 },
    degreeDayMaps: [650, 700],
    reference: "1",
  },
  {
    pest: "Greater peach tree borer",
    lifeStage: "adult emergence",
    gddRange: { minGdd: 575, maxGdd: 710 },
    degreeDayMaps: [550, 650, 700],
    reference: "1",
  },
  {
    pest: "Gypsy moth",
    lifeStage: "egg hatch, 1st larvae",
    gddRange: { minGdd: 145, maxGdd: 200 },
    degreeDayMaps: [150, 200],
    reference: "1, 3",
  },
  {
    pest: "Gypsy moth",
    lifeStage: "young caterpillars",
    gddRange: { minGdd: 450, maxGdd: 450 },
    degreeDayMaps: [450],
    reference: "1",
  },
  {
    pest: "Gypsy moth",
    lifeStage: "pupation",
    gddRange: { minGdd: 900, maxGdd: 1200 },
    degreeDayMaps: [900, 1000, 1200],
    reference: "3",
  },
  {
    pest: "Honeylocust spider mite",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 220, maxGdd: 250 },
    degreeDayMaps: [200, 250],
    reference: "1",
  },
  {
    pest: "Honeylocust plant bug",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 220, maxGdd: 250 },
    degreeDayMaps: [200, 250],
    reference: "1,3",
  },
  {
    pest: "Introduced pine sawfly",
    lifeStage: "1st larvae",
    gddRange: { minGdd: 400, maxGdd: 600 },
    degreeDayMaps: [400, 500, 600],
    reference: "3",
  },
  {
    pest: "Imported willow leaf beetle",
    lifeStage: "Adults active",
    gddRange: { minGdd: 120, maxGdd: 275 },
    degreeDayMaps: [150, 250, 300],
    reference: "1",
  },
  {
    pest: "Jack pine budworm",
    lifeStage: "young larvae feeding",
    gddRange: { minGdd: 300, maxGdd: 350 },
    degreeDayMaps: [300, 350],
    reference: "3",
  },
  {
    pest: "Jack pine budworm",
    lifeStage: "large larvae feeding - defoliation apparent",
    gddRange: { minGdd: 650, maxGdd: 700 },
    degreeDayMaps: [650, 700],
    reference: "3",
  },
  {
    pest: "Jack pine sawfly",
    lifeStage: "eggs; young larvae",
    gddRange: { minGdd: 100, maxGdd: 200 },
    degreeDayMaps: [100, 150, 200],
    reference: "1",
  },
  {
    pest: "Jack pine sawfly",
    lifeStage: "larger larvae consuming needles",
    gddRange: { minGdd: 275, maxGdd: 500 },
    degreeDayMaps: [250, 350, 500],
    reference: "1",
  },
  {
    pest: "Japanese beetle",
    lifeStage: "adults emerge and feed",
    gddRange: { minGdd: 950, maxGdd: 2150 },
    degreeDayMaps: [950, 1500, 2000],
    reference: "1,2",
  },
  {
    pest: "Juniper scale",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 550, maxGdd: 700 },
    degreeDayMaps: [550, 600, 700],
    reference: "1",
  },
  {
    pest: "Larch casebearer",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 120, maxGdd: 150 },
    degreeDayMaps: [100, 150],
    reference: "1",
  },
  {
    pest: "Large aspen tortrix",
    lifeStage: "pupation",
    gddRange: { minGdd: 600, maxGdd: 700 },
    degreeDayMaps: [600, 700],
    reference: "3",
  },
  {
    pest: "Lesser peach tree borer",
    lifeStage: "adult flight",
    gddRange: { minGdd: 350, maxGdd: 375 },
    degreeDayMaps: [300, 350, 400],
    reference: "1,2",
  },
  {
    pest: "Lilac borer",
    lifeStage: "adult flight",
    gddRange: { minGdd: 325, maxGdd: 350 },
    degreeDayMaps: [300, 350],
    reference: "1,2",
  },
  {
    pest: "Magnolia scale",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 1925, maxGdd: 1950 },
    degreeDayMaps: [1900, 2000],
    reference: "1",
  },
  {
    pest: "Mimosa webworm",
    lifeStage: "egg hatch - 1st generation",
    gddRange: { minGdd: 850, maxGdd: 900 },
    degreeDayMaps: [850, 900],
    reference: "1",
  },
  {
    pest: "Northern pine weevil",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 25, maxGdd: 100 },
    degreeDayMaps: [50, 100],
    reference: "3",
  },
  {
    pest: "Northern pine weevil",
    lifeStage: "2nd adults active",
    gddRange: { minGdd: 1200, maxGdd: 1400 },
    degreeDayMaps: [1200, 1300, 1400],
    reference: "3",
  },
  {
    pest: "Oystershell scale",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 350, maxGdd: 500 },
    degreeDayMaps: [350, 400, 500],
    reference: "1",
  },
  {
    pest: "Pales weevil",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 25, maxGdd: 100 },
    degreeDayMaps: [50, 100],
    reference: "3",
  },
  {
    pest: "Pales weevil",
    lifeStage: "2nd adults active",
    gddRange: { minGdd: 1200, maxGdd: 1400 },
    degreeDayMaps: [1200, 1300, 1400],
    reference: "3",
  },
  {
    pest: "Pine chafer (Anomela beetle)",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 450, maxGdd: 600 },
    degreeDayMaps: [450, 500, 600],
    reference: "3",
  },
  {
    pest: "Pine engraver (Ips bark beetle)",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 100, maxGdd: 150 },
    degreeDayMaps: [100, 150],
    reference: "100, 150",
  },
  {
    pest: "Pine needle midge",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 400, maxGdd: 500 },
    degreeDayMaps: [400, 450, 500],
    reference: "3",
  },
  {
    pest: "Pine needle scale",
    lifeStage: "1st generation egg hatch",
    gddRange: { minGdd: 250, maxGdd: 400 },
    degreeDayMaps: [250, 300, 400],
    reference: "1,3,5,7",
  },
  {
    pest: "Pine needle scale",
    lifeStage: "1st generation - hyaline stage (control target)",
    gddRange: { minGdd: 400, maxGdd: 500 },
    degreeDayMaps: [400, 500],
    reference: "5",
  },
  {
    pest: "Pine needle scale",
    lifeStage: "2nd generation egg hatch",
    gddRange: { minGdd: 1250, maxGdd: 1350 },
    degreeDayMaps: [1250, 1300, 1350],
    reference: "1,3,5",
  },
  {
    pest: "Pine needle scale",
    lifeStage: "2nd generation - hyaline stage (control target)",
    gddRange: { minGdd: 1500, maxGdd: 1500 },
    degreeDayMaps: [1500],
    reference: "5",
  },
  {
    pest: "Pine root collar weevil",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 300, maxGdd: 350 },
    degreeDayMaps: [300, 350],
    reference: "3",
  },
  {
    pest: "Pine root collar weevil",
    lifeStage: "2nd adults active",
    gddRange: { minGdd: 1200, maxGdd: 1400 },
    degreeDayMaps: [1200, 1300, 1400],
    reference: "3",
  },
  {
    pest: "Pine shoot beetle",
    lifeStage: "new adults emerge; begin shoot-feeding",
    gddRange: { minGdd: 500, maxGdd: 550 },
    degreeDayMaps: [500, 550],
    reference: "6",
  },
  {
    pest: "Pine shoot beetle",
    lifeStage: "optimal control window",
    gddRange: { minGdd: 450, maxGdd: 500 },
    degreeDayMaps: [450, 500],
    reference: "6",
  },
  {
    pest: "Pine tortoise scale",
    lifeStage: "egg hatch begins; 1st crawlers",
    gddRange: { minGdd: 400, maxGdd: 500 },
    degreeDayMaps: [400, 450, 500],
    reference: "3",
  },
  {
    pest: "Pine tortoise scale",
    lifeStage: "egg hatch ends; last of the crawlers",
    gddRange: { minGdd: 1000, maxGdd: 1200 },
    degreeDayMaps: [1000, 1100, 1200],
    reference: "3",
  },
  {
    pest: "Pine tube moth",
    lifeStage: "adults; egg laying; caterpillars",
    gddRange: { minGdd: 90, maxGdd: 250 },
    degreeDayMaps: [100, 200, 250],
    reference: "1",
  },
  {
    pest: "Red-headed pine sawfly",
    lifeStage: "1st larvae",
    gddRange: { minGdd: 400, maxGdd: 600 },
    degreeDayMaps: [400, 500, 600],
    reference: "3",
  },
  {
    pest: "Spruce budscale",
    lifeStage: "egg hatch, 1st crawlers",
    gddRange: { minGdd: 700, maxGdd: 1150 },
    degreeDayMaps: [700, 900, 1150],
    reference: "1,3",
  },
  {
    pest: "Spruce budworm",
    lifeStage: "1st larvae",
    gddRange: { minGdd: 200, maxGdd: 300 },
    degreeDayMaps: [200, 250, 300],
    reference: "3",
  },
  {
    pest: "Spruce needleminer",
    lifeStage: "1st larvae",
    gddRange: { minGdd: 150, maxGdd: 200 },
    degreeDayMaps: [150, 200],
    reference: "3",
  },
  {
    pest: "Spruce spider mite",
    lifeStage: "1st egg hatch",
    gddRange: { minGdd: 150, maxGdd: 175 },
    degreeDayMaps: [150, 200],
    reference: "1,3",
  },
  {
    pest: "Striped pine scale",
    lifeStage: "egg hatch",
    gddRange: { minGdd: 750, maxGdd: 800 },
    degreeDayMaps: [750, 800],
    reference: "1",
  },
  {
    pest: "Turpentine beetle",
    lifeStage: "parent beetles colonizing brood material",
    gddRange: { minGdd: 300, maxGdd: 350 },
    degreeDayMaps: [300, 350],
    reference: "3",
  },
  {
    pest: "Walnut caterpillar",
    lifeStage: "egg hatch; caterpillars",
    gddRange: { minGdd: 1600, maxGdd: 1700 },
    degreeDayMaps: [1600, 1650, 1700],
    reference: "1",
  },
  {
    pest: "White pine weevil",
    lifeStage: "1st adults active",
    gddRange: { minGdd: 25, maxGdd: 220 },
    degreeDayMaps: [50, 100, 200],
    reference: "3",
  },
  {
    pest: "White pine weevil",
    lifeStage: "2nd adults active",
    gddRange: { minGdd: 1200, maxGdd: 1400 },
    degreeDayMaps: [1200, 1300, 1400],
    reference: "3",
  },
  {
    pest: "Zimmerman pine moth",
    lifeStage: "1st larvae",
    gddRange: { minGdd: 25, maxGdd: 100 },
    degreeDayMaps: [50, 100],
    reference: "7",
  },
  {
    pest: "Zimmerman pine moth",
    lifeStage: "adult flight",
    gddRange: { minGdd: 1700, maxGdd: 1700 },
    degreeDayMaps: [1700],
    reference: "1",
  },
];

export const temperatureData = {
  Columbia: {
    "2024-04-01": {
      HighTemp: 71.0,
      LowTemp: 56.0,
    },
    "2024-04-02": {
      HighTemp: 61.0,
      LowTemp: 41.0,
    },
    "2024-04-03": {
      HighTemp: 53.0,
      LowTemp: 37.0,
    },
    "2024-04-04": {
      HighTemp: 53.0,
      LowTemp: 37.0,
    },
    "2024-04-05": {
      HighTemp: 57.0,
      LowTemp: 32.0,
    },
    "2024-04-06": {
      HighTemp: 64.0,
      LowTemp: 40.0,
    },
    "2024-04-07": {
      HighTemp: 72.0,
      LowTemp: 50.0,
    },
    "2024-04-08": {
      HighTemp: 79.0,
      LowTemp: 51.0,
    },
    "2024-04-09": {
      HighTemp: 68.0,
      LowTemp: 50.0,
    },
    "2024-04-10": {
      HighTemp: 64.0,
      LowTemp: 51.0,
    },
    "2024-04-11": {
      HighTemp: 64.0,
      LowTemp: 51.0,
    },
    "2024-04-12": {
      HighTemp: 68.0,
      LowTemp: 46.0,
    },
    "2024-04-13": {
      HighTemp: 85.0,
      LowTemp: 43.0,
    },
    "2024-04-14": {
      HighTemp: 86.0,
      LowTemp: 65.0,
    },
    "2024-04-15": {
      HighTemp: 85.0,
      LowTemp: 61.0,
    },
    "2024-04-16": {
      HighTemp: 81.0,
      LowTemp: 68.0,
    },
    "2024-04-17": {
      HighTemp: 79.0,
      LowTemp: 60.0,
    },
    "2024-04-18": {
      HighTemp: 80.0,
      LowTemp: 48.0,
    },
    "2024-04-19": {
      HighTemp: 62.0,
      LowTemp: 41.0,
    },
    "2024-04-20": {
      HighTemp: 55.0,
      LowTemp: 43.0,
    },
    "2024-04-21": {
      HighTemp: 59.0,
      LowTemp: 41.0,
    },
    "2024-04-22": {
      HighTemp: 69.0,
      LowTemp: 38.0,
    },
    "2024-04-23": {
      HighTemp: 68.0,
      LowTemp: 52.0,
    },
    "2024-04-24": {
      HighTemp: 71.0,
      LowTemp: 41.0,
    },
    "2024-04-25": {
      HighTemp: 64.0,
      LowTemp: 48.0,
    },
    "2024-04-26": {
      HighTemp: 69.0,
      LowTemp: 52.0,
    },
    "2024-04-27": {
      HighTemp: 75.0,
      LowTemp: 61.0,
    },
    "2024-04-28": {
      HighTemp: 71.0,
      LowTemp: 59.0,
    },
    "2024-04-29": {
      HighTemp: 74.0,
      LowTemp: 56.0,
    },
    "2024-04-30": {
      HighTemp: 84.0,
      LowTemp: 54.0,
    },
    "2024-05-01": {
      HighTemp: 78.0,
      LowTemp: 64.0,
    },
    "2024-05-02": {
      HighTemp: 81.0,
      LowTemp: 62.0,
    },
    "2024-05-03": {
      HighTemp: 74.0,
      LowTemp: 57.0,
    },
    "2024-05-04": {
      HighTemp: 78.0,
      LowTemp: 57.0,
    },
    "2024-05-05": {
      HighTemp: 64.0,
      LowTemp: 49.0,
    },
    "2024-05-06": {
      HighTemp: 78.0,
      LowTemp: 59.0,
    },
    "2024-05-07": {
      HighTemp: 79.0,
      LowTemp: 58.0,
    },
    "2024-05-08": {
      HighTemp: 70.0,
      LowTemp: 51.0,
    },
    "2024-05-09": {
      HighTemp: 74.0,
      LowTemp: 56.0,
    },
    "2024-05-10": {
      HighTemp: 72.0,
      LowTemp: 53.0,
    },
    "2024-05-11": {
      HighTemp: 78.0,
      LowTemp: 55.0,
    },
    "2024-05-12": {
      HighTemp: 82.0,
      LowTemp: 56.0,
    },
    "2024-05-13": {
      HighTemp: 72.0,
      LowTemp: 61.0,
    },
    "2024-05-14": {
      HighTemp: 70.0,
      LowTemp: 61.0,
    },
    "2024-05-15": {
      HighTemp: 74.0,
      LowTemp: 61.0,
    },
    "2024-05-16": {
      HighTemp: 76.0,
      LowTemp: 63.0,
    },
    "2024-05-17": {
      HighTemp: 82.0,
      LowTemp: 59.0,
    },
    "2024-05-18": {
      HighTemp: 85.0,
      LowTemp: 62.0,
    },
    "2024-05-19": {
      HighTemp: 88.0,
      LowTemp: 67.0,
    },
    "2024-05-20": {
      HighTemp: 85.0,
      LowTemp: 68.0,
    },
    "2024-05-21": {
      HighTemp: 88.0,
      LowTemp: 65.0,
    },
    "2024-05-22": {
      HighTemp: 75.0,
      LowTemp: 59.0,
    },
    "2024-05-23": {
      HighTemp: 82.0,
      LowTemp: 56.0,
    },
    "2024-05-24": {
      HighTemp: 87.0,
      LowTemp: 64.0,
    },
    "2024-05-25": {
      HighTemp: 80.0,
      LowTemp: 56.0,
    },
    "2024-05-26": {
      HighTemp: 82.0,
      LowTemp: 62.0,
    },
    "2024-05-27": {
      HighTemp: 81.0,
      LowTemp: 62.0,
    },
    "2024-05-28": {
      HighTemp: 81.0,
      LowTemp: 58.0,
    },
    "2024-05-29": {
      HighTemp: 77.0,
      LowTemp: 57.0,
    },
    "2024-05-30": {
      HighTemp: 80.0,
      LowTemp: 59.0,
    },
    "2024-05-31": {
      HighTemp: 78.0,
      LowTemp: 61.0,
    },
    "2024-06-01": {
      HighTemp: 78.0,
      LowTemp: 65.0,
    },
    "2024-06-02": {
      HighTemp: 84.0,
      LowTemp: 62.0,
    },
    "2024-06-03": {
      HighTemp: 85.0,
      LowTemp: 68.0,
    },
    "2024-06-04": {
      HighTemp: 83.0,
      LowTemp: 68.0,
    },
    "2024-06-05": {
      HighTemp: 81.0,
      LowTemp: 66.0,
    },
    "2024-06-06": {
      HighTemp: 83.0,
      LowTemp: 63.0,
    },
    "2024-06-07": {
      HighTemp: 89.0,
      LowTemp: 56.0,
    },
    "2024-06-08": {
      HighTemp: 87.0,
      LowTemp: 66.0,
    },
    "2024-06-09": {
      HighTemp: 81.0,
      LowTemp: 61.0,
    },
    "2024-06-10": {
      HighTemp: 78.0,
      LowTemp: 58.0,
    },
    "2024-06-11": {
      HighTemp: 82.0,
      LowTemp: 57.0,
    },
    "2024-06-12": {
      HighTemp: 88.0,
      LowTemp: 65.0,
    },
    "2024-06-13": {
      HighTemp: 92.0,
      LowTemp: 69.0,
    },
    "2024-06-14": {
      HighTemp: 89.0,
      LowTemp: 69.0,
    },
    "2024-06-15": {
      HighTemp: 90.0,
      LowTemp: 65.0,
    },
    "2024-06-16": {
      HighTemp: 93.0,
      LowTemp: 76.0,
    },
    "2024-06-17": {
      HighTemp: 94.0,
      LowTemp: 76.0,
    },
    "2024-06-18": {
      HighTemp: 91.0,
      LowTemp: 73.0,
    },
    "2024-06-19": {
      HighTemp: 90.0,
      LowTemp: 72.0,
    },
    "2024-06-20": {
      HighTemp: 91.0,
      LowTemp: 73.0,
    },
    "2024-06-21": {
      HighTemp: 91.0,
      LowTemp: 72.0,
    },
    "2024-06-22": {
      HighTemp: 92.0,
      LowTemp: 74.0,
    },
    "2024-06-23": {
      HighTemp: 92.0,
      LowTemp: 74.0,
    },
    "2024-06-24": {
      HighTemp: 98.0,
      LowTemp: 69.0,
    },
    "2024-06-25": {
      HighTemp: 98.0,
      LowTemp: 70.0,
    },
    "2024-06-26": {
      HighTemp: 86.0,
      LowTemp: 67.0,
    },
    "2024-06-27": {
      HighTemp: 88.0,
      LowTemp: 66.0,
    },
    "2024-06-28": {
      HighTemp: 85.0,
      LowTemp: 72.0,
    },
    "2024-06-29": {
      HighTemp: 91.0,
      LowTemp: 72.0,
    },
    "2024-06-30": {
      HighTemp: 79.0,
      LowTemp: 67.0,
    },
    "2024-07-01": {
      HighTemp: 75.0,
      LowTemp: 62.0,
    },
    "2024-07-02": {
      HighTemp: 93.0,
      LowTemp: 68.0,
    },
    "2024-07-03": {
      HighTemp: 85.0,
      LowTemp: 70.0,
    },
    "2024-07-04": {
      HighTemp: 87.0,
      LowTemp: 68.0,
    },
    "2024-07-05": {
      HighTemp: 81.0,
      LowTemp: 68.0,
    },
    "2024-07-06": {
      HighTemp: 86.0,
      LowTemp: 65.0,
    },
    "2024-07-07": {
      HighTemp: 87.0,
      LowTemp: 66.0,
    },
    "2024-07-08": {
      HighTemp: 86.0,
      LowTemp: 65.0,
    },
    "2024-07-09": {
      HighTemp: 73.0,
      LowTemp: 66.0,
    },
    "2024-07-10": {
      HighTemp: 87.0,
      LowTemp: 66.0,
    },
    "2024-07-11": {
      HighTemp: 86.0,
      LowTemp: 65.0,
    },
    "2024-07-12": {
      HighTemp: 88.0,
      LowTemp: 71.0,
    },
    "2024-07-13": {
      HighTemp: 87.0,
      LowTemp: 74.0,
    },
    "2024-07-14": {
      HighTemp: 92.0,
      LowTemp: 75.0,
    },
    "2024-07-15": {
      HighTemp: 94.0,
      LowTemp: 77.0,
    },
    "2024-07-16": {
      HighTemp: 85.0,
      LowTemp: 71.0,
    },
    "2024-07-17": {
      HighTemp: 85.0,
      LowTemp: 68.0,
    },
    "2024-07-18": {
      HighTemp: 80.0,
      LowTemp: 61.0,
    },
    "2024-07-19": {
      HighTemp: 81.0,
      LowTemp: 60.0,
    },
    "2024-07-20": {
      HighTemp: 78.0,
      LowTemp: 61.0,
    },
    "2024-07-21": {
      HighTemp: 80.0,
      LowTemp: 63.0,
    },
    "2024-07-22": {
      HighTemp: 83.0,
      LowTemp: 62.0,
    },
    "2024-07-23": {
      HighTemp: 87.0,
      LowTemp: 65.0,
    },
    "2024-07-24": {
      HighTemp: 89.0,
      LowTemp: 65.0,
    },
    "2024-07-25": {
      HighTemp: 91.0,
      LowTemp: 69.0,
    },
    "2024-07-26": {
      HighTemp: 89.0,
      LowTemp: 72.0,
    },
    "2024-07-27": {
      HighTemp: 83.0,
      LowTemp: 70.0,
    },
    "2024-07-28": {
      HighTemp: 88.0,
      LowTemp: 69.0,
    },
    "2024-07-29": {
      HighTemp: 94.0,
      LowTemp: 75.0,
    },
    "2024-07-30": {
      HighTemp: 94.0,
      LowTemp: 77.0,
    },
    "2024-07-31": {
      HighTemp: 95.0,
      LowTemp: 77.0,
    },
    "2024-08-01": {
      HighTemp: 91.0,
      LowTemp: 72.0,
    },
    "2024-08-02": {
      HighTemp: 89.0,
      LowTemp: 72.0,
    },
    "2024-08-03": {
      HighTemp: 92.0,
      LowTemp: 68.0,
    },
    "2024-08-04": {
      HighTemp: 95.0,
      LowTemp: 71.0,
    },
    "2024-08-05": {
      HighTemp: 95.0,
      LowTemp: 74.0,
    },
    "2024-08-06": {
      HighTemp: 85.0,
      LowTemp: 67.0,
    },
    "2024-08-07": {
      HighTemp: 80.0,
      LowTemp: 66.0,
    },
    "2024-08-08": {
      HighTemp: 80.0,
      LowTemp: 64.0,
    },
    "2024-08-09": {
      HighTemp: 77.0,
      LowTemp: 60.0,
    },
    "2024-08-10": {
      HighTemp: 79.0,
      LowTemp: 56.0,
    },
    "2024-08-11": {
      HighTemp: 81.0,
      LowTemp: 63.0,
    },
    "2024-08-12": {
      HighTemp: 72.0,
      LowTemp: 67.0,
    },
    "2024-08-13": {
      HighTemp: 76.0,
      LowTemp: 67.0,
    },
    "2024-08-14": {
      HighTemp: 83.0,
      LowTemp: 70.0,
    },
    "2024-08-15": {
      HighTemp: 90.0,
      LowTemp: 73.0,
    },
    "2024-08-16": {
      HighTemp: 93.0,
      LowTemp: 72.0,
    },
    "2024-08-17": {
      HighTemp: 88.0,
      LowTemp: 70.0,
    },
    "2024-08-18": {
      HighTemp: 85.0,
      LowTemp: 68.0,
    },
    "2024-08-19": {
      HighTemp: 84.0,
      LowTemp: 66.0,
    },
    "2024-08-20": {
      HighTemp: 79.0,
      LowTemp: 61.0,
    },
    "2024-08-21": {
      HighTemp: 76.0,
      LowTemp: 60.0,
    },
    "2024-08-22": {
      HighTemp: 78.0,
      LowTemp: 54.0,
    },
    "2024-08-23": {
      HighTemp: 85.0,
      LowTemp: 56.0,
    },
    "2024-08-24": {
      HighTemp: 81.0,
      LowTemp: 70.0,
    },
    "2024-08-25": {
      HighTemp: 93.0,
      LowTemp: 70.0,
    },
    "2024-08-26": {
      HighTemp: 98.0,
      LowTemp: 74.0,
    },
    "2024-08-27": {
      HighTemp: 98.0,
      LowTemp: 76.0,
    },
    "2024-08-28": {
      HighTemp: 90.0,
      LowTemp: 72.0,
    },
    "2024-08-29": {
      HighTemp: 95.0,
      LowTemp: 72.0,
    },
    "2024-08-30": {
      HighTemp: 93.0,
      LowTemp: 73.0,
    },
    "2024-08-31": {
      HighTemp: 86.0,
      LowTemp: 67.0,
    },
    "2024-09-01": {
      HighTemp: 88.0,
      LowTemp: 60.0,
    },
    "2024-09-02": {
      HighTemp: 79.0,
      LowTemp: 57.0,
    },
    "2024-09-03": {
      HighTemp: 77.0,
      LowTemp: 57.0,
    },
    "2024-09-04": {
      HighTemp: 85.0,
      LowTemp: 54.0,
    },
    "2024-09-05": {
      HighTemp: 92.0,
      LowTemp: 60.0,
    },
    "2024-09-06": {
      HighTemp: 79.0,
      LowTemp: 58.0,
    },
    "2024-09-07": {
      HighTemp: 73.0,
      LowTemp: 50.0,
    },
    "2024-09-08": {
      HighTemp: 73.0,
      LowTemp: 44.0,
    },
    "2024-09-09": {
      HighTemp: 82.0,
      LowTemp: 48.0,
    },
    "2024-09-10": {
      HighTemp: 83.0,
      LowTemp: 50.0,
    },
    "2024-09-11": {
      HighTemp: 88.0,
      LowTemp: 59.0,
    },
    "2024-09-12": {
      HighTemp: 87.0,
      LowTemp: 64.0,
    },
    "2024-09-13": {
      HighTemp: 73.0,
      LowTemp: 65.0,
    },
    "2024-09-14": {
      HighTemp: 87.0,
      LowTemp: 67.0,
    },
    "2024-09-15": {
      HighTemp: 88.0,
      LowTemp: 66.0,
    },
    "2024-09-16": {
      HighTemp: 87.0,
      LowTemp: 69.0,
    },
    "2024-09-17": {
      HighTemp: 89.0,
      LowTemp: 63.0,
    },
    "2024-09-18": {
      HighTemp: 89.0,
      LowTemp: 65.0,
    },
    "2024-09-19": {
      HighTemp: 92.0,
      LowTemp: 66.0,
    },
    "2024-09-20": {
      HighTemp: 94.0,
      LowTemp: 72.0,
    },
    "2024-09-21": {
      HighTemp: 80.0,
      LowTemp: 71.0,
    },
    "2024-09-22": {
      HighTemp: 78.0,
      LowTemp: 62.0,
    },
    "2024-09-23": {
      HighTemp: 68.0,
      LowTemp: 61.0,
    },
    "2024-09-24": {
      HighTemp: 71.0,
      LowTemp: 59.0,
    },
    "2024-09-25": {
      HighTemp: 78.0,
      LowTemp: 56.0,
    },
    "2024-09-26": {
      HighTemp: 79.0,
      LowTemp: 55.0,
    },
    "2024-09-27": {
      HighTemp: 70.0,
      LowTemp: 61.0,
    },
    "2024-09-28": {
      HighTemp: 78.0,
      LowTemp: 62.0,
    },
    "2024-09-29": {
      HighTemp: 81.0,
      LowTemp: 61.0,
    },
    "2024-09-30": {
      HighTemp: 84.0,
      LowTemp: 61.0,
    },
    "2024-10-01": {
      HighTemp: 72.0,
      LowTemp: 49.0,
    },
    "2024-10-02": {
      HighTemp: 74.0,
      LowTemp: 44.0,
    },
    "2024-10-03": {
      HighTemp: 87.0,
      LowTemp: 56.0,
    },
    "2024-10-04": {
      HighTemp: 83.0,
      LowTemp: 60.0,
    },
    "2024-10-05": {
      HighTemp: 89.0,
      LowTemp: 62.0,
    },
    "2024-10-06": {
      HighTemp: 79.0,
      LowTemp: 56.0,
    },
    "2024-10-07": {
      HighTemp: 72.0,
      LowTemp: 47.0,
    },
    "2024-10-08": {
      HighTemp: 74.0,
      LowTemp: 43.0,
    },
    "2024-10-09": {
      HighTemp: 78.0,
      LowTemp: 46.0,
    },
    "2024-10-10": {
      HighTemp: 80.0,
      LowTemp: 49.0,
    },
    "2024-10-11": {
      HighTemp: 86.0,
      LowTemp: 54.0,
    },
    "2024-10-12": {
      HighTemp: 90.0,
      LowTemp: 59.0,
    },
    "2024-10-13": {
      HighTemp: 72.0,
      LowTemp: 51.0,
    },
    "2024-10-14": {
      HighTemp: 61.0,
      LowTemp: 43.0,
    },
    "2024-10-15": {
      HighTemp: 57.0,
      LowTemp: 42.0,
    },
    "2024-10-16": {
      HighTemp: 62.0,
      LowTemp: 32.0,
    },
    "2024-10-17": {
      HighTemp: 69.0,
      LowTemp: 38.0,
    },
    "2024-10-18": {
      HighTemp: 72.0,
      LowTemp: 43.0,
    },
    "2024-10-19": {
      HighTemp: 75.0,
      LowTemp: 43.0,
    },
    "2024-10-20": {
      HighTemp: 80.0,
      LowTemp: 45.0,
    },
    "2024-10-21": {
      HighTemp: 81.0,
      LowTemp: 50.0,
    },
    "2024-10-22": {
      HighTemp: 86.0,
      LowTemp: 59.0,
    },
    "2024-10-23": {
      HighTemp: 70.0,
      LowTemp: 49.0,
    },
    "2024-10-24": {
      HighTemp: 75.0,
      LowTemp: 45.0,
    },
    "2024-10-25": {
      HighTemp: 70.0,
      LowTemp: 49.0,
    },
    "2024-10-26": {
      HighTemp: 63.0,
      LowTemp: 42.0,
    },
    "2024-10-27": {
      HighTemp: 70.0,
      LowTemp: 43.0,
    },
  },
  Manhattan: {
    "4/1/2024": {
      HighTemp: 74.0,
      LowTemp: 52.0,
    },
    "4/2/2024": {
      HighTemp: 62.0,
      LowTemp: 36.0,
    },
    "4/3/2024": {
      HighTemp: 60.0,
      LowTemp: 37.0,
    },
    "4/4/2024": {
      HighTemp: 65.0,
      LowTemp: 31.0,
    },
    "4/5/2024": {
      HighTemp: 70.0,
      LowTemp: 29.0,
    },
    "4/6/2024": {
      HighTemp: 78.0,
      LowTemp: 47.0,
    },
    "4/7/2024": {
      HighTemp: 69.0,
      LowTemp: 36.0,
    },
    "4/8/2024": {
      HighTemp: 68.0,
      LowTemp: 37.0,
    },
    "4/9/2024": {
      HighTemp: 69.0,
      LowTemp: 35.0,
    },
    "4/10/2024": {
      HighTemp: 74.0,
      LowTemp: 42.0,
    },
    "4/11/2024": {
      HighTemp: 65.0,
      LowTemp: 39.0,
    },
    "4/12/2024": {
      HighTemp: 73.0,
      LowTemp: 31.0,
    },
    "4/13/2024": {
      HighTemp: 90.0,
      LowTemp: 57.0,
    },
    "4/14/2024": {
      HighTemp: 88.0,
      LowTemp: 59.0,
    },
    "4/15/2024": {
      HighTemp: 85.0,
      LowTemp: 59.0,
    },
    "4/16/2024": {
      HighTemp: 79.0,
      LowTemp: 60.0,
    },
    "4/17/2024": {
      HighTemp: 80.0,
      LowTemp: 56.0,
    },
    "4/18/2024": {
      HighTemp: 64.0,
      LowTemp: 44.0,
    },
    "4/19/2024": {
      HighTemp: 61.0,
      LowTemp: 38.0,
    },
    "4/20/2024": {
      HighTemp: 53.0,
      LowTemp: 40.0,
    },
    "4/21/2024": {
      HighTemp: 63.0,
      LowTemp: 33.0,
    },
    "4/22/2024": {
      HighTemp: 73.0,
      LowTemp: 44.0,
    },
    "4/23/2024": {
      HighTemp: 76.0,
      LowTemp: 45.0,
    },
    "4/24/2024": {
      HighTemp: 72.0,
      LowTemp: 40.0,
    },
    "4/25/2024": {
      HighTemp: 62.0,
      LowTemp: 53.0,
    },
    "4/26/2024": {
      HighTemp: 81.0,
      LowTemp: 58.0,
    },
    "4/27/2024": {
      HighTemp: 77.0,
      LowTemp: 57.0,
    },
    "4/28/2024": {
      HighTemp: 69.0,
      LowTemp: 49.0,
    },
    "4/29/2024": {
      HighTemp: 77.0,
      LowTemp: 42.0,
    },
    "4/30/2024": {
      HighTemp: 86.0,
      LowTemp: 58.0,
    },
    "5/1/2024": {
      HighTemp: 73.0,
      LowTemp: 55.0,
    },
    "5/2/2024": {
      HighTemp: 71.0,
      LowTemp: 51.0,
    },
    "5/3/2024": {
      HighTemp: 76.0,
      LowTemp: 44.0,
    },
    "5/4/2024": {
      HighTemp: 66.0,
      LowTemp: 50.0,
    },
    "5/5/2024": {
      HighTemp: 63.0,
      LowTemp: 46.0,
    },
    "5/6/2024": {
      HighTemp: 72.0,
      LowTemp: 53.0,
    },
    "5/7/2024": {
      HighTemp: 78.0,
      LowTemp: 45.0,
    },
    "5/8/2024": {
      HighTemp: 78.0,
      LowTemp: 54.0,
    },
    "5/9/2024": {
      HighTemp: 74.0,
      LowTemp: 44.0,
    },
    "5/10/2024": {
      HighTemp: 77.0,
      LowTemp: 46.0,
    },
    "5/11/2024": {
      HighTemp: 80.0,
      LowTemp: 45.0,
    },
    "5/12/2024": {
      HighTemp: 76.0,
      LowTemp: 58.0,
    },
    "5/13/2024": {
      HighTemp: 63.0,
      LowTemp: 53.0,
    },
    "5/14/2024": {
      HighTemp: 76.0,
      LowTemp: 47.0,
    },
    "5/15/2024": {
      HighTemp: 72.0,
      LowTemp: 52.0,
    },
    "5/16/2024": {
      HighTemp: 76.0,
      LowTemp: 54.0,
    },
    "5/17/2024": {
      HighTemp: 82.0,
      LowTemp: 51.0,
    },
    "5/18/2024": {
      HighTemp: 86.0,
      LowTemp: 65.0,
    },
    "5/19/2024": {
      HighTemp: 86.0,
      LowTemp: 63.0,
    },
    "5/20/2024": {
      HighTemp: 81.0,
      LowTemp: 59.0,
    },
    "5/21/2024": {
      HighTemp: 84.0,
      LowTemp: 55.0,
    },
    "5/22/2024": {
      HighTemp: 75.0,
      LowTemp: 53.0,
    },
    "5/23/2024": {
      HighTemp: 82.0,
      LowTemp: 53.0,
    },
    "5/24/2024": {
      HighTemp: 76.0,
      LowTemp: 53.0,
    },
    "5/25/2024": {
      HighTemp: 82.0,
      LowTemp: 51.0,
    },
    "5/26/2024": {
      HighTemp: 79.0,
      LowTemp: 60.0,
    },
    "5/27/2024": {
      HighTemp: 80.0,
      LowTemp: 53.0,
    },
    "5/28/2024": {
      HighTemp: 81.0,
      LowTemp: 51.0,
    },
    "5/29/2024": {
      HighTemp: 82.0,
      LowTemp: 54.0,
    },
    "5/30/2024": {
      HighTemp: 75.0,
      LowTemp: 63.0,
    },
    "5/31/2024": {
      HighTemp: 71.0,
      LowTemp: 62.0,
    },
    "6/1/2024": {
      HighTemp: 81.0,
      LowTemp: 62.0,
    },
    "6/2/2024": {
      HighTemp: 83.0,
      LowTemp: 65.0,
    },
    "6/3/2024": {
      HighTemp: 80.0,
      LowTemp: 67.0,
    },
    "6/4/2024": {
      HighTemp: 86.0,
      LowTemp: 64.0,
    },
    "6/5/2024": {
      HighTemp: 87.0,
      LowTemp: 51.0,
    },
    "6/6/2024": {
      HighTemp: 83.0,
      LowTemp: 59.0,
    },
    "6/7/2024": {
      HighTemp: 87.0,
      LowTemp: 54.0,
    },
    "6/8/2024": {
      HighTemp: 86.0,
      LowTemp: 67.0,
    },
    "6/9/2024": {
      HighTemp: 80.0,
      LowTemp: 57.0,
    },
    "6/10/2024": {
      HighTemp: 82.0,
      LowTemp: 54.0,
    },
    "6/11/2024": {
      HighTemp: 86.0,
      LowTemp: 62.0,
    },
    "6/12/2024": {
      HighTemp: 89.0,
      LowTemp: 66.0,
    },
    "6/13/2024": {
      HighTemp: 97.0,
      LowTemp: 72.0,
    },
    "6/14/2024": {
      HighTemp: 87.0,
      LowTemp: 69.0,
    },
    "6/15/2024": {
      HighTemp: 91.0,
      LowTemp: 70.0,
    },
    "6/16/2024": {
      HighTemp: 90.0,
      LowTemp: 67.0,
    },
    "6/17/2024": {
      HighTemp: 90.0,
      LowTemp: 74.0,
    },
    "6/18/2024": {
      HighTemp: 86.0,
      LowTemp: 68.0,
    },
    "6/19/2024": {
      HighTemp: 75.0,
      LowTemp: 67.0,
    },
    "6/20/2024": {
      HighTemp: 88.0,
      LowTemp: 70.0,
    },
    "6/21/2024": {
      HighTemp: 90.0,
      LowTemp: 73.0,
    },
    "6/22/2024": {
      HighTemp: 93.0,
      LowTemp: 71.0,
    },
    "6/23/2024": {
      HighTemp: 90.0,
      LowTemp: 63.0,
    },
    "6/24/2024": {
      HighTemp: 97.0,
      LowTemp: 75.0,
    },
    "6/25/2024": {
      HighTemp: 94.0,
      LowTemp: 80.0,
    },
    "6/26/2024": {
      HighTemp: 87.0,
      LowTemp: 67.0,
    },
    "6/27/2024": {
      HighTemp: 88.0,
      LowTemp: 64.0,
    },
    "6/28/2024": {
      HighTemp: 94.0,
      LowTemp: 71.0,
    },
    "6/29/2024": {
      HighTemp: 84.0,
      LowTemp: 67.0,
    },
    "6/30/2024": {
      HighTemp: 76.0,
      LowTemp: 64.0,
    },
    "7/1/2024": {
      HighTemp: 89.0,
      LowTemp: 63.0,
    },
    "7/2/2024": {
      HighTemp: 92.0,
      LowTemp: 72.0,
    },
    "7/3/2024": {
      HighTemp: 80.0,
      LowTemp: 65.0,
    },
    "7/4/2024": {
      HighTemp: 84.0,
      LowTemp: 62.0,
    },
    "7/5/2024": {
      HighTemp: 82.0,
      LowTemp: 57.0,
    },
    "7/6/2024": {
      HighTemp: 89.0,
      LowTemp: 58.0,
    },
    "7/7/2024": {
      HighTemp: 86.0,
      LowTemp: 65.0,
    },
    "7/8/2024": {
      HighTemp: 85.0,
      LowTemp: 62.0,
    },
    "7/9/2024": {
      HighTemp: 86.0,
      LowTemp: 58.0,
    },
    "7/10/2024": {
      HighTemp: 90.0,
      LowTemp: 59.0,
    },
    "7/11/2024": {
      HighTemp: 88.0,
      LowTemp: 64.0,
    },
    "7/12/2024": {
      HighTemp: 92.0,
      LowTemp: 69.0,
    },
    "7/13/2024": {
      HighTemp: 94.0,
      LowTemp: 76.0,
    },
    "7/14/2024": {
      HighTemp: 97.0,
      LowTemp: 75.0,
    },
    "7/15/2024": {
      HighTemp: 100.0,
      LowTemp: 78.0,
    },
    "7/16/2024": {
      HighTemp: 89.0,
      LowTemp: 67.0,
    },
    "7/17/2024": {
      HighTemp: 85.0,
      LowTemp: 62.0,
    },
    "7/18/2024": {
      HighTemp: 84.0,
      LowTemp: 58.0,
    },
    "7/19/2024": {
      HighTemp: 85.0,
      LowTemp: 60.0,
    },
    "7/20/2024": {
      HighTemp: 71.0,
      LowTemp: 61.0,
    },
    "7/21/2024": {
      HighTemp: 81.0,
      LowTemp: 59.0,
    },
    "7/22/2024": {
      HighTemp: 84.0,
      LowTemp: 58.0,
    },
    "7/23/2024": {
      HighTemp: 88.0,
      LowTemp: 60.0,
    },
    "7/24/2024": {
      HighTemp: 91.0,
      LowTemp: 65.0,
    },
    "7/25/2024": {
      HighTemp: 93.0,
      LowTemp: 69.0,
    },
    "7/26/2024": {
      HighTemp: 92.0,
      LowTemp: 72.0,
    },
    "7/27/2024": {
      HighTemp: 91.0,
      LowTemp: 67.0,
    },
    "7/28/2024": {
      HighTemp: 91.0,
      LowTemp: 71.0,
    },
    "7/29/2024": {
      HighTemp: 90.0,
      LowTemp: 76.0,
    },
    "7/30/2024": {
      HighTemp: 98.0,
      LowTemp: 80.0,
    },
    "7/31/2024": {
      HighTemp: 99.0,
      LowTemp: 69.0,
    },
    "8/1/2024": {
      HighTemp: 92.0,
      LowTemp: 67.0,
    },
    "8/2/2024": {
      HighTemp: 92.0,
      LowTemp: 62.0,
    },
    "8/3/2024": {
      HighTemp: 90.0,
      LowTemp: 64.0,
    },
    "8/4/2024": {
      HighTemp: 96.0,
      LowTemp: 71.0,
    },
    "8/5/2024": {
      HighTemp: 98.0,
      LowTemp: 73.0,
    },
    "8/6/2024": {
      HighTemp: 82.0,
      LowTemp: 63.0,
    },
    "8/7/2024": {
      HighTemp: 88.0,
      LowTemp: 59.0,
    },
    "8/8/2024": {
      HighTemp: 78.0,
      LowTemp: 58.0,
    },
    "8/9/2024": {
      HighTemp: 70.0,
      LowTemp: 52.0,
    },
    "8/10/2024": {
      HighTemp: 71.0,
      LowTemp: 59.0,
    },
    "8/11/2024": {
      HighTemp: 76.0,
      LowTemp: 60.0,
    },
    "8/12/2024": {
      HighTemp: 85.0,
      LowTemp: 65.0,
    },
    "8/13/2024": {
      HighTemp: 85.0,
      LowTemp: 70.0,
    },
    "8/14/2024": {
      HighTemp: 94.0,
      LowTemp: 71.0,
    },
    "8/15/2024": {
      HighTemp: 89.0,
      LowTemp: 70.0,
    },
    "8/16/2024": {
      HighTemp: 86.0,
      LowTemp: 64.0,
    },
    "8/17/2024": {
      HighTemp: 91.0,
      LowTemp: 61.0,
    },
    "8/18/2024": {
      HighTemp: 81.0,
      LowTemp: 67.0,
    },
    "8/19/2024": {
      HighTemp: 84.0,
      LowTemp: 66.0,
    },
    "8/20/2024": {
      HighTemp: 82.0,
      LowTemp: 65.0,
    },
    "8/21/2024": {
      HighTemp: 83.0,
      LowTemp: 63.0,
    },
    "8/22/2024": {
      HighTemp: 81.0,
      LowTemp: 61.0,
    },
    "8/23/2024": {
      HighTemp: 86.0,
      LowTemp: 61.0,
    },
    "8/24/2024": {
      HighTemp: 93.0,
      LowTemp: 69.0,
    },
    "8/25/2024": {
      HighTemp: 102.0,
      LowTemp: 78.0,
    },
    "8/26/2024": {
      HighTemp: 98.0,
      LowTemp: 74.0,
    },
    "8/27/2024": {
      HighTemp: 94.0,
      LowTemp: 69.0,
    },
    "8/28/2024": {
      HighTemp: 95.0,
      LowTemp: 69.0,
    },
    "8/29/2024": {
      HighTemp: 95.0,
      LowTemp: 70.0,
    },
    "8/30/2024": {
      HighTemp: 84.0,
      LowTemp: 62.0,
    },
    "8/31/2024": {
      HighTemp: 84.0,
      LowTemp: 56.0,
    },
    "9/1/2024": {
      HighTemp: 85.0,
      LowTemp: 55.0,
    },
    "9/2/2024": {
      HighTemp: 78.0,
      LowTemp: 52.0,
    },
    "9/3/2024": {
      HighTemp: 83.0,
      LowTemp: 50.0,
    },
    "9/4/2024": {
      HighTemp: 87.0,
      LowTemp: 58.0,
    },
    "9/5/2024": {
      HighTemp: 92.0,
      LowTemp: 60.0,
    },
    "9/6/2024": {
      HighTemp: 80.0,
      LowTemp: 60.0,
    },
    "9/7/2024": {
      HighTemp: 76.0,
      LowTemp: 56.0,
    },
    "9/8/2024": {
      HighTemp: 81.0,
      LowTemp: 51.0,
    },
    "9/9/2024": {
      HighTemp: 88.0,
      LowTemp: 58.0,
    },
    "9/10/2024": {
      HighTemp: 88.0,
      LowTemp: 55.0,
    },
    "9/11/2024": {
      HighTemp: 89.0,
      LowTemp: 52.0,
    },
    "9/12/2024": {
      HighTemp: 86.0,
      LowTemp: 58.0,
    },
    "9/13/2024": {
      HighTemp: 88.0,
      LowTemp: 52.0,
    },
    "9/14/2024": {
      HighTemp: 81.0,
      LowTemp: 60.0,
    },
    "9/15/2024": {
      HighTemp: 90.0,
      LowTemp: 63.0,
    },
    "9/16/2024": {
      HighTemp: 86.0,
      LowTemp: 66.0,
    },
    "9/17/2024": {
      HighTemp: 88.0,
      LowTemp: 68.0,
    },
    "9/18/2024": {
      HighTemp: 89.0,
      LowTemp: 68.0,
    },
    "9/19/2024": {
      HighTemp: 96.0,
      LowTemp: 67.0,
    },
    "9/20/2024": {
      HighTemp: 96.0,
      LowTemp: 56.0,
    },
    "9/21/2024": {
      HighTemp: 91.0,
      LowTemp: 68.0,
    },
    "9/22/2024": {
      HighTemp: 69.0,
      LowTemp: 57.0,
    },
    "9/23/2024": {
      HighTemp: 74.0,
      LowTemp: 48.0,
    },
    "9/24/2024": {
      HighTemp: 78.0,
      LowTemp: 47.0,
    },
    "9/25/2024": {
      HighTemp: 82.0,
      LowTemp: 45.0,
    },
    "9/26/2024": {
      HighTemp: 82.0,
      LowTemp: 48.0,
    },
    "9/27/2024": {
      HighTemp: 85.0,
      LowTemp: 48.0,
    },
    "9/28/2024": {
      HighTemp: 89.0,
      LowTemp: 49.0,
    },
    "9/29/2024": {
      HighTemp: 88.0,
      LowTemp: 48.0,
    },
    "9/30/2024": {
      HighTemp: 89.0,
      LowTemp: 47.0,
    },
    "10/1/2024": {
      HighTemp: 73.0,
      LowTemp: 42.0,
    },
    "10/2/2024": {
      HighTemp: 83.0,
      LowTemp: 39.0,
    },
    "10/3/2024": {
      HighTemp: 94.0,
      LowTemp: 54.0,
    },
    "10/4/2024": {
      HighTemp: 83.0,
      LowTemp: 56.0,
    },
    "10/5/2024": {
      HighTemp: 96.0,
      LowTemp: 55.0,
    },
    "10/6/2024": {
      HighTemp: 79.0,
      LowTemp: 44.0,
    },
    "10/7/2024": {
      HighTemp: 77.0,
      LowTemp: 36.0,
    },
    "10/8/2024": {
      HighTemp: 80.0,
      LowTemp: 48.0,
    },
    "10/9/2024": {
      HighTemp: 86.0,
      LowTemp: 45.0,
    },
    "10/10/2024": {
      HighTemp: 85.0,
      LowTemp: 55.0,
    },
    "10/11/2024": {
      HighTemp: 90.0,
      LowTemp: 61.0,
    },
    "10/12/2024": {
      HighTemp: 88.0,
      LowTemp: 53.0,
    },
    "10/13/2024": {
      HighTemp: 70.0,
      LowTemp: 41.0,
    },
    "10/14/2024": {
      HighTemp: 65.0,
      LowTemp: 31.0,
    },
    "10/15/2024": {
      HighTemp: 61.0,
      LowTemp: 31.0,
    },
    "10/16/2024": {
      HighTemp: 64.0,
      LowTemp: 23.0,
    },
    "10/17/2024": {
      HighTemp: 73.0,
      LowTemp: 44.0,
    },
    "10/18/2024": {
      HighTemp: 78.0,
      LowTemp: 52.0,
    },
    "10/19/2024": {
      HighTemp: 80.0,
      LowTemp: 57.0,
    },
    "10/20/2024": {
      HighTemp: 82.0,
      LowTemp: 51.0,
    },
    "10/21/2024": {
      HighTemp: 81.0,
      LowTemp: 59.0,
    },
    "10/22/2024": {
      HighTemp: 82.0,
      LowTemp: 53.0,
    },
    "10/23/2024": {
      HighTemp: 71.0,
      LowTemp: 47.0,
    },
    "10/24/2024": {
      HighTemp: 91.0,
      LowTemp: 47.0,
    },
    "10/25/2024": {
      HighTemp: 69.0,
      LowTemp: 37.0,
    },
    "10/26/2024": {
      HighTemp: 65.0,
      LowTemp: 30.0,
    },
    "10/27/2024": {
      HighTemp: 78.0,
      LowTemp: 35.0,
    },
    "10/28/2024": {
      HighTemp: 86.0,
      LowTemp: 63.0,
    },
    "10/29/2024": {
      HighTemp: 84.0,
      LowTemp: 63.0,
    },
  },
  "Des Moines": {
    "4/1/2024": {
      HighTemp: 49.0,
      LowTemp: 42.0,
    },
    "4/2/2024": {
      HighTemp: 51.0,
      LowTemp: 34.0,
    },
    "4/3/2024": {
      HighTemp: 55.0,
      LowTemp: 36.0,
    },
    "4/4/2024": {
      HighTemp: 58.0,
      LowTemp: 30.0,
    },
    "4/5/2024": {
      HighTemp: 58.0,
      LowTemp: 30.0,
    },
    "4/6/2024": {
      HighTemp: 61.0,
      LowTemp: 37.0,
    },
    "4/7/2024": {
      HighTemp: 68.0,
      LowTemp: 46.0,
    },
    "4/8/2024": {
      HighTemp: 67.0,
      LowTemp: 43.0,
    },
    "4/9/2024": {
      HighTemp: 68.0,
      LowTemp: 38.0,
    },
    "4/10/2024": {
      HighTemp: 75.0,
      LowTemp: 43.0,
    },
    "4/11/2024": {
      HighTemp: 60.0,
      LowTemp: 46.0,
    },
    "4/12/2024": {
      HighTemp: 68.0,
      LowTemp: 42.0,
    },
    "4/13/2024": {
      HighTemp: 85.0,
      LowTemp: 44.0,
    },
    "4/14/2024": {
      HighTemp: 88.0,
      LowTemp: 59.0,
    },
    "4/15/2024": {
      HighTemp: 82.0,
      LowTemp: 54.0,
    },
    "4/16/2024": {
      HighTemp: 79.0,
      LowTemp: 58.0,
    },
    "4/17/2024": {
      HighTemp: 68.0,
      LowTemp: 53.0,
    },
    "4/18/2024": {
      HighTemp: 56.0,
      LowTemp: 40.0,
    },
    "4/19/2024": {
      HighTemp: 58.0,
      LowTemp: 33.0,
    },
    "4/20/2024": {
      HighTemp: 50.0,
      LowTemp: 33.0,
    },
    "4/21/2024": {
      HighTemp: 63.0,
      LowTemp: 31.0,
    },
    "4/22/2024": {
      HighTemp: 71.0,
      LowTemp: 41.0,
    },
    "4/23/2024": {
      HighTemp: 70.0,
      LowTemp: 49.0,
    },
    "4/24/2024": {
      HighTemp: 67.0,
      LowTemp: 43.0,
    },
    "4/25/2024": {
      HighTemp: 63.0,
      LowTemp: 50.0,
    },
    "4/26/2024": {
      HighTemp: 67.0,
      LowTemp: 49.0,
    },
    "4/27/2024": {
      HighTemp: 77.0,
      LowTemp: 57.0,
    },
    "4/28/2024": {
      HighTemp: 70.0,
      LowTemp: 59.0,
    },
    "4/29/2024": {
      HighTemp: 68.0,
      LowTemp: 47.0,
    },
    "4/30/2024": {
      HighTemp: 80.0,
      LowTemp: 49.0,
    },
    "5/1/2024": {
      HighTemp: 68.0,
      LowTemp: 51.0,
    },
    "5/2/2024": {
      HighTemp: 63.0,
      LowTemp: 52.0,
    },
    "5/3/2024": {
      HighTemp: 73.0,
      LowTemp: 41.0,
    },
    "5/4/2024": {
      HighTemp: 63.0,
      LowTemp: 48.0,
    },
    "5/5/2024": {
      HighTemp: 67.0,
      LowTemp: 42.0,
    },
    "5/6/2024": {
      HighTemp: 75.0,
      LowTemp: 53.0,
    },
    "5/7/2024": {
      HighTemp: 77.0,
      LowTemp: 56.0,
    },
    "5/8/2024": {
      HighTemp: 81.0,
      LowTemp: 56.0,
    },
    "5/9/2024": {
      HighTemp: 68.0,
      LowTemp: 50.0,
    },
    "5/10/2024": {
      HighTemp: 77.0,
      LowTemp: 48.0,
    },
    "5/11/2024": {
      HighTemp: 81.0,
      LowTemp: 50.0,
    },
    "5/12/2024": {
      HighTemp: 86.0,
      LowTemp: 57.0,
    },
    "5/13/2024": {
      HighTemp: 70.0,
      LowTemp: 61.0,
    },
    "5/14/2024": {
      HighTemp: 75.0,
      LowTemp: 59.0,
    },
    "5/15/2024": {
      HighTemp: 76.0,
      LowTemp: 54.0,
    },
    "5/16/2024": {
      HighTemp: 78.0,
      LowTemp: 61.0,
    },
    "5/17/2024": {
      HighTemp: 83.0,
      LowTemp: 56.0,
    },
    "5/18/2024": {
      HighTemp: 89.0,
      LowTemp: 65.0,
    },
    "5/19/2024": {
      HighTemp: 76.0,
      LowTemp: 60.0,
    },
    "5/20/2024": {
      HighTemp: 84.0,
      LowTemp: 63.0,
    },
    "5/21/2024": {
      HighTemp: 83.0,
      LowTemp: 57.0,
    },
    "5/22/2024": {
      HighTemp: 76.0,
      LowTemp: 53.0,
    },
    "5/23/2024": {
      HighTemp: 80.0,
      LowTemp: 57.0,
    },
    "5/24/2024": {
      HighTemp: 76.0,
      LowTemp: 56.0,
    },
    "5/25/2024": {
      HighTemp: 79.0,
      LowTemp: 50.0,
    },
    "5/26/2024": {
      HighTemp: 79.0,
      LowTemp: 61.0,
    },
    "5/27/2024": {
      HighTemp: 78.0,
      LowTemp: 54.0,
    },
    "5/28/2024": {
      HighTemp: 75.0,
      LowTemp: 54.0,
    },
    "5/29/2024": {
      HighTemp: 74.0,
      LowTemp: 51.0,
    },
    "5/30/2024": {
      HighTemp: 79.0,
      LowTemp: 59.0,
    },
    "5/31/2024": {
      HighTemp: 81.0,
      LowTemp: 64.0,
    },
    "6/1/2024": {
      HighTemp: 82.0,
      LowTemp: 63.0,
    },
    "6/2/2024": {
      HighTemp: 83.0,
      LowTemp: 63.0,
    },
    "6/3/2024": {
      HighTemp: 88.0,
      LowTemp: 71.0,
    },
    "6/4/2024": {
      HighTemp: 84.0,
      LowTemp: 63.0,
    },
    "6/5/2024": {
      HighTemp: 85.0,
      LowTemp: 56.0,
    },
    "6/6/2024": {
      HighTemp: 83.0,
      LowTemp: 62.0,
    },
    "6/7/2024": {
      HighTemp: 83.0,
      LowTemp: 58.0,
    },
    "6/8/2024": {
      HighTemp: 80.0,
      LowTemp: 59.0,
    },
    "6/9/2024": {
      HighTemp: 84.0,
      LowTemp: 56.0,
    },
    "6/10/2024": {
      HighTemp: 76.0,
      LowTemp: 52.0,
    },
    "6/11/2024": {
      HighTemp: 90.0,
      LowTemp: 60.0,
    },
    "6/12/2024": {
      HighTemp: 90.0,
      LowTemp: 66.0,
    },
    "6/13/2024": {
      HighTemp: 93.0,
      LowTemp: 74.0,
    },
    "6/14/2024": {
      HighTemp: 90.0,
      LowTemp: 63.0,
    },
    "6/15/2024": {
      HighTemp: 85.0,
      LowTemp: 67.0,
    },
    "6/16/2024": {
      HighTemp: 93.0,
      LowTemp: 68.0,
    },
    "6/17/2024": {
      HighTemp: 93.0,
      LowTemp: 77.0,
    },
    "6/18/2024": {
      HighTemp: 90.0,
      LowTemp: 69.0,
    },
    "6/19/2024": {
      HighTemp: 72.0,
      LowTemp: 67.0,
    },
    "6/20/2024": {
      HighTemp: 84.0,
      LowTemp: 66.0,
    },
    "6/21/2024": {
      HighTemp: 92.0,
      LowTemp: 74.0,
    },
    "6/22/2024": {
      HighTemp: 90.0,
      LowTemp: 73.0,
    },
    "6/23/2024": {
      HighTemp: 90.0,
      LowTemp: 67.0,
    },
    "6/24/2024": {
      HighTemp: 98.0,
      LowTemp: 74.0,
    },
    "6/25/2024": {
      HighTemp: 94.0,
      LowTemp: 67.0,
    },
    "6/26/2024": {
      HighTemp: 90.0,
      LowTemp: 69.0,
    },
    "6/27/2024": {
      HighTemp: 81.0,
      LowTemp: 65.0,
    },
    "6/28/2024": {
      HighTemp: 80.0,
      LowTemp: 68.0,
    },
    "6/29/2024": {
      HighTemp: 82.0,
      LowTemp: 63.0,
    },
    "6/30/2024": {
      HighTemp: 78.0,
      LowTemp: 59.0,
    },
    "7/1/2024": {
      HighTemp: 73.0,
      LowTemp: 61.0,
    },
    "7/2/2024": {
      HighTemp: 81.0,
      LowTemp: 63.0,
    },
    "7/3/2024": {
      HighTemp: 86.0,
      LowTemp: 63.0,
    },
    "7/4/2024": {
      HighTemp: 82.0,
      LowTemp: 67.0,
    },
    "7/5/2024": {
      HighTemp: 80.0,
      LowTemp: 62.0,
    },
    "7/6/2024": {
      HighTemp: 85.0,
      LowTemp: 60.0,
    },
    "7/7/2024": {
      HighTemp: 83.0,
      LowTemp: 64.0,
    },
    "7/8/2024": {
      HighTemp: 83.0,
      LowTemp: 62.0,
    },
    "7/9/2024": {
      HighTemp: 85.0,
      LowTemp: 66.0,
    },
    "7/10/2024": {
      HighTemp: 83.0,
      LowTemp: 65.0,
    },
    "7/11/2024": {
      HighTemp: 83.0,
      LowTemp: 63.0,
    },
    "7/12/2024": {
      HighTemp: 87.0,
      LowTemp: 67.0,
    },
    "7/13/2024": {
      HighTemp: 91.0,
      LowTemp: 73.0,
    },
    "7/14/2024": {
      HighTemp: 93.0,
      LowTemp: 79.0,
    },
    "7/15/2024": {
      HighTemp: 95.0,
      LowTemp: 72.0,
    },
    "7/16/2024": {
      HighTemp: 81.0,
      LowTemp: 69.0,
    },
    "7/17/2024": {
      HighTemp: 82.0,
      LowTemp: 62.0,
    },
    "7/18/2024": {
      HighTemp: 79.0,
      LowTemp: 59.0,
    },
    "7/19/2024": {
      HighTemp: 81.0,
      LowTemp: 63.0,
    },
    "7/20/2024": {
      HighTemp: 74.0,
      LowTemp: 64.0,
    },
    "7/21/2024": {
      HighTemp: 83.0,
      LowTemp: 64.0,
    },
    "7/22/2024": {
      HighTemp: 83.0,
      LowTemp: 63.0,
    },
    "7/23/2024": {
      HighTemp: 87.0,
      LowTemp: 66.0,
    },
    "7/24/2024": {
      HighTemp: 89.0,
      LowTemp: 69.0,
    },
    "7/25/2024": {
      HighTemp: 84.0,
      LowTemp: 70.0,
    },
    "7/26/2024": {
      HighTemp: 90.0,
      LowTemp: 72.0,
    },
    "7/27/2024": {
      HighTemp: 90.0,
      LowTemp: 73.0,
    },
    "7/28/2024": {
      HighTemp: 91.0,
      LowTemp: 70.0,
    },
    "7/29/2024": {
      HighTemp: 92.0,
      LowTemp: 70.0,
    },
    "7/30/2024": {
      HighTemp: 86.0,
      LowTemp: 69.0,
    },
    "7/31/2024": {
      HighTemp: 91.0,
      LowTemp: 67.0,
    },
    "8/1/2024": {
      HighTemp: 86.0,
      LowTemp: 69.0,
    },
    "8/2/2024": {
      HighTemp: 89.0,
      LowTemp: 70.0,
    },
    "8/3/2024": {
      HighTemp: 93.0,
      LowTemp: 71.0,
    },
    "8/4/2024": {
      HighTemp: 96.0,
      LowTemp: 73.0,
    },
    "8/5/2024": {
      HighTemp: 95.0,
      LowTemp: 75.0,
    },
    "8/6/2024": {
      HighTemp: 81.0,
      LowTemp: 63.0,
    },
    "8/7/2024": {
      HighTemp: 81.0,
      LowTemp: 60.0,
    },
    "8/8/2024": {
      HighTemp: 78.0,
      LowTemp: 62.0,
    },
    "8/9/2024": {
      HighTemp: 75.0,
      LowTemp: 55.0,
    },
    "8/10/2024": {
      HighTemp: 79.0,
      LowTemp: 54.0,
    },
    "8/11/2024": {
      HighTemp: 79.0,
      LowTemp: 59.0,
    },
    "8/12/2024": {
      HighTemp: 71.0,
      LowTemp: 63.0,
    },
    "8/13/2024": {
      HighTemp: 74.0,
      LowTemp: 65.0,
    },
    "8/14/2024": {
      HighTemp: 81.0,
      LowTemp: 66.0,
    },
    "8/15/2024": {
      HighTemp: 87.0,
      LowTemp: 71.0,
    },
    "8/16/2024": {
      HighTemp: 87.0,
      LowTemp: 67.0,
    },
    "8/17/2024": {
      HighTemp: 83.0,
      LowTemp: 65.0,
    },
    "8/18/2024": {
      HighTemp: 85.0,
      LowTemp: 64.0,
    },
    "8/19/2024": {
      HighTemp: 82.0,
      LowTemp: 64.0,
    },
    "8/20/2024": {
      HighTemp: 77.0,
      LowTemp: 59.0,
    },
    "8/21/2024": {
      HighTemp: 77.0,
      LowTemp: 63.0,
    },
    "8/22/2024": {
      HighTemp: 78.0,
      LowTemp: 58.0,
    },
    "8/23/2024": {
      HighTemp: 81.0,
      LowTemp: 59.0,
    },
    "8/24/2024": {
      HighTemp: 86.0,
      LowTemp: 67.0,
    },
    "8/25/2024": {
      HighTemp: 94.0,
      LowTemp: 75.0,
    },
    "8/26/2024": {
      HighTemp: 99.0,
      LowTemp: 76.0,
    },
    "8/27/2024": {
      HighTemp: 93.0,
      LowTemp: 74.0,
    },
    "8/28/2024": {
      HighTemp: 88.0,
      LowTemp: 70.0,
    },
    "8/29/2024": {
      HighTemp: 94.0,
      LowTemp: 71.0,
    },
    "8/30/2024": {
      HighTemp: 82.0,
      LowTemp: 65.0,
    },
    "8/31/2024": {
      HighTemp: 84.0,
      LowTemp: 60.0,
    },
    "9/1/2024": {
      HighTemp: 79.0,
      LowTemp: 62.0,
    },
    "9/2/2024": {
      HighTemp: 77.0,
      LowTemp: 52.0,
    },
    "9/3/2024": {
      HighTemp: 80.0,
      LowTemp: 57.0,
    },
    "9/4/2024": {
      HighTemp: 83.0,
      LowTemp: 57.0,
    },
    "9/5/2024": {
      HighTemp: 81.0,
      LowTemp: 64.0,
    },
    "9/6/2024": {
      HighTemp: 75.0,
      LowTemp: 54.0,
    },
    "9/7/2024": {
      HighTemp: 74.0,
      LowTemp: 49.0,
    },
    "9/8/2024": {
      HighTemp: 76.0,
      LowTemp: 52.0,
    },
    "9/9/2024": {
      HighTemp: 84.0,
      LowTemp: 55.0,
    },
    "9/10/2024": {
      HighTemp: 85.0,
      LowTemp: 59.0,
    },
    "9/11/2024": {
      HighTemp: 87.0,
      LowTemp: 60.0,
    },
    "9/12/2024": {
      HighTemp: 87.0,
      LowTemp: 61.0,
    },
    "9/13/2024": {
      HighTemp: 77.0,
      LowTemp: 65.0,
    },
    "9/14/2024": {
      HighTemp: 82.0,
      LowTemp: 69.0,
    },
    "9/15/2024": {
      HighTemp: 89.0,
      LowTemp: 68.0,
    },
    "9/16/2024": {
      HighTemp: 87.0,
      LowTemp: 67.0,
    },
    "9/17/2024": {
      HighTemp: 89.0,
      LowTemp: 67.0,
    },
    "9/18/2024": {
      HighTemp: 89.0,
      LowTemp: 67.0,
    },
    "9/19/2024": {
      HighTemp: 91.0,
      LowTemp: 70.0,
    },
    "9/20/2024": {
      HighTemp: 91.0,
      LowTemp: 62.0,
    },
    "9/21/2024": {
      HighTemp: 88.0,
      LowTemp: 67.0,
    },
    "9/22/2024": {
      HighTemp: 67.0,
      LowTemp: 56.0,
    },
    "9/23/2024": {
      HighTemp: 73.0,
      LowTemp: 52.0,
    },
    "9/24/2024": {
      HighTemp: 75.0,
      LowTemp: 56.0,
    },
    "9/25/2024": {
      HighTemp: 80.0,
      LowTemp: 52.0,
    },
    "9/26/2024": {
      HighTemp: 82.0,
      LowTemp: 53.0,
    },
    "9/27/2024": {
      HighTemp: 82.0,
      LowTemp: 54.0,
    },
    "9/28/2024": {
      HighTemp: 88.0,
      LowTemp: 61.0,
    },
    "9/29/2024": {
      HighTemp: 86.0,
      LowTemp: 57.0,
    },
    "9/30/2024": {
      HighTemp: 85.0,
      LowTemp: 60.0,
    },
    "10/1/2024": {
      HighTemp: 69.0,
      LowTemp: 52.0,
    },
    "10/2/2024": {
      HighTemp: 77.0,
      LowTemp: 48.0,
    },
    "10/3/2024": {
      HighTemp: 83.0,
      LowTemp: 52.0,
    },
    "10/4/2024": {
      HighTemp: 75.0,
      LowTemp: 56.0,
    },
    "10/5/2024": {
      HighTemp: 92.0,
      LowTemp: 58.0,
    },
    "10/6/2024": {
      HighTemp: 71.0,
      LowTemp: 51.0,
    },
    "10/7/2024": {
      HighTemp: 71.0,
      LowTemp: 41.0,
    },
    "10/8/2024": {
      HighTemp: 77.0,
      LowTemp: 49.0,
    },
    "10/9/2024": {
      HighTemp: 81.0,
      LowTemp: 52.0,
    },
    "10/10/2024": {
      HighTemp: 83.0,
      LowTemp: 51.0,
    },
    "10/11/2024": {
      HighTemp: 86.0,
      LowTemp: 56.0,
    },
    "10/12/2024": {
      HighTemp: 78.0,
      LowTemp: 53.0,
    },
    "10/13/2024": {
      HighTemp: 62.0,
      LowTemp: 43.0,
    },
    "10/14/2024": {
      HighTemp: 55.0,
      LowTemp: 37.0,
    },
    "10/15/2024": {
      HighTemp: 56.0,
      LowTemp: 35.0,
    },
    "10/16/2024": {
      HighTemp: 61.0,
      LowTemp: 31.0,
    },
    "10/17/2024": {
      HighTemp: 70.0,
      LowTemp: 39.0,
    },
    "10/18/2024": {
      HighTemp: 73.0,
      LowTemp: 46.0,
    },
    "10/19/2024": {
      HighTemp: 76.0,
      LowTemp: 45.0,
    },
    "10/20/2024": {
      HighTemp: 81.0,
      LowTemp: 53.0,
    },
    "10/21/2024": {
      HighTemp: 81.0,
      LowTemp: 52.0,
    },
    "10/22/2024": {
      HighTemp: 73.0,
      LowTemp: 55.0,
    },
    "10/23/2024": {
      HighTemp: 62.0,
      LowTemp: 44.0,
    },
    "10/24/2024": {
      HighTemp: 70.0,
      LowTemp: 40.0,
    },
    "10/25/2024": {
      HighTemp: 63.0,
      LowTemp: 45.0,
    },
    "10/26/2024": {
      HighTemp: 61.0,
      LowTemp: 33.0,
    },
    "10/27/2024": {
      HighTemp: 68.0,
      LowTemp: 39.0,
    },
    "10/28/2024": {
      HighTemp: 75.0,
      LowTemp: 55.0,
    },
  },
};
