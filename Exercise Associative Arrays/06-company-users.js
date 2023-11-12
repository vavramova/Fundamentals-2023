function companyUsers(arr){
    let companyEmployees = {};

    for(let companyEmployee of arr){
        let [company, employeeId] = companyEmployee.split(' -> ');

        if(company in companyEmployees){
            if(!companyEmployees[company].includes(employeeId)){
                companyEmployees[company].push(employeeId);
            }
        }else {
            companyEmployees[company] = [employeeId];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a,b) => a[0].localeCompare(b[0]));

    for(let [company, employeeId] of entries){
        console.log(company);
        employeeId.forEach(id => console.log(`-- ${id}`));
    }
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])