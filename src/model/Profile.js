let data = {
        name: 'Renato Sousa',
        avatar: "https://avatars.githubusercontent.com/u/94645489?v=4",
        "monthly-budget": 3000,
        "days-per-week": 5,
        "hours-per-day": 5,
        "vacation-per-year": 6,
        "value-hour": 75
}

module.exports = {
    get(){
        return data;
    },
    
    update(newData){
        data = newData;
    }
}