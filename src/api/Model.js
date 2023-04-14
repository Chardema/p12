export default class Models {
    FormatActivity(data){
        return data.sessions.map((item, index) => {
            return {
                day: index + 1,
                date : item.day,
                lostcalories : item.calories,
                actualkilogram : item.kilogram
            }
        })
    }
}

