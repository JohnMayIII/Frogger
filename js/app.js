class Frogger{
    constructor(){
        this.boardBorder = 'black'
        this.boardBg = 'black'

        this.sideWalkColor = 'purple'
        this.sideWalkBorder = 'rgb(187, 0, 255)'
        this.sideWalk =  [
            {x:0,y:600},{x:0,y:300},{x:0, y:650}
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
        this.frogBorder = 'black'
        this.frog = {x:300,y:600,hw:0,w:0}
        
        this.LogColor = 'rgb(129, 58, 27)'
        this.LogBorder = 'burlywood'

        this.topLog = {x:600, y:50, w:0}
        this.topLog2 = {x:900, y:50, w:0}
        this.topLog3 = {x:1200, y:50, w:0}

        this.scndTopLog = {x:-150,y:100,w:0}
        this.scndTopLog2 = {x:-450,y:100,w:0}
        this.scndTopLog3 = {x:-750,y:100,w:0}
        

        this.scndBtmLog = {x:600, y:150, w:0}
        this.scndBtmLog2 = {x:900, y:150, w:0}
        this.scndBtmLog3 = {x:1200, y:150, w:0}

        this.btmLog = {x:600, y:200, w:0}
        this.btmLog2 = {x:900, y:200, w:0}
        this.btmLog3 = {x:1200, y:200, w:0}

        this.trueBtmLog = {x:-150,y:250,w:0}
        this.trueBtmLog2 = {x:-450,y:250,w:0}
        this.trueBtmLog3 = {x:-750,y:250,w:0}
        

        this.busColor = 'yellow'
        this.busBorder = 'yellow'

        this.bus = {x:600,y:350,w:0}
        this.bus2 = {x:1000,y:350,w:0}
        this.bus3 = {x:1400,y:350,w:0}

        this.fastCarColor = 'maroon'
        this.fastCarBorder = 'maroon'

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

        this.bottomCarColor = 'red'
        this.bottomCarBorder = 'red'

        this.bottomCar = {x:600,y:550,w:0}
        this.bottomCar2 = {x:850,y:550,w:0}
        this.bottomCar3 = {x:1100,y:550,w:0}

        this.goalZoneColor = "rgb(7, 7, 87)"
        this.goalZoneBorder = "lightgreen"

        this.goalZone = {x:50,y:0,w:0}
        this.goalZone2 = {x:165,y:0,w:0}
        this.goalZone3 = {x:280,y:0,w:0}
        this.goalZone4 = {x:390,y:0,w:0}
        this.goalZone5 = {x:500,y:0,w:0}

        this.gZBool = false
        this.gZBool2 = false
        this.gZBool3 = false
        this.gZBool4 = false
        this.gZBool5 = false

        this.life = {x:25, y:650}
        this.life2 = {x:100, y:650}
        this.life3 = {x:175, y:650}
        this.life4 = {x:250, y:650}
        this.life5 = {x:325, y:650}

        this.lives = 6
        this.bankedFrogs = 0

    }

    init(){
        // if(this.hasGameEnded()) return
        setTimeout(()=>{
            this.clearCanvas()
            this.drawBoard()
            this.loseLives()
            this.drawLives()
            this.drawBankedFrogs()
            this.initBankedFrog()
            this.spawnLogs()
            this.drawFrog()
            this.moveLogs()
            this.respawnLogs()
            this.spawnCars()
            this.moveCars()
            this.respawnCars()
            this.frogDeath()
            this.gameWin()
            this.rideLog()
            this.resultDisplay()
            this.hasGameEnded()
            if(this.gameEnded == true){
                this.drawBankedFrogs()
                this.resultDisplay()
            }
            if(this.gameEnded != true){
                this.init()
            }

        })

    }

    drawLives(){
        const context = this.frogBoardCtx

        const life = this.life
        const life2 = this.life2
        const life3 = this.life3
        const life4 = this.life4
        const life5 = this.life5

        context.fillStyle = this.frogColor
        context.strokeStyle = this.frogBorder
        context.fillRect(life.x, life.y, 50, 50)
        context.strokeRect(life.x, life.y, 50, 50)

        context.fillStyle = this.frogColor
        context.strokeStyle = this.frogBorder
        context.fillRect(life2.x, life2.y, 50, 50)
        context.strokeRect(life2.x, life2.y, 50, 50)
        
        context.fillStyle = this.frogColor
        context.strokeStyle = this.frogBorder
        context.fillRect(life3.x, life3.y, 50, 50)
        context.strokeRect(life3.x, life3.y, 50, 50)
        
        context.fillStyle = this.frogColor
        context.strokeStyle = this.frogBorder
        context.fillRect(life4.x, life4.y, 50, 50)
        context.strokeRect(life4.x, life4.y, 50, 50)
        
        context.fillStyle = this.frogColor
        context.strokeStyle = this.frogBorder
        context.fillRect(life5.x, life5.y, 50, 50)
        context.strokeRect(life5.x, life5.y, 50, 50)
        
    }

    loseLives(){
        if(this.lives == 5){
            this.life5.x = -51
        }
        if(this.lives == 4){
            this.life4.x = -51
        }
        if(this.lives == 3){
            this.life3.x = -51
        }
        if(this.lives == 2){
            this.life2.x = -51
        }
        if(this.lives == 1){
            this.life.x = -51
        }
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

        const goalZone = this.goalZone
        const goalZone2 = this.goalZone2
        const goalZone3 = this.goalZone3
        const goalZone4 = this.goalZone4
        const goalZone5 = this.goalZone5

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


        context.fillStyle = this.goalZoneColor
        context.strokeStyle = this.goalZoneBorder
        context.fillRect(goalZone.x, goalZone.y, 50, 50)
        context.strokeRect(goalZone.x, goalZone.y, 50, 50)
        goalZone.w = goalZone.x + 50

        context.fillStyle = this.goalZoneColor
        context.strokeStyle = this.goalZoneBorder
        context.fillRect(goalZone2.x, goalZone2.y, 50, 50)
        context.strokeRect(goalZone2.x, goalZone2.y, 50, 50)
        goalZone2.w = goalZone2.x + 50

        context.fillStyle = this.goalZoneColor
        context.strokeStyle = this.goalZoneBorder
        context.fillRect(goalZone3.x, goalZone3.y, 50, 50)
        context.strokeRect(goalZone3.x, goalZone3.y, 50, 50)
        goalZone3.w = goalZone3.x + 50

        context.fillStyle = this.goalZoneColor
        context.strokeStyle = this.goalZoneBorder
        context.fillRect(goalZone4.x, goalZone4.y, 50, 50)
        context.strokeRect(goalZone4.x, goalZone4.y, 50, 50)
        goalZone4.w = goalZone4.x + 50

        context.fillStyle = this.goalZoneColor
        context.strokeStyle = this.goalZoneBorder
        context.fillRect(goalZone5.x, goalZone5.y, 50, 50)
        context.strokeRect(goalZone5.x, goalZone5.y, 50, 50)
        goalZone5.w = goalZone5.x + 50


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
        this.frog.hw = this.frog.x + 25
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
    }

    spawnLogs(){
        const context = this.frogBoardCtx

        const topLog = this.topLog
        const topLog2 = this.topLog2
        const topLog3 = this.topLog3

        const scndTopLog = this.scndTopLog
        const scndTopLog2 = this.scndTopLog2
        const scndTopLog3 = this.scndTopLog3
        
        const scndBtmLog = this.scndBtmLog
        const scndBtmLog2 = this.scndBtmLog2
        const scndBtmLog3 = this.scndBtmLog3
        
        const btmLog = this.btmLog
        const btmLog2 = this.btmLog2
        const btmLog3 = this.btmLog3

        const trueBtmLog = this.trueBtmLog
        const trueBtmLog2 = this.trueBtmLog2
        const trueBtmLog3 = this.trueBtmLog3
        
        
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
        context.fillRect(scndTopLog.x,scndTopLog.y, 150, 50)
        context.strokeRect(scndTopLog.x,scndTopLog.y, 150, 50)
        this.scndTopLog.w = this.scndTopLog.x + 150

        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(scndTopLog2.x, scndTopLog2.y, 150, 50)
        context.strokeRect(scndTopLog2.x, scndTopLog2.y, 150, 50)
        this.scndTopLog2.w = this.scndTopLog2.x + 150

        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(scndTopLog3.x, scndTopLog3.y, 150, 50)
        context.strokeRect(scndTopLog3.x, scndTopLog3.y, 150, 50)
        this.scndTopLog3.w = this.scndTopLog3.x + 150
        
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

        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(trueBtmLog.x, trueBtmLog.y, 150, 50)
        context.strokeRect(trueBtmLog.x, trueBtmLog.y, 150,50)
        this.trueBtmLog.w = this.trueBtmLog.x + 150

        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(trueBtmLog2.x, trueBtmLog2.y, 150, 50)
        context.strokeRect(trueBtmLog2.x, trueBtmLog2.y, 150,50)
        this.trueBtmLog2.w = this.trueBtmLog2.x + 150

        context.fillStyle = this.LogColor
        context.strokeStyle = this.LogBorder
        context.fillRect(trueBtmLog3.x, trueBtmLog3.y, 150, 50)
        context.strokeRect(trueBtmLog3.x, trueBtmLog3.y, 150,50)
        this.trueBtmLog3.w = this.trueBtmLog3.x + 150
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
        const dumptruck3 = this.dumptruck3

        const bottomCar = this.bottomCar
        const bottomCar2 = this.bottomCar2
        const bottomCar3 = this.bottomCar3
        
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

        context.fillStyle = this.bottomCarColor
        context.strokeStyle = this.bottomCarBorder
        context.fillRect(bottomCar.x, bottomCar.y, 50, 50)
        context.strokeRect(bottomCar.x, bottomCar.y, 50, 50)
        this.bottomCar.w = this.bottomCar.x + 50

        context.fillStyle = this.bottomCarColor
        context.strokeStyle = this.bottomCarBorder
        context.fillRect(bottomCar2.x, bottomCar2.y, 50, 50)
        context.strokeRect(bottomCar2.x, bottomCar2.y, 50, 50)
        this.bottomCar2.w = this.bottomCar2.x + 50

        context.fillStyle = this.bottomCarColor
        context.strokeStyle = this.bottomCarBorder
        context.fillRect(bottomCar3.x, bottomCar3.y, 50, 50)
        context.strokeRect(bottomCar3.x, bottomCar3.y, 50, 50)
        this.bottomCar3.w = this.bottomCar3.x + 50
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
        const dumptruck3 = this.dumptruck3

        const bottomCar = this.bottomCar
        const bottomCar2 = this.bottomCar2
        const bottomCar3 = this.bottomCar3

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

        const bottomCarSpeed = .5
        bottomCar.x -= bottomCarSpeed
        bottomCar2.x -= bottomCarSpeed
        bottomCar3.x -= bottomCarSpeed
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

        const bottomCar = this.bottomCar
        const bottomCar2 = this.bottomCar2
        const bottomCar3 = this.bottomCar3

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

        if (bottomCar.x <= -150){
            bottomCar.x = 600
        }
        if(bottomCar2.x <= -150){
            bottomCar2.x = 600
        }
        if(bottomCar3.x <= -150){
            bottomCar3.x = 600
        } 
    }

    moveLogs(){
        const topLog = this.topLog
        console.log(topLog)
        const topLog2 = this.topLog2
        const topLog3 = this.topLog3

        const scndTopLog = this.scndTopLog
        const scndTopLog2 = this.scndTopLog2
        const scndTopLog3 = this.scndTopLog3
        
        const scndBtmLog = this.scndBtmLog
        const scndBtmLog2 = this.scndBtmLog2
        const scndBtmLog3 = this.scndBtmLog3

        const btmLog = this.btmLog
        const btmLog2 = this.btmLog2
        const btmLog3 = this.btmLog3

        const trueBtmLog = this.trueBtmLog
        const trueBtmLog2 = this.trueBtmLog2
        const trueBtmLog3 = this.trueBtmLog3
        requestAnimationFrame(this.moveLogs)

        const topLogSpeed = .5
        topLog.x -= topLogSpeed
        topLog2.x -= topLogSpeed
        topLog3.x -= topLogSpeed

        const scndTopLogSpeed = .75
        scndTopLog.x += scndTopLogSpeed
        scndTopLog2.x += scndTopLogSpeed
        scndTopLog3.x += scndTopLogSpeed

        const scndBtmLogSpeed = .25
        scndBtmLog.x -= scndBtmLogSpeed
        scndBtmLog2.x -= scndBtmLogSpeed
        scndBtmLog3.x -= scndBtmLogSpeed

        const btmLogSpeed = .4
        btmLog.x -= btmLogSpeed
        btmLog2.x -= btmLogSpeed
        btmLog3.x -= btmLogSpeed

        const trueBtmLogSpeed = .6
        trueBtmLog.x += trueBtmLogSpeed
        trueBtmLog2.x += trueBtmLogSpeed
        trueBtmLog3.x += trueBtmLogSpeed
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

        if(frog.y == 100){
            if(frog.x >= this.scndTopLog.x && frog.w <= this.scndTopLog.w){
                frog.x += .75
            } else if(frog.x >= this.scndTopLog2.x && frog.w <= this.scndTopLog2.w){
                frog.x += .75
            } else if(frog.x >= this.scndTopLog3.x && frog.w <= this.scndTopLog3.w){
                frog.x += .75
            } else{
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 150){
            if(frog.x >= this.scndBtmLog.x && frog.w <= this.scndBtmLog.w){
                frog.x -= .25
            } else if(frog.x >= this.scndBtmLog2.x && frog.w <= this.scndBtmLog2.w){
                frog.x -= .25
            } else if(frog.x >= this.scndBtmLog3.x && frog.w <= this.scndBtmLog3.w){
                frog.x -= .25
            } else{
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 200){
            if(frog.x >= this.btmLog.x && frog.w <= this.btmLog.w){
                frog.x -= .4
            } else if(frog.x >= this.btmLog2.x && frog.w <= this.btmLog2.w){
                frog.x -= .4
            } else if(frog.x >= this.btmLog3.x && frog.w <= this.btmLog3.w){
                frog.x -= .4
            } else{
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 250){
            if(frog.x >= this.trueBtmLog.x && frog.w <= this.trueBtmLog.w){
                frog.x += .6
            } else if(frog.x >= this.trueBtmLog2.x && frog.w <= this.trueBtmLog2.w){
                frog.x += .6
            } else if(frog.x >= this.trueBtmLog3.x && frog.w <= this.trueBtmLog3.w){
                frog.x += .6
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

        const scndTopLog = this.scndTopLog
        const scndTopLog2 = this.scndTopLog2
        const scndTopLog3 = this.scndTopLog3

        const scndBtmLog = this.scndBtmLog
        const scndBtmLog2 = this.scndBtmLog2
        const scndBtmLog3 = this.scndBtmLog3

        const btmLog = this.btmLog
        const btmLog2 = this.btmLog2
        const btmLog3 = this.btmLog3

        const trueBtmLog = this.trueBtmLog
        const trueBtmLog2 = this.trueBtmLog2
        const trueBtmLog3 = this.trueBtmLog3

        if (topLog.x <= -300){
            topLog.x = 600
        }
        if(topLog2.x <= -300){
            topLog2.x = 600
        }
        if(topLog3.x <= -300){
            topLog3.x = 600
        }

        if (scndTopLog.x >= 600){
            scndTopLog.x = -300
        }
        if(scndTopLog2.x >= 600){
            scndTopLog2.x = -300
        }
        if(scndTopLog3.x >= 600){
            scndTopLog3.x = -300
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

        if (trueBtmLog.x >= 600){
            trueBtmLog.x = -300
        }
        if(trueBtmLog2.x >= 600){
            trueBtmLog2.x = -300
        }
        if(trueBtmLog3.x >= 600){
            trueBtmLog3.x = -300
        }
    }

    gameWin(){
        if(this.bankedFrogs == 5){
            this.gameEnded = true
        }
    }

    resultDisplay(){
        var gameResult = document.getElementById('gameResult')
        
        if(this.gameEnded == true){
            if(this.bankedFrogs == 5){
                gameResult.innerText = 'You Won!'
            }
            else{
                gameResult.innerText = 'You Lost!'
            }
        }
    }

    initBankedFrog(){
        const frog = this.frog

        const goalZone = this.goalZone
        const goalZone2 = this.goalZone2
        const goalZone3 = this.goalZone3
        const goalZone4 = this.goalZone4
        const goalZone5 = this.goalZone5

        if(frog.y == 0){
            if(frog.hw >= goalZone.x && frog.hw <= goalZone.w){
                this.gZBool = true
                this.bankedFrogs += 1
                frog.x = 300
                frog.y = 600
            }else if(frog.hw >= goalZone2.x && frog.hw <= goalZone2.w){
                this.gZBool2 = true
                this.bankedFrogs += 1
                frog.x = 300
                frog.y = 600
            }else if(frog.hw >= goalZone3.x && frog.hw <= goalZone3.w){
                this.gZBool3 = true
                this.bankedFrogs += 1
                frog.x = 300
                frog.y = 600
            }else if(frog.hw >= goalZone4.x && frog.hw <= goalZone4.w){
                this.gZBool4 = true
                this.bankedFrogs += 1
                frog.x = 300
                frog.y = 600
            }else if(frog.hw >= goalZone5.x && frog.hw <= goalZone5.w){
                this.gZBool5 = true
                this.bankedFrogs += 1
                frog.x = 300
                frog.y = 600
            }else{
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }
    }

    drawBankedFrogs(){
        const context = this.frogBoardCtx

        const goalZone = this.goalZone
        const goalZone2 = this.goalZone2
        const goalZone3 = this.goalZone3
        const goalZone4 = this.goalZone4
        const goalZone5 = this.goalZone5

        if(this.gZBool == true){
            context.fillStyle = this.frogColor
            context.strokeStyle = this.riverColor
            context.fillRect(goalZone.x, goalZone.y, 50, 50)
            context.strokeRect(goalZone.x, goalZone.y, 50, 50)

        }if(this.gZBool2 == true){
            context.fillStyle = this.frogColor
            context.strokeStyle = this.riverColor
            context.fillRect(goalZone2.x, goalZone2.y, 50, 50)
            context.strokeRect(goalZone2.x, goalZone2.y, 50, 50)

        }if(this.gZBool3 == true){
            context.fillStyle = this.frogColor
            context.strokeStyle = this.riverColor
            context.fillRect(goalZone3.x, goalZone3.y, 50, 50)
            context.strokeRect(goalZone3.x, goalZone3.y, 50, 50)

        } if(this.gZBool4 == true){
            context.fillStyle = this.frogColor
            context.strokeStyle = this.riverColor
            context.fillRect(goalZone4.x, goalZone4.y, 50, 50)
            context.strokeRect(goalZone4.x, goalZone4.y, 50, 50)

        } if(this.gZBool5 == true){
            context.fillStyle = this.frogColor
            context.strokeStyle = this.riverColor
            context.fillRect(goalZone5.x, goalZone5.y, 50, 50)
            context.strokeRect(goalZone5.x, goalZone5.y, 50, 50)

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
        if(frog.y == 350){
            if((frog.x <= this.bus.w && frog.x >= this.bus.x) || (frog.w <= this.bus.w && frog.w >= this.bus.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.bus2.w && frog.x >= this.bus2.x) || (frog.w <= this.bus2.w && frog.w >= this.bus2.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.bus3.w && frog.x >= this.bus3.x) || (frog.w <= this.bus3.w && frog.w >= this.bus3.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 400){
            if((frog.x <= this.fastCar.w && frog.x >= this.fastCar.x) || (frog.w <= this.fastCar.w && frog.w >= this.fastCar.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.fastCar2.w && frog.x >= this.fastCar2.x) || (frog.w <= this.fastCar2.w && frog.w >= this.fastCar2.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 450){
            if((frog.x <= this.greenCar.w && frog.x >= this.greenCar.x) || (frog.w <= this.greenCar.w && frog.w >= this.greenCar.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.greenCar2.w && frog.x >= this.greenCar2.x) || (frog.w <= this.greenCar2.w && frog.w >= this.greenCar2.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.greenCar3.w && frog.x >= this.greenCar3.x) || (frog.w <= this.greenCar3.w && frog.w >= this.greenCar3.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 500){
            if((frog.x <= this.dumptruck.w && frog.x >= this.dumptruck.x) || (frog.w <= this.dumptruck.w && frog.w >= this.dumptruck.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.dumptruck2.w && frog.x >= this.dumptruck2.x) || (frog.w <= this.dumptruck2.w && frog.w >= this.dumptruck2.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.dumptruck3.w && frog.x >= this.dumptruck3.x) || (frog.w <= this.dumptruck3.w && frog.w >= this.dumptruck3.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }

        if(frog.y == 550){
            if((frog.x <= this.bottomCar.w && frog.x >= this.bottomCar.x) || (frog.w <= this.bottomCar.w && frog.w >= this.bottomCar.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.bottomCar2.w && frog.x >= this.bottomCar2.x) || (frog.w <= this.bottomCar2.w && frog.w >= this.bottomCar2.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
            if((frog.x <= this.bottomCar3.w && frog.x >= this.bottomCar3.x) || (frog.w <= this.bottomCar3.w && frog.w >= this.bottomCar3.x)){
                this.lives--
                frog.x = 300
                frog.y = 600
            }
        }
    
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

