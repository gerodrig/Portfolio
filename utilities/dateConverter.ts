
export const getMonthYear = (date: string) => {

    if(date.trim() === '') {
        return 'Present';
    }

    const dateObj = new Date(date);
    const year = dateObj.getFullYear();

    //get month in english
    const month = dateObj.toLocaleString('default', { month: 'long' });

    return `${month} ${year}`;
}

