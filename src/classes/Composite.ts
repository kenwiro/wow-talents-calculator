import Component from "@/classes/Component";
import Talent from "@/classes/Talent";

export default class Composite extends Component {

    public children: Component[] = [];

    public add(component: Component): Component {
        this.children.push(component);
        component.setParent(this);
        return this;
    }

    public addTalents(countOfTalents: number) : Component {
        for(let i = 0; i < countOfTalents; i++) {
            this.add(new Talent);
        }
        return this;
    }

    public isComposite(): boolean {
        return true;
    }
    public operation(): any {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return results;
    }
}