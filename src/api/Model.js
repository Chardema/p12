export default class Models {
    FormatActivity(sessions){
        return sessions.map((item, index) => {
            return {
                day: index + 1,
                date : item.day,
                lostcalories : item.calories,
                actualkilogram : item.kilogram
            }
        })
    }
}


