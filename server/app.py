import random
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_migrate import Migrate
from models import db, User, Book, Favorite, Reading, Category
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from bcrypt import hashpw, gensalt


app = Flask(__name__)
CORS(app)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your-secret-key'  # Replace with a strong secret key
jwt = JWTManager(app)
migrate = Migrate(app, db)

db.init_app(app)


#Resource class for home  page
class HomeResource(Resource):
    def get(self):
        return {"message": "Welcome to BookHaven Paradise - Where Stories Come to Life!"}
    


# Resource class for users list and creation
class UsersResource(Resource):
    def get(self):
        users = User.query.all()
        user_data = [
            {
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'password' : user.password
            }
            for user in users
        ]
        return jsonify(user_data)

    def post(self):
        data = request.get_json()
        user = User(name=data['name'], email=data['email'], password=data['password'])
        db.session.add(user)
        db.session.commit()
        return {'message': 'User created successfully'}, 201
    
    # Resource class for a specific user by ID
class UserResource(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if user:
            user_data = {
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'password': user.password
            }
            return jsonify(user_data)
        else:
            return {'message': 'User not found'}, 404
        
        # Resource class for categories
class CategoriesResource(Resource):
    def get(self):
        categories = Category.query.all()
        category_data = [
            {
                'id': category.id,
                'name': category.name,
                'cover_image': category.cover_image,
               
            }
            for category in categories
        ]
        return jsonify(category_data)
    
    # Resource class for books in a specific category
class CategoryBooksResource(Resource):
    def get(self, category_id):
        books = Book.query.filter_by(category_id=category_id).all()
        book_data = [
            {
                'id': book.id,
                'name': book.name,
                'author': book.author,
                'publication_year': book.publication_year,
                'cover_image': book.cover_image,
               
            }
            for book in books
        ]
        return jsonify(book_data)
    
    # Resource class for favorites
class FavoritesResource(Resource):
    def get(self):
        favorites = Favorite.query.all()
        favorite_data = [
            {
                'id': favorite.id,
                'user_id': favorite.user_id,
                'book_id': favorite.book_id,
                
            }
            for favorite in favorites
        ]
        return jsonify(favorite_data)
    
    def post(self):
        data = request.get_json()  

       
        if 'user_id' not in data or 'book_id' not in data:
            return {'message': 'User ID and Book ID are required'}, 400

        # Create a new Favorite object
        favorite = Favorite(
            user_id=data['user_id'],
            book_id=data['book_id']
        )

       
        db.session.add(favorite)
        db.session.commit()

        
        return {'message': 'Favorite added successfully'}, 201
    
    # Resource class for readings
class ReadingsResource(Resource):
    def get(self):
        readings = Reading.query.all()
        reading_data = [
            {
                'id': reading.id,
                'user_id': reading.user_id,
                'book_id': reading.book_id,
                'status': reading.status,
                
            }
            for reading in readings
        ]
        return jsonify(reading_data)
    
    def delete(self, reading_id):
        reading = Reading.query.get(reading_id)

        if not reading:
            return {'message': 'Reading not found'}, 404

        db.session.delete(reading)
        db.session.commit()

        return {'message': 'Reading deleted successfully'}
    

# Function to hash a password
def hash_password(password):
    salt = gensalt()
    return hashpw(password.encode('utf-8'), salt)

# Resource class for user registration
class UserSignUpResource(Resource):
    def post(self):
        data = request.get_json()
        if 'name' not in data or 'email' not in data or 'password' not in data:
            return {'message': 'Name, email, and password are required'}, 400

        # Check if the user with the same email already exists
        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user:
            return {'message': 'User with this email already exists'}, 400

        hashed_password = hash_password(data['password'])
        user = User(name=data['name'], email=data['email'], password=hashed_password)
        db.session.add(user)
        db.session.commit()

        return {'message': 'User registered successfully'}, 201

# Resource class for user login
class UserLoginResource(Resource):
    def post(self):
        data = request.get_json()
        if 'email' not in data or 'password' not in data:
            return {'message': 'Email and password are required'}, 400

        user = User.query.filter_by(email=data['email']).first()
        if user and hashpw(data['password'].encode('utf-8'), user.password.encode('utf-8')) == user.password.encode('utf-8'):
            access_token = create_access_token(identity=user.id)
            return {'access_token': access_token}, 200
        else:
            return {'message': 'Invalid credentials'}, 401

# Resource class for protected resources (e.g., favorites, readings)
class ProtectedResource(Resource):
    @jwt_required()
    def get(self):
        current_user_id = get_jwt_identity()
        favorites = Favorite.query.filter_by(user_id=current_user_id).all()
        



api.add_resource(HomeResource, '/')
api.add_resource(UsersResource, '/users')
api.add_resource(UserResource, '/users/<int:user_id>')
api.add_resource(CategoriesResource, '/categories')
api.add_resource(CategoryBooksResource, '/category/<int:category_id>/books')
api.add_resource(ReadingsResource, '/readings')
api.add_resource(FavoritesResource, '/favorites')
api.add_resource(UserSignUpResource, '/register')
api.add_resource(UserLoginResource, '/login')
api.add_resource(ProtectedResource, '/favorites', '/readings')

if __name__ == '__main__':
    app.run()

    
# from flask import Flask, request, jsonify
# from flask_restful import Resource, Api
# from flask_migrate import Migrate
# from models import db, User, Book, Favorite, Reading, Category

# app = Flask(__name__)
# api = Api(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# migrate = Migrate(app, db)

# db.init_app(app)

# Resource class for home  page
# class HomeResource(Resource):
#     def get(self):
#         return {"message": "Welcome to BookHaven Paradise - Where Stories Come to Life!"}
    


# # Resource class for users list and creation
# class UsersResource(Resource):
#     def get(self):
#         users = User.query.all()
#         user_data = [
#             {
#                 'id': user.id,
#                 'name': user.name,
#                 'email': user.email,
#                 'password' : user.password
#             }
#             for user in users
#         ]
#         return jsonify(user_data)

#     def post(self):
#         data = request.get_json()
#         user = User(name=data['name'], email=data['email'], password=data['password'])
#         db.session.add(user)
#         db.session.commit()
#         return {'message': 'User created successfully'}, 201
    
#     # Resource class for a specific user by ID
# class UserResource(Resource):
#     def get(self, user_id):
#         user = User.query.get(user_id)
#         if user:
#             user_data = {
#                 'id': user.id,
#                 'name': user.name,
#                 'email': user.email,
#                 'password': user.password
#             }
#             return jsonify(user_data)
#         else:
#             return {'message': 'User not found'}, 404
        
#         # Resource class for categories
# class CategoriesResource(Resource):
#     def get(self):
#         categories = Category.query.all()
#         category_data = [
#             {
#                 'id': category.id,
#                 'name': category.name,
#                 'cover_image': category.cover_image,
               
#             }
#             for category in categories
#         ]
#         return jsonify(category_data)
    
#     # Resource class for books in a specific category
# class CategoryBooksResource(Resource):
#     def get(self, category_id):
#         books = Book.query.filter_by(category_id=category_id).all()
#         book_data = [
#             {
#                 'id': book.id,
#                 'name': book.name,
#                 'author': book.author,
#                 'publication_year': book.publication_year,
#                 'cover_image': book.cover_image,
               
#             }
#             for book in books
#         ]
#         return jsonify(book_data)
    
#     # Resource class for favorites
# class FavoritesResource(Resource):
#     def get(self):
#         favorites = Favorite.query.all()
#         favorite_data = [
#             {
#                 'id': favorite.id,
#                 'user_id': favorite.user_id,
#                 'book_id': favorite.book_id,
                
#             }
#             for favorite in favorites
#         ]
#         return jsonify(favorite_data)
    
#     def post(self):
#         data = request.get_json()  

       
#         if 'user_id' not in data or 'book_id' not in data:
#             return {'message': 'User ID and Book ID are required'}, 400

#         # Create a new Favorite object
#         favorite = Favorite(
#             user_id=data['user_id'],
#             book_id=data['book_id']
#         )

       
#         db.session.add(favorite)
#         db.session.commit()

        
#         return {'message': 'Favorite added successfully'}, 201
    
#     # Resource class for readings
# class ReadingsResource(Resource):
#     def get(self):
#         readings = Reading.query.all()
#         reading_data = [
#             {
#                 'id': reading.id,
#                 'user_id': reading.user_id,
#                 'book_id': reading.book_id,
#                 'status': reading.status,
                
#             }
#             for reading in readings
#         ]
#         return jsonify(reading_data)
    
#     def delete(self, reading_id):
#         reading = Reading.query.get(reading_id)

#         if not reading:
#             return {'message': 'Reading not found'}, 404

#         db.session.delete(reading)
#         db.session.commit()

#         return {'message': 'Reading deleted successfully'}
    

# api.add_resource(HomeResource, '/')
# api.add_resource(UsersResource, '/users')
# api.add_resource(UserResource, '/users/<int:user_id>')
# api.add_resource(CategoriesResource, '/categories')
# api.add_resource(CategoryBooksResource, '/category/<int:category_id>/books')
# api.add_resource(ReadingsResource, '/readings')
# api.add_resource(FavoritesResource, '/favorites')

# if __name__ == '__main__':
#     app.run()