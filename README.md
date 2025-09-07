# Java Stack To-Do List

This is a To-Do List application using Java Spring Boot for the backend and a simple frontend with HTML, CSS, and JS. Follow these steps to run the project:

1. Clone the repository:  
   git clone https://github.com/Hamsiny-C/java-stack-to-do-list.git

2. Open a terminal and navigate to the backend folder:  
   cd java-stack-to-do-list/backend

3. Make sure your MySQL database is running and configure the database connection in src/main/resources/application.properties with your database URL, username, and password.

4. Run the backend using Maven:  
   On Windows: ./mvnw spring-boot:run  
   (The backend will start on port 8888 by default. If port 8888 is busy, check with netstat -ano | findstr :8888 and stop the process using taskkill /PID <PID_NUMBER> /F.)

5. Open a web browser and go to:  
   http://localhost:8888/api/tasks  
   (This shows the API endpoint for tasks.)

6. Open the frontend folder and open index.html in your browser. The frontend will connect to the backend API and allow you to add, view, and manage tasks.

7. Make sure Java 17, Maven, MySQL, and Git are installed on your machine for the application to work properly.
