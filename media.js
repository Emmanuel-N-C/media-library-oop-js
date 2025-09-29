class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }

  getAverageRating() {
    if (this._ratings.length === 0) {
      return 0;
    }
    const sum = this._ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / this._ratings.length;
  }
}
 export default Media;



