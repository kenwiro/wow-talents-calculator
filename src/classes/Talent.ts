import Component from "@/classes/Component";

export default class Talent extends Component {
    public points = 0;
    public talentDescription = 'superTalent';
    public addPointToTalent(count: number): void {
        this.points = count;
    }
    public operation(): any {
        return this;
    }
}