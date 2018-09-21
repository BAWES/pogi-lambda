# Delete zipped functions file
#rm index.zip

# Deploy ProcessEmails function
rm processEmailsFromSendgrid.zip
cd processEmailsFromSendgrid
zip -X -R ../processEmailsFromSendgrid.zip *
cd ..
aws lambda update-function-code --function-name processEmailsFromSendgrid --zip-file fileb://processEmailsFromSendgrid.zip && rm processEmailsFromSendgrid.zip

# Deploy testFunction function
rm testFunction.zip
cd testFunction
zip -X -R ../testFunction.zip *
cd ..
aws lambda update-function-code --function-name testFunction --zip-file fileb://testFunction.zip && rm testFunction.zip
