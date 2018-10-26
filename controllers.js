const fs = require('fs');
const CONTROLLERS_FOLDER = 'controllers';

function initControllers(app) {
    const files = fs.readdirSync(CONTROLLERS_FOLDER);
    for (var i = 0; i<files.length; i++) {
        const controller = require(`./${CONTROLLERS_FOLDER}/${files[i]}`);
        controller(app);
    }
}

module.exports = {
    initControllers
}