/* eslint-disable */
export default abstract class Component {

    protected parent: Component | undefined;

    public id = Math.random();


    public setParent(parent: Component): void {
        this.parent = parent;
    }
    public getParent(): Component | undefined {
        return this.parent;
    }
    public add(component: Component): void { }
    // public remove(component: Component): void { }
    public isComposite(): boolean {
    return false;
    }
    public abstract operation(): string;
}