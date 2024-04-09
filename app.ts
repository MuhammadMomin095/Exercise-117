function evaluatedGrade(grade: string): void{
    switch(grade){
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Goog");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "E":
            console.log("Fail");
            break;
        default:
            console.log("Inválid grade");
    }
}

evaluatedGrade("A");