export interface EntityJokeType {
    id: string
    value: string
    created_at: string
    updated_at: string
    icon_url: string
    url: string
}

export interface EntityJokesSearchType {
    total: number
    result: EntityJokeType[]
}
