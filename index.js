// Code your solution in this file!

function distanceFromHqInBlocks(destStreetNumber){
    const hq = 42
    if(destStreetNumber > 42)
        return(destStreetNumber - hq)
    else
        return(hq - destStreetNumber)
        
}

function distanceFromHqInFeet(destStreetNumber){
    return distanceFromHqInBlocks(destStreetNumber) * 264
}
distanceFromHqInFeet(43)

function distanceTravelledInFeet(start, destination){
    if(destination > start)
        return((destination - start) * 264)
    else
        return((start - destination) * 264)    
}
distanceTravelledInFeet(43, 48)

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400)
        return (0)
    else if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000)
        return((distanceTravelledInFeet(start, destination) - 400) * 0.02)
    else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500)
        return(25)
    else
        return("cannot travel that far")
    
}