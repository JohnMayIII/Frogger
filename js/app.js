class Frogger{
    constructor(){
        this.boardBorder = 'black'
        this.boardBg = 'black'

        this.sideWalkColor = 'purple'
        this.sideWalkBorder = 'rgb(187, 0, 255)'
        this.sideWalk =  [
            {x:0,y:600},{x:0,y:300}
        ]

        this.grassBedColor = 'lightgreen'
        this.grassBedBorder = 'green'
        this.grassBed = [
            {x:0,y:0}
        ]

        this.riverColor = 'rgb(7, 7, 87)'
        this.riverBorder = 'blue'
        this.river = [
            {x:0, y:50}, {x:0, y:100}, {x:0, y:150}, {x:0, y:200} , {x:0, y:250}
        ]

        this.gameEnded = 'false'

        this.frogBoard = document.getElementById('frogBoard')
        this.frogBoardCtx = frogBoard.getContext('2d')

        this.frogColor = 'green'
        this.frogBorder = 'green'
        this.frog = {x:300,y:600}

        this.tempLog = {x:250, y:250, w:0}
        
        this.LogColor = 'brown'
        this.LogBorder = 'rgb(129, 58, 27)'

        this.topLog = {x:600, y:50, w:0}
        this.topLog2 = {x:900, y:50, w:0}
        this.topLog3 = {x:1200, y:50, w:0}

        this.scndBtmLog = {x:600, y:150, w:0}
        this.scndBtmLog2 = {x:900, y:150, w:0}
        this.scndBtmLog3 = {x:1200, y:150, w:0}

        this.btmLog = {x:-150, y:200, w:0}
        this.btmLog2 = {x:-450, y:200, w:0}
        this.btmLog3 = {x:-750, y:200, w:0}

        this.lives = 6
    }

    init(){
        // if(this.hasGameEnded()) return
        setTimeout(()=>{
            this.clearCanvas()
            this.drawBoard()
            this.spawnLogs()
            this.drawFrog()
            this.moveLogs()
            this.respawnLogs()
            this.frogDeath()
            this.rideLog()
            this.hasGameEnded()
            if(this.gameEnded != true){
                this.init()
            }

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
        this.frog.w = this.frog.x + 50
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
        
        if(frog.y >= 650){
            frog.y = 600
        }
        if (frog.y < 0){
            frog.y = 0
        }
        // if(frog.x < 0){
        //     frog.x = 0
        // }  
        // if(frog.x >= 600){
        //     frog.x = 550
        // }
    }

    spawnLogs(){
        const context = this. frogBoardCtx

        const tempLog = this.tempLog

        const topLog = this.topLog
        const topLog2 = this.topLog2
        const topLog3 = this.topLog3
        
        const scndBtmLog = this.scndBtmLog
        const scndBtmLog2 = this.scndBtmLog2
        const scndBtmLog3 = this.scndBtmLog3
        
        const btmLog = this.btmLog
        const btmLog2 = this.btmLog2
        const btmLog3 = this.btmLog3
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(topLog.x, topLog.y, 150, 50)
        context.strokeRect(topLog.x, topLog.y, 150, 50)
        this.topLog.w = this.topLog.x + 150
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(topLog2.x, topLog2.y, 150, 50)
        context.strokeRect(topLog2.x, topLog2.y, 150, 50)
        this.topLog2.w = this.topLog2.x + 150
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(topLog3.x, topLog3.y, 150, 50)
        context.strokeRect(topLog3.x, topLog3.y, 150, 50)
        this.topLog3.w = this.topLog3.x + 150
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(scndBtmLog.x,scndBtmLog.y, 150, 50)
        context.strokeRect(scndBtmLog.x,scndBtmLog.y, 150, 50)
        this.scndBtmLog.w = this.scndBtmLog.x + 150

        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(scndBtmLog2.x,scndBtmLog2.y, 150, 50)
        context.strokeRect(scndBtmLog2.x,scndBtmLog2.y, 150, 50)
        this.scndBtmLog2.w = this.scndBtmLog2.x + 150
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(scndBtmLog3.x,scndBtmLog3.y, 150, 50)
        context.strokeRect(scndBtmLog3.x,scndBtmLog3.y, 150, 50)
        this.scndBtmLog3.w = this.scndBtmLog3.x + 150
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(btmLog.x, btmLog.y, 150, 50)
        context.strokeRect(btmLog.x, btmLog.y, 150, 50)
        this.btmLog.w = this.btmLog.x + 150
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(btmLog2.x, btmLog2.y, 150, 50)
        context.strokeRect(btmLog2.x, btmLog2.y, 150, 50)
        this.btmLog2.w = this.btmLog2.x + 150
        
        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(btmLog3.x, btmLog3.y, 150, 50)
        context.strokeRect(btmLog3.x, btmLog3.y, 150, 50)
        this.btmLog3.w = this.btmLog3.x + 150
        
        context.fillSyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(tempLog.x, tempLog.y, 150, 50)
        context.strokeRect(tempLog.x, tempLog.y, 150, 50)
        this.tempLog.w = this.tempLog.x + 150
    }
    
    moveLogs(){
        const topLog = this.topLog
        const topLog2 = this.topLog2
        const topLog3 = this.topLog3
        
        const scndBtmLog = this.scndBtmLog
        const scndBtmLog2 = this.scndBtmLog2
        const scndBtmLog3 = this.scndBtmLog3

        const btmLog = this.btmLog
        const btmLog2 = this.btmLog2
        const btmLog3 = this.btmLog3
        requestAnimationFrame(this.moveLogs)

        const topLogSpeed = .5
        topLog.x -= topLogSpeed
        topLog2.x -= topLogSpeed
        topLog3.x -= topLogSpeed

        const scndBtmLogSpeed = .3
        scndBtmLog.x -= scndBtmLogSpeed
        scndBtmLog2.x -= scndBtmLogSpeed
        scndBtmLog3.x -= scndBtmLogSpeed

        const btmLogSpeed = .4
        btmLog.x += btmLogSpeed
        btmLog2.x += btmLogSpeed
        btmLog3.x += btmLogSpeed
    }

    rideLog(){
        const frog = this.frog
        if(frog.y == 50){
            if(frog.x >= this.topLog.x && frog.w <= this.topLog.w){
                frog.x -= .5
            } else if(frog.x >= this.topLog2.x && frog.w <= this.topLog2.w){
                frog.x -= .5
            } else if(frog.x >= this.topLog3.x && frog.w <= this.topLog3.w){
                frog.x -= .5
            }
        }
    }

    respawnLogs(){
        const topLog = this.topLog
        const topLog2 = this.topLog2
        const topLog3 = this.topLog3

        const scndBtmLog = this.scndBtmLog
        const scndBtmLog2 = this.scndBtmLog2
        const scndBtmLog3 = this.scndBtmLog3

        const btmLog = this.btmLog
        const btmLog2 = this.btmLog2
        const btmLog3 =this.btmLog3

        if (topLog.x <= -300){
            topLog.x = 600
        }
        if(topLog2.x <= -300){
            topLog2.x = 600
        }
        if(topLog3.x <= -300){
            topLog3.x = 600
        }

        if(scndBtmLog.x <= -300){
            scndBtmLog.x = 600
        }
        if(scndBtmLog2.x <= -300){
            scndBtmLog2.x = 600
        }
        if(scndBtmLog3.x <= -300){
            scndBtmLog3.x = 600
        }

        if(btmLog.x >= 600){
            btmLog.x = -300
        }
        if(btmLog2.x >= 600){
            btmLog2.x = -300
        }
        if(btmLog3.x >= 600){
            btmLog3.x = -300
        }
    }

    frogDeath(){
        const frog = this.frog
        //frog touches far wall
        if(frog.x <= -10 || frog.x >= 590){
            this.lives--
            console.log(this.lives)
            frog.x = 300
            frog.y = 600
        }

        //frog touches water

        //frog hits car
    
        //frog touches gator

    }

    hasGameEnded(){
        if(this.lives == 0){
            this.gameEnded = true
        }
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

