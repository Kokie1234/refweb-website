CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('admin', 'student') NOT NULL
);

CREATE TABLE Admins (
    user_id INT PRIMARY KEY,
    /* Add additional columns for admin-specific information */
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Students (
    user_id INT PRIMARY KEY,
    /* Add additional columns for student-specific information */
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
