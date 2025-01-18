// @ts-check

/**
 * @module icon-extractor
 */

'use strict';

const koffi = require('koffi');
const path = require('path');
const IconExtractorApp = koffi.load(path.resolve(__dirname, '../src/bin/Debug/net9.0/IconExtractorApp.dll'));
const getIcon = IconExtractorApp.func("string GetIcon(string filePath)")

/**
 * @summary Extract an icon from a file as a base64 string
 * @function
 * @public
 *
 * @param {string} filePath - Path of the file to extract the icon from
 * @returns {Promise<string>} - A promise that resolves to the base64-encoded icon
 */
exports.extractIcon = function extractIcon(filePath) {
    return getIcon(filePath);
};
