from database import db 

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    email = db.Column(db.String(250))
    password = db.Column(db.String(250))
    role = db.Column(db.String(250))

    userAttendances = db.relationship("Attendance", backref='user', cascade="all, delete-orphan")


    def __str__(self):
        return (
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'email: {self.email}, '
            f'password: {self.password}, '
            f'role: {self.role}, '
        )
        
