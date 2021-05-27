import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];  
    }

    sum(): number {
       let sum: number = 0; 
       this._items.forEach((item, i) => {
           sum += item.price;
       });
       return sum
    }

    discount(amount: number): number {
        const discountSum: number = this.sum() - this.sum() * amount/100;
        return discountSum
    }

    delete(targetId: number): void {
       this._items.splice(this._items.findIndex(item => item.id === targetId),1);
    }
}