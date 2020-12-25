from flask import Flask ,redirect,render_template,request

app = Flask(__name__)


@app.route("/")

def index():
    return render_template("index.html")

@app.route("/content",methods=["GET","POST"])
def content():
    if request.method == "GET":
        return render_template("content.html")

@app.route("/beginer",methods=["GET","POST"])
def beginer():
    return render_template("beginer.html")


@app.route("/trial",methods=["GET","POST"])
def trial():
    return render_template("trial.html")

@app.route("/expert",methods=["GET","POST"])
def expert():
    return render_template("expert.html")

@app.route("/student",methods=["GET","POST"])
def student():
    return render_template("student.html")

@app.route("/login",methods=["GET","POST"])
def student():
    return render_template("login.html")
