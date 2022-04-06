/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
     let out = Buffer.alloc(indices.length);

    for (let i = 0; i < indices.length; i++) {
        out.write(s.charAt(i), indices[i], "utf-8");
    }

    return out.toString();
    
};