--CREATE DATABASE testbase

CREATE TABLE users(
    userID INT IDENTITY (1,1) PRIMARY KEY,
    Name NVARCHAR(MAX),
)

CREATE TABLE matches(
    matchID INT IDENTITY(1,1) PRIMARY KEY
)

CREATE TABLE userMatches(
    userMatchID INT IDENTITY (1,1),
    matchID INT,
    userID INT,
    FOREIGN KEY (matchID) REFERENCES matches(matchID),
    FOREIGN KEY (userID) REFERENCES users(userID)
)