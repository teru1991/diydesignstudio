// useSnap.ts
const useSnap = (gridSize: number) => {
    const snapToGrid = (x: number, y: number) => {
        const snappedX = Math.round(x / gridSize) * gridSize;
        const snappedY = Math.round(y / gridSize) * gridSize;
        return { x: snappedX, y: snappedY };
    };

    return snapToGrid;
};

export default useSnap;
