export class LikeComponent {
  constructor(public likesCount: number, public isSelected: boolean){
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
    this.likesCount += (this.isSelected)? -1 : +1;
    this.isSelected = !this.isSelected   
  }

}
