import Media from './media.js';

class CD extends Media{
  constructor(title,artist,songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
}

export default CD;