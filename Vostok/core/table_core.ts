export default class VostokUITable {

    protected _TableBody: HTMLElement;
    protected _EmptyStateCell?: HTMLElement;

    constructor() {
        this._TableBody = document.createElement('div');
    }


    public MountTo(root?: HTMLElement): void {
        (root ? root : document.body).appendChild(this._TableBody);
    }

    public Clear(): void { this._TableBody.innerHTML = '' };

    public Hide() { this._TableBody.style.display = '0' };
    public Show() { this._TableBody.style.display = '1' };

}