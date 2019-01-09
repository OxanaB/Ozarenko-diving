node ./node_modules/less/bin/lessc styles.less styles.css
call build-server.bat
node ./node_modules/ozarenko/server/test.js