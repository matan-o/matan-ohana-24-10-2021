export const dateToDay = (date: string):string => {
    const day = new Date(date).getDay()
    const days = [
        'Sunday',
        'Monday',
        'Teusday',
        'Wedensday',
        'Thursday',
        'Friday',
        'Saturday']
        return days[day]

}