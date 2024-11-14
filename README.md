# patients_record_system

A Simple Development App That Records Patients' Hospital Visits

## How to run

```Clone the repo```
```cd ./patients_record_system```
```npm install```
```create .env file DB_URI=mongodb://127.0.0.1:27017/PatientsRecord```
```generate JWT_SECRET and add to .env```
```set API_PORT=5000```
```cd frontend/```
```live-server --port=3000```
```npm run dev```


## API Routes Supported

```POST http://localhost:5000/users```
```GET http://localhost:5000/users```
```GET http://localhost:5000/users/:userID```
```POST http://localhost:5000/records```
```GET http://localhost:5000/records```
```GET http://localhost:5000/records/:recordID```


## The Frontend

The frontend is accessed on ```localhost:3000/```
To access static pages
```localhost:3000/registration.html```
```localhost:3000/vitals.html```
```localhost:3000/records.html```
