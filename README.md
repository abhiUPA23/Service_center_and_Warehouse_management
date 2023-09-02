



## Welcome to the Service Centre and Warehouse Management System 



## About

The Service Centre and Warehouse Management System is a comprehensive solution designed to streamline the process of servicing electronic parts. 
It empowers service center employees to efficiently manage service requests, locate spare parts, calculate repair costs and time, and interface with nearby warehouse centers.



## Features

- **Service Request Creation**: Service center employees can create service requests for electronic parts by logging into the service center portal.

- **Spare Part Availability**: The system checks if the required spare part is available in the service center's inventory by accessing the information from the database.It provides information on the price and estimated repair time if the part is available at that service center.
- **Nearest Warehouse Allocation**: If the spare part is not present in the service center, the system uses an algorithm to find the nearest warehouse center that has the required part.
                                   It calculates the total time for repair and transport, along with the associated cost.

- **Warehouse Approval**: Warehouse employees can log in to the warehouse section to view all demands from service centers and approve requests for spare parts.

- **Chatbot Integration**: We have incorporated a chatbot powered by GenAI that provides information and answers queries related to the service center and warehouse operations.




## Getting Started

### Prerequisites

- [ReactJs,Tailwindcss,Java17]
- [SpringBoot (use intellij IDE for smooth working of backend)]

  

### Installation

  -- **Create** a react app using the command: npx creact-react-app xiaomi_dutchmen (that should install all the necessay node modules)
  -- **Add** the client files except the backend on vs code or any other IDE, open the backend folder in some IDE with Java17 installed, prefferably IntelliJ
    


  
## Usage

  #!important 

  Login Credentials are: 


  For Service center Employees (end item describing the SC/Warehouse code):
    ( "1@example.com", "password", 1),
    ( "2@example.com", "password", 2),
    ( "3@example.com", "password",6),
    ( "4@example.com", "password", 4),
    ( "5@example.com", "password", 3),
    ( "6@example.com", "password", 5),


  For Ware house Employees:
   ( "8@example.com", "password", 101) ->	East
    ( "7@example.com", "password", 401) ->  West
    ( "9@example.com", "password", 201) ->  North
    ("10@example.com","password", 301); -> South


  -- Sevice center emails are unique and are mapped to unique sevice center codes, it is useful in loacing the origin of request in the warehouse.
     For simplicity we are displaying requests of all the service center at one place with their unique code (like 101 for East), so by login with 8@example.com and password=password
     you can see all the request created by various Service centers at one place (if exist).





  -- For example, if you login with 1@example.com in sevice center and choose Redmi Note5 ->Battery  it will find the nearest warehouse and create a service request there as it as no 
    stock for the same. later by login to the warehouse you can see and aproove the request.

   we have also included the sql querry from which the databse has been created 



    
  


      



Thank You
Team Dutchmen
