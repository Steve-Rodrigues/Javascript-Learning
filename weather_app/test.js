//testing out date formats for tkaing in from api
const date = new Date("2026-08-14T17:46:00-04:00");
const formated = date.toLocaleDateString(undefined,{
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});
const time = date.toLocaleTimeString(undefined, {
    hour:'numeric',
    minute: 'numeric'
});
console.log(formated);
console.log(time);
