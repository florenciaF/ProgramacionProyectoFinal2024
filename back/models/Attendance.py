from app import db
#usuarios que asisten a los eventos
class Attendance(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    eventId = db.Column(db.Integer, db.ForeignKey('event.id'))
    status = db.Column(db.String(50), default='applied')

    
    def __str__(self):
        return (
            f'id: {self.id}, '
            f'userId: {self.userId}, '
            f'eventId: {self.eventId}, '
            f'status: {self.status}, '
        )