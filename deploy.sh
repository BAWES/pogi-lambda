# Deploy script

# Deploy ProcessEmails function
cd processEmailsFromSendgrid
chmod -R ugo+r .
zip -r ../processEmailsFromSendgrid.zip . -x "*.DS_Store"
cd ..
aws lambda update-function-code --function-name processEmailsFromSendgrid --zip-file fileb://processEmailsFromSendgrid.zip && rm processEmailsFromSendgrid.zip
