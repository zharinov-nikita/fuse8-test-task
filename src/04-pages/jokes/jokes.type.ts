export interface Joke {
    id: string
    value: string
    created_at: string
    updated_at: string
    icon_url: string
    url: string
}

export interface JokesSearch {
    total: number
    result: Joke[]
}
