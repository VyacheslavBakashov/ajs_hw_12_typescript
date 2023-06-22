import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calcCost(discount = 0): number {
        const cost = this.items.reduce((acc, el) => acc + el.price, 0);
        return Math.round(cost * (1 - discount / 100));
    }

    removeItem(id: number): void {
        this._items = this._items.filter(item => item.id != id);
    }
}