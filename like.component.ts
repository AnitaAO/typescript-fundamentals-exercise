export class LikeComponent {
  constructor(private _likesCount: number, private _isSelected: boolean){
  }

  //create a method to check if the button is selected or not!
  // onClick(){
  // if (this.isSelected){
  //   this.likesCount--;
  //   // this.isSelected = false; //  =>  instead of using this statement and line 12, we can toggle it in line 14
  // } else {
  //   this.likesCount++
  //   // this.isSelected = true;
  // }
  // this.isSelected = !this.isSelected //this true/false statemnet is used for toggling
  // }


  //here is another cleaner method of writing the if statement
  onClick(){
    this._likesCount += (this._isSelected)? -1 : +1;
    this._isSelected = !this._isSelected   
  }

  get likesCount() {
    return this._likesCount;
  }

  get isSelected() {
    return this._isSelected;
  }

}
