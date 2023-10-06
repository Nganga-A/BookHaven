import random
import requests
from flask import Flask
from models import db, User, Book, Favorite, Reading, Category
import string

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db.init_app(app)

# Define a list of book categories
book_categories = [
    "Fiction",
    "Mystery",
    "Romance",
    "Thriller",
    "Children's",
]

# Define a list of user names (first name and last name)
user_names = [
    ("John", "Doe"),
    ("Jane", "Smith"),
    ("Robert", "Johnson"),
    ("Emily", "Brown"),
     ("Michael", "Wilson"),
     ("Sarah", "Davis"),
     ("David", "Lee"),
     ("Mary", "Anderson"),
    ("William", "Martinez"),
    ("Jennifer", "Garcia"),
     ("Hellen", "Irungu"),
     ("Alex", "Otieno"),
     ("Ann", "Wambui"),
     ("Nick", "Mutuma"),
     ("Hadassah", "Neema"),
]

# Function to generate random passwords
def generate_random_password(length=8):
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for _ in range(length))

# Function to fetch book information from the Google Books API
def fetch_books_from_api(search_query, max_results=40):
    api_key = 'AIzaSyCqOKrqzMnQR7vgAcnOFa4WcfUD9djIuX4&maxResults=40'  
    api_url = f'https://www.googleapis.com/books/v1/volumes?q={search_query}&key={api_key}&maxResults={max_results}'

    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            data = response.json()
            books = data.get('items', [])
            return books
        else:
            print(f"Error fetching data from the API. Status code: {response.status_code}")
            print(f"Response content: {response.content}")
    except Exception as e:
        print(f"An error occurred while fetching data from the API: {str(e)}")

    return []




# Seed the database using data from the Google Books API
def seed_database():
    with app.app_context():
        # Clear existing data in tables
        db.session.query(Favorite).delete()
        db.session.query(Reading).delete()
        db.session.query(User).delete()
        db.session.query(Book).delete()
        db.session.query(Category).delete()

        # Create dictionaries to keep track of book counts for each category
        category_book_counts = {category_name: 0 for category_name in book_categories}

        # Create 10 categories
        for category_name in book_categories:
            category = Category(
                name=category_name,
            )
            db.session.add(category)

        # Create users with first name, last name, and random passwords
        for first_name, last_name in user_names:
            user = User(
                name=f"{first_name} {last_name}",
                email=f"{first_name.lower()}.{last_name.lower()}@example.com",
                password=generate_random_password(),
            )
            db.session.add(user)

        # Fetch and create books from the Google Books API for each category
        for category_name in book_categories:
            books = fetch_books_from_api(category_name)
            for book_info in books:
                volume_info = book_info.get('volumeInfo', {})
                book = Book(
                    name=volume_info.get('title', 'Unknown Title'),
                    author=', '.join(volume_info.get('authors', ['Unknown Author'])),
                    publication_year=volume_info.get('publishedDate', 'Unknown Year'),
                    cover_image=volume_info.get('imageLinks', {}).get('thumbnail', ''),
                    category_id=Category.query.filter_by(name=category_name).first().id,
                    description = volume_info.get('description', 'No description available')
                    
                )
                db.session.add(book)

        # Create 2 sample favorites
        for _ in range(2):
            user = User.query.order_by(db.func.random()).first()
            book = Book.query.order_by(db.func.random()).first()
            favorite = Favorite(user=user, book=book)
            db.session.add(favorite)

        # Create 3 sample readings
        for _ in range(3):
            user = User.query.order_by(db.func.random()).first()
            book = Book.query.order_by(db.func.random()).first()
            status = random.choice(('In Progress', 'Completed', 'On Hold'))
            reading = Reading(user=user, book=book, status=status)
            db.session.add(reading)

        # Commit the changes to the database
        db.session.commit()

if __name__ == '__main__':
    seed_database()



# from models import db, User, Book, Favorite, Reading, Category
# import random
# from flask import Flask
# import string  # Import the string module to generate random passwords

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# db.init_app(app)

# # Define a list of book categories
# book_categories = [
#     "Fiction",
#     "Mystery",
#     "Romance",
#     "Thriller",
#     "Children's",
# ]

# # Define a list of user names (first name and last name)
# user_names = [
#     ("John", "Doe"),
#     ("Jane", "Smith"),
#     ("Robert", "Johnson"),
#     ("Emily", "Brown"),
#     ("Michael", "Wilson"),
#     ("Sarah", "Davis"),
#     ("David", "Lee"),
#     ("Mary", "Anderson"),
#     ("William", "Martinez"),
#     ("Jennifer", "Garcia"),
#     ("Hellen", "Irungu"),
#     ("Alex", "Otieno"),
#     ("Ann", "Wambui"),
#     ("Nick", "Mutuma"),
#     ("Hadassah", "Neema"),
    
# ]

# # Define a list of books with their corresponding cover image URLs,authors 


# books_with_info = [
#     # Fiction
#     {
#         "title": "The Good Sister",
#         "cover_url": "https://images-platform.99static.com//-tUjEZmbTnIMpiyAMy6CiS85KYY=/137x101:962x926/fit-in/500x500/projects-files/101/10168/1016819/4d520fb3-bab8-4d4a-a209-17731bb9da86.jpg",
#         "author": "Sally Hepworth",
#         "publication_year": 2021,
#         "category": "Fiction",
           
#     },
#     {
#         "title": "Those Eyes",
#         "cover_url": "https://miblart.com/wp-content/uploads/2020/11/Raymond-Beckham-683x1024.jpg",
#         "author": "Catherine Ryan Hyde",
#         "publication_year": 2021,
#         "category": "Fiction",
#     },
#     {
#         "title": "The Girl Who Dreamed of the Sky",
#         "cover_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEhdYdbMmhTKSkb7J5OD6EMTPWf38XsLWESviJ0Mj7HQdthRq2sHzE6x-MfXiZPnqpGg&usqp=CAU",
#         "author": "Morgan Housel",
#         "publication_year": 2020,
#         "category": "Fiction",
#     },
#     {
#         "title": "The Good Egg",
#         "cover_url": "https://www.creatopy.com/blog/wp-content/uploads/2020/07/The-Good-Egg-Book-Cover.jpg",
#         "author": "Morgan Housel",
#         "publication_year": 2020,
#         "category": "Fiction",
#     },
#     {
#         "title": "The Night Circus",
#         "cover_url": "https://images.example.com/fiction1.jpg",
#         "author": "Erin Morgenstern",
#         "publication_year": 2011,
#         "category": "Fiction",
#     },
#     # Mystery
#     {
#         "title": "The Dark Horse",
#         "cover_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfQeurwIWQTRlRG5vMsNiys3PbvnHiVT2mENktQcjyWOHs8DMK_eGdPOMVkaXFjEDQOk&usqp=CAU",
#         "author": "Craig Johnson",
#         "publication_year": 2021,
#         "category": "Mystery",
#     },
#     {
#         "title": "Deep Night",
#         "cover_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYaeT781KVgOCklLiQiHYgGIvMXqbshYkfzqzuWS9t9UmZKKg72lqQXnccFbADyEQIG8&usqp=CAU",
#         "author": "Sarah Bailey",
#         "publication_year": 2021,
#         "category": "Mystery",
#     },
#     {
#         "title": "To the Forest",
#         "cover_url": "https://online.visual-paradigm.com/repository/images/7b50e54b-eb1f-4272-879a-6c2b123f5eff/book-covers-design/mystery-fiction-book-cover-with-theme-of-forest.png",
#         "author": "Jeffrey Deaver",
#         "publication_year": 2021,
#         "category": "Mystery",
#     },
#     {
#         "title": "Mermaid to the Rescue",
#         "cover_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsLOzwExETuOVfRCINRwuEeKvOYTkFwYLpoLS2hbrA8ux0DZYeHxOU7WlMYeN-H55QR4&usqp=CAU",
#         "author": "Nell Hampton",
#         "publication_year": 2018,
#         "category": "Mystery",
#     },
#     # Romance
#     {
#         "title": "Her Only Hope",
#         "cover_url": "https://media.glamour.com/photos/5695b110d9dab9ff41b3b891/master/w_1600%2Cc_limit/sex-love-life-2015-09-romance-novel-cover-guy-5-main.jpg",
#         "author": "Morgan Housel",
#         "publication_year": 2020,
#         "category": "Romance",
#     },
#     {
#         "title": "Forever Yours",
#         "cover_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b729f675305113.5c48c4442e789.jpg",
#         "author": "Morgan Housel",
#         "publication_year": 2020,
#         "category": "Romance",
#     },
#     {
#         "title": "Best Beloved",
#         "cover_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oQKsbAwfi8bQm4oW-Td0-wXeauyeI552asEqdImziVSqM2uNDNlU1u6FX60OYdOXuwQ&usqp=CAU",
#         "author": "Morgan Housel",
#         "publication_year": 2020,
#         "category": "Romance",
#     },
#     {
#         "title": "Until It Was",
#         "cover_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9wqHXjGYaX0fbEYxX2K0ZkAN9DOYgzzy59vGFMLecAZuY73UEYN8YNNjcMTLH1arlZI&usqp=CAU",
#         "author": "Morgan Housel",
#         "publication_year": 2020,
#         "category": "Romance",
#     },
#     {
#         "title": "Love",
#         "cover_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKXEx759jyggbiljIv9byDdG5khWPOiIwCyxDgYeerDwjvuXsKECLzXmOkdh-T5909R8&usqp=CAU",
#         "author": "Morgan Housel",
#         "publication_year": 2020,
#         "category": "Romance",
#     },
#     # Thriller
#     {
#         "title": "The Girl with the Dragon Tattoo",
#         "cover_url": "https://images.example.com/thriller1.jpg",
#         "author": "Stieg Larsson",
#         "publication_year": 2005,
#         "category": "Thriller",
#     },
#     {
#         "title": "Gone Girl",
#         "cover_url": "https://images.example.com/thriller2.jpg",
#         "author": "Gillian Flynn",
#         "publication_year": 2012,
#         "category": "Thriller",
#     },
#     {
#         "title": "The Silent Patient",
#         "cover_url": "https://images.example.com/thriller3.jpg",
#         "author": "Alex Michaelides",
#         "publication_year": 2019,
#         "category": "Thriller",
#     },
#     # Children's
#     {
#         "title": "Tomorrow Most Likely",
#         "cover_url": "https://blog-cdn.reedsy.com/uploads/2019/12/tomorrow-most-likely-798x1024.jpg",
#         "author": "Dave Eggers",
#         "publication_year": 2019,
#         "category": "Children's",
#     },
#     {
#         "title": "Sulwe",
#         "cover_url": "https://www.creatopy.com/blog/wp-content/uploads/2020/07/Sulwe-by-Lupita-Nyong%E2%80%99o.jpg",
#         "author": "Lupita Nyong'o",
#         "publication_year": 2019,
#         "category": "Children's",
#     },
#     {
#         "title": "The Gruffalo",
#         "cover_url": "https://images.example.com/children1.jpg",
#         "author": "Julia Donaldson",
#         "publication_year": 1999,
#         "category": "Children's",
#     },
#     {
#         "title": "Where the Wild Things Are",
#         "cover_url": "https://images.example.com/children2.jpg",
#         "author": "Maurice Sendak",
#         "publication_year": 1963,
#         "category": "Children's",
#     },
#     {
#         "title": "Goodnight Moon",
#         "cover_url": "https://images.example.com/children3.jpg",
#         "author": "Margaret Wise Brown",
#         "publication_year": 1947,
#         "category": "Children's",
#     },
# ]


# # Function to generate random passwords
# def generate_random_password(length=8):
#     characters = string.ascii_letters + string.digits + string.punctuation
#     return ''.join(random.choice(characters) for _ in range(length))

# def seed_database():
#     with app.app_context():
#         # Clear existing data in tables
#         db.session.query(Favorite).delete()
#         db.session.query(Reading).delete()
#         db.session.query(User).delete()
#         db.session.query(Book).delete()
#         db.session.query(Category).delete()

#         # Create dictionaries to keep track of book counts for each category
#         category_book_counts = {category_name: 0 for category_name in book_categories}

#         # Create 10 categories
#         for category_name in book_categories:
#             category = Category(
#                 name=category_name,
                
#             )
#             db.session.add(category)

#         # Create users with first name, last name, and random passwords
#         for first_name, last_name in user_names:
#             user = User(
#                 name=f"{first_name} {last_name}",
#                 email=f"{first_name.lower()}.{last_name.lower()}@example.com",
#                 password=generate_random_password(),  
#             )
#             db.session.add(user)

        
#         # Create books using the modified list
#         for book_info in books_with_info:
#             book = Book(
#                 name=book_info["title"],
#                 author=book_info["author"],
#                 publication_year=book_info["publication_year"],
#                 cover_image=book_info["cover_url"],
#                 category_id=Category.query.filter_by(name=book_info["category"]).first().id
#             )
#             db.session.add(book)


#         # Create 2 sample favorites
#         for _ in range(2):
#             user = User.query.order_by(db.func.random()).first()
#             book = Book.query.order_by(db.func.random()).first()
#             favorite = Favorite(user=user, book=book)
#             db.session.add(favorite)

#         # Create 3 sample readings
#         for _ in range(3):
#             user = User.query.order_by(db.func.random()).first()
#             book = Book.query.order_by(db.func.random()).first()
#             status = random.choice(('In Progress', 'Completed', 'On Hold'))
#             reading = Reading(user=user, book=book, status=status)
#             db.session.add(reading)

#         # Commit the changes to the database
#         db.session.commit()

# if __name__ == '__main__':
#     seed_database()







