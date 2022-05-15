import express, { Request, Response, NextFunction } from "express";
import { PrismaClient, patients } from "@prisma/client";
require('~/patch.js')

let port = process.env.PORT || 3000;
var app = express();
const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world!");
});

app.get("/patients", handlePatientsRequest );

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

async function handlePatientsRequest(req: Request, res: Response, next: NextFunction) {
    let patients = await getPatients();
    res.send(patients);
}

async function getPatients() : Promise<Array<patients>> {
    const patients = await prisma.patients.findMany();
    console.log(patients);
    return patients;
}