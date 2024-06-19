export interface Movie {
    id: number;
    name?: string;
    alternativeName?: string;
    poster: {
        url?: string; 
        previewUrl?: string; 
    };
    year: number;
    rating:{
        imdb: number;
    };
  }

  export interface Genre {
    name: string;
  }  
  
  export interface MovieDetail {
    id: number;
    name?: string;
    alternativeName?: string;
    description?: string;
    poster: {
        url?: string; 
        previewUrl?: string; 
    };
    rating:{
      imdb: number;
    };
    year: number;
    genres: Genre[];
  }
  