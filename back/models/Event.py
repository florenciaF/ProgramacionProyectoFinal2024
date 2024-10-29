from app import db

class Event(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    description = db.Column(db.String(250))
    lecturer = db.Column(db.String(250))
    link = db.Column(db.String(250))
    
    eventAttendance = db.relationship("Attendance", backref='event', cascade="all, delete-orphan")
   
    def __str__(self):
        return (
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'description: {self.description}, '
            f'lecturer: {self.lecturer}, '
            f'link: {self.link}, '
        )
