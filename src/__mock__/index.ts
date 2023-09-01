interface Joke {
    id: string
    value: string
    created_at: string
    updated_at: string
    icon_url: string
    url: string
}

export const mockJokes: Joke[] = []

for (let i = 1; i <= 1_000; i++) {
    mockJokes.push({
        id: `${i}`,
        value: `Joke ${i}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        icon_url: 'https://example.com/icon.png',
        url: 'https://example.com/joke/' + i,
    })
}
