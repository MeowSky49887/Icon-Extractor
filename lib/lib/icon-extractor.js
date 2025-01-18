// @ts-check

/**
 * @module icon-extractor
 */

'use strict'

const edge = require('edge-js');

/**
 * @summary Extract a icon from file as base64
 * @function
 * @public
 *
 * @param string path - Path of file to extract icon from
 */
exports.extractIcon = edge.func({
    assemblyFile: 'src\\bin\\Debug\\net9.0\\IconExtractorApp.dll', // Path to the compiled DLL
    typeName: 'MeowSkyKung.IconExtractor', // Namespace and class name
    methodName: 'GetIcon' // Method to call
});
