/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

var restoreString = function(s, indices) {
     let out = Buffer.alloc(indices.length);

    for (let i = 0; i < indices.length; i++) {
        out.write(s.charAt(i), indices[i], "utf-8");
    }

    return out.toString();
    
};