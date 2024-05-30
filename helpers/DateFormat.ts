export function formattedDate(timestamp:string):string {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    const date = `${year}-${month}-${day}`;
    return date;
}