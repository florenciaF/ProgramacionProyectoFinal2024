from app import db
#usuarios que asisten a los eventos
class Attendance(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    eventId = db.Column(db.Integer, db.ForeignKey('event.id'))

    
    def __str__(self):
        return (
            f'id: {self.id}, '
        )