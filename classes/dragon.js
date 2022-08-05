// Your code here
class Dragon{
  constructor(name, color){
    this.name=name,
    this.color=color
  }
  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...args){
    // let dragons=[]
    // for(let i=0; i<args.length; i++){
    //   dragons.push(args[i].name)
    // }
    // return dragons
    return args.map(i=>i.name)
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}