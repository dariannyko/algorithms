// TODO: refactor
function convertTime(current: string, correct: string): number {
    let counter = 0;

    const cur = getMinutes(current);
    const cor = getMinutes(correct);
    let rest = Math.abs(cur - cor);

    if (Math.floor(rest / 60) > 0) {
        counter += Math.floor(rest / 60);
        rest = rest % 60;
    }
    if (Math.floor(rest / 15) > 0) {
        counter += Math.floor(rest / 15);
        rest = rest % 15;
    }
    if (Math.floor(rest / 5) > 0) {
        counter += Math.floor(rest / 5);
        rest = rest % 5;
    }

    return counter + rest;
};

function getMinutes (value: string):number {
    const arr = value.split(":");
    return Number(arr[0])*60 + Number(arr[1]);
}