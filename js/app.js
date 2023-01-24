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
        
        this.LogColor = 'brown'
        this.LogBorder = 'rgb(129, 58, 27)'

        this.topLog = {x:600, y:50, w:0}
        this.topLog2 = {x:900, y:50, w:0}
        this.topLog3 = {x:1200, y:50, w:0}

        this.scndBtmLog = {x:600, y:150, w:0}
        this.scndBtmLog2 = {x:900, y:150, w:0}
        this.scndBtmLog3 = {x:1200, y:150, w:0}

        this.btmLog = {x:600, y:200, w:0}
        this.btmLog2 = {x:900, y:200, w:0}
        this.btmLog3 = {x:1200, y:200, w:0}

        this.busColor = 'yellow'
        this.busBorder = 'yellow'

        this.bus = {x:600,y:350,w:0}
        this.bus2 = {x:1000,y:350,w:0}
        this.bus3 = {x:1400,y:350,w:0}

        this.fastCarColor = 'red'
        this.fastCarBorder = 'red'

        this.fastCar = {x:-50,y:400,w:0}
        this.fastCar2 = {x:-650,y:400,w:0}

        this.greenCarColor = 'lightgreen'
        this.greenCarBorder = 'lightgreen'

        this.greenCar = {x:600,y:450,w:0}
        this.greenCar2 = {x:800,y:450,w:0}
        this.greenCar3 = {x:1300,y:450,w:0}

        this.dumptruckColor = 'rgb(255, 210, 29)'
        this.dumptruckBorder = 'rgb(255, 210, 29)'

        this.dumptruck = {x:-50,y:500,w:0}
        this.dumptruck2 = {x:-350,y:500,w:0}
        this.dumptruck3 = {x:-650,y:500,w:0}

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
            this.spawnCars()
            this.moveCars()
            this.respawnCars()
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
        const context = this.frogBoardCtx

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
    }
    
    spawnCars(){
        const context = this.frogBoardCtx

        const bus = this.bus
        const bus2 = this.bus2
        const bus3 = this.bus3

        const fastCar = this.fastCar
        const fastCar2 = this.fastCar2

        const greenCar = this.greenCar
        const greenCar2 = this.greenCar2
        const greenCar3 = this.greenCar3

        const dumptruck = this.dumptruck
        const dumptruck2 = this.dumptruck2
        const dumptruck3= this.dumptruck3
        
        context.fillStyle = this.busColor
        context.strokeStyle = this.busBorder
        context.fillRect(bus.x, bus.y, 100, 50)
        context.strokeRect(bus.x, bus.y, 100, 50)
        this.bus.w = this.bus.x + 100

        context.fillStyle = this.busColor
        context.strokeStyle = this.busBorder
        context.fillRect(bus2.x, bus2.y, 100, 50)
        context.strokeRect(bus2.x, bus2.y, 100, 50)
        this.bus2.w = this.bus2.x + 100

        context.fillStyle = this.busColor
        context.strokeStyle = this.busBorder
        context.fillRect(bus3.x, bus3.y, 100, 50)
        context.strokeRect(bus3.x, bus3.y, 100, 50)
        this.bus3.w = this.bus3.x + 100

        context.fillStyle = this.fastCarColor
        context.strokeStyle = this.fastCarBorder
        context.fillRect(fastCar.x, fastCar.y, 50, 50)
        context.strokeRect(fastCar.x, fastCar.y, 50, 50)
        this.fastCar.w = this.fastCar.x + 50

        context.fillStyle = this.fastCarColor
        context.strokeStyle = this.fastCarBorder
        context.fillRect(fastCar2.x, fastCar2.y, 50, 50)
        context.strokeRect(fastCar2.x, fastCar2.y, 50, 50)
        this.fastCar2.w = this.fastCar2.x + 50

        context.fillStyle = this.greenCarColor
        context.strokeStyle = this.greenCarBorder
        context.fillRect(greenCar.x, greenCar.y, 50, 50)
        context.strokeRect(greenCar.x, greenCar.y, 50, 50)
        this.greenCar.w = this.greenCar.x + 50

        context.fillStyle = this.greenCarColor
        context.strokeStyle = this.greenCarBorder
        context.fillRect(greenCar2.x, greenCar2.y, 50, 50)
        context.strokeRect(greenCar2.x, greenCar2.y, 50, 50)
        this.greenCar2.w = this.greenCar2.x + 50

        context.fillStyle = this.greenCarColor
        context.strokeStyle = this.greenCarBorder
        context.fillRect(greenCar3.x,greenCar3.y, 50, 50)
        context.strokeRect(greenCar3.x,greenCar3.y, 50, 50)
        this.greenCar3.w = this.greenCar3.x + 50

        context.fillStyle = this.dumptruckColor
        context.strokeStyle = this.dumptruckBorder
        context.fillRect(dumptruck.x, dumptruck.y, 50, 50)
        context.strokeRect(dumptruck.x, dumptruck.y, 50, 50)
        this.dumptruck.w = this.dumptruck.x + 50

        context.fillStyle = this.dumptruckColor
        context.strokeStyle = this.dumptruckBorder
        context.fillRect(dumptruck2.x, dumptruck2.y, 50, 50)
        context.strokeRect(dumptruck2.x, dumptruck2.y, 50, 50)
        this.dumptruck2.w = this.dumptruck2.x + 50

        context.fillStyle = this.dumptruckColor
        context.strokeStyle = this.dumptruckBorder
        context.fillRect(dumptruck3.x, dumptruck3.y, 50, 50)
        context.strokeRect(dumptruck3.x, dumptruck3.y, 50, 50)
        this.dumptruck3.w = this.dumptruck3.x + 50
    }

    moveCars(){
        const bus = this.bus
        const bus2 = this.bus2
        const bus3 = this.bus3

        const fastCar = this.fastCar
        const fastCar2 = this.fastCar2

        const greenCar = this.greenCar
        const greenCar2 = this.greenCar2
        const greenCar3 = this.greenCar3

        const dumptruck = this.dumptruck
        const dumptruck2 = this.dumptruck2
        const dumptruck3= this.dumptruck3

        requestAnimationFrame(this.moveLogs)

        const busSpeed = .5
        bus.x -= busSpeed
        bus2.x -= busSpeed
        bus3.x -= busSpeed

        const fastCarSpeed = .9
        fastCar.x += fastCarSpeed
        fastCar2.x += fastCarSpeed

        const greenCarSpeed = .9
        greenCar.x -= greenCarSpeed
        greenCar2.x -= greenCarSpeed
        greenCar3.x -= greenCarSpeed

        const dumptruckSpeed = .4
        dumptruck.x += dumptruckSpeed
        dumptruck2.x += dumptruckSpeed
        dumptruck3.x += dumptruckSpeed
    }

    respawnCars(){
        const bus = this.bus
        const bus2 = this.bus2
        const bus3 = this.bus3
        
        const fastCar = this.fastCar
        const fastCar2 = this.fastCar2

        const greenCar = this.greenCar
        const greenCar2 = this.greenCar2
        const greenCar3 = this.greenCar3

        const dumptruck = this.dumptruck
        const dumptruck2 = this.dumptruck2
        const dumptruck3= this.dumptruck3

        if (bus.x <= -600){
            bus.x = 600
        }
        if(bus2.x <= -600){
            bus2.x = 600
        }
        if(bus3.x <= -600){
            bus3.x = 600
        }

        if (fastCar.x >= 1200){
            fastCar.x = -50
        }
        if(fastCar2.x >= 1200){
            fastCar2.x = -50
        }

        if (greenCar.x <= -600){
            greenCar.x = 600
        }
        if(greenCar2.x <= -600){
            greenCar2.x = 600
        }
        if(greenCar3.x <= -600){
            greenCar3.x = 600
        }

        if (dumptruck.x >= 600){
            dumptruck.x = -250
        }
        if(dumptruck2.x >= 600){
            dumptruck2.x = -250
        }
        if (dumptruck3.x >= 600){
            dumptruck3.x = -250
        }
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

        const scndBtmLogSpeed = .25
        scndBtmLog.x -= scndBtmLogSpeed
        scndBtmLog2.x -= scndBtmLogSpeed
        scndBtmLog3.x -= scndBtmLogSpeed

        const btmLogSpeed = .4
        btmLog.x -= btmLogSpeed
        btmLog2.x -= btmLogSpeed
        btmLog3.x -= btmLogSpeed
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
            } else{
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 150){
            if(frog.x >= this.scndBtmLog.x && frog.w <= this.scndBtmLog.w){
                frog.x -= .3
            } else if(frog.x >= this.scndBtmLog2.x && frog.w <= this.scndBtmLog2.w){
                frog.x -= .3
            } else if(frog.x >= this.scndBtmLog3.x && frog.w <= this.scndBtmLog3.w){
                frog.x -= .3
            } else{
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 200){
            if(frog.x >= this.btmLog.x && frog.w <= this.btmLog.w){
                frog.x += .4
            } else if(frog.x >= this.btmLog2.x && frog.w <= this.btmLog2.w){
                frog.x += .4
            } else if(frog.x >= this.btmLog3.x && frog.w <= this.btmLog3.w){
                frog.x += .4
            } else{
                this.lives--
                frog.x = 300
                frog.y = 600
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

        if(btmLog.x <= -300){
            btmLog.x = 600
        }
        if(btmLog2.x <= -300){
            btmLog2.x = 600
        }
        if(btmLog3.x <= -300){
            btmLog3.x = 600
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

