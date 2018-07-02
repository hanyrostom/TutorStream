-- Do not use this file 

-- Seed data for tables 

-- Users
INSERT INTO users (name, password, email, tutor, bio) VALUES ('john', 'password', 'jcynn@gmail.com', 0, 'I am John');
INSERT INTO users (name, password, email, tutor, bio) VALUES ('michael', 'password', 'mcortez@gmail.com', 0, 'I am Michael');	
INSERT INTO users (name, password, email, tutor, bio) VALUES ('hany', 'password', 'jhrostom@gmail.com', 0, 'I am Hany');
INSERT INTO users (name, password, email, tutor, bio) VALUES ('nick', 'password', 'nboylan@gmail.com', 1, 'I am Nick');	
INSERT INTO users (name, password, email, tutor, bio) VALUES ('2chainz', 'password', '2chainz@gmail.com', 0, 'I am lit');
INSERT INTO users (name, password, email, tutor, bio) VALUES ('2gangsta', 'password', '2gangsta@gmail.com', 0, 'I hustle till I die');
INSERT INTO users (name, password, email, tutor, bio) VALUES ('Albert', 'password', 'falbert@gmail.com', 1, 'Aok Aok Aok');

-- Users who are tutors
INSERT INTO tutors (id, bio, price) VALUES (2, 'Your #1 stop for the GRE', 80);
INSERT INTO tutors (id, bio, price) VALUES (3, 'Part-time rapper, full-time tutor', 70);

-- Tests Tutors can Tutor



-- Tests Users are interested in
INSERT INTO user_tests (id, test_id) VALUES (1, 1);
INSERT INTO user_tests (id, test_id) VALUES (2 , 2);
INSERT INTO user_tests (id, test_id) VALUES (3, 4);
INSERT INTO user_tests (id, test_id) VALUES (6, 4);

-- Sessions 
insert into sessions(test_id, tutor_id, student_id, date) values (4, 5, 1, curdate());
insert into sessions(test_id, tutor_id, student_id, date) values (1, 8, 3, curdate());

