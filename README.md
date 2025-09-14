  
  
## Pushing to prod: 
     1. $npm run build 
     2. vercel --prod 
     3. Yay    

## Running the app: $npm run dev 

## Trello 
https://trello.com/b/JGrtFVcX/teily

## Debugging
#### Set up 
Watched a tutorial on setting up debugger https://www.youtube.com/watch?v=FOXNlZFkbPk&t=90s
But basically:
1. select the debug extension (the bug + play icon to the left)
2. Select "create a launch.json file" 
3. Choose Web App (Chrome) that shows up
4. Set the port in the json file to your app (e.g., 5173)
#### Using the debugger 
A debug app will open up in a new chrome window. Set a breakpoint in your code and trigger the breakpoint by e.g., creating a new teily. Then step through your code. 
