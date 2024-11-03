


const RandBugFact = 
[
    "Houseflies find sugar with their feet, which are 10 million times more sensitive than human tongues.",

    "Ticks can grow from the size of a grain of rice to the size of a marble.",

    "Approximately 2,000 silkworm cocoons are needed to produce one pound of silk.",

    "While gathering food, a bee may fly up to 60 miles in one day.",

    "Ants can lift and carry more than fifty times their own weight.",

    "Mexican Jumping Beans, sometimes sold commercially, actually have a caterpillar of a bean moth inside.",

    "It takes about one hundred Monarch Butterflies to weigh an ounce.",

    "When the droppings of millions of cattle started ruining the land in Australia, dung beetles were imported to reduce the problem.",

    "Wasps feeding on fermenting juice have been known to get 'drunk' and pass out.",

    "The queen of a certain termite species can lay 40,000 eggs per day.",

    "Honeybees have to make about ten million trips to collect enough nectar for production of one pound of honey.",

    "Insects have been present for about 350 million years, and humans for only 300,000 years.",

    "Blow flies are the first kind of insect attracted to an animal carcass following death.",

    "The term 'honeymoon' comes from the Middle Ages, when a newly married couple was provided with enough honey wine to last for the first month of their married life.",

    "To survive the cold of winter months, many insects replace their body water with a chemical called glycerol, which acts as an 'antifreez' against the temperatures.",

    "There are nearly as many species of ants (8,800) as there are species of birds (9,000) in the world.",

    "The male silk moth is estimated to 'smell' chemicals of female silk moths in the air at the ratio of a few hundred molecules among 25 quintillion (25,000,000,000,000,000,000) molecules in a cubic centimeter of air.",

    "True flies have only one pair of wings, and sometimes, none at all. A hind pair of 'wings' is reduced to balancing organs called halteres.",

    "There are about 91,000 different kinds (species) of insects in the United States. In the world, some 1.5 million different kinds (species) have been named.",

    "Vladimir Nabokov, a famous Russian author, collected butterflies and actually named as a new subspecies the Kamer Blue Butterfly from the pine barrens of the Northeast United States.",

    "A particular Hawk Moth caterpillar from Brazil, when alarmed, raises its head and inflates its thorax, causing it to look like the head of a snake.",

    "About one-third of all insect species are carnivorous, and most hunt for their food rather than eating decaying meat or dung.",
    
    "Bugs make up 90% of life on Earth.",

    "Beetles are the most common species of insects",

    "The Antarctic Midge is the only known insect species living in Antarctica. It's life span is about a week.",

    "Termites eat more when listening to rock music. Ok, thats not entirely true. It appears that vibrational frequencies affect termites eating habits. That frequency is similar to rock music, just under 3000 kHz.",

    "What do ants, humans, and crows have in common? They are the only 3 species that fight battle in formations.",

    "Fruit flies were the first species of insects to be sent into outer space.",

    "Fireflies and ladybugs are a form of beetle.",

    "A lady bug might eat more than 5,000 insects in its lifetime.",

    "Male horseflies can fly up to 90 mph",

    "A group of butterflies is known as a flutter."

]
    

function GetRandBugFact() {
    const RandomIndex = Math.floor(Math.random() * RandBugFact.length);
    return RandBugFact[RandomIndex];
}

console.log("Random Bug fact:", GetRandBugFact());

