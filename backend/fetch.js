const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Update with your MongoDB URI if needed
const client = new MongoClient(uri);

const moodSongs = {
    happy: [
      { title: "Vaathi Coming", singers: "Anirudh Ravichander", movie: "Master", genre: "Tamil Dance", img_url: "http://localhost/img/happy/1.jpg", url: "http://localhost/songs/happy/1.mp3" },
      { title: "Udhungada Sangu", singers: "Dhanush", movie: "Velaiilla Pattadhari", genre: "Folk Pop", img_url: "http://localhost/img/happy/2.jpg", url: "http://localhost/songs/happy/2.mp3" },
      { title: "Selfie Pulla", singers: "Vijay, Sunidhi Chauhan", movie: "Kaththi", genre: "Dance Pop", img_url: "http://localhost/img/happy/3.jpg", url: "http://localhost/songs/happy/3.mp3" },
      { title: "Google Google", singers: "Vijay, Andrea Jeremiah", movie: "Thuppakki", genre: "Electro Pop", img_url: "http://localhost/img/happy/4.jpg", url: "http://localhost/songs/happy/4.mp3" },
      { title: "Sodakku", singers: "Anthony Daasan", movie: "Thaanaa Serndha Koottam", genre: "Mass Folk", img_url: "http://localhost/img/happy/5.jpg", url: "http://localhost/songs/happy/5.mp3" },
      { title: "Jimikki Kammal", singers: "Vineeth Sreenivasan, Renjith Unni", movie: "Velipadinte Pusthakam", genre: "Kerala Beat", img_url: "http://localhost/img/happy/6.jpg", url: "http://localhost/songs/happy/6.mp3" },
      { title: "Don'u Don'u Don'u", singers: "Anirudh, Alisha Thomas", movie: "Maari", genre: "Romantic Dance", img_url: "http://localhost/img/happy/7.jpg", url: "http://localhost/songs/happy/7.mp3" },
      { title: "Why This Kolaveri Di", singers: "Dhanush", movie: "3", genre: "Tanglish Pop", img_url: "http://localhost/img/happy/8.jpg", url: "http://localhost/songs/happy/8.mp3" },
      { title: "Aaluma Doluma", singers: "Anirudh, Baadshah", movie: "Vedalam", genre: "Hip-Hop Tamil", img_url: "http://localhost/img/happy/9.jpg", url: "http://localhost/songs/happy/9.mp3" },
      { title: "Oh Penne", singers: "Vishal Dadlani, Anirudh", movie: "Vanakkam Chennai", genre: "Party Pop", img_url: "http://localhost/img/happy/10.jpg", url: "http://localhost/songs/happy/10.mp3" }
    ],
  
    sad: [
      { title: "Unakkenna Venum Sollu", singers: "Shweta Mohan", movie: "Yennai Arindhaal", genre: "Tamil Melody", img_url: "http://localhost/img/sad/1.jpg", url: "http://localhost/songs/sad/1.mp3" },
      { title: "Ennodu Nee Irundhaal", singers: "Sid Sriram", movie: "I", genre: "Romantic Ballad", img_url: "http://localhost/img/sad/2.jpg", url: "http://localhost/songs/sad/2.mp3" },
      { title: "Idhazhin Oram", singers: "Ajesh Ashok", movie: "3", genre: "Romantic", img_url: "http://localhost/img/sad/3.jpg", url: "http://localhost/songs/sad/3.mp3" },
      { title: "Vinnaithaandi Varuvaayaa", singers: "Karthik", movie: "VTV", genre: "Love Ballad", img_url: "http://localhost/img/sad/4.jpg", url: "http://localhost/songs/sad/4.mp3" },
      { title: "Thalli Pogathey", singers: "Sid Sriram", movie: "Achcham Yenbadhu Madamaiyada", genre: "Love Pain", img_url: "http://localhost/img/sad/5.jpg", url: "http://localhost/songs/sad/5.mp3" },
      { title: "Pookkal Pookkum", singers: "Hariharan, Shreya Ghoshal", movie: "Madrasapattinam", genre: "Period Romance", img_url: "http://localhost/img/sad/6.jpg", url: "http://localhost/songs/sad/6.mp3" },
      { title: "Kannazhaga", singers: "Dhanush, Shruti Haasan", movie: "3", genre: "Love Slow", img_url: "http://localhost/img/sad/7.jpg", url: "http://localhost/songs/sad/7.mp3" },
      { title: "Yaaro Ivan", singers: "Haricharan", movie: "Udhayam NH4", genre: "Tragic Love", img_url: "http://localhost/img/sad/8.jpg", url: "http://localhost/songs/sad/8.mp3" },
      { title: "Kaadhal Rojave", singers: "SPB, Chitra", movie: "Roja", genre: "Classic Love", img_url: "http://localhost/img/sad/9.jpg", url: "http://localhost/songs/sad/9.mp3" },
      { title: "Uyire", singers: "Hariharan, Sadhana Sargam", movie: "Bombay", genre: "Romantic Classic", img_url: "http://localhost/img/sad/10.jpg", url: "http://localhost/songs/sad/10.mp3" }
    ],
  
    chill: [
      { title: "Mental Manadhil", singers: "A.R. Rahman, Jonita Gandhi", movie: "OK Kanmani", genre: "Electronic Chill", img_url: "http://localhost/img/chill/1.jpg", url: "http://localhost/songs/chill/1.mp3" },
      { title: "Nee Kidaithai", singers: "Hariharan", movie: "Kannukkul Nilavu", genre: "Soothing Pop", img_url: "http://localhost/img/chill/2.jpg", url: "http://localhost/songs/chill/2.mp3" },
      { title: "Azhagiye", singers: "Arjun Chandy, Haricharan", movie: "Kaatru Veliyidai", genre: "Feel Good", img_url: "http://localhost/img/chill/3.jpg", url: "http://localhost/songs/chill/3.mp3" },
      { title: "Ennadi Maayavi Nee", singers: "Sid Sriram", movie: "Vada Chennai", genre: "Chill Trap", img_url: "http://localhost/img/chill/4.jpg", url: "http://localhost/songs/chill/4.mp3" },
      { title: "High On Love", singers: "Sid Sriram", movie: "Pyaar Prema Kaadhal", genre: "Chill EDM", img_url: "http://localhost/img/chill/5.jpg", url: "http://localhost/songs/chill/5.mp3" },
      { title: "En Jeevan", singers: "Hariharan, Saindhavi", movie: "Theri", genre: "Peaceful Romantic", img_url: "http://localhost/img/chill/6.jpg", url: "http://localhost/songs/chill/6.mp3" },
      { title: "Adiye", singers: "Sid Sriram", movie: "Kadal", genre: "Soulful", img_url: "http://localhost/img/chill/7.jpg", url: "http://localhost/songs/chill/7.mp3" },
      { title: "Malargale", singers: "K. S. Chithra", movie: "Love Birds", genre: "Classical Chill", img_url: "http://localhost/img/chill/8.jpg", url: "http://localhost/songs/chill/8.mp3" },
      { title: "Venmathi Venmathiye", singers: "Hariharan", movie: "Minnale", genre: "Dreamy Tune", img_url: "http://localhost/img/chill/9.jpg", url: "http://localhost/songs/chill/9.mp3" },
      { title: "Kadhal Cricket", singers: "Karthik", movie: "Thani Oruvan", genre: "Chill Funk", img_url: "http://localhost/img/chill/10.jpg", url: "http://localhost/songs/chill/10.mp3" }
    ],
  
    focused: [
      { title: "Maruvaarthai", singers: "Sid Sriram", movie: "Enai Noki Paayum Thota", genre: "Soft Rock", img_url: "http://localhost/img/focused/1.jpg", url: "http://localhost/songs/focused/1.mp3" },
      { title: "Naan Pizhaippeno", singers: "Sid Sriram", movie: "Enai Noki Paayum Thota", genre: "Focus Ballad", img_url: "http://localhost/img/focused/2.jpg", url: "http://localhost/songs/focused/2.mp3" },
      { title: "Kannama", singers: "Pradeep Kumar", movie: "Rekka", genre: "Calm Melody", img_url: "http://localhost/img/focused/3.jpg", url: "http://localhost/songs/focused/3.mp3" },
      { title: "The Life of Ram", singers: "Pradeep Kumar", movie: "96", genre: "Emotional Focus", img_url: "http://localhost/img/focused/4.jpg", url: "http://localhost/songs/focused/4.mp3" },
      { title: "Anbe Peranbe", singers: "Sid Sriram", movie: "NGK", genre: "Soulful Calm", img_url: "http://localhost/img/focused/5.jpg", url: "http://localhost/songs/focused/5.mp3" },
      { title: "Vinnaithaandi", singers: "Karthik", movie: "VTV", genre: "Mellow Love", img_url: "http://localhost/img/focused/6.jpg", url: "http://localhost/songs/focused/6.mp3" },
      { title: "Neeyum Naanum", singers: "Karthik", movie: "Naanum Rowdy Dhaan", genre: "Serene", img_url: "http://localhost/img/focused/7.jpg", url: "http://localhost/songs/focused/7.mp3" },
      { title: "Uyirin Uyire", singers: "Karthik", movie: "Kaakha Kaakha", genre: "Thoughtful Melody", img_url: "http://localhost/img/focused/8.jpg", url: "http://localhost/songs/focused/8.mp3" },
      { title: "Aagayam Theepidicha", singers: "Anirudh Ravichander", movie: "Naanum Rowdy Dhaan", genre: "Acoustic Focus", img_url: "http://localhost/img/focused/9.jpg", url: "http://localhost/songs/focused/9.mp3" },
      { title: "Moongil Thottam", singers: "Harini, Abhay Jodhpurkar", movie: "Kadal", genre: "Instrumental Calm", img_url: "http://localhost/img/focused/10.jpg", url: "http://localhost/songs/focused/10.mp3" }
    ]
  };
  

async function run() {
    try {
        await client.connect();
        const database = client.db('music_recommentation'); // You can change this DB name
        const cursor = database.collection('songs').find();

        // Flatten the moodSongs object into an array of documents
      
        console.log(cursor);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
