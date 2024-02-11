
## Setup

- Clone the Repo
```bash
 git clone https://github.com/Rajatg180/plypicker_nodejs.git
```
- Install npm

```bash
npm install
```

- Create .env and Replaces the values with your values 

```bash
  MONGO_URI="YOUR MONGODB URL"

  JWT_SECRET="JWT SECRET"
  
  JWT_LIFETIME='30d'
```

- Start the server 
```bash
npm start
```

### Routers

```bash
  1) Register(post) -   http://localhost:3000/api/v1/auth/register 
  2) Login(post) - http://localhost:3000/api/v1/auth/login
  3) Creat Task(post) -  http://localhost:3000/api/v1/task
  4) Get Current Users task(get) -  http://localhost:3000/api/v1/task/currentUserTask
  5) Delete task(Delete) - http://localhost:3000/api/v1/:id  
  6) Get all task(get) -  http://localhost:3000/api/v1/task
```

### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

### Test 

#### 1) Register User 
<img src="https://github.com/Rajatg180/plypicker_flutter/assets/100464536/2264a29f-c70e-4625-b431-a6811f3fdd98" width="900" height="500"> 

#### 2) Login User 
<img src="https://github.com/Rajatg180/plypicker_flutter/assets/100464536/f04946b4-298b-46d9-8d83-ec97c9a34ce8" width="900" height="500"> 

#### 3) Create Task
<img src="https://github.com/Rajatg180/plypicker_flutter/assets/100464536/c4931a0f-17c6-40b8-bdec-f4c205f9092d" width="900" height="500"> 

#### 4) Get All Task
<img src="https://github.com/Rajatg180/plypicker_flutter/assets/100464536/6e6f93e8-b513-4580-8bdf-38c7f29f1722" width="900" height="500"> 

#### 5) Current User Task 
<img src="https://github.com/Rajatg180/plypicker_flutter/assets/100464536/814cf57d-824a-4b29-9921-4463d394389f" width="900" height="500"> 

#### 6) Delete Task 
<img src="https://github.com/Rajatg180/plypicker_flutter/assets/100464536/9ae06e4f-3a48-44a3-b8bd-97feed1c547d" width="900" height="500"> 





