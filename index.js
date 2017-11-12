function BoardMember(na,hs,tr){
    this.name = na;
    this.homeState = hs;
    this.training = tr;
    this.veto = function(){
      return "No, I must disagree"
    }
    this.approve = function(){
      return "You can do that!"
    }
}
///BoardMember.prototype.veto(){
///}
