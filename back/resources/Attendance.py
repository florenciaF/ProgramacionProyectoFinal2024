
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

        
        existing_attendance = Attendance.query.filter_by(userId=userId, eventId=eventId).first()
        
        if existing_attendance:
            return {'Mensaje': 'Ya has aplicado a este evento'}, 400
    
        
        attendance = Attendance(userId=userId, eventId=eventId, status='applied') 
        db.session.add(attendance)
        db.session.commit()
        
        return {'Mensaje': 'Agregado con exito'}, 201
    
class AttendanceList(Resource):
        
    def get(self, id):  
        
        
        user = User.query.get(id)
        attendances = Attendance.query.filter_by(user=user).all() 
        # attendances = Attendance.query.filter_by(user=user.id).all() 
        # print('user', user)
        # print('attendances',attendances)

        result = []
        for attendance in attendances:
            event = Event.query.get(attendance.eventId)
            result.append({
                "id":event.id,
                "name": event.name,
                "description": event.description
            })
        return jsonify(result)
        
    def delete(self, id):  
        print('en delete id es ', id)
        attendance = Attendance.query.filter_by(eventId=id).first()

        db.session.delete(attendance)
        db.session.commit()
        return jsonify({'mensaje': 'Asistencia confirmada fue eliminada con éxito.'})
    
    
    