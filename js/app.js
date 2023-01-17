class Frogger{
    constructor(){
        this.boardBorder = 'black'
        this.boardBg = 'black'

        this.sideWalkColor = 'purple'
        this.sideWalkBorder = 'rgb(187, 0, 255)'
        this.sideWalk =  [
            {x:0,y:550},{x:0,y:250}
        ]

        this.grassBedColor = 'lightgreen'
        this.grassBedBorder = 'green'
        this.grassBed = [
            {x:0,y:0}
        ]

        this.riverColor = 'rgb(7, 7, 87)'
        this.riverBorder = 'blue'
        this.river = [
            {x:0, y:50}, {x:0, y:100}, {x:0, y:150}, {x:0, y:200}
        ]

        this.gameEnded = 'false'

        this.frogBoard = document.getElementById('frogBoard')
        this.frogBoardCtx = frogBoard.getContext('2d')

        this.frogColor = 'green'
        this.frogBorder = 'green'
        this.frog = {x:300,y:550}
        
        
        this.lives = 4
    }

    init(){
        // if(this.hasGameEnded()) return
        setTimeout(()=>{
            this.clearCanvas()
            this.drawBoard()
            this.drawFrog()
            // this.moveFrog()

            this.init()
        })

    }

    clearCanvas(){
        const frogBoard = this.frogBoard
        const frogBoardCtx = this.frogBoardCtx

        frogBoardCtx.fillStyle = this.boardBg
        frogBoardCtx.strokeStyle = this.boardBorder
        frogBoardCtx.fillRect(0,0,frogBoard.width, frogBoard.height)
        frogBoardCtx.strokeRect(0,0,frogBoard.width, frogBoard.height)
    }

    drawBoard(){
        const context = this.frogBoardCtx
        const sideWalk = this.sideWalk
        const grassBed = this.grassBed
        const river = this.river

        sideWalk.forEach(part =>{
            context.fillStyle = this.sideWalkColor
            context.strokeStyle = this.sideWalkBorder
            context.fillRect(part.x, part.y, 600, 50)
            context.strokeRect(part.x, part.y, 600, 50)
        })

        grassBed.forEach(part =>{
            context.fillStyle = this.grassBedColor
            context.strokeStyle = this.grassBedBorder
            context.fillRect(part.x, part.y, 600, 50)
            context.strokeRect(part.x, part.y, 600, 50)
        })

        river.forEach(part =>{
            context.fillStyle = this.riverColor
            context.strokeStyle = this.riverColor
            context.fillRect(part.x, part.y, 600, 50)
            context.strokeRect(part.x, part.y, 600, 50)
        })
    }

    drawFrog(){
        const context = this. frogBoardCtx
        const frog = this.frog

        context.fillStyle = this.frogColor
        context.strokeStyle = this.frogBorder
        context.fillRect(frog.x, frog.y, 50, 50)
        context.strokeRect(frog.x, frog.y, 50, 50)
    }

    moveFrog(){
        const frog = this.frog
        this.onkeydown(event)
    }

    onkeydown(event) {
        // console.log(event.keyCode)
        const keyPressed = event.keyCode
        const frog = this.frog

        // 
        switch(keyPressed) {
                case 38:
                    frog.y -= 50
                    break;
                case 40:
                    frog.y += 50
                    break;
                case 37:
                    frog.x -= 50
                    break;
                case 39:
                    frog.x += 50
                    break;
        };
        
        if(frog.y >= 600){
            frog.y = 550
        }
        if (frog.y < 0){
            frog.y = 0
        }
        if(frog.x < 0){
            frog.x = 0
        }  
        if(frog.x >= 600){
            frog.x = 550
        }
    }

    spawnLogs(){

    }

    despawnLogs(){
        
    }

    hasGameEnded(){
        //frog hits car

        //frog touches water

        //frog touches gator

        //frog touches far wall
    }
}

const froggerGame = new Frogger()

const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', ()=>{
    froggerGame.gameEnded = false
    froggerGame.init()
})

document.addEventListener('keydown', (e)=>{
    froggerGame.onkeydown(event)
    
})

