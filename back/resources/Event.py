from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Event import Event
from database import db 



class EventsList(Resource):
      
    def post(self): 
        name = request.json['name']
        description = request.json['description']
        lecturer = request.json['lecturer']
        link = request.json['link']
   
        event = Event(name=name, description=description, lecturer=lecturer, link=link)
        
        db.session.add(event)
        db.session.commit()
        return jsonify({'mensaje': 'Evento agregado con éxito.'})
    
    
    def get(self):
        events = db.session.query(Event).all()
        result = []
        for event in events:
            result.append({'id': event.id, 'name': event.name, 'description': event.description, 'lecturer': event.lecturer, 'link': event.link })
        response = jsonify(result)
        response.status_code = 200 
        return response
    
class EventList(Resource):
    
     def put(self, id): 
        event = Event.query.get_or_404(id)
        event.name = request.json.get('name',event.name)
        event.description = request.json.get('description',event.description)
        event.lecturer = request.json.get('lecturer',event.lecturer)
        event.link = request.json.get('link',event.link)
        print( event.name, event.description, event.lecturer, event.link)
        
        db.session.commit()
        return jsonify({'mensaje': 'Evento editado con éxito.'})