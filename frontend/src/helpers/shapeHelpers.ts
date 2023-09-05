interface Shape {
    length: number;
    color: string;
    line_width: number;
    // 他の属性
}

/**
 * 図形の長さを変更する関数
 * @param {Shape} shape - 編集する図形のオブジェクト
 * @param {number} newLength - 新しい長さ
 * @return {Shape} - 長さが変更された新しい図形のオブジェクト
 */
export function changeLength(shape: Shape, newLength: number): Shape {
    return {
        ...shape,
        length: newLength
    };
}

/**
 * 図形の色を変更する関数
 * @param {Shape} shape - 編集する図形のオブジェクト
 * @param {string} newColor - 新しい色
 * @return {Shape} - 色が変更された新しい図形のオブジェクト
 */
export function changeColor(shape: Shape, newColor: string): Shape {
    return {
        ...shape,
        color: newColor
    };
}

/**
 * 図形の線の太さを変更する関数
 * @param {Shape} shape - 編集する図形のオブジェクト
 * @param {number} newLineWidth - 新しい線の太さ
 * @return {Shape} - 線の太さが変更された新しい図形のオブジェクト
 */
export function changeLineWidth(shape: Shape, newLineWidth: number): Shape {
    return {
        ...shape,
        line_width: newLineWidth
    };
}

// 他の属性に関する変更関数も同様に追加できます。
