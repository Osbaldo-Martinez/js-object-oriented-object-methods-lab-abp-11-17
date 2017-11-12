function BoardMember(na,hs,tr){
    this.name = na;
    this.homeState = hs;
    this.training = tr;
    this.veto = function(){
      return "No, I must disagree"
    }
}
///BoardMember.prototype.veto(){
///}
