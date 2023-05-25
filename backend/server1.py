# Import flask
from flask import Flask, jsonify, request
import pymysql

# Initializing flask app
app = Flask(__name__)

# Student data
conn = pymysql.connect(
    host="database-1.cbujeud4h1e4.us-east-2.rds.amazonaws.com",
    user="admin",
    password="123456789",
    db="students_data"
)

# Retrieve student data from database
def get_student_data():
    with conn.cursor() as cursor:
        cursor.execute("SELECT * FROM STUDENTS")
        result = cursor.fetchall()
        students = []
        for row in result:
            student = {
                "Sno": row[0],
                "Name": row[1],
                "course": row[2],
                "Age": row[3]
                
            }
            students.append(student)
        return students

# Route for seeing student data
@app.route('/students')
def student_data():
    students = get_student_data()

    # Returning an API for showing in ReactJS
    return {"students": students}

# Running app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
