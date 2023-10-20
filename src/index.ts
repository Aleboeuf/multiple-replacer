import { readFile, rename, writeFile } from 'fs/promises';
import config from './configuration/config';
import { readJson } from 'fs-extra';

class App {
    public static async launch() {
        const srcFiles = config.srcFiles;
        const defFilePath = './src/' + config.defFile;

        for (const srcFile of srcFiles) {

            const srcFilePath = './src/' + srcFile;

            let srcFileContent: string;
            let definitions: {[searchValue: string]: string};

            try {
                try {
                    srcFileContent = await readFile(srcFilePath, 'utf-8');
                } catch (e) {
                    console.error(e);
                    throw new Error('Erreur de lecture du fichier source');
                }
        
                try  {
                    definitions = await readJson(defFilePath);
                } catch (e) {
                    console.error(e);
                    throw new Error('Erreur de lecture du fichier de définitions');
                }

                for (const searchValue in definitions) {
                    srcFileContent = srcFileContent.replaceAll(searchValue, definitions[searchValue]);
                }

                await rename(srcFilePath, srcFilePath + '.old');
                await writeFile(srcFilePath, srcFileContent, 'utf-8')
            } catch (e) {
                console.error(e);
            }
            
        }
        
    }
}

App.launch();