export interface Talent {
    id: number;
    description: string;
    pointsInTalent: number;
    parent: Talent | null;
    dependency: Talent | null;
    totalPoints: number;
    needPointsInSpec: number;

    addPoint(): Talent;
    removePoint(): Talent;
    pointsInDependency(): number | undefined;
    addDependency(dependency: Talent): Talent;
    setParent(talent: Talent): Talent;
    isParentUnlocked(): boolean;
    isHavingDependency(): boolean;
}

export default class ConcreteTalent implements Talent {
    id: number;
    description: string;
    pointsInTalent = 0;
    parent: Talent | null = null;
    dependency: Talent | null = null;
    totalPoints: number;
    needPointsInSpec: number;

    constructor(id: number, description: string, totalPoints: number, needPointsInSpec: number, dependency?: any) {
        this.id = id;
        this.description = description;
        this.totalPoints = totalPoints;
        this.needPointsInSpec = needPointsInSpec;
        this.dependency = dependency === null ? null : new ConcreteTalent(dependency.id, dependency.description, dependency.totalPoints, dependency.needPointsInSpec, null).setParent(this);
    }
    addPoint(): Talent {
        ++this.pointsInTalent;
        return this;
    }
    removePoint(): Talent {
        --this.pointsInTalent;
        return this;
    }
    pointsInDependency(): number | undefined {
        return this.dependency?.pointsInTalent;
    }
    addDependency(dependency: Talent): Talent {
        this.dependency = dependency;
        return this;
    }
    setParent(talent: Talent): Talent {
        this.parent = talent;
        return this;
    }
    isParentUnlocked(): boolean {
        return this.parent?.pointsInTalent === this.parent?.totalPoints;
    }
    isHavingDependency(): boolean {
        return !!this.dependency;
    }
}