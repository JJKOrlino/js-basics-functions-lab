function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks-42)
}

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks-42)
}

function distanceFromHqInFeet(feet) {
    return Math.abs(distanceFromHqInBlocks(feet)*264)
}

function distanceTravelledInFeet(destination1, destination2) {
    return Math.abs(destination1-destination2)*264
}

function calculatesFarePrice(destination1, destination2) {
    if (distanceTravelledInFeet(destination1,destination2)<=400) {
        return 0;
    }
    else if (distanceTravelledInFeet(destination1, destination2)<=2000) {
        return (distanceTravelledInFeet(destination1,destination2)-400)*0.02; // subtract 400 for free travel; charge $.02/ft
    }
    else if (distanceTravelledInFeet(destination1, destination2)<=2500) {
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}