# Import flask
from flask import Flask

# Initializing flask app
app = Flask(__name__)

# Student data
students = [
    {"Sno":1,"Name": "pavan", "Age": 22, "course": "Computer Science"},
    {"Sno":2,"Name": "siva", "Age": 21, "course": "Mathematics"},
    {"Sno":3,"Name": "jaya", "Age": 23, "course": "Business"}
]

# Route for seeing student data
@app.route('/students')
def student_data():

	# Returning an API for showing in ReactJS
	return {"students": students}

# Running app
if __name__ == '__main__':
	app.run(debug=True, port=5000)

