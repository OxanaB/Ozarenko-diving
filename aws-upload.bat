aws s3 sync /projects/ozarenko-diving/ s3://ozarenko-diving-test/ --exclude ".git/*" --exclude ".vscode/*" --exclude "browser/*" --exclude "images/*" --exclude "node_modules/*" --exclude "server/*" --exclude "*" --include "*.html" --include "*.js" --include "*.ico"

// aws s3 rm s3://ozarenko-diving-test/node_modules  --recursive
// aws s3 rm s3://ozarenko-diving-test/browser  --recursive