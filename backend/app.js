const express = require('express')
//Aplicación móvil
const satori = express()
const port = 3000
satori.use(express.json());

//#region CRUD Usuarios
const users = [];

// crear Usuario
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

// leer Usuarios
satori.get('/usuarios', (req, res) => {
  res.status(200).json(users);
})

// leer un usuario por ID
satori.get('/usuarios/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const userId = users.find((user) => user.id === id);
  if (userId) {
    res.status(200).json(userId);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

// actualizar Usuario
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

// eliminar Usuario
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

//#region CRUD Ejercicios
const exercises = [];

// crear Ejercicio
satori.post('/ejercicios', (req, res) => {
  const { name, description, videoUrl, muscleGroup, difficulty } = req.body;
  if (!name || !description || !videoUrl || !muscleGroup || !difficulty) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const newExercise = {
    id: exercises.length + 1,
    name,
    description,
    videoUrl,
    muscleGroup,
    difficulty,
  };
  exercises.push(newExercise);
  res.status(201).json(newExercise);
})

// leer Ejercicios
satori.get('/ejercicios', (req, res) => {
  res.status(200).json(exercises);
})

// leer un Ejercicios por ID
satori.get('/ejercicios/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const exerciseId = exercises.find((exercise) => exercise.id === id);
  if (exerciseId) {
    res.status(200).json(exerciseId);
  } else {
    res.status(404).json({ message: 'Ejercicio no encontrado' });
  }
});

// actualizar Ejercicios
satori.put('/ejercicios/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const exerciseId = exercises.findIndex((exercise) => exercise.id === id);
  if (exerciseId === -1) {
    return res.status(404).json({ message: 'Ejercicio no encontrado' });
  }

  const { name, description, videoUrl, muscleGroup, difficulty } = req.body;
  if (!name || !description || !videoUrl || !muscleGroup || !difficulty) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const updatedExercises = {
    id,
    name,
    description,
    videoUrl,
    muscleGroup,
    difficulty,
  };
  exercises[exerciseId] = updatedExercises;
  res.status(200).json(updatedExercises);
});

// eliminar Ejercicios
satori.delete('/ejercicios/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const exerciseId = exercises.findIndex((exercise) => exercise.id === id);
  if (exerciseId === -1) {
    return res.status(404).json({ message: 'Ejercicio no encontrado' });
  }
  exercises.splice(exerciseId, 1);
  res.status(204).send();
});
//#endregion

//#region CRUD Progress
const progresess = [];

// crear Progreso
satori.post('/progresos', (req, res) => {
  const { userId, SessionIndex, lasCompletedExercises, finished, updateAt } = req.body;
  if (!userId || !SessionIndex || !lasCompletedExercises || finished === undefined || !updateAt) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const newProgress = {
    id: progresess.length + 1,
    userId,
    SessionIndex,
    lasCompletedExercises,
    finished,
    updateAt,
  };
  progresess.push(newProgress);
  res.status(201).json(newProgress);
})

// leer Progreso
satori.get('/progresos', (req, res) => {
  res.status(200).json(progresess);
})

// leer un Progreso por ID
satori.get('/progresos/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const progressId = progresess.find((progress) => progress.id === id);
  if (progressId) {
    res.status(200).json(progressId);
  } else {
    res.status(404).json({ message: 'Progreso no encontrado' });
  }
});

// actualizar Progreso
satori.put('/progresos/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const progressId = progresess.findIndex((progress) => progress.id === id);
  if (progressId === -1) {
    return res.status(404).json({ message: 'Progreso no encontrado' });
  }

  const { userId, SessionIndex, lasCompletedExercises, finished, updateAt } = req.body;
  if (!userId || !SessionIndex || !lasCompletedExercises || finished === undefined || !updateAt) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const updatedProgress = {
    id,
    userId,
    SessionIndex,
    lasCompletedExercises,
    finished,
    updateAt,
  };
  progresess[progressId] = updatedProgress;
  res.status(200).json(updatedProgress);
});

// eliminar Progreso
satori.delete('/progresos/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const progressId = progresess.findIndex((progress) => progress.id === id);
  if (progressId === -1) {
    return res.status(404).json({ message: 'Ejercicio no encontrado' });
  }
  progresess.splice(progressId, 1);
  res.status(204).send();
});
//#endregion

//#region CRUD UserWorkoutPlan
const userPlan = [];

// crear Plan de usuario
satori.post('/planUsuario', (req, res) => {
  const { userId, sessions } = req.body;
  if (!userId || !sessions) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const newUserPlan = {
    id: progresess.length + 1,
    userId,
    SessionIndex,
    lasCompletedExercises,
    finished,
    updateAt,
  };
  userPlan.push(newUserPlan);
  res.status(201).json(newUserPlan);
})

// leer Plan de usuario
satori.get('/planUsuario', (req, res) => {
  res.status(200).json(userPlan);
})

// leer un Plan de usuario por ID
satori.get('/planUsuario/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const userPlanId = userPlan.find((plan) => plan.id === id);
  if (userPlanId) {
    res.status(200).json(userPlanId);
  } else {
    res.status(404).json({ message: 'Plan no encontrado' });
  }
});

// actualizar Plan de usuario
satori.put('/planUsuario/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const userPlanId = userPlan.findIndex((plan) => plan.id === id);
  if (userPlanId === -1) {
    return res.status(404).json({ message: 'Plan no encontrado' });
  }

  const { userId, sessions } = req.body;
  if (!userId || !sessions) {
    return res.status(400).json({ message: 'Falta campo obligatorio' });
  }
  const updatedPlan = {
    id,
    userId,
    sessions,
  };
  userPlan[userId] = updatedPlan;
  res.status(200).json(updatedPlan);
});

// eliminar Plan de usuario
satori.delete('/planUsuario/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const userPlanId = userPlan.findIndex((plan) => plan.id === id);
  if (userPlanId === -1) {
    return res.status(404).json({ message: 'Plan no encontrado' });
  }
  userPlan.splice(userPlanId, 1);
  res.status(204).send();
});
//#endregion

// Verificación que el servidor esté en línea.
satori.listen(port, () => {
  console.log(`Servidor OK en el puerto: ${port}`)
})
