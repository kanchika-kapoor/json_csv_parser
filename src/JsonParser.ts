import {Parser} from './Parser'

export interface Entry{
    title: string
    released: number
    genres: []
}

export class JsonParser extends Parser{
    public super(path: string){}

    protected parsedData: Entry[] = []

    parse(): void {
        (JSON.parse(this.data) as [{
            "title": string
            "image": string
            "rating": number
            "releaseYear": number
            "genre": []
        }]
        ).map((entry)=>{
            this.parsedData.push({
                title: entry.title,
                released: entry.releaseYear,
                genres: entry.genre
            })
        })

        console.log(this.parsedData)
    }
}