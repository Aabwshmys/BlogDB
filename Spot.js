
const client = require('twilio');
const accountSid = 'AC085f0d1b04895b543a1ebde8c200c725';
const authToken = 'b570ac71265549969fb7b86b18fd5afb';

client.messages
    .create({
                from: 'whatsapp:+14155238886',
        contentSid: 'HX229f5a04fd0510ce1b071852155d3e75',
        contentVariables: '{"1":"409173"}',
        to: 'whatsapp:+966583297408'
    })
    .then(message => console.log(message.sid))
    .done();
