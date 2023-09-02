import axios from 'axios'
import type { EntityJokesSearchType } from './jokes.type'

export class EntityJokesApi {
    private API_URL: string

    constructor() {
        this.API_URL = 'https://api.chucknorris.io'
    }

    public async searchJokes(joke: string): Promise<EntityJokesSearchType> {
        const params = {
            query: joke,
        }

        const response = await axios.get<EntityJokesSearchType>(
            `${this.API_URL}/jokes/search`,
            {
                params,
            }
        )

        return response.data
    }
}
