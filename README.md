Student Enrollment Management System
Description: The Student Enrollment Management System is a web-based application built using ASP.NET Core. It provides a robust and scalable solution for managing students, courses, enrollments, and course reviews. The system offers a comprehensive CRUD API to handle various operations, enabling users to easily manage student enrollments and track the progress of courses and students within an educational environment.

Features:

User Management:

Manage user accounts (students) with Identity Framework for authentication and authorization.
Role-based access control for users, allowing separation of students, admins, and other potential roles.
Course Management:

Create, update, and manage courses, each containing relevant details like course code, title, description, and credits.
Supports adding and tracking multiple courses for individual users.
Enrollment Management:

Enroll students in courses and track their enrollment status (e.g., pending, completed).
Handle many-to-many relationships between students and courses.
Store enrollment-specific attributes such as grades, status, and completion date.
Reviews & Feedback:

Enable students to leave feedback and reviews for completed courses.
Each review is linked to both the student and the course for easy tracking.
Automated Tracking:

Track the status of student enrollments, course progress, and completion dynamically through the API.
Technologies Used:

ASP.NET Core: For building the back-end API with controllers, services, and repository patterns.
Entity Framework Core: For ORM and managing database migrations.
SQL Server: As the primary database for persisting user, course, enrollment, and review data.
ASP.NET Identity: For secure user authentication and role management.
AutoMapper: To handle object-to-object mapping between models and DTOs.
Swagger/OpenAPI: Integrated for API documentation and testing.
JWT (JSON Web Tokens): For secure and scalable token-based authentication.
LINQ: For querying and managing data.
C#: As the primary programming language for the backend logic.
Key Features:

RESTful API: Exposes endpoints for managing users, courses, enrollments, and reviews.
Error Handling: Comprehensive error messages and status codes for better API usability.
Data Validation: Ensures that user inputs and data models are valid before processing.
Efficient Many-to-Many Relationships: Seamlessly manage student-to-course enrollments through a dedicated enrollment table.
Token-Based Authentication: Secure access to resources using JWT, ensuring that users are authenticated for sensitive operations.
