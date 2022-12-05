const db = require("../db");
const Book = require("../Book");
const bookSeed = async () => {
  const dummyBooks = [
    {
      title: "Competition, The",
      author: "Ber Mathivon",
      volume: 72,
      description:
        "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      imageURL: "http://dummyimage.com/400x400.png/dddddd/000000",
      genre: "Drama|Romance",
      isbn: "440383141-9",
      edition: "Limited",
      price: 5386,
      stock: 24,
    },
    {
      title: "Thirst for Love, The (Ai no kawaki)",
      author: "Adi Sly",
      volume: 89,
      description:
        "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
      imageURL: "http://dummyimage.com/400x400.png/cc0000/ffffff",
      genre: "Drama",
      isbn: "481130207-9",
      edition: "Standard",
      price: 7183,
      stock: 55,
    },
    {
      title: "Hollywood or Bust",
      author: "Nappie Dever",
      volume: 49,
      description: "Quisque id justo sit amet sapien dignissim vestibulum.",
      imageURL: "http://dummyimage.com/400x400.png/ff4444/ffffff",
      genre: "Comedy|Musical",
      isbn: "593580065-9",
      edition: "First Edition",
      price: 7693,
      stock: 8,
    },
    {
      title: "Leprechaun",
      author: "Lynde Greenier",
      volume: 24,
      description: "Proin at turpis a pede posuere nonummy.",
      imageURL: "http://dummyimage.com/400x400.png/dddddd/000000",
      genre: "Comedy|Horror",
      isbn: "927181193-3",
      edition: "Limited",
      price: 2240,
      stock: 62,
    },
    {
      title: "Drive-In Horrorshow",
      author: "Benjy Wasbey",
      volume: 78,
      description: "Nulla ut erat id mauris vulputate elementum.",
      imageURL: "http://dummyimage.com/400x400.png/dddddd/000000",
      genre: "Horror",
      isbn: "462357162-9",
      edition: "Standard",
      price: 6683,
      stock: 35,
    },
    {
      title: "Mr. Nice",
      author: "Rosa Aleswell",
      volume: 26,
      description: "Duis aliquam convallis nunc.",
      imageURL: "http://dummyimage.com/400x400.png/cc0000/ffffff",
      genre: "Comedy|Drama",
      isbn: "635532172-1",
      edition: "Limited",
      price: 8450,
      stock: 96,
    },
  ];
  const [devilman1, adamStrange1, wonderWoman, silverSurfer, xmen] =
    await Promise.all([
      Book.create({
        title: "Devilman",
        author: "Nagai Go",
        description: "a really cool manga",
        genre: "action",
        volume: 1,
        yearOfPublish: 1972,
        imageURL: "/static/bookImages/devilman1.jpg",
        price: 1000,
        stock: 5,
      }),
      Book.create({
        title: "Adam Strange",
        author: "Andy Diggle",
        description:
          "Things have changed drastically for Strange. Once the greatest hero of the distant planet Rann, he's now a wanted man on Earth. Pursued by the police and hunted by aliens, Strange has learned that his adopted planet has been destroyed. With his wife and daughter gone, is there any hope left, or is this the end of the space hero? Sit back for a thrilling ride that takes one man on a trek though the DC Universe to rediscover the remnants of the L.E.G.I.O.N., the Darkstars, the Omega Men and more, as he faces a threat that will herald a galactic war!",
        genre: "action",
        volume: 1,
        yearOfPublish: 2004,
        imageURL: "/static/bookImages/adamStrange.webp",
        price: 500,
        stock: 20,
      }),
      Book.create({
        title: "Wonder Woman",
        author: "Christopher Priest",
        description: "I couldn't find a description:D",
        genre: "action",
        volume: 89,
        yearOfPublish: 1994,
        imageURL: "/static/bookImages/wonderWoman.jpeg",
        price: 500,
        stock: 20,
      }),
      Book.create({
        title: "The Silver Surfer",
        author: "Stan Lee",
        description:
          "Mephisto has yet another plan to obtain the Silver Surfer's soul. He disguises himself and walks among the humans.",
        genre: "action",
        volume: 16,
        yearOfPublish: 1970,
        imageURL: "/static/bookImages/silverSurfer.png",
        price: 2000,
        stock: 5,
      }),
      Book.create({
        title: "The X-Men",
        author: "Chris Claremont",
        description:
          "Thirty-three years in the future, North America is controlled by Sentinels. The few surviving X-Men - Kitty Pryde, Storm, Colossus, Wolverine and Franklin Richards, son of Mr. Fantastic and Invisible Woman, along with Magneto, plan to change history by having Rachel Summers exchange the psyche of the adult Kate Pryde with that of her younger self.",
        genre: "action",
        volume: 141,
        yearOfPublish: 1981,
        imageURL: "/static/bookImages/xmen.jpeg",
        price: 2000,
        stock: 5,
      }),

      // Berserks 1 and 2, standard...
      Book.create({
        title: "Berserk",
        volume: 1,
        author: "Kentaro Miura",
        description: `
        Created by Kentaro Miura, Berserk is manga mayhem to the extreme - violent, horrifying, and mercilessly funny - and the wellspring for the internationally popular anime series. Not for the squeamish or the easily offended, Berserk asks for no quarter - and offers none!
His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts won't take his fate lying down; he'll cut a crimson swath of carnage through the ranks of the damned - and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance.`,
        genre: "action",
        yearOfPublish: 1990,
        edition: "standard",
        imageURL: "/static/bookImages/berserk-vol-1.jpg",
        price: 999,
        stock: 1,
      }),

      // Berserks 1 - 5
      Book.create({
        title: "Berserk",
        volume: 2,
        author: "Kentaro Miura",
        description: `The evil Count uses his dark powers to transform a defeated guard captain into an inhuman horror to combat Guts, the Black Swordsman. Puck, Guts’ pint-sized fairy sidekick, is captured when he attempts to stop an old doctor’s execution, and he is given as a gift to the count’s daughter, a sweet girl in a gilded cage, imprisoned by her father in her own room. Guts, determined to make mincemeat of the Count, assaults the castle and carves a swath of blood-soaked destruction through the Count’s minions. Face-to-face with the Black Swordsman at last, the Count reveals his true form, and even Guts’ super-sized sword may not be big enough to contend with this demonic monstrosity!`,
        genre: "action",
        yearOfPublish: 1991,
        edition: "standard",
        imageURL: "/static/bookImages/berserk-vol-2.jpg",
        price: 999,
        stock: 2,
      }),

      Book.create({
        title: "Berserk",
        volume: 2,
        author: "Kentaro Miura",
        description: `The evil Count uses his dark powers to transform a defeated guard captain into an inhuman horror to combat Guts, the Black Swordsman. Puck, Guts’ pint-sized fairy sidekick, is captured when he attempts to stop an old doctor’s execution, and he is given as a gift to the count’s daughter, a sweet girl in a gilded cage, imprisoned by her father in her own room. Guts, determined to make mincemeat of the Count, assaults the castle and carves a swath of blood-soaked destruction through the Count’s minions. Face-to-face with the Black Swordsman at last, the Count reveals his true form, and even Guts’ super-sized sword may not be big enough to contend with this demonic monstrosity!`,
        genre: "action",
        yearOfPublish: 1990,
        edition: "standard",
        imageURL: "/static/bookImages/berserk-vol-2.jpg",
        price: 999,
        stock: 2,
      }),

      Book.create({
        title: "Berserk",
        volume: 3,
        author: "Kentaro Miura",
        description: `Guts, the feared Black Swordsman, finishes his desperate battle with the monstrous Count, cutting and blasting him to gory scraps when the presence of the Count's daughter makes the monster hesitate. But Guts won't even have the time to clean his gigantic sword when the Count's dying pleas activate the Behelit, summoning the five God Hands, demon lords of immeasurable power. Guts' journey so far has been a long road of pain and death, but that's a walk in the park compared to fighting his way out of Hell itself!`,
        genre: "action",
        yearOfPublish: 1991,
        edition: "standard",
        imageURL: "/static/bookImages/berserk-vol-3.jpg",
        price: 999,
        stock: 3,
      }),

      Book.create({
        title: "Berserk",
        volume: 4,
        author: "Kentaro Miura",
        description: `Now that the evil Count has been killed and dragged to Hell by the demon lords of the Godhand, Guts, the Black Swordsman, hooks up with his former benefactor, the mercenary Gambino. But it’s a deadly reunion, one that nearly takes Guts’ life. The following years see Guts wandering from battlefield to battlefield, where his awesome skills as a slayer catch the eye of both warring parties, including the legendary Griffith, warrior leader of the Band of the Hawk, who is eager to test his combat skills against those of the Black Swordsman. As usual, anytime that Guts is involved there will be hell to pay!
        `,
        genre: "action",
        yearOfPublish: 1992,
        edition: "standard",
        imageURL: "/static/bookImages/berserk-vol-4.jpg",
        price: 999,
        stock: 4,
      }),

      Book.create({
        title: "Berserk",
        volume: 5,
        author: "Kentaro Miura",
        description: `He is Guts, the Black Swordsman, a warrior of legendary prowess - relentless, fearless, merciless. As cold and brutal as the iron of the massive sword he wields. Bent on revenge against the unholy forces that have branded him for sacrifice, but especially on Griffith, one of the demon lords of the Godhand. But Griffith was once a man, the leader of the Hawks, a renowned cadre of elite fighters with a young Guts as its fiercest champion. Though forged in a crucible of cruelty and violence, nothing could prepare Guts for a confrontation with Nosferatu Zodd, a superhuman beast who slaughters Guts' comrades as easily as a scythe cuts wheat. Even Guts and Griffith are no match for the abomination's power...but something Griffith wears around his neck may well be!`,
        genre: "action",
        yearOfPublish: 1992,
        edition: "standard",
        imageURL: "/static/bookImages/berserk-vol-5.jpg",
        price: 999,
        stock: 5,
      }),

      Book.create({
        title: "Berserk",
        volume: 1,
        author: "Kentaro Miura",
        description: `Have you got the Guts? Kentaro Miura's Berserk has ouraged, horrified, and delighted manga and anime fanatics since 1989, creating an international legion of hardcore devotees and inspiring a plethora of TV series, feature films, and video games. And now the badass champion of adult fantasy manga is presented in an oversized 7'' x 10'' deluxe hardcover edition, nearly 700 pages amassing the first three Berserk volumes, with following volumes to come to serve up the entire series in handsome bookshelf collections. No Guts, no glory! Collects volumes 1-3.`,
        genre: "action",
        yearOfPublish: 2019,
        edition: "deluxe",
        imageURL: "/static/bookImages/berserk-deluxe-vol-1.jpg",
        price: 2999,
        stock: 5,
      }),

      Book.create({
        title: "Berserk",
        volume: 2,
        author: "Kentaro Miura",
        description: `The ultimate adult fantasy manga, now in 7''x10'' hardcover editions! Raised in torment, young Guts is hardened into a fearsome warrior, drawing the attention of the charismatic Griffith, commander of the elite Band of the Hawk. This crossroads will take Guts to fame and glory . . . and damnation! Collects Berserk volumes 4, 5, and 6.
Over 1.5 million copies sold of Dark Horse's Berserk manga! Inspired the hit anime TV series and feature films, video games, a trading card game, and more!`,
        genre: "action",
        yearOfPublish: 2019,
        edition: "deluxe",
        imageURL: "/static/bookImages/berserk-deluxe-vol-2.jpg",
        price: 2999,
        stock: 5,
      }),

      Book.create({
        title: "Gambling Apocalypse: KAIJI",
        volume: 1,
        author: "Nobuyuki Fukumoto",
        description: `Ne'er-do-well Kaiji Itou's shiftless existence is suddenly rattled by a visit from the yakuza. Burdened by debt and resentment, Kaiji is coerced into gambling for his worthless life. As the stakes grow higher and the rules become increasingly more bizarre, Kaiji must finally take the future into his own hands! Legendary mangaka Nobuyuki Fukumoto finally makes his English-language debut. The inspiration for the infamous anime by the same name and the Netflix live-action film Animal World takes readers into the dark side of Japan's post-bubble economic society by thrusting them into a world of debt, debauchery, and delusion.
        Nobuyuki Fukomoto made his manga debut in 1980 and has penned more than one-hundred and fifty volumes over his illustrious career. In 1998 he was presented the Kodansha Manga Award's Comic of the Year for his work on Gambling Apocalypse: Kaiji.
        Known to incorporate both elements of gambling and finance in his works, Fukumoto's most memorable titles tend to focus on the consequences of Japan's economic culture. Kaiji was recognized by the publishing world for how it rendered a changing social landscape after Japan's economic bubble had burst. Outside of Kaiji, Fukumoto is best known for his other international best-sellers, which include: Akagi (Take Shobo), Gin and Kin (Futabasha) and Kurosawa: The Strongest Man (Shogakukan).`,
        genre: "crime",
        edition: "deluxe",
        imageURL: "/static/bookImages/kaiji-vol-1.jpg",
        price: 2000,
        stock: 5,
      }),

      Book.create({
        title: "Gambling Apocalypse: KAIJI",
        volume: 2,
        author: "Nobuyuki Fukumoto",
        description: `Aboard the illegal gambling ship, the Espoir, Kaiji has now amassed an additional ten-million yen in debt. Taking his total debt before interest to over thirteen-million yen. With few resources left and less than an hour to win back some funds, the young man's options appear to be running out. Knowing that the endgame is near, panic begins to set. In an effort to even earn himself a lifeline, Kaiji decides to go all-in; betting away all his funds and those of his colleagues. The lives of three men hang in the balance in this deathmatch.
        Will the final curtain fall on Kaiji, or will he finally find a reason for hope aboard the Espoir?`,
        genre: "crime",
        edition: "deluxe",
        imageURL: "/static/bookImages/kaiji-vol-2.jpg",
        price: 2000,
        stock: 5,
      }),

      Book.create({
        title: "Akagi: Yami ni Oritatta Tensai",
        volume: 36,
        author: "Nobuyuki Fukumoto",
        genre: "crime",
        edition: "standard",
        imageURL: "/static/bookImages/akagi-vol-36.jpg",
        price: 999,
        stock: 5,
      }),
    ]);
  const dummySeeds = await Promise.all(
    dummyBooks.map(index => Book.create(index))
  );
  return {
    books: {
      devilman1,
      adamStrange1,
      wonderWoman,
      silverSurfer,
      xmen,
      berserk1,
      berserk2,
      berserk3,
      berserk4,
      berserk5,
      berserkDeluxe1,
      berserkDeluxe2,
      kaiji1,
      kaiji2,
      akagi36,
    },
    dummySeeds,
  };
};

module.exports = bookSeed;
