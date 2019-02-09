export function getGridsStartAndFinishPoints(date: Date) {
    const today = new Date(date);
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const deltaFirst = firstDayOfMonth.getDay();
    const firstDayOnTheGrid = new Date(year, month, 1 - deltaFirst);

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const deltaLast = 7 - lastDayOfMonth.getDay();
    const lastDayOnTheGrid = new Date(year, month + 1, -1 + deltaLast);

    return { firstDayOnTheGrid, lastDayOnTheGrid, lastDayOfMonth };
}


export function makeGrid(firstDayOnTheGrid: Date, lastDayOnTheGrid: Date, lastDayOfMonth: Date): Date[][] {
    const result: Date[][] = [];
    for (let weekIndex = 0; true; weekIndex++) {
        const week: Date[] = [];
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const year = firstDayOnTheGrid.getFullYear();
            const month = firstDayOnTheGrid.getMonth();
            const day = firstDayOnTheGrid.getDate();
            const dateDelta = weekIndex * 7 + dayIndex;
            const date = new Date(year, month, day + dateDelta);
            const stopCount = lastDayOnTheGrid.getTime() || lastDayOfMonth.getTime();
            week.push(date);
            if (date.getTime() === stopCount) {
                result.push(week);

                return result;
            }
        }
        result.push(week);
    }
}
