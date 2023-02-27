export function earnedPoints(result, answers){ 
    return result.map((e, i) => answers[i] == e).filter(i=>i)
}
