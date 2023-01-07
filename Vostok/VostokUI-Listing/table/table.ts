import style from "./style.module.css";
import UIVostokListing_Cell from "../cell/cell";

export default class UIVostokListing {
    
    // API
    public display() {
        this._table.style.display = '';
    };

    public hide() {
        this._table.style.display = 'none';
    };

    public toggleVisibility() {
        this._table.style.display = this._table.style.display === 'none' ? '' : 'none';
    };

    public mountTo(root: HTMLElement = document.body) {
        root.appendChild(this._table);
    };

    public remove() {
        this._table.remove();
    };

    public renderContent(source: [title, onclickCallback?][]) {
        const amountOfCells = source.length;
        source.forEach((value, index) => {
            this._table.appendChild(UIVostokListing_Cell(this.calculateIndex(`${amountOfCells}`, `${index + 1}`), value[0], value[1]));
        });
    };

    public clearContent() {
        this._table.innerHTML = '';
    };

    // Properties
    private _table: HTMLElement;

    constructor() {
        
        this._table = document.createElement('div');
        this._table.className = style.table;
    };

    private calculateIndex(all: string, current: string): string {
        if (all.length > current.length) {
            // ==== Pack module === 
            return new Array(all.length - current.length).fill('0').join('').concat(current);
            // ==== Pack module === 
        } else {
            return current
        };
    };
}

type title = string;
type onclickCallback = Function;
