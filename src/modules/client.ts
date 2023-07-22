import { Client, GatewayIntentBits } from 'discord.js';

class Bot {
  private readonly token: string;
  private readonly client: Client;

  constructor(token: string) {
    this.token = token;
    this.client = new Client({ intents: this.getIntents() });
  }

  private getIntents(): GatewayIntentBits[] {
    return [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences
    ];
  }
  
  public getClient(): Client {
    return this.client;
  }

  public login(): void {
    this.client.login(this.token);
  }
}

export default Bot;
