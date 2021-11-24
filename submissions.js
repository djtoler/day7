const countUntilTens = (step) => {
    let originalStep = step
    console.log(step);
    while (step %10 != 0) {
        step +=originalStep
        console.log(step)
    }
}  
countUntilTens(4);