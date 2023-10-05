from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from bcrypt import hashpw, gensalt
from flask import Flask


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    password_hash = db.Column(db.String)  # Store the hashed password
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    favorites = db.relationship('Favorite', back_populates='user')
    readings = db.relationship('Reading', back_populates='user')

    def set_password(self, password):
        self.password_hash = hashpw(password.encode('utf-8'), gensalt())

    def check_password(self, password):
        return hashpw(password.encode('utf-8'), self.password_hash.encode('utf-8')) == self.password_hash.encode('utf-8')

class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'
   
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    author = db.Column(db.String)
    publication_year = db.Column(db.Integer)
    cover_image = db.Column(db.String)
    description = db.Column(db.String)  
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    favorites = db.relationship('Favorite', back_populates='book')
    readings = db.relationship('Reading', back_populates='book')
    category = db.relationship('Category', back_populates='books')


class Favorite(db.Model, SerializerMixin):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', back_populates='favorites')
    book = db.relationship('Book', back_populates='favorites')

class Reading(db.Model, SerializerMixin):
    __tablename__ = 'readings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    status = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', back_populates='readings')
    book = db.relationship('Book', back_populates='readings')

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)

    books = db.relationship('Book', back_populates='category')


    if __name__ == '__main__':
     db.create_all()
     app.run()


# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.orm import validates

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# class User(db.Model, SerializerMixin):
#     __tablename__ = 'users'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, unique=True)
#     email = db.Column(db.String, unique=True)
#     password = db.Column(db.String)
#     created_at = db.Column(db.DateTime, server_default=db.func.now())
#     updated_at = db.Column(db.DateTime, onupdate=db.func.now())

#     favorites = db.relationship('Favorite', back_populates='user')
#     readings = db.relationship('Reading', back_populates='user')

# class Book(db.Model, SerializerMixin):
#     __tablename__ = 'books'
   
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, unique = True)
#     author = db.Column(db.String)
#     publication_year = db.Column(db.Integer)
#     cover_image = db.Column(db.String)
#     category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

#     favorites = db.relationship('Favorite', back_populates='book')
#     readings = db.relationship('Reading', back_populates='book')
#     category = db.relationship('Category', back_populates='books')
    
    

# class Favorite(db.Model, SerializerMixin):
#     __tablename__ = 'favorites'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
#     created_at = db.Column(db.DateTime, server_default=db.func.now())
#     updated_at = db.Column(db.DateTime, onupdate=db.func.now())

#     user = db.relationship('User', back_populates='favorites')
#     book = db.relationship('Book', back_populates='favorites')


# class Reading(db.Model, SerializerMixin):
#     __tablename__ = 'readings'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
#     status = db.Column(db.String)
#     created_at = db.Column(db.DateTime, server_default=db.func.now())
#     updated_at = db.Column(db.DateTime, onupdate=db.func.now())

#     user = db.relationship('User', back_populates='readings')
#     book = db.relationship('Book', back_populates='readings')


# class Category(db.Model):
#     __tablename__ = 'categories'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, unique=True)
     

#     books = db.relationship('Book', back_populates='category')


# if __name__ == '__main__':
#     db.create_all()
#     app.run()

