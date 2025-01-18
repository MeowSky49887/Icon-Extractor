// @ts-check

/**
 * @module icon-extractor
 */

'use strict'

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
  const { exec } = require('child_process');
  const path = require('path');

  const IconExtractor = path.join(__dirname, "..\\src\\bin\\Release\\net9.0\\IconExtractor.exe")

  exec(`"${IconExtractor}" "${filePath}"`, (error, stdout, stderr) => {
    if (error) {
      throw new Error(error.toString());
      return;
    }
    if (stderr) {
      throw new Error(stderr.toString());
      return;
    }
  
    // Output the Base64 string (or error message)
    return stdout
  });
  
}