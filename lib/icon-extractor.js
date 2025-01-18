// @ts-check

/**
 * @module icon-extractor
 */

'use strict'

const bindings = require('bindings')
const ie = bindings('icon-extractor')

/**
 * @summary Exract Icon fro, File
 * @function
 * @public
 *
 * @param string filePath - File Path of file to extract icon from
 *
 * @example
 * const IconExtractor = require("icon-extractor");
 * 
 * const Icon = IconExtractor.extractIcon("MiPancake.ttf");
 * console.log(Icon);
 */
exports.extractIcon = function extractIcon(filePath) {
  return ie.getIcon(filePath);
}