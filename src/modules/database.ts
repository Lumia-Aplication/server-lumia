import mongoose from 'mongoose';

class Database {
  public async connect(cluster: string): Promise<void> {
    try {
      await mongoose.connect(cluster, {
        bufferCommands: false,
        autoIndex: true,
        autoCreate: true,
      });
      console.log('Conectado ao banco de dados MongoDB.');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados MongoDB:', error);
    }
  }
}

export default Database;