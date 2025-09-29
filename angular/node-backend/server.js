// Telepítés: npm i express cors jsonwebtoken
// Futtatás: node server.js

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-demo-key';

app.use(cors());
app.use(express.json());

// --------- "Adatbázis" (memóriában) ---------
const USERS = [
    { username: 'admin', password: 'admin', role: 'ADMIN' },
    { username: 'demouser', password: 'demopass123', role: 'USER' },
    { username: 'root', password: 'toor', role: 'ROOT' },
];

const PERSONS = [
    { id: 1, name: 'Ada Lovelace', birthyear: 1815 },
    { id: 2, name: 'Alan Turing', birthyear: 1912 },
    { id: 3, name: 'Grace Hopper', birthyear: 1906 },
    { id: 4, name: 'John von Neumann', birthyear: 1903 },
];

// --------- Helper: JWT készítés ---------
function makeToken(user) {
    // Általános, Angular-barát payload példa:
    const payload = {
        sub: user.username,
        roles: [user.role], // frontend könnyen olvassa: roles[]
    };
    // Lejárat: 2 óra
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
}

// --------- Auth middleware (JWT ellenőrzés) ---------
function authRequired(req, res, next) {
    const auth = req.headers.authorization || '';
    const parts = auth.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }
    const token = parts[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // { sub, roles, iat, exp }
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

// --------- Endpontok ---------

// Health-check (nyitott)
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Bejelentkezés: POST /api/auth/login { username, password }
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ error: 'username and password required' });
    }
    const user = USERS.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = makeToken(user);
    // Frontend szempontból kényelmes: { token } formátum
    res.json({ token });
});

// Emberek listázása (védett)
app.get('/api/person', authRequired, (req, res) => {
    res.json(PERSONS);
});

// Egy ember lekérése id alapján (védett)
app.get('/api/person/:id', authRequired, (req, res) => {
    const id = Number(req.params.id);
    const p = PERSONS.find(x => x.id === id);
    if (!p) return res.status(404).json({ error: 'Person not found' });
    res.json(p);
});

// --------- Szerver indítás ---------
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log('Demo users:');
    console.log('- admin / admin');
    console.log('- demouser / demopass123');
    console.log('- root / toor');
});
