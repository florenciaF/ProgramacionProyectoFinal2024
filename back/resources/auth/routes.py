from flask import  jsonify, request, Blueprint
from database import db 
from models.User import User
import requests

auth = Blueprint('auth', __name__, url_prefix= '/auth')

@auth.route('/register', methods=['POST'])
def register():
    print('entre al register')
    
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    print(name, email, password)
    role = '2'

    if User.query.filter_by(email=email).first():
        response = {'Mensaje': 'Error'}
        print('error ')
        return jsonify(response), 401
    else:
        user = User(name=name, email=email, password=password, role=role)
        db.session.add(user)
        db.session.commit()
        
        # Obtengo el id del usuario a partir del email que se registro 
        registeredEmail = User.query.filter_by(email=email).first()
        idUser = registeredEmail.id
        nameUser = registeredEmail.name
        print("idUser", idUser)
        print("name", nameUser)
    
        return jsonify(role=role, idUser=idUser),200

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
   
    #Solicito que la base de datos liste el primer email que coincida con el ingresado 
    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    idUser = emailDb.id
    print('role', role)
    print("idUser", idUser)
    
    if emailDb and emailDb.password == password:
        print('logueado correctamente')
        return jsonify(role=role, idUser=idUser),200
    else:
        response = {'Mensaje': 'Error'}
        print('error de contraseña')
        return jsonify(response), 401









 