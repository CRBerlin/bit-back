const express = require('express')
//Aplicación móvil
const satori = express()
const port = 3000
satori.use(express.json());

//#region CRUD Usuarios
const users = [];

//Crear Usuario
satori.post('/usuarios', (req, res) => {
  const { name, email, password, role, plan, planStatus, trainerId, currentSessionIndex, streakCount, lasCompletedDate } = req.body;
  if (!name || !email || !password || !role || trainerId === undefined) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    role,
    plan,
    planStatus,
    trainerId,
    currentSessionIndex,
    streakCount,
    lasCompletedDate
  };
  users.push(newUser);
  res.status(201).json(newUser);
})

//Leer Usuarios
satori.get('/usuarios', (req, res) => {
  res.status(200).json(users);
})

//Leer un usuario por ID
satori.get('/usuarios/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const userId = users.find((user) => user.id === id);
  if (userId) {
    res.status(200).json(userId);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

// actualizar producto
satori.put('/usuarios/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const userId = users.findIndex((user) => user.id === id);
  if (userId === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const { name, email, password, role, plan, planStatus, trainerId, currentSessionIndex, streakCount, lasCompletedDate } = req.body;
  if (!name || !email || !password || !role || trainerId === undefined) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const updatedUser = {
    id,
    name,
    email,
    password,
    role,
    plan,
    planStatus,
    trainerId,
    currentSessionIndex,
    streakCount,
    lasCompletedDate
  };
  users[userId] = updatedUser;
  res.status(200).json(updatedUser);
});

// eliminar producto
satori.delete('/usuarios/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const userId = users.findIndex((user) => user.id === id);
  if (userId === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  users.splice(userId, 1);
  res.status(204).send();
});
//#endregion

// Verificación que el servidor esté en línea.
satori.listen(port, () => {
  console.log(`Servidor OK en el puerto: ${port}`)
})
