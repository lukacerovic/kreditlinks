import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/user.model.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();

const allowedOrigins = [
  'http://localhost:3001',
  'http://localhost:3000',
  'https://www.kreditlinks.com',
];

app.use(cors({
  origin: (origin, callback) => {
    console.log('Origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.options('*', cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

const sendEmail = async (userData) => {
  const { username, lastName, email, dateOfBirth, phone, state } = userData;

  console.log("data: ", userData);

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_USER,  
    subject: `KreditLinks - Novi korisnik: ${username} ${lastName}`,
    text: `Novi korisnik: ${username} ${lastName}`,
    html: `<h3>Novi korisnik:</h3>
           <p><strong>Ime:</strong> ${username} ${lastName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Telefon:</strong> ${phone}</p>
           <p><strong>Opstina:</strong> ${state}</p>
           <p><strong>Datum rođenja:</strong> ${dateOfBirth}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error('Greška pri slanju emaila:', error);
  }
};

app.post('/api/users', async (req, res) => {
  try {
    const { username, lastName, email, dateOfBirth, phone, state, privacy } = req.body;

    const newUser = new User({ username, lastName, email, dateOfBirth, phone, state, privacy });
    await newUser.save();

    await sendEmail(req.body);

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user', error });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});


// import express from 'express';

// dotenv.config();  // ovo smo koristili da bi mogli da za konekciju mongo db da sakrijemo url adresu.
// // Kreirali smo .env fajl u root folderu i onda smo u varijabli MONGO definasli url baze podataka koju smo kreirali na MongoDb profilu projekta

// // db
// mongoose.connect(process.env.MONGO).then(() => {
//     console.log('Connected to Mongo DB');  // .then(() => ) ..... provera da smo se stvarno konektovali sa MongoDb-em
// }).catch((err) => {  // u slucaju da nismo konektovani, da nam uhvati gresku
//     console.log(err);
// });

// // Creating application:
// const app = express();

// // kreiramo rikvestove
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
