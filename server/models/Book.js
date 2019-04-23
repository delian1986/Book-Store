const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required:true, unique: [true, 'Book already exists.']},
  description: {type: mongoose.Schema.Types.String},
  author:{type: mongoose.Schema.Types.String},
  image: {type: mongoose.Schema.Types.String, required:true},
  added: { type : Date, default: Date.now }
})

let Book = mongoose.model('Book', bookSchema)

module.exports = Book
module.exports.seedBooks = () => {
  Book.find({}).then(books => {
    if (books.length > 0) return


    const booksSeed = [
      {
        title: 'The Shining',
        description: 'Jack Torrance\'s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he\'ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.',
        author:'Stephen King',
        image: 'https://elephantbookstore.com/image/cache/catalog/11.4.2019/shining-950x950.jpeg',
      },
      {
        title: 'Pride and Prejudice and Zombies: Dawn of the Dreadfuls',
        description: 'Witness the genesis of the zombie plague in early 19th-century England in this terrifying and hilarious prequel to the bestselling "Pride and Prejudice and Zombies." Watch as Elizabeth Bennet evolves from a naive young teenager into a savage slayer of the undead.',
        author:'Steve Hockensmith',
        image: 'https://elephantbookstore.com/image/cache/catalog/niki%20images%20/9781594744549_l-425x425.png',
      },
      {
        title: 'Game of Thrones: The Noble Houses of Westeros: Seasons 1-5',
        description: 'Game of Thrones: The Noble Houses of Westeros Seasons 1–5 serves as a guide to the key houses as their constant struggle for power persists and as the hierarchical structure of the kingdom evolves. The book is filled with essential information including each house\'s sigil, history, home, family tree, character profiles, and is fully illustrated with series photography throughout.',
        author:'Running Press',
        image: 'https://elephantbookstore.com/image/cache/catalog/Game%20of%20Thrones/images-425x425.jpeg',
      },
      {
        title: 'World of Warcraft chronicle Vol 1',
        description: 'World of Warcraft: Chronicle Volume 1 is a journey through an age of myth and legend, a time long before the Horde and the Alliance came to be. This definitive tome of Warcraft history reveals untold stories about the birth of the cosmos, the rise of ancient empires, and the forces that shaped the world of Azeroth and its people.',
        author:'Chris Metzen and Matt Burns',
        image: 'https://elephantbookstore.com/image/cache/catalog/today/world_of_warcraft_chronicle_volume_1-425x425.jpg',
      },
      {
        title: 'A Feast For Crows',
        description: 'The war-torn landscape of the Seven Kingdoms is threatened by destruction as vast as any in its violent past. Against a backdrop of alchemy and murder, victory may go to the men and women possessed of the coldest steel and the coldest hearts. Continuing an imaginative epic fantasy, this is the fourth installment of "A Song of Ice and Fire".',
        author:'George R.R. Martin',
        image: 'https://elephantbookstore.com/image/cache/catalog/niki%20images%20/9780553390575_l-425x425.png',
      },
      {
        title: 'Eragon',
        description: 'When Eragon finds a polished stone in the forest, he thinks it is the lucky discovery of a poor farm boy; perhaps it will buy his family meat for the winter. But when the stone brings a dragon hatching, Eragon realises he has stumbled upon a legacy nearly as old as the Empire itself. Overnight his simple life is shattered and he is thrust into a perilous new world of destiny, magic and power. With only an ancient sword and the advice of an old storyteller for guidance, Eragon and the fledgling dragon must navigate the dangerous terrain and dark enemies of an Empire ruled by an evil King. Can Eragon take up the mantle of the legendary Dragon Riders? The fate of the Empire may rest in his hands...The author is Christopher Paolini.',
        author:'Christopher Paolini',
        image: 'https://elephantbookstore.com/image/cache/catalog/Nikola%2001.0417/Picture38-425x425.png',
      },
      {
        title: 'The Silmarillion',
        description: 'Designed to take fans of The Hobbit and The Lord of the Rings deeper into the myths and legends of Middle-earth The Silmarillion is an account of the Elder Days, of the First Age of Tolkien\'s world. It is the ancient drama to which the characters in The Lord of the Rings look back, and in whose events some of them such as Elrond and Galadriel took part. The tales of The Silmarillion are set in an age when Morgoth, the first Dark Lord, dwelt in Middle-Earth, and the High Elves made war upon him for the recovery of the Silmarils, the jewels containing the pure light of Valinor. Included in the book are several shorter works.',
        author:'J.R.R. Tolkien',
        image: 'https://elephantbookstore.com/image/cache/catalog/niki%20images%20/9780544338012_l-425x425.png',
      },
      {
        title: 'The Chronicles of Narnia',
        description: 'An alternative reading order based solely on the internal chronology of the novels with the exception of The Horse and His Boy which takes place during the time frame of the final few pages of The Lion, the Witch, and the Wardrobe. Note that this reading order only dates from 1994, more than 30 years after C.S. Lewis died.',
        author:'C. S. Lewis',
        image: 'https://elephantbookstore.com/image/cache/catalog/niki%20images%20/fffbbb-425x425.png',
      },
      
      {
        title: 'The Mortal Instruments: City of Bones',
        description: 'First in Cassandra Clare\'s internationally bestselling Mortal Instruments series about the Shadowhunters. Love. Blood. Betrayal. Demons. First in the New York Times No. 1 bestselling series that has swept the globe, City of Bones is also a major movie and Shadowhunters, the TV series based on the book, is currently airing on Netflix. Irresistibly drawn towards a group of demon hunters, Clary encounters the dark side of New York City and the dangers of forbidden love. This edition contains exclusive bonus content as well as a map and a new foreword by Cassandra Clare. Read all the sensational books in The Shadowhunter Chronicles: The Mortal Instruments, The Infernal Devices, Tales from the Shadowhunter Academy, The Bane Chronicles, The Dark Artifices, The Last Hours and The Shadowhunter\'s Codex.',
        author:'Cassandra Clare',
        image: 'https://elephantbookstore.com/image/cache/catalog/Nikola%2031.03.17/Picture32-425x425.png',
      },
      {
        title: 'World of Warcraft: Beyond the Dark' ,
        description: 'The aging orc shaman Ner\'zhul has seized control of the Horde and reopened the Dark Portal. His brutal warriors once again encroach upon Azeroth, laying siege to the newly constructed stronghold of Nethergarde Keep. There, the archmage Khadgar and the Alliance commander, Turalyon, lead humanity and its elven and dwarven allies in fighting this new invasion.',
        author:'Aaron Rosenberg',
        image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781416550860/world-of-warcraft-beyond-the-dark-portal-9781416550860_lg.jpg',
      }
    ]

    Book
      .create(booksSeed)
      .then(() => console.log('Books seeded successfully.'))
      .catch((error) => console.log(error))
  })
}
