class Form{
constructor(){
    this.input= createInput("").attribute("placeholder","names")
    this.playButton= createButton("play")
    this.greeting= createElement ("h2")
    this.title = createElement ("h2")
    this.resetButton= createButton("reset")
}
 display(){
     background(formBg)

     this.title.html("MARATHON RUNNER")
     this.title.position(displayWidth/2.5,displayHeight/2.5)

     this.input.position(displayWidth/2-40, displayHeight/2-80)

     this.playButton.position(displayWidth/2, displayHeight/2+20)
     this.playButton.mousePressed(()=>{
         player.name=this.input.value()
         playerCount+=1
         player.index=playerCount
         player.update()
         player.updateCount(playerCount)
         this.greeting.html("WELCOME"+player.name)
         this.greeting.position(displayWidth/2, displayHeight/2)

     })
 }
}   