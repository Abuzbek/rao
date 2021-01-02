const fs = require('fs')
const path = require('path')
const appDir = path.dirname(require.main.filename)
module.exports = function (filePath) {
    console.log(filePath);
    if (filePath) {
        fs.unlink(appDir + '/../public' + filePath, (err) => {
            if (err) {
                console.log('Ошибка при удалении файла - ', err);
            }
        })
    }
}