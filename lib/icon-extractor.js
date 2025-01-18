// @ts-check

/**
 * @module icon-extractor
 */

'use strict'

/**
 * @summary Extract Icon from File
 * @function
 * @public
 *
 * @param {string} filePath - File Path of file to extract icon from
 * @returns {Promise<string>} - A promise that resolves to the base64 icon string
 * 
 * @example
 * const IconExtractor = require("icon-extractor");
 * 
 * IconExtractor.extractIcon("MiPancake.ttf")
 *   .then(icon => console.log(icon))
 *   .catch(err => console.error(err));
 */
exports.extractIcon = function extractIcon(filePath) {
  const { exec } = require('child_process');
  const path = require('path');

  const IconExtractor = path.join(__dirname, "..\\src\\bin\\Release\\net9.0\\IconExtractor.exe");

  // Returning a Promise to handle asynchronous nature
  return new Promise((resolve, reject) => {
    exec(`"${IconExtractor}" "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(error.toString()));
        return;
      }
      if (stderr) {
        reject(new Error(stderr.toString()));
        return;
      }

      // Successfully extract the icon (stdout)
      resolve(stdout); // Return the stdout as a resolved value
    });
  });
};
