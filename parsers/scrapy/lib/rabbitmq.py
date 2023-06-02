import pika, os

def get_rabbitmq_connection():
    rabbitmq_host = os.environ.get('RABBITMQ_HOST', '192.168.1.37')
    rabbitmq_user = os.environ.get('RABBITMQ_USER', 'python')
    rabbitmq_pass = os.environ.get('RABBITMQ_PASS', 'python')

    credentials = pika.PlainCredentials(rabbitmq_user, rabbitmq_pass)
    connection = pika.BlockingConnection(pika.ConnectionParameters(rabbitmq_host, 5672,
                                                                   '/',
                                                                   credentials))
    return connection

