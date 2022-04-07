
const dateToStr = dateObj => (
    dateObj.getMonth() + 1 + 
    '/' + dateObj.getDate() + 
    '/' + dateObj.getFullYear()
);

export default dateToStr;