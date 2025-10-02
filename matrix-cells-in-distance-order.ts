function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    let res: number[][] = []
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            res.push([r, c])
        }
    }
    
    res.sort((a, b) => {
        const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)
        const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)
        return distA - distB
    })
    
    return res
};