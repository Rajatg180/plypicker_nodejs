
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

#### Register User 
<img src="https://github.com/Rajatg180/plypicker_flutter/assets/100464536/2264a29f-c70e-4625-b431-a6811f3fdd98" width="500" height="500"> 






