# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You can migrate the model from the Ruby console to add in the foreign key. The name of the foreign key would be an integer tied to a label so an example of this might look like - `student_id:`. This also explains why the foreign key would be connect to the Student model. 

Researched answer: You can fix the mix and add in the foreign key by creating a migration to add the foreign keys using `add_foreign_key` before specifying the foreign key parameters. The name of the foreign key would need to describe or point towards the relationship between the two models used, since foreign keys link the two databases together and will output Boolean values, so in other words the foreign key name will always be `modelname_id` / cohort_id. The foreign key would be on the Student model because a student belongs to a cohort, so cohort_id would connect the Student model and Cohort model together. 

2. Which RESTful routes must always be passed params? Why?

Your answer: New, Show, Edit, and Destroy would be routes that always must be passed params because you wouldn't want these methods to be applied in mass but on a more case-by-case basis.  

Researched answer: The RESTful routes that must always be passed params would be Edit, Update and Destroy (3 of 7 routes) because it must be specified individually as to what data needs to be modified or removed, otherwise without the params being there, these changes would effect the content in mass. 

3. Name three rails generator commands. What is created by each?

Your answer: One command would be `rails s` activates rails API server so you can see the changes in real time and investigate errors that may come up as it gives decent information on that, another is `rails c` allows access to the rails console so you can view or create a model, and lastly `rails db:create` is what is used to create database migrations after the column content have been prior established. 

Researched answer: First off, `rails g` or `rails generate` can be used to generate/create something new dependin upon what follows it, so `rails g controller` would create a new controller or `rails g resource...` would create a new resouce. Another option would be `rails g -h` is an important one because it gives more information about what commands are allow and the different synatx options for them, returning a list of general options. And finally, `rails destroy...` is useful for when you are beginning a project and may have excessive typos or wish change the relationship dynamic of the models; well this command will go through every path that a generator will use to create a file, only it will remove the fil instead. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
 - Index (def index) would display a list of all the students.
action: "POST" location: /students
- Create (def create) would add a new student to the database, then typically user would experience a redirect. 
action: "GET" location: /students/new
- New (def new) would go through steps or a form to add a new student 
action: "GET" location: /students/2
- Show (def show) would show information about one specific student. 
action: "GET" location: /students/2/edit
- Edit (def edit) show edit steps or a form to edit one specific student's information. 
action: "PATCH" location: /students/2
- Update (def update) update a particular student's information in database, then typically user would experience a redirect.
action: "DELETE" location: /students/2
- Destory (def destory) delete a particular student from the database, then typically user would experience a redirect.
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

** User Stories **

* As a: Developer

* I want to: Make an application that will manage the collection of submitted tasks needing to be completed. 

* So that: I do not have to manually organize my to do list by hand. 

Acceptance Criteria

- Should be able to categorize types of task, title of task, expected date of completion. These fields are mandatory. 
- Should return a well-organized and visually appealing list with total number of tasks and relating categories, titles, and dates. 
- Should limit the amount of characters found in title of task. 
- Should be able to choose "Not Sure yet!" or "To be Determined." as alternatives to 'expected date of completion'. 

Non-Functional Expectations 
- User must authenticate to use application through email or username along with password.
- Application should process task submissions and update centralized total list within maximum of 2.3 seconds
- All user inputs should be backed up on cloud server within maximum of 10 seconds. 
