// export interface Movies {
//     id: number;
//     title: string;
//     image: string;
//     isWatched: boolean;
//     isFav: boolean;
// }

export interface StringDictionary<T>{
    [key:string]:T;
}

export interface Movies {
    count: number,
    next: null,
    previous: null,
    results:
    {
        title: string,
        episode_id: number,
        opening_crawl: string,
        director: string,
        producer: string,
        release_date: Date,
        characters: [],
        planets: [],
        starships: [],
        vehicles: [],
        species: [],
        created: Date,
        edited: Date,
        url: string,
    }
}

export interface Movie {
    characters: [],
    created: Date,
    director: string,
    edited: Date,
    episode_id: number,
    opening_crawl: string,
    planets: [],
    producer: string,
    release_date: Date,
    species: [],
    starships: [],
    title: string,
    url: string,
    vehicles: []
}

export interface Characters {
    count: 82,
    next: string,
    previous: null,
    results: [
        {
            name: string,
            height: number,
            mass: number,
            hair_color: string,
            skin_color: string,
            eye_color: string,
            birth_year: string,
            gender: string,
            homeworld: string,
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: Date,
            edited: Date,
            url: string
        }]
}

export interface Character {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: Date,
    edited: Date,
    url: string
}

export interface Planet {
    name: string, 
    rotation_period: number, 
    orbital_period: number, 
    diameter: number, 
    climate: string, 
    gravity: string, 
    terrain: string, 
    surface_water: number, 
    population: number, 
    residents: [], 
    films: [], 
    created: Date, 
    edited: Date, 
    url: string,
}