# Delete zipped functions file
#rm index.zip

# Deploy testZip function
rm testZip.zip
cd testZip
zip -X -R ../testZip.zip *
cd ..
aws lambda update-function-code --function-name testZip --zip-file fileb://testZip.zip
