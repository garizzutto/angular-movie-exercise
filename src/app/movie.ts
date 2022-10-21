export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

export interface SingleMovie extends Movie {
  belongs_to_collection: null,
  budget: number,
  homepage: string,
  imdb_id: string,
  production_companies: ProductionCompanies[],
  revenue: number,
  runtime: number,
  status: string,
  tagline: string,
  genres: Genre[],
}

interface ProductionCompanies {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

interface Genre {
  id: number,
  name: string,
}

export interface Category extends Genre {}