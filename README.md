# BookHaven  ![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue) [![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/) ![RESTful API](https://img.shields.io/badge/RESTful%20API-0078D4?style=for-the-badge&logo=api&logoColor=white) ![Bootstrap Logo (Alternative)](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![Axios Logo (Alternative)](https://img.shields.io/badge/Axios-0078D4?style=for-the-badge&logo=axios&logoColor=white)



## Overview

Explore the World Through Books is a web application that allows users to discover, manage, and keep track of books and publications. Whether you're an avid reader or simply looking to organize your reading list, this app provides a user-friendly platform to explore, categorize, and remember books of interest.


## Features

- User authentication: Create an account or log in to access the website.
- Browse and search: Explore a diverse range of books and publications.
- Book details: Access detailed information about each book or publication.
- Favorites/Wishlist: Create a list of your favorite books or those you want to read in the future.


## Technologies Used

### Front-end

- React for the user interface.
- React Router for handling navigation.
- Axios for making API requests.
- Bootstrap for responsive styling.

### Back-end

- Flask to build the RESTful API.
- Flask WTF for web forms.
- JWT Authentication to secure user data.

## Setup Instructions

1. Clone the repository to your local machine:

## Setup Instructions

1. Clone the repository to your local machine:

`git clone git@github.com:Nganga-A/BookHaven.git`

2. Navigate to the project directory:

`cd BookHaven`


3. Set up the virtual environment (recommended):

`pipenv install`
`pipenv shell`

4. Install the required packages:

  `pip install -r requirements.txt`


5. Start the backend server:

`python app.py`


6. Navigate to the client directory:

`cd client`


7. Install the client-side dependencies:

`npm install`


8. Start the React development server:

`npm start`


## Project Structure

- `app.py`: Flask backend application.
- `client/`: React frontend code.
- `models.py` `app.py`: Backend API routes and database models.
- `static/`: Static assets like images and styles.
- `requirements.txt`: List of Python dependencies.
- `README.md`: Project documentation (you're reading it!).

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

