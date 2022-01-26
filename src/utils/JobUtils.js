module.exports = {
        
    remainingDays(job) {

        const remaingDaysForOneJob = (job["total-hours"] / job["daily-hours"]).toFixed()
            
        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remaingDaysForOneJob)
        const dueDateInMs = createdDate.setDate(dueDay)
        const timeDiffinMs = dueDateInMs - Date.now()
    
        const dayInMs = 1000 * 60 * 60 *24
        const dayDiff = Math.floor(timeDiffinMs / dayInMs)
    
        return dayDiff
    
    },

    calculateBudget(job, valueHour){ 
       return valueHour * job["total-hours"]}
} 