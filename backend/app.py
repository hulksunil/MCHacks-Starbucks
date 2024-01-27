from flask import Flask, request, jsonify
from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client

app = Flask(__name__)

account_sid = 'AC62f70d4751a713e217c7c23f24ce58ee'
auth_token = '69068c401230d412c0cfb2f751b5b0c8'
client = Client(account_sid, auth_token)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/send_sms', methods=['POST'])
def send_sms():
    to_number = request.form['to_number']
    message_body = request.form['message_body']

    message = client.messages.create(
        to=to_number,
        from_='+17129738496',
        body=message_body
    )

    return jsonify({'message_sid': message.sid})

if __name__ == '__main__':
    app.run(debug=True)
