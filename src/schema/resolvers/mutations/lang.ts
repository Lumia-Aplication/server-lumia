import { type InputLang, type Models } from '../../../types'

export default {
    Mutation: {
        changeLang: async (_: unknown, { input }: { input: InputLang }, { models }: { models: Models }) => {
            const { id, lang } = input;
            const { User } = models;

            try {

                const user = await User.findOneAndUpdate({ userId: id }, { lang }, { new: true })
                return user;
            } catch (error) {
                console.error(error);
            }
        }
    }
}