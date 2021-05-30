import Specialization from "@/classes/Specialization";

interface Calculator {
    totalPoints: number,
    specialization: Specialization,
    addPoint(): void
    removePoint(): void
}

export default class TalentCalculator implements Calculator {
    totalPoints = 51;
    specialization;
    constructor(data: any[]) {
        this.specialization = new Specialization(data)
    }
    addPoint() {
        ++this.totalPoints;
    }
    removePoint() {
        --this.totalPoints;
    }

}
