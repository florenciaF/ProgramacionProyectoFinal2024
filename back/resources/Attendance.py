
from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Event import Event
from models.Attendance import Attendance
from database import db 

class AttendancesList(Resource):
      
    def post(self):
        userId = request.json['userId']
        eventId = request.json['eventId'] 
        
        user = User.query.get(userId)
        event = Event.query.get(eventId)

        attendance = Attendance(user=user, event=event)
        
        db.session.add(attendance)
        db.session.commit()
        return jsonify({'mensaje': ' agregada con éxito.'})
    
