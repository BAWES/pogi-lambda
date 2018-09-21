# Delete zipped functions file
#rm index.zip

# Deploy ProcessEmails function
cd processEmailsFromSendgrid
chmod -R ugo+r .
zip -r ../processEmailsFromSendgrid.zip . -x "*.DS_Store"
cd ..
aws lambda update-function-code --function-name processEmailsFromSendgrid --zip-file fileb://processEmailsFromSendgrid.zip && rm processEmailsFromSendgrid.zip

# Deploy testFunction function
cd testFunction
chmod -R ugo+r .
zip -r ../testFunction.zip . -x "*.DS_Store"
cd ..
aws lambda update-function-code --function-name testFunction --zip-file fileb://testFunction.zip && rm testFunction.zip
