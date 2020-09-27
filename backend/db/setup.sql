-- Create the database if it does not already exist
CREATE DATABASE IF NOT EXISTS restaurant;

-- (for automation) Load the database for the next commands
-- to take affect.
USE restaurant;

-- Create the Users table
CREATE TABLE TABLE IF NOT EXISTS users
(
    user_id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    UNIQUE (email),
    UNIQUE (username),
    CHECK (fname <> ''),
    CHECK (lname <> ''),
    CHECK (email <> ''),
    CHECK (username <> ''),
    CHECK (password <> '')
);

-- Create the Posts table, ensure we have a FOREIGN KEY
-- on user_id that references the `users` table
CREATE TABLE IF NOT EXISTS posts
(
    post_id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    caption VARCHAR(255),
    image_url VARCHAR(255) NOT NULL,
    likes INT UNSIGNED NOT NULL,
    dislikes INT UNSIGNED NOT NULL,
    location VARCHAR(50),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    CHECK (user_id <> 0),
    CHECK (image_url <> '')
);

-- Create the bookmarks table, this will be used to keep track
-- of the posts the user wants to store in their collection
-- to refer to later.
-- Ensure both user_id and post_id are FOREIGN KEYs that reference
-- the `users` and `posts` tables respectively.
CREATE TABLE IF NOT EXISTS bookmarks
(
    user_id INT UNSIGNED NOT NULL,
    post_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(post_id) REFERENCES posts(post_id),
    PRIMARY KEY(user_id, post_id)
);

-- Create the likes table, this will be used to keep track
-- of the likes on posts made by a user.
-- Ensure both post_id and user_id are FOREIGN KEYs that reference
-- the `posts` and `users` tables respectively.
CREATE TABLE IF NOT EXISTS likes
(
    post_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    reaction TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY(post_id) REFERENCES posts(post_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    PRIMARY KEY (post_id, user_id)
);

DELIMITER //
CREATE TRIGGER tr_ins_likes
AFTER INSERT
ON likes FOR EACH ROW
BEGIN
	IF (NEW.reaction=0) THEN
    	UPDATE posts SET dislikes=dislikes + 1 WHERE post_id=NEW.post_id;
    ELSEIF (NEW.reaction=1) THEN
    	UPDATE posts SET likes=likes + 1 WHERE post_id=NEW.post_id;
    END IF;
END; //
DELIMITER ;

DELIMITER //
CREATE TRIGGER tr_up_likes
AFTER UPDATE
ON likes FOR EACH ROW
BEGIN
	-- Check if the previous reaction was a dislike,
    -- if so decrement the dislike and increment the likes + 1
	IF (OLD.reaction=0) THEN
    	UPDATE posts SET dislikes=dislikes - 1, likes=likes + 1 WHERE post_id=OLD.post_id;
    -- Check if the previsou reaction was a like,
    -- if so decrement the likes and increment the dislike + 1
    ELSEIF (OLD.reaction=1) THEN
    	UPDATE posts SET likes=likes - 1, dislikes=dislikes + 1 WHERE post_id=OLD.post_id;
    END IF;
END; //
DELIMITER ;

DELIMITER //
CREATE TRIGGER tr_del_likes
AFTER DELETE ON likes FOR EACH ROW
BEGIN
	-- Check if the previous reaction was a dislike,
    -- if so, remove their dislike from the post.
	IF (OLD.reaction=0) THEN
    	UPDATE posts SET dislikes=dislikes-1 WHERE post_id=OLD.post_id;
    -- Check if the previous reaction was a like,
    -- if so, remove their like from the post.
    ELSEIF (OLD.reaction=1) THEN
    	UPDATE posts SET likes=likes-1 WHERE post_id=OLD.post_id;
    END IF;
END; //
DELIMITER ;

