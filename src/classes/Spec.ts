import Composite from './Composite';

export default class Spec {
    protected countOfPoints = 0;
    public talents: Composite = new Composite();
    public addPoint(): void {
        ++this.countOfPoints;
    }
}