export class Stock {
 favorite: boolean = false;
  
 //constructor inicializa los atributos de la clase
  constructor(public name: string,
    public code: string,
    public price: number,
    public previousPrice: number) {}
    
    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}
