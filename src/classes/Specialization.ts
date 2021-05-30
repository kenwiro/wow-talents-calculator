import ConcreteTalent, { Talent } from "@/classes/Talent";

interface Spec {
    pointsInSpec: number
    talents: Talent[],
    addPointInSpec(): void,
    removePointInSpec(): void
}

export default class Specialization implements Spec {
    pointsInSpec = 0;
    talents: Talent[];
    constructor(data: any[]) {
        this.talents = data.map(talent => new ConcreteTalent(talent.id, talent.description, talent.totalPoints, talent.needPointsInSpec, talent.dependency));
    }
    addPointInSpec() {
        ++this.pointsInSpec;
    }
    removePointInSpec() {
        --this.pointsInSpec;
    }
}
