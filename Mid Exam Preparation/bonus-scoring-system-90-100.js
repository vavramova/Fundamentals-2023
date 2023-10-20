function bonusScoringSystem(arr){
    let allStudents = Number(arr.shift());
    let courseLectures = Number(arr.shift());
    let additionalBonus = Number(arr.shift());

    let bonusArr = [];

    for(let i = 0; i < arr.length; i++){
        let studentAttendances = Number(arr[i]);
        let totalBonus = studentAttendances / courseLectures * (5 + additionalBonus);
        bonusArr.push(totalBonus);
    }

    bonusArr.sort((a,b) => a- b);
    let maxBonusPoints = bonusArr.pop();
    arr.sort((a,b) => a - b);
    let studentMax = arr.pop();

    console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
    console.log(`The student has attended ${studentMax} lectures.`);
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
  