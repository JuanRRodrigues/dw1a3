export class Stage{
    cosntructor(){
        document.querySelector('img[alt="mexicoStage"]');
    }


draw(context){
    context.drawImage(this.image, 0, 0);
  }
}

