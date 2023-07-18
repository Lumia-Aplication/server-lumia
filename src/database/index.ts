import mongoose from 'mongoose';

const cluster = process.env.CLUSTER ?? '';

export const database = mongoose
  .connect(cluster, {
    useUnifiedTopology: true,
    bufferCommands: false,
    autoIndex: true,
    autoCreate: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log('Conectado ao banco de dados MongoDB.');
  })
  .catch((error: Error) => {
    console.error('Erro ao conectar ao banco de dados MongoDB:', error);
  });
