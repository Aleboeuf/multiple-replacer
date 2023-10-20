"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const config_1 = __importDefault(require("./configuration/config"));
const fs_extra_1 = require("fs-extra");
class App {
    static async launch() {
        const srcFiles = config_1.default.srcFiles;
        const defFilePath = './src/' + config_1.default.defFile;
        for (const srcFile of srcFiles) {
            const srcFilePath = './src/' + srcFile;
            let srcFileContent;
            let definitions;
            try {
                try {
                    srcFileContent = await (0, promises_1.readFile)(srcFilePath, 'utf-8');
                }
                catch (e) {
                    console.error(e);
                    throw new Error('Erreur de lecture du fichier source');
                }
                try {
                    definitions = await (0, fs_extra_1.readJson)(defFilePath);
                }
                catch (e) {
                    console.error(e);
                    throw new Error('Erreur de lecture du fichier de définitions');
                }
                for (const searchValue in definitions) {
                    srcFileContent = srcFileContent.replaceAll(searchValue, definitions[searchValue]);
                }
                await (0, promises_1.rename)(srcFilePath, srcFilePath + '.old');
                await (0, promises_1.writeFile)(srcFilePath, srcFileContent, 'utf-8');
            }
            catch (e) {
                console.error(e);
            }
        }
    }
}
App.launch();
