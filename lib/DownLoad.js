const path = require('path');
const fs = require('fs');
const os = require('os');
const urllib = require('urllib');
const assert = require('assert');
const shell = require('shelljs');
const chalk = require('chalk');
const compressing = require('compressing');
const rimraf = require('mz-modules/rimraf');
const mkdirp = require('mz-modules/mkdirp');

module.exports = class Download {
  constructor(config = {}) {
    this.tempDir = path.join(os.tmpdir(), 'easy-vs-cli');
    this.registry = config.registry || 'https://registry.npmjs.org';
  }

  log(info, color = 'green') {
    console.log(chalk.blue(`[easy-vs-cli]:${chalk[color](info)}`));
  }

  async getPackageInfo(pkgName) {
    const url = `${this.registry}/${pkgName}/latest`;
    try {
      const result = await urllib.request(url, {
        dataType: 'json',
        followRedirect: true,
        timeout: 30000,
      });
      assert(
        result.status === 200,
        `npm info ${pkgName} got error: ${result.status}, ${result.data.reason}`,
      );
      return result.data;
    } catch (err) {
      /* istanbul ignore next */
      throw err;
    }
  }

  async download(pkgName) {
    const result = await this.getPackageInfo(pkgName);
    const tgzUrl = result.dist.tarball;
    await rimraf(this.tempDir);

    this.log(`downloading ${tgzUrl}`, 'yellow');
    const response = await urllib.request(tgzUrl, {
      streaming: true,
      followRedirect: true,
    });
    const targetDir = path.join(this.tempDir, pkgName);
    await compressing.tgz.uncompress(response.res, targetDir);

    this.log(`extract to ${targetDir}`, 'yellow');
    return path.join(targetDir, 'package');
  }

  copy(sourceDir, targetDir, option = { dir: '', hide: true }) {
    if (option.dir) {
      shell.cp('-R', path.join(sourceDir, option.dir), targetDir);
    } else {
      shell.cp('-R', path.join(sourceDir, '*'), targetDir);
      if (option.hide) {
        // copy hide file
        try {
          shell.cp('-R', path.join(sourceDir, '.*'), targetDir);
        } catch (e) {
          /* istanbul ignore next */
          console.warn('copy hide file error', e);
        }
      }
    }
  }

  writeFile(filepath, content) {
    try {
      fs.writeFileSync(
        filepath,
        typeof content === 'string'
          ? content
          : JSON.stringify(content, null, 2),
        'utf8',
      );
    } catch (e) {
      /* istanbul ignore next */
      console.error(`writeFile ${filepath} err`, e);
    }
  }

  updatePackageFile(fileDir, info = {}) {
    const { name, description } = info;
    const filepath = path.join(fileDir, 'package.json');
    const packageJSON = require(filepath);
    packageJSON.name = name || packageJSON.name;
    packageJSON.version = '1.0.0';
    packageJSON.description = description || packageJSON.description;
    this.writeFile(filepath, packageJSON);
  }

  async init(root, projectName, pkgName) {
    const self = this;
    const targetDir = await this.download(pkgName);
    const sourceDir = path.join(root, projectName);
    await mkdirp(sourceDir);
    self.copy(targetDir, sourceDir);
    self.updatePackageFile(targetDir, sourceDir);
    this.log(`init ${projectName} project successfully into ${sourceDir}`);
    this.log(
      `Follow Step Running Application: 1) yarn install or npm install 2) npm run dev or npm start`,
    );
    return sourceDir;
  }
};
