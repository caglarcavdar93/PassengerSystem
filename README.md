# PassengerSystem

This is a sample use case scenario about adding, updating, deleting and retrieving passengers of a flight.
The scenario is:
- Personel logs into system.
- Sees list of the passengers
- Adds new one to list or updates one
- Passenger needs to provide a correct document no according to his citizenship.
- If he is American, he needs to provide passaport number.
- If he is UK citizen, he needs to provide travel document number
- If he is Turkey citizen, he needs to provide visa number.
- API checks the values of document number, if it is correct, it stores passenger data to the database or updates existing the passenger.

## Tech Stack:
- .Net 6
- Entityframework Core InMemory
- React.js
- React Bootstrap

To run React project, go to project directory from command line and run:
```
npm install
npm start
```
** UI project didnt finished yet. But you can check API endpoints with Swagger.
