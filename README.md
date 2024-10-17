# 📚 Student Enrollment Management System

### ✨ Description
The **Student Enrollment Management System** is a web-based application built using **ASP.NET Core**. It provides a robust and scalable solution for managing students, courses, enrollments, and course reviews. The system offers a comprehensive CRUD API, enabling users to easily manage student enrollments and track the progress of courses and students within an educational environment.

---

### 🛠 Features

#### 👥 User Management
- Manage student accounts with **ASP.NET Identity** for authentication and authorization.
- Role-based access control, supporting roles like **Admin** and **Student**.

#### 📚 Course Management
- Create, update, and manage courses with attributes like course code, title, description, and credits.
- Supports tracking of multiple courses for individual users.

#### 📑 Enrollment Management
- Enroll students in courses and track their enrollment status (e.g., pending, completed).
- Manage many-to-many relationships between students and courses.
- Store enrollment-specific details such as grades, enrollment status, and completion date.

#### 💬 Reviews & Feedback
- Enable students to leave feedback and reviews for completed courses.
- Reviews are linked to both the student and the course.

#### ⚙️ Automated Tracking
- Track student enrollments, course progress, and completion status dynamically through the API.

---

### 💻 Technologies Used

- **ASP.NET Core**: Backend API with controllers, services, and repository patterns.
- **Entity Framework Core**: ORM for database management and migrations.
- **SQL Server**: Relational database for storing user, course, enrollment, and review data.
- **ASP.NET Identity**: Secure authentication and role management.
- **AutoMapper**: For mapping objects between models and DTOs.
- **Swagger/OpenAPI**: API documentation and testing interface.
- **JWT (JSON Web Tokens)**: Secure token-based authentication for API access.
- **LINQ**: Data querying and manipulation.
- **C#**: Primary programming language for backend logic.

---

### ⭐ Key Features

- **API**: Exposes endpoints for managing users, courses, enrollments, and reviews.
- **Error Handling**: Comprehensive error messages and status codes for improved API usability.
- **Data Validation**: Ensures data accuracy through validation checks before processing.
- **Many-to-Many Relationships**: Efficiently manage student-to-course enrollments through a dedicated enrollment table.
- **Token-Based Authentication**: JWT tokens secure access to sensitive operations.

---

