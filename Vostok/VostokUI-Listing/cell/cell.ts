import style from "./style.module.css";

export default function UIVostokListing_Cell(index: string, title: string, onClickCallback?: Function): HTMLElement {

    const cell = document.createElement('div');
    cell.className = style.tableCell;

    {
        const cell_title = document.createElement('div');
        cell_title.className = style.leftTitle;
        cell_title.textContent = title;
        cell.appendChild(cell_title);
    }
    {
        const cell_separator = document.createElement('div');
        cell_separator.className = style.separator;
        cell.appendChild(cell_separator);
    }
    {
        const cell_index = document.createElement('div');
        cell_index.className = style.index;
        cell_index.textContent = index;
        cell.appendChild(cell_index);
    }

    if (onClickCallback) {
        cell.onclick = (e) => { onClickCallback(e) };
    }

    return cell
}
``