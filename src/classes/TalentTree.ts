import Spec from './Spec';

export default class TalentCalculator {
    public totalPoints = 51;
    public spec: Spec = new Spec();
    public getStructure(): any {
        return this.spec.talents.operation();
    }
    public log(): void {
        console.log(this.spec.talents.operation());
    }
}
