from server import db, User, Book, Favorite, Reading
from faker import Faker

fake = Faker()

def seed_database():
    # Create 10 sample users
    for _ in range(10):
        user = User(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
        )
        db.session.add(user)

    # Create 10 sample books
    for _ in range(20):
        book = Book(
            name=fake.sentence(nb_words=3),
            author=fake.name(),
            publication_year=fake.year(),
            cover_image=fake.image_url(),
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
        status = fake.random_element(elements=('In Progress', 'Completed', 'On Hold'))
        reading = Reading(user=user, book=book, status=status)
        db.session.add(reading)

    # Commit the changes to the database
    db.session.commit()

if __name__ == '__main__':
    seed_database()
