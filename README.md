# 20155087_Saumya_DLT_Assignment-

# Time Stories API Wrapper
A simple API wrapper for fetching the latest stories from Time.com.

To run the code on your desktop follow the steps :
### Prerequisites

- Node.js (version 14.x.x or higher)
- npm (version 6.x.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/time-stories-api-wrapper.git

**### Navigate to the project directory using**
cd time-stories-api-wrapper

### Install the dependencies using
npm install

### Run the application using 
npm start

This will start the application on **http://localhost:3000.**

Foe fetching the latest stories, make a GET request to the /getTimeStories endpoint. The response will be a JSON array containing the latest 6 stories.

This can be done using **CURL**
**curl -v http://localhost:3000/getTimeStories | ./jq .**

**Sample Output**
[{"title":"FDA: Some Cinnamon Is Tainted with 
                    Lead","link":"/6898406/cinnamon-lead-fda/"},{"title":"Study     
                    Links Plastic to Worse Heart Health","link":"/6898396/microplas 
                    tics-bad-for-heart/"},{"title":...}


