from flask import Flask, request, make_response, jsonify
from flask_restful import Resource, Api
from flask_migrate import Migrate

from models import db, Hero, Power, HeroPower

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return 'Welcome to the Book Management  API'