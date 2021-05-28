interface Talent {
    id: number;
    description: string;
    pointsInTalent: number;
    parent: Talent | null;
    dependency: Talent | null;
    totalPoints: number;

    addPoint(): Talent;
    pointInDependency(): number | undefined;
    addDependency(dependency: Talent): Talent;
    setParent(talent: Talent): Talent;
    isParentUnlocked(): boolean;
    isHavingDependency(): boolean;
}

// class NullTalent implements Talent {
//     //eslint-disable-next-line
//     id: number = 0;
//     dependency: Talent = new NullTalent();
//     parent: Talent = new NullTalent();
//     //eslint-disable-next-line
//     description: string = '';
//     //eslint-disable-next-line
//     pointsInTalent: number = 0;
//     //eslint-disable-next-line
//     totalPoints: number = 0;
//     addDependency(dependency: Talent): Talent {
//         return this;
//     }
//     addPoint(): Talent {
//         return this;
//     }
//     isHavingDependency(): boolean {
//         return false;
//     }
//     isParentUnlocked(): boolean {
//         return false;
//     }
//     pointInDependency(): number | undefined {
//         return undefined;
//     }
//     setParent(talent: Talent): Talent {
//         return this;
//     }
//
// }

export default class ConcreteTalent implements Talent {
    id: number;
    description: string;
    pointsInTalent = 0;
    parent: Talent | null = null;
    dependency: Talent | null = null;
    totalPoints: number;

    constructor(id: number, description: string, totalPoints: number, dependency?: any) {
        this.id = id;
        this.description = description;
        this.totalPoints = totalPoints;
        this.dependency = dependency === null ? null : new ConcreteTalent(dependency.id, dependency.description, dependency.totalPoints, null).setParent(this);
    }
    addPoint(): ConcreteTalent {
        ++this.pointsInTalent;
        return this;
    }
    pointInDependency(): number | undefined {
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