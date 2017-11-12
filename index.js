class BoardMember(na,hs,tr){
  constructor{
    this.name = na;
    this.homeState = hs;
    this.training = tr;
  }
}
BoardMember.prototype.veto(){
  return "No, I must disagree!"
}
