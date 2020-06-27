export default class UnsplashApiService {
   _apiBase = `https://api.unsplash.com/search/photos/?client_id=-rbns_YYFjI8HhS_fp6gsNZE4o-XJAdkqqvKsQbKfWM&query=`;

   async getData(name) {
       const data = await fetch(`${this._apiBase}${name}`);

       return await data.json();
   }
}