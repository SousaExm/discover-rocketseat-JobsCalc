const Profile = require('../model/Profile')



module.exports = {
    async index(req,res){
        const profile = await Profile.get()
        return res.render("profile", {profile: profile} )
    },

    async update(req,res) {
        const data = req.body
        const weeksPerYear = 52
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
        const monthlyTotalHours = weekTotalHours * weeksPerMonth
        const valueHour = data["monthly-budget"] / monthlyTotalHours 
        const profile = await Profile.get()
        
        await Profile.update({
            ... profile,
            ...data,
            "value-hour": valueHour,
        })
        
        return res.redirect('/profile')
    }   

}