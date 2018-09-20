# Delete zipped functions file
#rm index.zip

# Deploy testZip function
rm testZipDeploy.zip
zip -X -R testZipDeploy.zip testZip/*
aws lambda update-function-code --function-name testZip --zip-file fileb://testZipDeploy.zip
