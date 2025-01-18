// @ts-check

/**
 * @module icon-extractor
 */

'use strict';

const edge = require('edge-js');

/**
 * @summary Extract an icon from a file as a base64 string
 * @function
 * @public
 *
 * @param {string} path - Path of the file to extract the icon from
 * @returns {Promise<string>} - A promise that resolves to the base64-encoded icon
 */
exports.extractIcon = function extractIcon(path) {
    return new Promise((resolve, reject) => {
        const getIcon = edge.func({
            assemblyFile: 'src\\bin\\Debug\\net9.0\\IconExtractorApp.dll', // Path to the compiled DLL
            typeName: 'MeowSkyKung.IconExtractor', // Namespace and class name
            methodName: 'GetIcon', // Method to call
        });

        getIcon(path, (error, result) => {
            if (error) {
                reject(new Error(error.toString()));
            } else {
                resolve(result);
            }
        });
    });
};
