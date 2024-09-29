from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from resources.auth.routes import auth
from database import db, FULL_URL_DB
from flask_migrate import Migrate
from resources.Event import EventsList, EventList
from resources.Attendance import AttendancesList

app = Flask(__name__)
api = Api(app)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#inicializar
db.init_app(app)

#configurar flask-migrate
migrate = Migrate()
migrate.init_app(app,db)

#blueprint
app.register_blueprint(auth)

#resources
api.add_resource(EventsList , '/events')
api.add_resource(EventList , '/event/<int:id>')
api.add_resource(AttendancesList, '/attendances')

if __name__ == "__main__":
    app.run(port=5000)



 


















