function BoardMember(na,hs,tr){
  this.name = na;
  this.homeState = hs;
  this.training = tr;
}
BoardMember.prototype.veto(){
  return "No, I must disagree!"
}
