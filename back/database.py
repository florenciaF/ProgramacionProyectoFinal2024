from flask_sqlalchemy import SQLAlchemy

#inicializar objeto sqlalchemy
db = SQLAlchemy()

#Configurar bd
USER_DB = 'postgres'
PASS_DB = 'admin'
URL_DB = 'localhost'
NAME_DB = 'prueba'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'