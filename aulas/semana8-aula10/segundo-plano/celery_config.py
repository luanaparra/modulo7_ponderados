from celery import Celery
import os

app = Celery('celery_base',
             broker='amqp://usuario:senha@localhost:5672/vhost',
             backend='rpc://',
             persistent=True,
             include=['task'])